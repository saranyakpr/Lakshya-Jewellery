import { Link, useParams } from 'react-router-dom'
import { products } from '../data/products'
import { DiamondIcon } from '../components/header/HeaderIcons'

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

function CheckSquareIcon(props) {
  return (
    <svg fill="none" viewBox="0 0 20 20" {...props}>
      <rect fill="currentColor" height="20" rx="4" width="20" />
      <path
        d="m5.5 10.2 2.7 2.7 6.3-6.3"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  )
}

function ChevronRightIcon(props) {
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
      <path d="m9 6 6 6-6 6" />
    </svg>
  )
}

function PlaceholderTile({ label, className = '', textClassName = 'text-xs' }) {
  return (
    <div className={`flex items-center justify-center bg-slate-200 text-center text-slate-400 ${className}`}>
      <span className={`px-2 ${textClassName}`}>{label}</span>
    </div>
  )
}

function StarRating({ rating, className = 'size-4' }) {
  return (
    <div className="flex items-center gap-0.5">
      {[0, 1, 2, 3, 4].map((i) => (
        <StarIcon
          className={`${className} ${i < rating ? 'text-[#f5a623]' : 'text-slate-200'}`}
          key={i}
        />
      ))}
    </div>
  )
}

function ProductMiniCard({ name, price, subtitle }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-3">
      <PlaceholderTile className="aspect-square w-full rounded-md" label={name} textClassName="text-sm font-medium" />
      <p className="mt-3 !mb-0 text-sm font-bold text-slate-900">{price}</p>
      <p className="text-xs text-slate-500">{subtitle}</p>
    </div>
  )
}

function ProductCardSection({ title, items, gridClassName }) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <h2 className="text-center !text-lg font-semibold !text-gray-500">{title}</h2>
      <div className={`mt-6 grid gap-4 sm:gap-6 ${gridClassName}`}>
        {items.map((item) => (
          <ProductMiniCard key={item.name} {...item} />
        ))}
      </div>
    </section>
  )
}

function PillSection({ title, items, active, pillClassName }) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <h2 className="text-center text-sm font-semibold text-slate-900">{title}</h2>
      <div className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {items.map((item) => (
          <button
            className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold transition sm:text-sm ${
              item === active
                ? 'bg-[#4f3267] text-white'
                : pillClassName
            }`}
            key={item}
            type="button"
          >
            {item}
          </button>
        ))}
      </div>
    </section>
  )
}

function IconLabelSection({ title, items, tileClassName, textClassName }) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <h2 className="text-center text-sm font-semibold text-slate-900">{title}</h2>
      <div className="mt-4 grid grid-cols-3 gap-4 sm:grid-cols-5 sm:gap-6">
        {items.map((item) => (
          <div className="flex flex-col items-center gap-2 text-center" key={item}>
            <PlaceholderTile
              className={`aspect-square w-full rounded-lg ${tileClassName}`}
              label={item}
              textClassName={textClassName}
            />
            <span className="text-xs font-medium text-slate-600">{item}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

const galleryTiles = [
  'Gold Ring with Diamonds',
  'Ring in Purple Box',
  'Woman Smiling with Ring',
  'Gold Ring with Diamonds Side',
  'Woman Adjusting Ring',
  'Gold Ring Side View',
  'Woman Smiling with Ring',
  'Gold Ring Side View',
]

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

const largePromoCards = [
  { title: 'One Of A Kind Silver Jewellery', cta: 'Shop Now', className: 'bg-teal-500' },
  { title: 'Natural Diamonds in 18K Gold', cta: 'Shop Now', className: 'bg-orange-500' },
  { title: 'Get your 10% off', cta: 'Get Coupon', className: 'bg-indigo-800' },
]

const smallPromoCards = [
  {
    label: 'One of a kind Silver Jewellery',
    cta: 'Shop Now',
    barClassName: 'bg-purple-100',
    labelClassName: 'text-purple-300',
    buttonClassName: 'bg-[#4f3267] text-white',
  },
  {
    label: 'Trends that you cannot miss!',
    cta: 'Explore',
    barClassName: 'bg-indigo-950',
    labelClassName: 'text-white',
    buttonClassName: 'bg-white text-indigo-900',
  },
  {
    label: 'Lakshya App - Get 10% off',
    cta: 'Download',
    barClassName: 'bg-purple-600',
    labelClassName: 'text-white',
    buttonClassName: 'bg-purple-100 text-purple-900',
  },
]

const reviews = [
  {
    name: 'Priyanka Patel',
    date: '20 Nov 2023',
    rating: 5,
    text: 'Amazing ring, fits perfectly and the diamond sparkles beautifully. Highly recommend!',
    photos: ['Review Photo 1', 'Review Photo 2'],
  },
  {
    name: 'Rahul Sharma',
    date: '15 Nov 2023',
    rating: 4,
    text: 'Good quality ring, looks elegant and the delivery was quick. Will buy again.',
    photos: ['Review Photo 1'],
  },
]

const youMayAlsoLike = [
  { name: 'Diamond Ring 1', price: '₹12,300', subtitle: 'Silver diamond ring' },
  { name: 'Diamond Ring 2', price: '₹14,400', subtitle: 'Elegant diamond ring' },
  { name: 'Diamond Ring 3', price: '₹14,230', subtitle: 'Silver ring with diamonds' },
]

const recentlyViewed = [
  { name: 'Earrings 1', price: '₹49,710', subtitle: 'Gold & Diamond Earrings' },
  { name: 'Necklace 1', price: '₹18,717', subtitle: 'Gold Pendant Necklace' },
  { name: 'Necklace 2', price: '₹62,474', subtitle: 'Diamond Pendant Necklace' },
  { name: 'Earrings 2', price: '₹19,987', subtitle: 'Gold Stud Earrings' },
]

const similarProducts = [
  { name: 'Diamond Ring 1', price: '₹12,300', subtitle: 'Silver diamond ring' },
  { name: 'Diamond Ring 2', price: '₹14,400', subtitle: 'Elegant diamond ring' },
  { name: 'Diamond Ring 3', price: '₹14,230', subtitle: 'Silver ring with diamonds' },
  { name: 'Diamond Ring 4', price: '₹14,666', subtitle: 'Silver diamond ring' },
]

const browseByItems = ['Rings', 'Necklaces', 'Earrings', 'Bracelets', 'Wedding']
const collectionItems = ['Gold', 'Diamond', 'Silver', 'Platinum']
const priceItems = ['Under ₹10,000', '₹10,000 - ₹25,000', '₹25,000 - ₹50,000', 'Above ₹50,000']
const occasionItems = ['Wedding', 'Anniversary', 'Birthday', 'Festive', 'Casual']
const shopByProductItems = ['Rings', 'Earrings', 'Necklaces', 'Bracelets', 'Wedding']

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
    <div>
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <p className="text-xs text-slate-400">
          <Link className="hover:text-[#4f3267]" to="/">
            Home
          </Link>
          {' > '}
          {product.name}
        </p>

        <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-3">
            {galleryTiles.map((label, index) => (
              <div className="relative" key={`${label}-${index}`}>
                <PlaceholderTile className="aspect-square w-full rounded-xl" label={label} />
                {index === 1 ? (
                  <span className="absolute bottom-2 right-2 rounded bg-[#4f3267] px-2 py-1 text-[10px] font-semibold text-white">
                    Zoom
                  </span>
                ) : null}
              </div>
            ))}
          </div>

          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 rounded-lg bg-[#4f3267] px-4 py-3 text-white">
              <p className="text-sm">
                <span className="font-bold">₹600</span> On complete order value above ₹5000
              </p>
              <button
                className="shrink-0 !rounded-lg bg-white px-4 py-1.5 text-xs font-semibold text-[#4f3267]"
                type="button"
              >
                Apply Now
              </button>
            </div>

            {/* <h1 className="mt-5 text-2xl font-bold text-slate-900 sm:text-3xl">{product.name}</h1> */}

            <div className="mt-4 flex items-baseline gap-3">
              <span className="text-3xl font-bold text-slate-900">{product.price}</span>
              {product.original ? (
                <span className="text-lg text-slate-400 line-through">{product.original}</span>
              ) : null}
            </div>
            <p className="mt-1 text-sm text-slate-500">Inclusive of all taxes</p>

            <div className="mt-3 flex items-center gap-2">
              <StarRating rating={5} />
              <span className="text-sm text-slate-500">4.9 | 1,234 ratings &amp; 567 reviews</span>
            </div>

            <span className="mt-4 inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
              Earn 1,143 CL Points
            </span>

            <div className="mt-4 flex flex-col divide-y divide-blue-200 rounded-lg bg-blue-200">
              {bankOffers.map((offer) => (
                <div className="flex items-center justify-between px-4 py-3 text-sm" key={offer.label}>
                  <span className="font-medium text-slate-700">{offer.label}</span>
                  <span className="text-slate-500">{offer.amount}</span>
                </div>
              ))}
            </div>

            <div className="flex items-start justify-between gap-4 py-5">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-sm !mb-0 text-slate-500">Delivery</p>
                  <p className="text-sm !mb-0 font-medium text-slate-800">Free</p>
                </div>
                <div>
                  <p className="text-sm !mb-0 text-slate-500">Return</p>
                  <p className="text-sm !mb-0 font-medium text-slate-800">15 days</p>
                </div>
                <div>
                  <p className="text-sm !mb-0 text-slate-500">Warranty</p>
                  <p className="text-sm !mb-0 font-medium text-slate-800">1 year</p>
                </div>
              </div>
              <button
                className="shrink-0 rounded bg-[#4f3267] px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-[#3c2650]"
                type="button"
              >
                Customize
              </button>
            </div>

            <button
              className="mt-6 w-full !rounded-lg bg-[#4f3267] py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-[#3c2650]"
              type="button"
            >
              Add to Bag
            </button>

            <ul className="!mt-6 !pl-0 flex flex-col gap-2">
              {deliveryNotes.map((note) => (
                <li className="flex items-center gap-2 text-sm text-slate-600" key={note}>
                  <CheckSquareIcon className="size-4 shrink-0 text-blue-500" />
                  {note}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex items-center gap-3 rounded-lg border border-green-200 bg-green-50 p-3">
              <PlaceholderTile className="size-10 shrink-0 rounded" label="" textClassName="text-[8px]" />
              <div>
                <p className="text-sm !mb-0 font-semibold text-green-700">
                  Use the Lakshya app for exclusive offers
                </p>
                <p className="text-xs !mb-0 text-green-600">Scan QR code or download app</p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              {trustBadges.map(({ icon: Icon, label }) => (
                <div className="flex flex-col items-center gap-2" key={label}>
                  <Icon className="size-6 text-[#4f3267]" />
                  <span className="text-xs font-medium text-slate-600">{label}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-slate-200 pt-6">
              <h2 className="!text-[1.5rem] !mb-0 font-semibold text-slate-900">Product Details</h2>
              <div className="flex flex-col gap-1 text-sm text-slate-500">
                <p className='!mb-0'>Metal: {product.metal}</p>
                <p className='!mb-0'>Diamond Weight: {product.diamondWeight}</p>
                <p className='!mb-0'>Certification: {product.certification}</p>
                <p className='!mb-0'>SKU: {product.sku}</p>
              </div>
              <button
                className="text-sm font-medium text-[#4f3267] underline hover:no-underline"
                type="button"
              >
                Download Certificate &amp; Warranty PDF
              </button>
            </div>
          </div>
        </div>
      </div>

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {largePromoCards.map((card) => (
            <div className={`rounded-xl ${card.className} p-3 text-white`} key={card.title}>
              <p className="!text-sm !mb-0 font-bold">{card.title}</p>
              <p className="mt-1 text-xs font-semibold underline">{card.cta}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-xl bg-slate-50 p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h2 className="!text-[1.5rem] !mb-3 font-semibold text-slate-900">Customer Reviews</h2>
              <div className="flex items-center gap-2">
                <StarRating rating={5} />
                <span className="text-sm text-slate-500">(4.9/5)</span>
              </div>
              <p className="!mb-0 text-sm text-slate-500">Based on 1,234 Ratings &amp; 567 Reviews</p>
            </div>
            <button
              className="shrink-0 rounded bg-[#4f3267] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#3c2650]"
              type="button"
            >
              Write a Review
            </button>
          </div>

          <div className="mt-3 grid grid-cols-3 gap-3 sm:w-1/2">
            {['Review Image 1', 'Review Image 2', 'Review Image 3'].map((label) => (
              <PlaceholderTile className="aspect-square w-full rounded-md" key={label} label={label} textClassName="text-[10px]" />
            ))}
          </div>
        </div>

        <div className="mt-3 flex flex-col divide-y divide-slate-100">
          {reviews.map((review) => (
            <div className="py-6" key={review.name}>
              <div className="flex flex-wrap items-center gap-2">
                <StarRating className="size-3.5" rating={review.rating} />
                <span className="text-xs text-slate-500">
                  By {review.name} on {review.date}
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-600">{review.text}</p>
              <div className="mt-3 flex gap-3">
                {review.photos.map((label) => (
                  <PlaceholderTile
                    className="h-20 w-20 shrink-0 rounded-md"
                    key={label}
                    label={label}
                    textClassName="text-[10px]"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          {[1, 2, 3, 4].map((page) => (
            <button
              className={`flex size-8 items-center justify-center rounded border text-sm font-medium transition ${
                page === 1
                  ? 'border-[#4f3267] bg-[#4f3267] text-white'
                  : 'border-[#4f3267] text-[#4f3267] hover:bg-[#4f3267]/10'
              }`}
              key={page}
              type="button"
            >
              {page}
            </button>
          ))}
          <button
            className="flex size-8 items-center justify-center rounded border border-[#4f3267] text-[#4f3267] transition hover:bg-[#4f3267]/10"
            type="button"
          >
            <ChevronRightIcon className="size-4" />
          </button>
        </div>
      </section>

      <ProductCardSection
        gridClassName="grid-cols-2 sm:grid-cols-3"
        items={youMayAlsoLike}
        title="You may also Like"
      />

      <ProductCardSection
        gridClassName="grid-cols-2 sm:grid-cols-4"
        items={recentlyViewed}
        title="Recently Viewed"
      />

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <PlaceholderTile className="aspect-[16/7] w-full rounded-xl" label="Map with Store Locations" />

        <div className="mt-6 text-center">
          <p className="text-sm font-semibold text-slate-900 mb-0">Find In Store near you</p>
          <p className="mt-1 text-sm text-slate-500">
            Enter your location to find the nearest Lakshya store
          </p>

          <div className="mx-auto mt-4 flex max-w-xl flex-col gap-3 sm:flex-row">
            <input
              className="h-11 w-full rounded-lg border border-slate-300 bg-white px-4 text-sm text-slate-700 outline-none placeholder:text-slate-400 focus:border-[#4f3267]"
              placeholder="Enter your city or pincode"
              type="text"
            />
            <button
              className="h-11 shrink-0 !rounded-lg bg-[#A64CA6] px-6 text-sm font-semibold text-white transition hover:bg-fuchsia-800"
              type="button"
            >
              View Stores &amp; Events
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-xl bg-linear-to-t to-[#D9C9F7] from-[#B9A9F7] p-6 text-center">
            <p className="text-base !mb-0 font-bold text-[#4f3267]">Download the Lakshya App</p>
            <p className="mt-1 !mb-0 text-sm text-[#4f3267]/80">
              Shop anytime, anywhere with exclusive app offers
            </p>
            <button className="mt-3 !text-md !font-bold text-[#4f3267] underline" type="button" style={{textDecoration:'none'}}>
              Download
            </button>
          </div>

          <div className="rounded-xl bg-linear-to-t to-[#D9F7BE] from-[#A3D36A] p-6 text-center">
            <p className="text-base font-bold text-green-900 !mb-0">
              Complete Profile &amp; Earn 1,000 CL Points
            </p>
            <p className="mt-1 !mb-0 text-sm text-green-800">
              Get personalized recommendations and offers
            </p>
            <button
              className="mt-3 rounded bg-green-700 px-5 py-2 text-sm font-semibold text-white transition hover:bg-green-800"
              type="button"
            >
              Complete
            </button>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-10">
          {['18K Gold', '22K Gold'].map((label) => (
            <div className="flex items-center gap-2" key={label}>
              <PlaceholderTile className="size-8 rounded" label="" textClassName="text-[8px]" />
              <span className="text-sm text-slate-700">{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 rounded-xl bg-gradient-to-r from-[#6b3fa0] to-[#2a1745] p-6 lg:flex-row">
          <div className="flex items-center gap-3">
            <DiamondIcon className="size-13 shrink-0 text-white" />
            <div>
              <p className="!text-xl !mb-0 font-semibold text-white">Join Lakshya Insider</p>
              <p className="text-md text-purple-200">Exclusive offers, early access &amp; more</p>
            </div>
          </div>

          <form
            className="flex w-full flex-col sm:flex-row lg:w-auto"
            onSubmit={(event) => event.preventDefault()}
          >
            <input
              className="h-11 w-full border-0 bg-white px-4 text-sm text-slate-700 outline-none placeholder:text-slate-400 !bg-red sm:w-64"
              placeholder="Enter your email"
              type="email"
            />
            <button
              className="h-11 shrink-0 !rounded-r-lg bg-purple-300 px-6 text-sm !font-semibold text-[#5A2E8A] transition hover:bg-purple-200"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {smallPromoCards.map((card) => (
            <div
              className={`flex items-center justify-between gap-3 rounded-full px-4 py-2.5 ${card.barClassName}`}
              key={card.label}
            >
              <span className={`text-xs font-semibold sm:text-sm ${card.labelClassName}`}>
                {card.label}
              </span>
              <span
                className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-bold ${card.buttonClassName}`}
              >
                {card.cta}
              </span>
            </div>
          ))}
        </div>
      </section>

      <ProductCardSection
        gridClassName="grid-cols-2 sm:grid-cols-4"
        items={similarProducts}
        title="Similar Products"
      />

      <PillSection
        active="Rings"
        items={browseByItems}
        pillClassName="bg-orange-100 text-orange-700 hover:bg-orange-200"
        title="Browse by"
      />

      <PillSection
        items={collectionItems}
        pillClassName="bg-pink-100 text-pink-700 hover:bg-pink-200"
        title="Shop by Collection"
      />

      <PillSection
        items={priceItems}
        pillClassName="bg-blue-100 text-blue-700 hover:bg-blue-200"
        title="Shop by Price"
      />

      <IconLabelSection items={occasionItems} textClassName="text-[10px]" title="Shop by Occasion" />

      <IconLabelSection
        items={shopByProductItems}
        textClassName="text-lg font-bold text-slate-500"
        title="Shop by Product"
      />
    </div>
  )
}

export default ProductDetails
