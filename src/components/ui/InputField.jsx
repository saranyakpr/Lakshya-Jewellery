export function InputField({
  label,
  name,
  onChange,
  placeholder,
  type = 'text',
  value,
}) {
  return (
    <label className="block space-y-2">
      <span className="text-sm font-medium text-white/80">{label}</span>
      <input
        className="w-full rounded-2xl border border-[var(--color-line)] bg-black/15 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[var(--color-gold)]"
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        value={value}
      />
    </label>
  )
}
