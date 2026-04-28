export function QuantitySelector({ onChange, value }) {
  return (
    <div className="inline-flex items-center rounded-full border border-[var(--color-line)] bg-white/80 p-1 shadow-[0_8px_20px_rgba(169,105,89,0.08)]">
      <button
        className="h-9 w-9 rounded-full text-lg text-[var(--color-accent)] transition hover:bg-[var(--color-soft)] hover:text-[var(--color-accent-strong)]"
        onClick={() => onChange(value - 1)}
        type="button"
      >
        -
      </button>
      <div className="min-w-10 text-center text-sm font-semibold text-[var(--color-heading)]">{value}</div>
      <button
        className="h-9 w-9 rounded-full text-lg text-[var(--color-accent)] transition hover:bg-[var(--color-soft)] hover:text-[var(--color-accent-strong)]"
        onClick={() => onChange(value + 1)}
        type="button"
      >
        +
      </button>
    </div>
  )
}
