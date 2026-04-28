import { useLocalStorageValue } from '../../hooks/useLocalStorage'

export function LocalStorageValue({ label, storageKey }) {
  const value = useLocalStorageValue(storageKey)

  return (
    <div className="rounded-2xl border border-[var(--color-line)] bg-black/15 p-4">
      <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-gold)]">
        {label}
      </div>
      <pre className="mt-3 max-h-44 overflow-auto whitespace-pre-wrap break-words text-xs leading-5 text-white/70">
        {value ?? 'No data'}
      </pre>
    </div>
  )
}
