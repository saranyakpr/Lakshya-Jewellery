import { Panel } from '../ui/Panel'
import { SectionHeading } from '../ui/SectionHeading'

export function OrderTracker({ orders }) {
  return (
    <Panel>
      <SectionHeading
        eyebrow="Order Tracking"
        title="Basic order timeline"
        description="The MVP requires simple tracking, so this module focuses on understandable status visibility instead of a full fulfillment system."
      />
      <div className="mt-6 space-y-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-card)] p-5"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="font-semibold text-white">{order.id.toUpperCase()}</div>
                <div className="mt-1 text-sm text-[var(--color-muted)]">{order.customerName}</div>
              </div>
              <div className="rounded-full border border-[var(--color-gold)]/35 bg-[var(--color-gold)]/10 px-4 py-2 text-sm font-semibold text-[var(--color-gold-light)]">
                {order.status}
              </div>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {order.timeline.map((step) => (
                <div key={step.label} className="rounded-2xl bg-black/15 p-3">
                  <div className="text-xs uppercase tracking-[0.2em] text-white/45">{step.label}</div>
                  <div className="mt-2 text-sm text-white/80">{step.value}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Panel>
  )
}
