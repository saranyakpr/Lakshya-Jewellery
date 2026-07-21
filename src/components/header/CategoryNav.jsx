import { Link } from 'react-router-dom'

function CategoryNav({ items }) {
  return (
    <nav className="flex gap-4 overflow-x-auto bg-[#4f3267] px-4 py-3 sm:gap-6 lg:px-6 [&::-webkit-scrollbar]:hidden">
      {items.map((item) => (
        <Link
          className="shrink-0 whitespace-nowrap text-sm text-white transition hover:text-white/80 sm:text-base"
          key={item.label}
          style={{ textDecoration: 'none' }}
          to={`/category/${item.slug}`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}

export default CategoryNav
