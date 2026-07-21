function PromoStrip({ items }) {
  return (
    <div className="flex gap-5 overflow-x-auto bg-[#60195e] px-4 py-1.5 text-[11px] font-medium text-white sm:gap-x-6 lg:px-6 [&::-webkit-scrollbar]:hidden">
      {items.map((item) => (
        <div
          className="flex shrink-0 items-center gap-2 whitespace-nowrap"
          key={`${item.title || item.text}-${item.text || ''}`}
        >
          {item.icon ? <span className="shrink-0">{item.icon}</span> : null}
          {item.title ? (
            <span>
              <span className="font-semibold">{item.title}</span>
              {item.text ? <span className="font-normal"> {item.text}</span> : null}
            </span>
          ) : (
            <span>{item.text}</span>
          )}
        </div>
      ))}
    </div>
  )
}

export default PromoStrip
