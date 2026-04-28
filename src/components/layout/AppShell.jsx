export function AppShell({ children }) {
  return (
    <div className="min-h-screen bg-[var(--color-ink)] px-4 py-5 text-[var(--color-text)] sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">{children}</div>
    </div>
  )
}
