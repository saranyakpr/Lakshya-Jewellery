import { formatCurrency } from '../../utils/formatters'
import { Button } from '../ui/Button'
import { Panel } from '../ui/Panel'
import { SectionHeading } from '../ui/SectionHeading'

export function CartSummary({
  cartProducts,
  checkoutMessage,
  onCheckout,
  onRemoveFromCart,
  onUpdateQuantity,
  wishlistProducts,
}) {
  const subtotal = cartProducts.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <Panel>
      <SectionHeading
        eyebrow="Redeem And Review"
        title="A calmer redemption summary with your saved vault alongside it"
        description="This section keeps the main redemption basket clear while still surfacing wishlist pieces that customers may want to convert next."
      />
      <div className="mt-6 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-4">
          {cartProducts.length ? (
            cartProducts.map((item) => (
              <div
                key={item.id}
                className="rounded-[1.5rem] border border-[var(--color-line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(255,245,240,0.84))] p-4"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-4">
                    <div className="h-24 w-24 overflow-hidden rounded-2xl border border-[var(--color-line)] bg-white/80">
                      {item.image ? (
                        <img
                          alt={item.imageAlt ?? item.name}
                          className="h-full w-full object-cover"
                          src={item.image}
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center px-3 text-center text-xs text-[var(--color-muted)]">
                          No image
                        </div>
                      )}
                    </div>
                    <div>
                      <div className="font-semibold text-[var(--color-heading)]">{item.name}</div>
                      <div className="mt-1 text-sm text-[var(--color-muted)]">{item.description}</div>
                      <div className="mt-2 inline-flex rounded-full bg-white/72 px-3 py-1 text-sm text-[var(--color-muted-strong)]">
                        Qty {item.quantity} / {formatCurrency(item.price * item.quantity)}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} size="sm" tone="ghost">
                      -1
                    </Button>
                    <Button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} size="sm" tone="secondary">
                      +1
                    </Button>
                    <Button onClick={() => onRemoveFromCart(item.id)} size="sm" tone="danger">
                      Remove
                    </Button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="rounded-[1.5rem] border border-dashed border-[var(--color-line)] p-6 text-sm text-[var(--color-muted)]">
              Cart is empty. Use the product catalog to add a product and test the checkout flow.
            </div>
          )}
        </div>

        <div className="space-y-4">
          <div className="rounded-[1.65rem] border border-[var(--color-line)] bg-[linear-gradient(180deg,rgba(251,232,225,0.95),rgba(255,244,239,0.9))] p-5">
            <div className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
              Redemption Summary
            </div>
            <div className="mt-2 font-display text-3xl text-[var(--color-heading)]">
              {formatCurrency(subtotal)}
            </div>
            <div className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
              Review the estimated redemption value before checkout, then continue into the order flow or go back and refine your saved picks.
            </div>
            <div className="mt-4 grid gap-2 text-sm text-[var(--color-muted-strong)] sm:grid-cols-2">
              <div className="rounded-2xl bg-white/72 px-3 py-3">Cart items: {cartProducts.length}</div>
              <div className="rounded-2xl bg-white/72 px-3 py-3">Vault items: {wishlistProducts.length}</div>
            </div>
            <Button className="mt-5 w-full" onClick={onCheckout}>
              Complete Redemption
            </Button>
            {checkoutMessage ? (
              <div className="mt-3 text-sm text-[var(--color-accent)]">{checkoutMessage}</div>
            ) : null}
          </div>

          <div className="rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-soft)] p-5">
            <div className="text-sm font-semibold text-[var(--color-heading)]">Vault snapshot</div>
            <div className="mt-3 space-y-3">
              {wishlistProducts.length ? (
                wishlistProducts.map((product) => (
                  <div key={product.id} className="flex items-center gap-3 rounded-2xl bg-white/70 p-3">
                    <div className="h-14 w-14 overflow-hidden rounded-xl border border-[var(--color-line)] bg-white/80">
                      {product.image ? (
                        <img
                          alt={product.imageAlt ?? product.name}
                          className="h-full w-full object-cover"
                          src={product.image}
                        />
                      ) : null}
                    </div>
                    <div className="text-sm text-[var(--color-muted-strong)]">{product.name}</div>
                  </div>
                ))
              ) : (
                <div className="text-sm text-[var(--color-muted)]">No saved vault items yet.</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Panel>
  )
}
