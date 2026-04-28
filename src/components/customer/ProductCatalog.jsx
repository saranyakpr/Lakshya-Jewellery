import { addToCart, toggleWishlist } from '../../services/platformService'
import { formatCurrency, formatMetalMix } from '../../utils/formatters'
import { Button } from '../ui/Button'
import { Panel } from '../ui/Panel'
import { SectionHeading } from '../ui/SectionHeading'

export function ProductCatalog({
  activeView,
  emptyMessage = 'No jewellery is available in this view yet.',
  onCheckoutNow,
  onFocusProduct,
  onNavigate,
  onRefresh,
  products,
  rates,
  selectedProductId,
  title = 'Homepage, product listing, wishlist, and checkout-ready catalogue',
  description = 'Each product card reuses the same design primitives and action buttons, while pricing reflects the central gold and diamond admin rate configuration.',
  wishlistProducts,
}) {
  const handleWishlist = async (productId) => {
    await toggleWishlist(productId)
    await onRefresh()
    onNavigate('wishlist')
  }

  const handleAddToCart = async (productId) => {
    await addToCart(productId, 1)
    await onRefresh()
    onCheckoutNow()
  }

  return (
    <Panel>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow="Customer Experience"
          title={title}
          description={description}
        />
        <div className="rounded-2xl border border-[var(--color-line)] bg-black/10 px-4 py-3 text-sm text-white/70">
          Active view: <span className="font-semibold text-white">{activeView}</span>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {products.length ? products.map((product) => {
          const isSelected = selectedProductId === product.id
          const isWishlisted = wishlistProducts.some((wishlistProduct) => wishlistProduct.id === product.id)

          return (
            <article
              key={product.id}
              className={`group rounded-[1.75rem] border p-4 transition ${
                isSelected
                  ? 'border-[var(--color-gold)] bg-[var(--color-card-soft)]'
                  : 'border-[var(--color-line)] bg-[var(--color-card)] hover:border-white/20'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-[var(--color-gold)]">
                    {product.category}
                  </div>
                  <h3 className="mt-2 font-display text-xl text-white">{product.name}</h3>
                </div>
                <div className="rounded-full border border-white/10 bg-black/15 px-3 py-1 text-xs text-white/60">
                  {product.badge}
                </div>
              </div>

              <div className="mt-4 overflow-hidden rounded-[1.5rem] border border-white/8 bg-[linear-gradient(135deg,rgba(227,185,115,0.16),rgba(255,255,255,0.06))]">
                {product.image ? (
                  <img
                    alt={product.imageAlt ?? product.name}
                    className="h-52 w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                    src={product.image}
                  />
                ) : (
                  <div className="flex h-52 items-center justify-center bg-[linear-gradient(135deg,rgba(227,185,115,0.16),rgba(255,255,255,0.04))] px-5 text-center text-sm font-semibold text-white/65">
                    Product image will appear here
                  </div>
                )}
                <div className="p-4">
                  <div className="text-sm text-white/60">Responsive PDP preview</div>
                  <div className="mt-2 font-semibold text-white">{product.description}</div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div>
                  <div className="text-xs text-white/50">{formatMetalMix(product)}</div>
                  <div className="mt-1 text-lg font-semibold text-white">
                    {formatCurrency(product.price)}
                  </div>
                </div>
                <div className="text-right text-xs text-white/50">
                  Gold {formatCurrency(rates.goldPerGram)}/g
                  <br />
                  Diamond {formatCurrency(rates.diamondPerCarat)}/ct
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                <Button onClick={() => onFocusProduct(product.id)} size="sm" tone="secondary">
                  View Spotlight
                </Button>
                <Button onClick={() => handleAddToCart(product.id)} size="sm">
                  Add To Cart
                </Button>
                <Button
                  onClick={() => handleWishlist(product.id)}
                  size="sm"
                  tone={isWishlisted ? 'primary' : 'ghost'}
                >
                  {isWishlisted ? 'Wishlisted' : 'Wishlist'}
                </Button>
              </div>
            </article>
          )
        }) : (
          <div className="col-span-full rounded-[1.75rem] border border-dashed border-[var(--color-line)] bg-black/10 px-6 py-10 text-center text-sm text-[var(--color-muted)]">
            {emptyMessage}
          </div>
        )}
      </div>
    </Panel>
  )
}
