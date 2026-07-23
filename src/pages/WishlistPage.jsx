import { Link } from 'react-router-dom'
import { TryAtHomeIcon } from '../components/header/HeaderIcons'

function PlusIcon(props) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  )
}

function CloseIcon(props) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  )
}

function StarIcon(props) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.18 21 12 17.27 5.82 21 7 14.14l-5-4.87 7.1-1.01L12 2z" />
    </svg>
  )
}

const wishlistItems = [
  {
    id: 1,
    name: "Tiny Bloom Kids' Diamond Earrings",
    price: 19919,
    originalPrice: 21123,
    badge: '10k+ bought this',
  },
]

function formatPrice(value) {
  return `₹${value.toLocaleString('en-IN')}`
}

function WishlistPage() {
  return (
    <main className="min-h-screen bg-[#f4f0fc]">
      <div className="mx-auto">
        <section className="w-full bg-[#f4f0fc]">
          <div className="mx-auto w-full max-w-7xl px-4 py-8 m-4 sm:px-6 lg:px-8 lg:py-10 bg-white">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h1 className="!text-xl font-extrabold uppercase tracking-tight !text-[#4B2E6B] sm:text-2xl">
                  Your Wishlist
                </h1>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-purple-500">
                  <Link className="!text-purple-500" style={{textDecoration:'none'}} to="/">
                    Home
                  </Link>{' '}
                  &gt; Wishlist
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  className="flex items-center gap-1.5 !rounded-lg bg-emerald-100 px-3 py-2 !text-xs !font-semibold uppercase tracking-wide text-emerald-700 transition hover:bg-emerald-200"
                  type="button"
                >
                  <PlusIcon className="size-3.5" />
                  Schedule Video Call
                </button>
                <button
                  className="flex items-center gap-1.5 !rounded-lg bg-purple-100 px-3 py-2 !text-xs !font-semibold uppercase tracking-wide text-purple-600 transition hover:bg-purple-200"
                  type="button"
                >
                  <TryAtHomeIcon className="size-3.5" />
                  Try At Home
                </button>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {wishlistItems.map((item) => (
                <div className="relative rounded-2xl bg-white p-4 shadow-sm" key={item.id}>
                  <button
                    aria-label={`Remove ${item.name} from wishlist`}
                    className="absolute right-3 top-3 text-slate-400 transition hover:text-slate-600"
                    type="button"
                  >
                    <CloseIcon className="size-4 !text-[#7B3FE4] hover:!text-[#4B2E6B]" />
                  </button>

                  <div className="flex aspect-square items-center justify-center rounded-lg bg-slate-200 p-4">
                    <p className="text-center text-[10px] text-slate-400">{item.name}</p>
                  </div>

                  <button
                    className="mt-3 block text-left !text-sm font-semibold !text-[#7B3FE4] hover:underline"
                    type="button"
                  >
                    {item.name}
                  </button>

                  <div className="mt-1 flex items-center gap-2">
                    <span className="text-sm font-bold !text-[#4B2E6B]">
                      {formatPrice(item.price)}
                    </span>
                    <span className="text-xs !text-[#7B3FE4] line-through">
                      {formatPrice(item.originalPrice)}
                    </span>
                  </div>

                  <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-orange-100 px-2.5 py-1 text-[11px] font-semibold text-orange-600">
                    <StarIcon className="size-3" />
                    {item.badge}
                  </span>

                  <button
                    className="mt-3 w-full !rounded-lg border !border-[#7B3FE4] py-2 !text-sm !font-semibold uppercase tracking-wide !text-[#7B3FE4] transition hover:bg-purple-50"
                    type="button"
                  >
                    ADD TO CART
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default WishlistPage
