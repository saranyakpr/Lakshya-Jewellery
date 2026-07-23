import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import logo from '../assets/img/logo.png'
import studEarrings from '../assets/img/image 27.png'
import leherImage from '../assets/img/collection-leher.png'

function ChevronLeftIcon(props) {
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
      <path d="m15 6-6 6 6 6" />
    </svg>
  )
}

function ChevronDownIcon(props) {
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
      <path d="m6 9 6 6 6-6" />
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

function VideoIcon(props) {
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
      <rect height="12" rx="2" width="14" x="3" y="6" />
      <path d="m17 10 4-2.5v9L17 14" />
    </svg>
  )
}

function WhatsAppIcon(props) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm5.8 14.2c-.2.7-1.4 1.3-2 1.4-.5.1-1.1.1-1.8-.1-.4-.1-1-.3-1.7-.6-3-1.3-4.9-4.3-5.1-4.5-.1-.2-1.2-1.6-1.2-3.1s.8-2.2 1.1-2.5c.3-.3.6-.4.8-.4h.6c.2 0 .4 0 .6.5.2.5.7 1.8.8 1.9.1.2.1.3 0 .5-.1.2-.1.3-.3.5-.1.2-.3.4-.4.5-.1.1-.3.3-.1.6.2.3.9 1.4 1.9 2.3 1.3 1.2 2.4 1.5 2.7 1.7.3.2.5.1.7-.1.2-.2.8-.9 1-1.2.2-.3.4-.2.7-.1.3.1 1.7.8 2 1 .3.1.5.2.6.3.1.2.1.7-.1 1.4Z" />
    </svg>
  )
}

function PhoneIcon(props) {
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
      <path d="M4.5 4.5h4l2 5-2.5 1.5a11 11 0 0 0 5 5l1.5-2.5 5 2v4a2 2 0 0 1-2 2 16 16 0 0 1-15-15 2 2 0 0 1 2-2Z" />
    </svg>
  )
}

function PinIcon(props) {
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
      <path d="M12 21s6-5.4 6-11a6 6 0 1 0-12 0c0 5.6 6 11 6 11Z" />
      <circle cx="12" cy="10" r="2.2" />
    </svg>
  )
}

function StarIcon(props) {
  return (
    <svg fill="currentColor" viewBox="0 0 20 20" {...props}>
      <path d="M10 1.5l2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6-4.5-4.2 6.1-.7L10 1.5Z" />
    </svg>
  )
}

function CheckCircleIcon(props) {
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

function ArrowRightIcon(props) {
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
      <path d="M5 12h14M13 6l6 6-6 6" />
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

function ShieldCheckIcon(props) {
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
      <path d="M12 3.5 4.5 6v5.5c0 4.5 3.2 7.5 7.5 9 4.3-1.5 7.5-4.5 7.5-9V6L12 3.5Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}

function RefreshIcon(props) {
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
      <path d="M4 12a8 8 0 0 1 14-5.2M20 12a8 8 0 0 1-14 5.2" />
      <path d="M18 3v4h-4M6 21v-4h4" />
    </svg>
  )
}

function AwardIcon(props) {
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
      <circle cx="12" cy="8" r="5" />
      <path d="m8.5 12.5-1.5 7 5-2.5 5 2.5-1.5-7" />
    </svg>
  )
}

const cartItems = [
  {
    id: 1,
    name: 'Bright Bloomy Diamond Stud Earrings',
    price: '₹20,738',
    originalPrice: '₹22,228',
    savings: 'Save ₹1,490',
    sku: 'JE08111-YGS300',
    badge: '12K+ BOUGHT THIS',
    image: studEarrings,
  },
  {
    id: 2,
    name: 'Rainbow Radiance Gemstone Ear Cuffs',
    price: '₹86,525',
    sku: 'JE12479-1RS350',
    image: leherImage,
  },
]

const frequentlyBoughtTogether = {
  name: 'Frost Flick Diamo...',
  price: '₹19,324',
  originalPrice: '₹20,643',
  image: studEarrings,
}

const priceSummary = [
  { label: 'Subtotal', value: '₹1,08,753', valueClassName: 'text-slate-700' },
  { label: 'You Saved', value: '-₹1,490', valueClassName: 'font-medium text-emerald-600' },
  { label: 'Coupon Discount', value: '-₹14,163', valueClassName: 'font-medium text-emerald-600' },
  { label: 'Shipping (Standard)', value: 'Free', valueClassName: 'font-medium text-purple-600' },
]

const trustBadges = [
  {
    icon: RefreshIcon,
    title: '15 Day Exchange',
    subtitle: 'On Online Orders',
    badgeClassName: 'bg-blue-100 text-blue-500',
  },
  { icon: ShieldCheckIcon, title: '100% Certified', badgeClassName: 'bg-pink-100 text-pink-500' },
  { icon: ReturnIcon, title: 'Lifetime Exchange', badgeClassName: 'bg-purple-100 text-purple-600' },
  { icon: AwardIcon, title: 'One Year Warranty', badgeClassName: 'bg-yellow-100 text-yellow-600' },
]

const paymentMethods = ['VISA', 'Mastercard', 'PayPal', 'RuPay']

function CartHeader() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('bag')

  const toggle = (
    <div className="pointer-events-auto inline-flex rounded-full bg-purple-100 p-1">
      <button
        className={`whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-semibold transition sm:text-sm ${
          activeTab === 'bag' ? '!bg-white !text-[#4f3267] shadow-sm' : '!text-[#4f3267]'
        }`}
        onClick={() => setActiveTab('bag')}
        type="button"
      >
        Shopping Bag (2)
      </button>
      <button
        className={`whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-semibold transition sm:text-sm ${
          activeTab === 'trial' ? '!bg-white !text-[#4f3267] shadow-sm' : '!text-[#4f3267]'
        }`}
        onClick={() => setActiveTab('trial')}
        type="button"
      >
        Home Trial (0)
      </button>
    </div>
  )

  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-3 px-4 py-3 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
        <div className="flex w-full items-center justify-between gap-3 sm:w-auto">
          <div className="flex items-center gap-3">
            <button
              aria-label="Go back"
              className="!text-slate-500 transition hover:!text-slate-800"
              onClick={() => navigate(-1)}
              type="button"
            >
              <ChevronLeftIcon className="size-5" />
            </button>
            <Link to="/">
              <img alt="Lakshya Jewellery logo" className="h-8 w-auto" src={logo} />
            </Link>
          </div>

          <div className="flex items-center gap-3 sm:hidden">
            <a
              aria-label="Chat with us on WhatsApp"
              className="!text-[#4f3267] transition hover:!text-[#3c2650]"
              href="https://wa.me/914442935000"
              rel="noreferrer"
              target="_blank"
            >
              <WhatsAppIcon className="size-5" />
            </a>
            <a
              aria-label="Call us"
              className="!text-[#4f3267] transition hover:!text-[#3c2650]"
              href="tel:+914442935000"
            >
              <PhoneIcon className="size-5" />
            </a>
          </div>
        </div>

        <div className="pointer-events-none flex w-full justify-center sm:absolute sm:inset-x-0 sm:top-1/2 sm:-translate-y-1/2">
          {toggle}
        </div>

        <div className="hidden items-center gap-3 sm:flex">
          <span className="text-sm text-slate-500">Need Assistance?</span>
          <a
            aria-label="Chat with us on WhatsApp"
            className="!text-[#4f3267] transition hover:!text-[#3c2650]"
            href="https://wa.me/914442935000"
            rel="noreferrer"
            target="_blank"
          >
            <WhatsAppIcon className="size-5" />
          </a>
          <a
            aria-label="Call us"
            className="!text-[#4f3267] transition hover:!text-[#3c2650]"
            href="tel:+914442935000"
          >
            <PhoneIcon className="size-5" />
          </a>
        </div>
      </div>
    </header>
  )
}

function VideoCallBanner() {
  return (
    <div className="flex flex-col items-start justify-between gap-3 rounded-xl bg-emerald-50 p-4 sm:flex-row sm:items-center sm:p-5">
      <div className="flex items-center gap-3">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500 text-white">
          <VideoIcon className="size-5" />
        </span>
        <div>
          <p className="text-sm font-bold text-slate-900">See it Before You Buy It</p>
          <p className="text-xs text-slate-500">Experience our designs in detail via video call</p>
        </div>
      </div>
      <button
        className="w-full shrink-0 rounded-lg bg-emerald-500 px-5 py-2 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-emerald-600 sm:w-auto"
        type="button"
      >
        See it Live
      </button>
    </div>
  )
}

function CartItemCard({ item }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5">
      <div className="flex gap-4">
        <div className="relative shrink-0">
          <img
            alt={item.name}
            className="size-24 rounded-lg border border-slate-200 object-cover sm:size-28"
            src={item.image}
          />
          {item.badge ? (
            <span className="absolute -bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-1 whitespace-nowrap rounded-full bg-orange-100 px-2 py-0.5 text-[10px] font-semibold text-orange-600">
              <StarIcon className="size-2.5" />
              {item.badge}
            </span>
          ) : null}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <p className="text-sm font-semibold text-slate-900">{item.name}</p>
            <button
              aria-label={`Remove ${item.name}`}
              className="shrink-0 text-slate-400 transition hover:text-slate-600"
              type="button"
            >
              <CloseIcon className="size-4" />
            </button>
          </div>

          <div className="mt-1 flex flex-wrap items-baseline gap-2">
            <span className="text-sm font-bold text-slate-900">{item.price}</span>
            {item.originalPrice ? (
              <span className="text-xs text-slate-400 line-through">{item.originalPrice}</span>
            ) : null}
            {item.savings ? (
              <span className="text-xs font-semibold text-orange-600">{item.savings}</span>
            ) : null}
          </div>

          <p className="mt-1 text-xs text-slate-400">{item.sku}</p>

          <div className="mt-3 flex items-center gap-1 text-sm text-slate-600">
            Quantity:
            <button
              className="inline-flex items-center gap-1 rounded border border-slate-200 px-2 py-0.5 text-sm font-medium text-slate-700"
              type="button"
            >
              1
              <ChevronDownIcon className="size-3.5" />
            </button>
          </div>

          <button
            className="mt-2 text-xs font-semibold text-purple-600 hover:underline"
            type="button"
          >
            Check Delivery Date
          </button>
        </div>
      </div>
    </div>
  )
}

function FrequentlyBoughtTogether() {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className="rounded-xl bg-purple-100 p-4 sm:p-5">
      <button
        className="flex w-full items-center justify-between text-left"
        onClick={() => setIsOpen((open) => !open)}
        type="button"
      >
        <span className="text-sm font-semibold text-slate-900">Frequently Bought Together</span>
        <ChevronDownIcon
          className={`size-4 shrink-0 text-slate-500 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen ? (
        <div className="mt-4 flex items-start gap-3">
          <div className="relative shrink-0">
            <img
              alt={frequentlyBoughtTogether.name}
              className="size-16 rounded-lg border border-slate-200 bg-white object-cover"
              src={frequentlyBoughtTogether.image}
            />
            <span className="absolute -right-2 -top-2 rounded-full border border-[#4f3267] bg-white px-1.5 py-0.5 text-[9px] font-bold text-[#4f3267]">
              + ADD
            </span>
          </div>
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-sm font-bold text-slate-900">
                {frequentlyBoughtTogether.price}
              </span>
              <span className="text-xs text-slate-400 line-through">
                {frequentlyBoughtTogether.originalPrice}
              </span>
            </div>
            <p className="text-xs text-slate-500">{frequentlyBoughtTogether.name}</p>
          </div>
        </div>
      ) : null}
    </div>
  )
}

function PromoAppCard() {
  return (
    <div className="rounded-xl bg-gradient-to-br from-[#7a2148] to-[#2a0f24] p-5 text-white">
      <p className="text-xs font-semibold text-white/70">Lakshya App</p>
      <p className="mt-2 text-sm">Get ₹500 off by completing your profile on the App</p>
      <p className="mt-2 text-2xl font-extrabold">Free ₹500</p>
      <button
        className="mt-3 flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-xs font-bold text-[#4f3267]"
        type="button"
      >
        Install App
        <ArrowRightIcon className="size-3.5" />
      </button>
    </div>
  )
}

function CouponAppliedBanner() {
  return (
    <div className="flex items-start justify-between gap-3 rounded-xl bg-purple-100 p-4">
      <div className="flex items-start gap-2">
        <CheckCircleIcon className="mt-0.5 size-4 shrink-0 text-purple-600" />
        <div>
          <p className="text-sm font-semibold text-purple-700">MAKING75OFF applied</p>
          <p className="text-xs text-purple-500">✓ ₹14,163/- saved on this order</p>
        </div>
      </div>
      <button
        className="shrink-0 text-xs font-semibold text-purple-600 hover:underline"
        type="button"
      >
        Remove
      </button>
    </div>
  )
}

function DeliveryDetailsRow() {
  return (
    <div className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white p-4">
      <div className="flex items-center gap-2">
        <PinIcon className="size-4 shrink-0 text-slate-400" />
        <span className="text-sm text-slate-700">Check Delivery &amp; Store Details</span>
      </div>
      <button
        className="shrink-0 text-xs font-semibold text-purple-600 hover:underline"
        type="button"
      >
        Enter Pincode
      </button>
    </div>
  )
}

function PriceSummaryCard() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <div className="flex flex-col gap-2">
        {priceSummary.map((row) => (
          <div className="flex items-center justify-between text-sm" key={row.label}>
            <span className="text-slate-500">{row.label}</span>
            <span className={row.valueClassName}>{row.value}</span>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between border-t border-slate-200 pt-3">
        <span className="text-sm font-bold text-slate-900">Total Cost</span>
        <span className="text-lg font-bold text-slate-900">₹93,100</span>
      </div>
    </div>
  )
}

function TrustBadgesBar() {
  return (
    <div className="mt-8 flex flex-col items-center justify-between gap-6 rounded-xl bg-white p-5 sm:flex-row">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
        {trustBadges.map(({ icon: Icon, title, subtitle, badgeClassName }) => (
          <div className="flex items-center gap-2" key={title}>
            <span
              className={`flex size-9 shrink-0 items-center justify-center rounded-full ${badgeClassName}`}
            >
              <Icon className="size-4" />
            </span>
            <div>
              <p className="text-xs font-semibold text-slate-800">{title}</p>
              {subtitle ? <p className="text-[10px] text-slate-400">{subtitle}</p> : null}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2">
        {paymentMethods.map((label) => (
          <span
            className="flex h-6 items-center justify-center rounded border border-slate-200 px-2 text-[8px] font-bold text-slate-400"
            key={label}
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  )
}

function CartPage() {
  const navigate = useNavigate()

  return (
    <main className="min-h-screen bg-[#f7f5fb]">
      <CartHeader />

      <div className="mx-auto w-full max-w-7xl px-4 py-6 pb-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="flex flex-col gap-4 lg:col-span-8">
            <VideoCallBanner />

            <CartItemCard item={cartItems[0]} />
            <FrequentlyBoughtTogether />

            <CartItemCard item={cartItems[1]} />
          </div>

          <div className="flex flex-col gap-4 lg:col-span-4">
            <PromoAppCard />
            <CouponAppliedBanner />
            <DeliveryDetailsRow />
            <PriceSummaryCard />

            <button
              className="w-full !rounded-lg bg-purple-500 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-purple-600"
              onClick={() => navigate('/')}
              type="button"
            >
              Place Order
            </button>
          </div>
        </div>

        <TrustBadgesBar />
      </div>

      <Footer />
    </main>
  )
}

export default CartPage
