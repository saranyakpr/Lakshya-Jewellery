function CategoryNav({ items }) {
  return (
    <div className="flex gap-4 overflow-x-auto px-4 py-4 sm:gap-5 lg:px-6 [&::-webkit-scrollbar]:hidden">
      {items.map((item) => (
        <button
          className="group flex min-w-18 shrink-0 flex-col items-center gap-2 text-center text-slate-800 sm:min-w-20"
          key={item.label}
          type="button"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f5eaf3] text-[#7a1f67] shadow-sm transition group-hover:scale-105 sm:h-14 sm:w-14">
            {item.icon ? (
              <span className="text-xl leading-none sm:text-2xl">{item.icon}</span>
            ) : (
              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] sm:text-[10px]">
                {item.monogram ?? 'LJ'}
              </span>
            )}
          </span>
          <span className="max-w-20 text-[11px] font-medium leading-4 sm:max-w-24 sm:text-xs">{item.label}</span>
        </button>
      ))}
    </div>
  )
}

export default CategoryNav
