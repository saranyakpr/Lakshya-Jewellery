import { Link, useParams } from 'react-router-dom'
import { ChevronDownIcon, HeartIcon } from '../components/header/HeaderIcons'
import { categories } from '../data/categories'
import { products } from '../data/products'

const quickFilters = ['All', 'Fast Delivery', 'Latest Designs', 'Store Pickup', 'Try at Home']

const filterGroups = [
  {
    heading: 'Ring size',
    options: [
      { label: '11', count: 1279 },
      { label: '12', count: 2092 },
      { label: '13', count: 1422 },
      { label: '5', count: 43 },
    ],
    more: '22 More',
  },
  {
    heading: 'Price',
    options: [
      { label: '₹10,001 - ₹15,000', count: 896 },
      { label: '₹20,001 - ₹30,000', count: 1168 },
      { label: 'Under ₹5,000', count: 14 },
      { label: '₹5,001 - ₹10,000', count: 482 },
    ],
    more: '10 More',
  },
]

function CategoryPage() {
  const { slug } = useParams()
  const category = categories.find((item) => item.slug === slug)
  const label = category ? category.label : 'Jewellery'

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <p className="text-xs text-slate-400">
        <Link className="hover:text-[#4f3267]" to="/">
          Home
        </Link>
        {' > '}
        {label}
      </p>

      <div className="mt-4 flex flex-wrap items-baseline gap-3">
        <h1 className="text-xl font-bold text-slate-900 sm:text-2xl">{label}</h1>
        <span className="text-sm text-slate-500">11,156 Designs</span>
      </div>

      <div className="mt-6 flex gap-3 overflow-x-auto pb-1 [&::-webkit-scrollbar]:hidden">
        {quickFilters.map((filter, index) => (
          <button
            className={`shrink-0 whitespace-nowrap rounded-full border px-6 py-2 text-sm font-medium transition ${
              index === 0
                ? 'border-[#4f3267] bg-[#4f3267] text-white'
                : 'border-slate-200 text-slate-600 hover:border-[#4f3267] hover:text-[#4f3267]'
            }`}
            key={filter}
            type="button"
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[256px_1fr]">
        <aside className="hidden lg:block">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-slate-900">Filters</span>
            <button
              className="text-sm text-slate-400 transition hover:text-[#4f3267]"
              type="button"
            >
              Clear All
            </button>
          </div>

          <div className="mt-6 flex flex-col divide-y divide-slate-200">
            {filterGroups.map((group) => (
              <div className="py-5 first:pt-0" key={group.heading}>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-900">{group.heading}</span>
                  <ChevronDownIcon className="size-4 text-slate-400" />
                </div>
                <div className="mt-3 flex flex-col gap-3">
                  {group.options.map((option) => (
                    <label
                      className="flex items-center justify-between gap-2 text-sm text-slate-600"
                      key={option.label}
                      style={{ display: 'flex' }}
                    >
                      <span className="flex items-center gap-2" style={{ display: 'flex' }}>
                        <input className="accent-[#4f3267]" type="checkbox" />
                        {option.label}
                      </span>
                      <span className="text-slate-400">({option.count})</span>
                    </label>
                  ))}
                  <button
                    className="w-fit text-xs font-semibold text-[#4f3267] hover:underline"
                    type="button"
                  >
                    {group.more}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </aside>

        <div>
          <div className="flex justify-end">
            <span className="text-sm text-slate-500">
              Sort By: <span className="font-semibold text-slate-800">Featured</span>
            </span>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
              <div className="relative" key={product.slug}>
                <Link className="block" to={`/product/${product.slug}`}>
                  <div className="relative aspect-square overflow-hidden rounded-lg bg-slate-50">
                    <img
                      alt={product.name}
                      className="h-full w-full object-cover"
                      src={product.image}
                    />
                    {product.badge ? (
                      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded bg-black/60 px-3 py-1 text-xs text-white">
                        {product.badge}
                      </span>
                    ) : null}
                  </div>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="text-sm font-bold text-slate-900">{product.price}</span>
                    {product.original ? (
                      <span className="text-xs text-slate-400 line-through">
                        {product.original}
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-1 text-xs font-medium text-slate-500">Check Delivery Date</p>
                  <p className="mt-1 text-sm text-slate-600">{product.name}</p>
                </Link>
                <button
                  aria-label="Add to wishlist"
                  className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-500 shadow-sm transition hover:text-[#4f3267]"
                  type="button"
                >
                  <HeartIcon className="size-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryPage
