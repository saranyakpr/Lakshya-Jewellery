import { formatCurrency } from '../../utils/formatters'
import { Button } from '../ui/Button'
import { IconButton } from '../ui/IconButton'
import { QuantitySelector } from '../ui/QuantitySelector'

export function ProductCard({
  isSelected,
  isWishlisted,
  onAddToCart,
  onQuantityChange,
  onSelect,
  onToggleWishlist,
  product,
  quantity,
}) {
  return (
    <article
      className={`group overflow-hidden rounded-[1.85rem] border transition ${
        isSelected
          ? 'border-[var(--color-accent)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(255,239,234,0.92))] shadow-[0_24px_70px_rgba(169,105,89,0.14)]'
          : 'border-[var(--color-line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(255,248,243,0.84))] hover:border-[var(--color-line-strong)] hover:shadow-[0_20px_55px_rgba(169,105,89,0.08)]'
      }`}
    >
      <div className="relative">
        <div className="absolute left-4 top-4 z-10 h-16 w-16 rounded-full bg-[rgba(255,255,255,0.45)] blur-2xl" />
        <img
          alt={product.imageAlt ?? product.name}
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          src={product.image}
        />
        <div className="absolute inset-x-0 top-0 flex items-start justify-between p-4">
          <span className="rounded-full bg-white/78 px-3 py-1 text-xs uppercase tracking-[0.2em] text-[var(--color-accent)] backdrop-blur">
            {product.category}
          </span>
          <IconButton active={isWishlisted} label="Toggle wishlist" onClick={onToggleWishlist}>
            <HeartIcon />
          </IconButton>
        </div>
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-2xl text-[var(--color-heading)]">{product.name}</h3>
            <p className="mt-2 text-sm leading-6 text-[var(--color-muted-strong)]">
              {product.description}
            </p>
          </div>
          <span className="rounded-full border border-[var(--color-line)] bg-white/80 px-3 py-1 text-xs text-[var(--color-muted-strong)]">
            {product.badge}
          </span>
        </div>

        <div className="grid gap-3 rounded-[1.35rem] bg-white/62 p-3 sm:grid-cols-[1fr_auto] sm:items-center">
          <div>
            <div className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
              Redeem Value
            </div>
            <div className="mt-1 text-2xl font-semibold text-[var(--color-heading)]">
              {formatCurrency(product.price)}
            </div>
            <div className="mt-1 text-xs text-[var(--color-muted-strong)]">
              {product.goldWeight}g gold / {product.diamondCarat}ct diamond
            </div>
          </div>
          <button
            className="rounded-full border border-[var(--color-line)] bg-white/84 px-4 py-2 text-sm text-[var(--color-muted-strong)] transition hover:bg-white hover:text-[var(--color-heading)]"
            onClick={onSelect}
            type="button"
          >
            Quick View
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <QuantitySelector onChange={onQuantityChange} value={quantity} />
          <Button onClick={onAddToCart}>Add To Cart</Button>
        </div>
      </div>
    </article>
  )
}

function HeartIcon() {
  return (
    <svg fill="none" height="18" viewBox="0 0 24 24" width="18">
      <path
        d="M12 20.4L4.95 13.5C3.05 11.63 3.01 8.58 4.86 6.69C6.72 4.8 9.73 4.76 11.63 6.6L12 6.96L12.37 6.6C14.27 4.76 17.28 4.8 19.14 6.69C20.99 8.58 20.95 11.63 19.05 13.5L12 20.4Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  )
}
