function PromoStrip({ items }) {
  return (
    <div className="flex gap-5 overflow-x-auto bg-[#7a1f67] px-4 py-2 text-[11px] font-medium text-white sm:flex-wrap sm:justify-between sm:gap-x-6 sm:gap-y-2 sm:text-xs lg:px-6 [&::-webkit-scrollbar]:hidden">
      {items.map((item) => (
        <div className="flex shrink-0 items-center gap-2 whitespace-nowrap" key={item.text}>
          {item.icon ? <span className="shrink-0">{item.icon}</span> : null}
          <span>{item.text}</span>
        </div>
      ))}
    </div>
  )
}

export default PromoStrip
