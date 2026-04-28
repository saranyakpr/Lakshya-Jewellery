import { Panel } from '../ui/Panel'
import { SectionHeading } from '../ui/SectionHeading'

export function StoreLocator({ stores }) {
  return (
    <Panel>
      <SectionHeading
        eyebrow="Store Locator"
        title="Static store discovery for phase one"
        description="The proposal calls for static or dummy store data in the MVP. This layout is ready to swap to map APIs later."
      />
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {stores.map((store) => (
          <div
            key={store.id}
            className="rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-card)] p-5"
          >
            <div className="font-semibold text-white">{store.name}</div>
            <div className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
              {store.address}
            </div>
            <div className="mt-4 flex flex-wrap gap-2 text-xs">
              <span className="rounded-full bg-white/6 px-3 py-1 text-white/70">{store.city}</span>
              <span className="rounded-full bg-white/6 px-3 py-1 text-white/70">
                {store.contact}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Panel>
  )
}
