export function Panel({ children, className = '' }) {
  return (
    <section
      className={`rounded-[2rem] border border-[var(--color-line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(255,246,241,0.88))] p-5 shadow-[0_24px_70px_rgba(169,105,89,0.09)] sm:p-6 ${className}`}
    >
      {children}
    </section>
  )
}
