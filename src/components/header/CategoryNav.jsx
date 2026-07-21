function CategoryNav({ items }) {
  return (
    <nav className="border-b border-[#e8e0e8] bg-white">
      <div className="flex gap-6 overflow-x-auto px-4 py-4 sm:gap-8 sm:px-6 lg:px-6 [&::-webkit-scrollbar]:hidden">
        {items.map((item) => (
          <button
            className="flex shrink-0 flex-col items-center gap-2 text-center"
            key={item.label}
            type="button"
          >
            <span
              className={`flex h-14 w-14 items-center justify-center rounded-full sm:h-16 sm:w-16 ${
                item.icon ? 'bg-[#f0eaf0]' : 'bg-[#f5eef5]'
              }`}
            >
              {item.image ? (
                <img alt="" className="h-[85%] w-[85%] object-contain" src={item.image} />
              ) : (
                <span className="text-2xl leading-none">{item.icon}</span>
              )}
            </span>
            <span className="max-w-20 whitespace-nowrap text-[11px] font-medium text-[#333] sm:text-xs">
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  )
}

export default CategoryNav
