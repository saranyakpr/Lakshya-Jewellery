export function IconButton({ active = false, children, label, onClick }) {
  return (
    <button
      aria-label={label}
      className={`inline-flex h-11 w-11 items-center justify-center rounded-full border backdrop-blur transition cursor-pointer ${
        active
          ? 'border-[var(--color-gold)] bg-[linear-gradient(135deg,var(--color-gold),#e6bf8a)] text-[var(--color-heading)] shadow-[0_10px_24px_rgba(215,168,110,0.24)]'
          : 'border-white/70 bg-white/78 text-[var(--color-accent)] hover:bg-white hover:text-[var(--color-accent-strong)]'
      }`}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  )
}
