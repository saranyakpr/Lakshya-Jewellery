import { formatCurrency, formatMetalMix } from '../../utils/formatters'
import { Panel } from '../ui/Panel'
import { SectionHeading } from '../ui/SectionHeading'

export function ProductSpotlight({ product, rates, stores }) {
  if (!product) {
    return null
  }

  return (
    <Panel className="overflow-hidden">
      <SectionHeading
        eyebrow="Product Detail"
        title={product.name}
        description="A focused PDP-style module showing the selected product, pricing logic, and availability."
      />
      <div className="mt-5 rounded-[1.75rem] bg-[linear-gradient(135deg,rgba(255,255,255,0.05),rgba(227,185,115,0.08))] p-5">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <div className="overflow-hidden rounded-[1.5rem] border border-white/8 bg-black/20">
              {product.image ? (
                <img
                  alt={product.imageAlt ?? product.name}
                  className="h-64 w-full object-cover"
                  src={product.image}
                />
              ) : (
                <div className="flex h-64 items-center justify-center text-sm font-semibold text-white/60">
                  Product image unavailable
                </div>
              )}
            </div>
            <div className="text-xs uppercase tracking-[0.25em] text-[var(--color-gold)]">
              {product.badge}
            </div>
            <div className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
              {product.description}
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-[var(--color-line)] bg-black/15 p-4">
                <div className="text-xs text-white/50">Composition</div>
                <div className="mt-2 text-sm font-semibold text-white">
                  {formatMetalMix(product)}
                </div>
              </div>
              <div className="rounded-2xl border border-[var(--color-line)] bg-black/15 p-4">
                <div className="text-xs text-white/50">Price</div>
                <div className="mt-2 text-sm font-semibold text-white">
                  {formatCurrency(product.price)}
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-3 rounded-[1.5rem] border border-[var(--color-line)] bg-black/15 p-4">
            <div className="text-sm font-semibold text-white">Operational context</div>
            <div className="text-sm text-[var(--color-muted)]">
              Gold rate: {formatCurrency(rates.goldPerGram)} / gram
            </div>
            <div className="text-sm text-[var(--color-muted)]">
              Diamond rate: {formatCurrency(rates.diamondPerCarat)} / carat
            </div>
            <div className="text-sm text-[var(--color-muted)]">
              Available for pickup at {stores.length} configured stores
            </div>
            <div className="rounded-2xl bg-[var(--color-card-soft)] p-4 text-sm leading-6 text-white/70">
              Delivery promise: Premium packaging, booking-friendly consultation flow, and
              omnichannel-ready store handoff.
            </div>
          </div>
        </div>
      </div>
    </Panel>
  )
}
