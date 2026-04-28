export function SectionHeading({ description, eyebrow, title }) {
  return (
    <div className="space-y-3">
      {eyebrow ? (
        <div className="inline-flex rounded-full border border-[rgba(169,105,89,0.14)] bg-white/72 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="max-w-3xl font-display text-2xl leading-tight text-[var(--color-heading)] sm:text-[2rem]">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-sm leading-6 text-[var(--color-muted-strong)] sm:text-[0.95rem]">
          {description}
        </p>
      ) : null}
    </div>
  )
}
