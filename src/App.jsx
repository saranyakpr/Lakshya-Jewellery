import { useEffect, useMemo, useState } from 'react'
import heroImage from './assets/hero.png'
import { CartSummary } from './components/customer/CartSummary'
import { OrderTracker } from './components/customer/OrderTracker'
import { ProductCard } from './components/customer/ProductCard'
import { StoreLocator } from './components/customer/StoreLocator'
import { TryAtHomeForm } from './components/customer/TryAtHomeForm'
import { Button } from './components/ui/Button'
import { Panel } from './components/ui/Panel'
import { SectionHeading } from './components/ui/SectionHeading'
import {
  addToCart,
  createBookingRequest,
  createCheckoutOrder,
  getPlatformData,
  removeFromCart,
  toggleWishlist,
  updateCartQuantity,
} from './services/platformService'
import { formatCurrency } from './utils/formatters'

const navItems = [
  { id: 'shop', label: 'Buy Gold', eyebrow: 'Invest', detail: 'Start from today' },
  { id: 'wishlist', label: 'Vault', eyebrow: 'Saved', detail: 'Pieces to redeem later' },
  { id: 'cart', label: 'Redeem', eyebrow: 'Checkout', detail: 'Use your selected bag' },
  { id: 'tracking', label: 'Orders', eyebrow: 'Updates', detail: 'Track every request' },
  { id: 'stores', label: 'Stores', eyebrow: 'Visit', detail: 'Find nearby ateliers' },
  { id: 'booking', label: 'Call Back', eyebrow: 'Service', detail: 'Talk to an advisor' },
]

const trustCards = [
  {
    title: '24x7 convenience',
    description: 'Start with digital gold any time, then move into jewellery redemption or store assistance whenever you are ready.',
  },
  {
    title: 'Transparent value',
    description: 'The experience keeps rates, saved items, and product selections visible so customers always understand what they are building toward.',
  },
  {
    title: 'Redeem into jewellery',
    description: 'Move from digital-gold intent to product discovery, cart review, and assisted purchase with a softer premium flow.',
  },
]

const journeySteps = [
  {
    number: '01',
    title: 'Buy and track value',
    description: 'Begin with current gold-rate visibility, simple navigation, and a reassuring entry point for first-time buyers.',
  },
  {
    number: '02',
    title: 'Save pieces in your vault',
    description: 'Wishlist and spotlight states help customers collect their favorite items before they redeem or check out.',
  },
  {
    number: '03',
    title: 'Redeem or request support',
    description: 'Customers can move into cart, track orders, or book a consultation without losing the premium landing-page feel.',
  },
]

function App() {
  const [platform, setPlatform] = useState(null)
  const [activeView, setActiveView] = useState('shop')
  const [selectedProductId, setSelectedProductId] = useState(null)
  const [quantities, setQuantities] = useState({})
  const [checkoutMessage, setCheckoutMessage] = useState('')

  const refreshPlatform = async () => {
    const data = await getPlatformData()
    setPlatform(data)
    setSelectedProductId((current) => current ?? data.products[0]?.id ?? null)
    setQuantities((current) => {
      const next = { ...current }
      data.products.forEach((product) => {
        if (!next[product.id]) {
          next[product.id] = 1
        }
      })
      return next
    })
  }

  useEffect(() => {
    let isMounted = true

    getPlatformData().then((data) => {
      if (!isMounted) {
        return
      }

      setPlatform(data)
      setSelectedProductId((current) => current ?? data.products[0]?.id ?? null)
      setQuantities((current) => {
        const next = { ...current }
        data.products.forEach((product) => {
          if (!next[product.id]) {
            next[product.id] = 1
          }
        })
        return next
      })
    })

    return () => {
      isMounted = false
    }
  }, [])

  const wishlistProducts = useMemo(
    () => platform?.products.filter((product) => platform.wishlist.includes(product.id)) ?? [],
    [platform],
  )

  const cartProducts = useMemo(
    () =>
      platform?.products
        .filter((product) => platform.cart.some((item) => item.productId === product.id))
        .map((product) => ({
          ...product,
          quantity: platform.cart.find((item) => item.productId === product.id)?.quantity ?? 1,
        })) ?? [],
    [platform],
  )

  const selectedProduct =
    platform?.products.find((product) => product.id === selectedProductId) ?? platform?.products[0]

  const currentProducts =
    activeView === 'wishlist'
      ? wishlistProducts
      : activeView === 'cart'
        ? cartProducts
        : platform?.products ?? []

  const cartCount = platform?.cart.reduce((total, item) => total + item.quantity, 0) ?? 0
  const wishlistCount = platform?.wishlist.length ?? 0
  const currentSection = navItems.find((item) => item.id === activeView) ?? navItems[0]

  const handleQuantityChange = (productId, quantity) => {
    setQuantities((current) => ({
      ...current,
      [productId]: Math.max(1, quantity),
    }))
  }

  const handleWishlistToggle = async (productId) => {
    await toggleWishlist(productId)
    await refreshPlatform()
    setActiveView('wishlist')
  }

  const handleAddToCart = async (productId) => {
    await addToCart(productId, quantities[productId] ?? 1)
    await refreshPlatform()
    setActiveView('cart')
  }

  const handleUpdateCartItem = async (productId, quantity) => {
    if (quantity <= 0) {
      await removeFromCart(productId)
    } else {
      await updateCartQuantity(productId, quantity)
    }
    await refreshPlatform()
  }

  const handleCheckout = async () => {
    if (!platform?.cart.length) {
      setCheckoutMessage('Your cart is empty. Add a jewellery item to continue.')
      return
    }

    const response = await createCheckoutOrder({
      customerId: platform.customers[0]?.id ?? 'cust-1',
      items: platform.cart,
      notes: 'Checkout placed from storefront UI.',
    })

    setCheckoutMessage(`${response.message} Track ${response.order.id.toUpperCase()} below.`)
    await refreshPlatform()
    setActiveView('tracking')
  }

  const handleBooking = async (payload) => {
    await createBookingRequest(payload)
    await refreshPlatform()
    setActiveView('stores')
  }

  if (!platform) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[var(--color-ink)] text-[var(--color-text)]">
        <div className="rounded-full border border-[var(--color-line)] bg-white/70 px-6 py-3 text-sm text-[var(--color-muted-strong)]">
          Loading Lakshya Jewellery storefront...
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[var(--color-ink)] px-4 py-4 text-[var(--color-text)] sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6">
        <header className="rounded-[2rem] border border-[var(--color-line)] bg-[rgba(255,250,244,0.78)] px-5 py-4 shadow-[0_24px_80px_rgba(110,73,39,0.12)] backdrop-blur-xl">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-[1.35rem] border border-white/80 bg-[linear-gradient(145deg,rgba(255,255,255,0.96),rgba(243,220,194,0.9))] shadow-[0_20px_40px_rgba(110,73,39,0.12)]">
                  <div className="flex h-10 w-10 items-center justify-center rounded-[1rem] bg-[var(--color-heading)] font-display text-lg tracking-[0.18em] text-[var(--color-gold-light)]">
                    LJ
                  </div>
                </div>
                <div>
                  <div className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
                    Fine Jewellery House
                  </div>
                  <div className="mt-1 font-display text-3xl text-[var(--color-heading)]">
                    Lakshya Jewellery
                  </div>
                  <div className="mt-1 text-sm text-[var(--color-muted-strong)]">
                    Softer premium storefront inspired by modern jewellery landing pages
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/74 px-3 py-2 text-sm text-[var(--color-muted-strong)]">
                  <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
                  <span className="font-semibold text-[var(--color-heading)]">{currentSection.label}</span>
                  <span className="hidden text-[var(--color-muted)] sm:inline">/ {currentSection.detail}</span>
                </div>
                <a
                  className="inline-flex items-center justify-center rounded-full border border-[var(--color-line)] bg-white/88 px-4 py-2.5 text-sm font-semibold text-[var(--color-heading)] transition hover:bg-[var(--color-soft)]"
                  href="http://localhost:5174/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Open Admin Panel
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-3 border-t border-[rgba(169,105,89,0.12)] pt-4 lg:flex-row lg:items-center lg:justify-between">
              <nav aria-label="Primary storefront navigation" className="flex flex-wrap gap-2">
                {navItems.map((item) => {
                  const count =
                    item.id === 'wishlist'
                      ? wishlistCount
                      : item.id === 'cart'
                        ? cartCount
                        : item.id === 'tracking'
                          ? platform.orders.length
                          : null

                  const isActive = activeView === item.id

                  return (
                    <button
                      key={item.id}
                      className={`group inline-flex items-end gap-2 rounded-full border px-4 py-2.5 text-left transition duration-200 cursor-pointer ${
                        isActive
                          ? 'border-[rgba(169,105,89,0.18)] bg-[linear-gradient(135deg,rgba(169,105,89,0.96),rgba(142,86,72,0.94))] text-white shadow-[0_16px_30px_rgba(169,105,89,0.18)]'
                          : 'border-transparent bg-white/62 text-[var(--color-muted-strong)] hover:border-[rgba(169,105,89,0.16)] hover:bg-white/84 hover:text-[var(--color-heading)]'
                      }`}
                      onClick={() => setActiveView(item.id)}
                      type="button"
                    >
                      <span
                        className={`text-[0.66rem] font-semibold uppercase tracking-[0.22em] ${
                          isActive ? 'text-white/72' : 'text-[var(--color-accent)]'
                        }`}
                      >
                        {item.eyebrow}
                      </span>
                      <span className="text-[0.96rem] font-semibold">{item.label}</span>
                      {count ? (
                        <span
                          className={`inline-flex min-w-6 items-center justify-center rounded-full px-2 py-0.5 text-[0.7rem] font-semibold ${
                            isActive
                              ? 'bg-white/16 text-white'
                              : 'bg-[var(--color-soft)] text-[var(--color-accent-strong)]'
                          }`}
                        >
                          {count}
                        </span>
                      ) : null}
                    </button>
                  )
                })}
              </nav>

              <div className="hidden lg:flex items-center gap-2 text-xs text-[var(--color-muted-strong)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                <span>{currentSection.detail}</span>
              </div>
            </div>
          </div>
        </header>

        {activeView === 'shop' ? (
          <section className="relative overflow-hidden rounded-[2.5rem] border border-[var(--color-line)] bg-[linear-gradient(135deg,rgba(255,236,233,0.95),rgba(255,248,242,0.98))] px-6 py-8 shadow-[0_30px_120px_rgba(143,83,72,0.14)] sm:px-10 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10">
            <div className="absolute left-0 top-0 h-44 w-44 rounded-full bg-[rgba(240,167,154,0.22)] blur-3xl" />
            <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-[rgba(255,255,255,0.7)] blur-3xl" />
            <div className="relative z-10">
              <div className="inline-flex rounded-full border border-[rgba(181,116,100,0.18)] bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
                Lakshya eGold Experience
              </div>
              <h1 className="mt-5 max-w-2xl font-display text-4xl leading-tight text-[var(--color-heading)] sm:text-6xl">
                Buy digital gold today and redeem it into jewellery when the moment feels right.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--color-muted-strong)] sm:text-lg">
                Inspired by the shared reference, this storefront now leans into a softer luxury landing-page rhythm with a clear path from gold buying to vaulting, redemption, tracking, and store support.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {['24K rate visible', 'Redeem into jewellery', 'Support across stores'].map((label) => (
                  <div
                    key={label}
                    className="rounded-full border border-white/80 bg-white/68 px-3 py-1.5 text-xs font-medium text-[var(--color-muted-strong)]"
                  >
                    {label}
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button className="cursor-pointer" onClick={() => setActiveView('shop')}>
                  Buy Digital Gold
                </Button>
                <Button className="cursor-pointer" onClick={() => setActiveView('cart')} tone="secondary">
                  Redeem Now
                </Button>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {trustCards.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[1.5rem] border border-white/70 bg-white/72 p-4 backdrop-blur"
                  >
                    <div className="text-sm font-semibold text-[var(--color-heading)]">{item.title}</div>
                    <div className="mt-2 text-sm leading-6 text-[var(--color-muted-strong)]">
                      {item.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 mt-10 lg:mt-0">
              <div className="rounded-[2.2rem] border border-white/75 bg-white/62 p-4 shadow-[0_20px_60px_rgba(143,83,72,0.12)] backdrop-blur">
                <div className="mb-4 flex items-center justify-between rounded-[1.4rem] border border-[rgba(181,116,100,0.12)] bg-[rgba(255,244,240,0.9)] px-4 py-3">
                  <div>
                    <div className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
                      Lakshya Gold Wallet
                    </div>
                    <div className="mt-1 text-lg font-semibold text-[var(--color-heading)]">
                      {formatCurrency(platform.rates.goldPerGram * Math.max(cartCount, 1))}
                    </div>
                  </div>
                  <button
                    className="rounded-full border border-[var(--color-line)] bg-white px-3 py-1.5 text-xs font-semibold text-[var(--color-heading)] transition hover:bg-[var(--color-soft)]"
                    onClick={() => setActiveView('tracking')}
                    type="button"
                  >
                    View Orders
                  </button>
                </div>
                <img
                  alt="Lakshya Jewellery campaign"
                  className="h-full min-h-72 w-full rounded-[1.8rem] object-cover"
                  src={heroImage}
                />
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[1.2rem] bg-[var(--color-soft)] p-3">
                    <div className="text-xs uppercase tracking-[0.18em] text-[var(--color-accent)]">Vault</div>
                    <div className="mt-1 text-sm font-semibold text-[var(--color-heading)]">{wishlistCount} items saved</div>
                  </div>
                  <div className="rounded-[1.2rem] bg-[var(--color-soft)] p-3">
                    <div className="text-xs uppercase tracking-[0.18em] text-[var(--color-accent)]">Redeem Bag</div>
                    <div className="mt-1 text-sm font-semibold text-[var(--color-heading)]">{cartCount} items selected</div>
                  </div>
                  <div className="rounded-[1.2rem] bg-[var(--color-soft)] p-3">
                    <div className="text-xs uppercase tracking-[0.18em] text-[var(--color-accent)]">Today&apos;s 24K Rate</div>
                    <div className="mt-1 text-sm font-semibold text-[var(--color-heading)]">
                      {formatCurrency(platform.rates.goldPerGram)}/g
                    </div>
                  </div>
                  <div className="rounded-[1.2rem] bg-[var(--color-soft)] p-3">
                    <div className="text-xs uppercase tracking-[0.18em] text-[var(--color-accent)]">Support Window</div>
                    <div className="mt-1 text-sm font-semibold text-[var(--color-heading)]">
                      Callback or store visit
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : null}

        <section className="grid gap-4 lg:grid-cols-3">
          {journeySteps.map((step) => (
            <Panel key={step.number} className="bg-[rgba(255,255,255,0.78)]">
              <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-accent)]">
                {step.number}
              </div>
              <div className="mt-3 font-display text-2xl text-[var(--color-heading)]">{step.title}</div>
              <div className="mt-3 text-sm leading-6 text-[var(--color-muted-strong)]">{step.description}</div>
            </Panel>
          ))}
        </section>

        <section className="grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
          <Panel>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <SectionHeading
                eyebrow={
                  activeView === 'wishlist'
                    ? 'Vault Highlights'
                    : activeView === 'cart'
                      ? 'Redeem Basket'
                      : 'Featured Redemption'
                }
                title={
                  activeView === 'wishlist'
                    ? 'Your Lakshya vault of saved jewellery pieces'
                    : activeView === 'cart'
                      ? 'Redeem-ready jewellery selection'
                      : 'Jewellery you can grow into with digital gold'
                }
                description={
                  activeView === 'wishlist'
                    ? 'Use the vault like a future-redemption shortlist for pieces you want to come back to.'
                    : activeView === 'cart'
                      ? 'Review selected pieces, update quantities, and move smoothly into a redemption-style checkout.'
                      : 'The product grid keeps the landing-page calm while still making price, quantity, and save actions easy to understand.'
                }
              />
              <div className="rounded-full border border-[var(--color-line)] bg-[var(--color-soft)] px-4 py-2 text-sm text-[var(--color-muted-strong)]">
                Diamond reference {formatCurrency(platform.rates.diamondPerCarat)}/ct
              </div>
            </div>

            {activeView === 'cart' ? (
              <div className="mt-6">
                <CartSummary
                  cartProducts={cartProducts}
                  checkoutMessage={checkoutMessage}
                  onCheckout={handleCheckout}
                  onRemoveFromCart={handleUpdateCartItem}
                  onUpdateQuantity={handleUpdateCartItem}
                  wishlistProducts={wishlistProducts}
                />
              </div>
            ) : (
              <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {currentProducts.length ? (
                  currentProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      isSelected={selectedProductId === product.id}
                      isWishlisted={platform.wishlist.includes(product.id)}
                      onAddToCart={() => handleAddToCart(product.id)}
                      onQuantityChange={(value) => handleQuantityChange(product.id, value)}
                      onSelect={() => setSelectedProductId(product.id)}
                      onToggleWishlist={() => handleWishlistToggle(product.id)}
                      product={product}
                      quantity={quantities[product.id] ?? 1}
                    />
                  ))
                ) : (
                  <div className="col-span-full rounded-[1.75rem] border border-dashed border-[var(--color-line-strong)] bg-[var(--color-soft)] px-6 py-12 text-center text-sm text-[var(--color-muted-strong)]">
                    {activeView === 'wishlist'
                      ? 'No jewellery pieces in wishlist yet. Click the heart icon on a product card to save one.'
                      : 'No products found in this section.'}
                  </div>
                )}
              </div>
            )}
          </Panel>

          <div className="space-y-6">
            {selectedProduct ? (
              <Panel className="overflow-hidden">
                <SectionHeading
                  eyebrow="Redemption Spotlight"
                  title={selectedProduct.name}
                  description={`${selectedProduct.description} This product spotlight mirrors the reference flow by keeping the next redemption choice visible beside the main catalogue.`}
                />
                <div className="mt-5 overflow-hidden rounded-[1.75rem] border border-[var(--color-line)] bg-[var(--color-soft)]">
                  <img
                    alt={selectedProduct.imageAlt ?? selectedProduct.name}
                    className="h-72 w-full object-cover"
                    src={selectedProduct.image}
                  />
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[1.25rem] bg-[var(--color-soft)] p-4">
                    <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-accent)]">Price</div>
                    <div className="mt-2 text-xl font-semibold text-[var(--color-heading)]">
                      {formatCurrency(selectedProduct.price)}
                    </div>
                  </div>
                  <div className="rounded-[1.25rem] bg-[var(--color-soft)] p-4">
                    <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-accent)]">
                      Composition
                    </div>
                    <div className="mt-2 text-sm text-[var(--color-muted-strong)]">
                      {selectedProduct.goldWeight}g gold / {selectedProduct.diamondCarat}ct diamond
                    </div>
                  </div>
                </div>
              </Panel>
            ) : null}

            {(activeView === 'stores' || activeView === 'booking') && (
              <>
                <StoreLocator stores={platform.stores} />
                <TryAtHomeForm onSubmit={handleBooking} />
              </>
            )}

            {activeView === 'tracking' && <OrderTracker orders={platform.orders} />}

            <Panel>
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
                Need Assistance?
              </div>
              <div className="mt-3 font-display text-2xl text-[var(--color-heading)]">
                Speak with Lakshya for buying, redeeming, or visiting a store.
              </div>
              <div className="mt-3 text-sm leading-6 text-[var(--color-muted-strong)]">
                A strong service panel sits close to the catalogue so customers always have a guided next step, whether that means callback, redemption, or in-store assistance.
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <Button onClick={() => setActiveView('booking')}>Request Call Back</Button>
                <Button onClick={() => setActiveView('stores')} tone="secondary">
                  Find A Store
                </Button>
              </div>
            </Panel>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
