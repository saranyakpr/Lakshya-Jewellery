function HeaderAction({ icon, label, badge }) {
  return (
    <button
      className="group relative flex min-w-16 shrink-0 flex-col items-center gap-1 text-slate-800"
      type="button"
    >
      <span className="relative flex items-center justify-center text-[#282828] transition group-hover:text-[#60195e]">
        {icon}
        {badge !== undefined ? (
          <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#60195e] px-1 text-[10px] font-semibold text-white">
            {badge}
          </span>
        ) : null}
      </span>
      <span className="text-[11px] font-medium sm:text-xs">{label}</span>
    </button>
  )
}

export default HeaderAction
