export function Button({
  children,
  className = '',
  onClick,
  size = 'md',
  tone = 'primary',
  type = 'button',
}) {
  const sizeClasses = {
    sm: 'px-3.5 py-2 text-sm',
    md: 'px-5 py-3 text-sm',
    lg: 'px-6 py-3.5 text-base',
  }

  const toneClasses = {
    primary:
      'border border-transparent bg-[linear-gradient(135deg,var(--color-accent),var(--color-accent-strong))] text-white hover:brightness-[1.03] shadow-[0_18px_35px_rgba(169,105,89,0.24)]',
    secondary:
      'border border-[var(--color-line)] bg-white/88 text-[var(--color-heading)] hover:bg-[var(--color-soft)]',
    ghost:
      'border border-[var(--color-line)] bg-transparent text-[var(--color-muted-strong)] hover:bg-white hover:text-[var(--color-heading)]',
    danger: 'border border-transparent bg-[var(--color-danger)] text-white hover:brightness-105',
  }

  return (
    <button
      className={`inline-flex items-center justify-center rounded-full font-semibold transition duration-200 cursor-pointer ${sizeClasses[size]} ${toneClasses[tone]} ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  )
}
