import { Link, useParams } from 'react-router-dom'
import { products } from '../data/products'

function StarIcon(props) {
  return (
    <svg fill="currentColor" viewBox="0 0 20 20" {...props}>
      <path d="M10 1.5l2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6-4.5-4.2 6.1-.7L10 1.5Z" />
    </svg>
  )
}

function CheckBadgeIcon(props) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M9 12l2 2 4-4" />
      <circle cx="12" cy="12" r="9" />
    </svg>
  )
}

function TruckIcon(props) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M3 16V6a1 1 0 0 1 1-1h9v11" />
      <path d="M13 9h4l4 4v3h-2" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="17" cy="18" r="2" />
    </svg>
  )
}

function ReturnIcon(props) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M9 7H5v4" />
      <path d="M5 11a7 7 0 1 0 2-5" />
    </svg>
  )
}

const bankOffers = [
  { label: 'Flat 30% off', amount: '₹4,286' },
  { label: 'Flat 25% off', amount: '₹3,572' },
]

const deliveryNotes = [
  'Delivery: 3-5 days',
  'Free return within 15 days',
  'Gift wrap available',
]

const trustBadges = [
  { icon: CheckBadgeIcon, label: '100% Certified' },
  { icon: TruckIcon, label: 'Free Shipping' },
  { icon: ReturnIcon, label: 'Easy Returns' },
]

function ProductDetails() {
  const { productId } = useParams()
  const product = products.find((item) => item.slug === productId)

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <p className="text-lg text-slate-600">Product not found.</p>
        <Link className="mt-4 inline-block text-sm text-[#4f3267] hover:underline" to="/">
          Back to Home
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <p className="text-xs text-slate-400">
        <Link className="hover:text-[#4f3267]" to="/">
          Home
        </Link>
        {' > '}
        {product.name}
      </p>

      <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="aspect-square overflow-hidden rounded-2xl bg-slate-50">
          <img alt={product.name} className="h-full w-full object-cover" src={product.image} />
        </div>

        <div>
          <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">{product.name}</h1>

          <div className="mt-3 flex items-center gap-2">
            <div className="flex items-center gap-0.5 text-[#f5a623]">
              {[0, 1, 2, 3, 4].map((i) => (
                <StarIcon className="size-4" key={i} />
              ))}
            </div>
            <span className="text-sm text-slate-500">4.9 | 1,234 ratings &amp; 567 reviews</span>
          </div>

          <div className="mt-5 flex items-baseline gap-3">
            <span className="text-3xl font-bold text-slate-900">{product.price}</span>
            {product.original ? (
              <span className="text-lg text-slate-400 line-through">{product.original}</span>
            ) : null}
          </div>
          <p className="mt-1 text-sm text-slate-500">Inclusive of all taxes</p>

          <div className="mt-6 flex flex-col gap-3 rounded-xl border border-slate-200 p-4">
            {bankOffers.map((offer) => (
              <div className="flex items-center justify-between text-sm" key={offer.label}>
                <span className="font-medium text-slate-700">{offer.label}</span>
                <span className="text-slate-500">{offer.amount}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-3 gap-4 border-y border-slate-200 py-5 sm:grid-cols-4">
            <div>
              <p className="text-xs text-slate-400">Delivery</p>
              <p className="mt-1 text-sm font-medium text-slate-800">Free</p>
            </div>
            <div>
              <p className="text-xs text-slate-400">Return</p>
              <p className="mt-1 text-sm font-medium text-slate-800">15 days</p>
            </div>
            <div>
              <p className="text-xs text-slate-400">Warranty</p>
              <p className="mt-1 text-sm font-medium text-slate-800">1 year</p>
            </div>
            <div>
              <button
                className="text-sm font-medium text-[#4f3267] hover:underline"
                type="button"
              >
                Customize
              </button>
            </div>
          </div>

          <button
            className="mt-6 w-full rounded-lg bg-[#4f3267] py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-[#3c2650]"
            type="button"
          >
            Add to Bag
          </button>

          <ul className="mt-6 flex flex-col gap-2">
            {deliveryNotes.map((note) => (
              <li className="flex items-center gap-2 text-sm text-slate-600" key={note}>
                <CheckBadgeIcon className="size-4 shrink-0 text-[#4f3267]" />
                {note}
              </li>
            ))}
          </ul>

          <div className="mt-6 grid grid-cols-3 gap-4 text-center">
            {trustBadges.map(({ icon: Icon, label }) => (
              <div className="flex flex-col items-center gap-2" key={label}>
                <Icon className="size-6 text-[#4f3267]" />
                <span className="text-xs font-medium text-slate-600">{label}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t border-slate-200 pt-6">
            <h2 className="text-sm font-semibold text-slate-900">Product Details</h2>
            <dl className="mt-3 flex flex-col gap-2 text-sm">
              <div className="flex justify-between">
                <dt className="text-slate-500">Metal</dt>
                <dd className="text-slate-800">{product.metal}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-slate-500">Diamond Weight</dt>
                <dd className="text-slate-800">{product.diamondWeight}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-slate-500">Certification</dt>
                <dd className="text-slate-800">{product.certification}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-slate-500">SKU</dt>
                <dd className="text-slate-800">{product.sku}</dd>
              </div>
            </dl>
            <button
              className="mt-4 text-sm font-medium text-[#4f3267] hover:underline"
              type="button"
            >
              Download Certificate &amp; Warranty PDF
            </button>
          </div>
        </div>
      </div>

      <div className="mt-16 border-t border-slate-200 pt-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">Customer Reviews</h2>
            <div className="mt-2 flex items-center gap-2">
              <div className="flex items-center gap-0.5 text-[#f5a623]">
                {[0, 1, 2, 3, 4].map((i) => (
                  <StarIcon className="size-4" key={i} />
                ))}
              </div>
              <span className="text-sm text-slate-500">(4.9/5)</span>
            </div>
            <p className="mt-1 text-sm text-slate-500">Based on 1,234 Ratings &amp; 567 Reviews</p>
          </div>
          <button
            className="rounded border border-[#4f3267] px-4 py-2 text-sm font-medium text-[#4f3267] transition hover:bg-[#4f3267] hover:text-white"
            type="button"
          >
            Write a Review
          </button>
        </div>

        <div className="mt-6 border-t border-slate-100 pt-6">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-slate-800">Priyanka Patel</span>
            <span className="text-xs text-slate-400">5 stars · 20 Nov 2023</span>
          </div>
          <p className="mt-2 text-sm text-slate-600">
            Absolutely stunning piece! The craftsmanship is flawless and it looks even better in
            person.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
