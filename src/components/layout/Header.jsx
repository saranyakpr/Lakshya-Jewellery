import { Button } from '../ui/Button'

export function Header({ activeView, authMessage, navigation, onNavigate, onLogin }) {
  return (
    <header className="sticky top-4 z-20 rounded-[2rem] border border-white/10 bg-black/25 px-5 py-4 backdrop-blur-xl">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        <div>
          <div className="font-display text-2xl text-white">Lakshya Jewellery</div>
          <div className="mt-1 text-sm text-white/60">
            Reusable Vite + React + Tailwind frontend for the MVP phase
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {navigation.map((item) => (
            <button
              key={item.id}
              className={`rounded-full px-4 py-2 text-sm transition ${
                activeView === item.id
                  ? 'bg-[var(--color-gold)] text-[var(--color-ink)]'
                  : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
              }`}
              onClick={() => onNavigate(item.id)}
              type="button"
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {authMessage ? (
            <div className="rounded-full border border-[var(--color-line)] bg-white/5 px-4 py-2 text-sm text-white/80">
              {authMessage}
            </div>
          ) : null}
          <Button onClick={onLogin} tone="secondary">
            OTP Login Demo
          </Button>
        </div>
      </div>
    </header>
  )
}
