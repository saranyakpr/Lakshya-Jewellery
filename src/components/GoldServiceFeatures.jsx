function ExchangeIcon(props) {
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
      <path d="M17 2l4 4-4 4" />
      <path d="M3 12v-2a4 4 0 0 1 4-4h14" />
      <path d="M7 22l-4-4 4-4" />
      <path d="M21 12v2a4 4 0 0 1-4 4H3" />
    </svg>
  )
}

function CoinIcon(props) {
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
      <ellipse cx="12" cy="6" rx="8" ry="3" />
      <path d="M4 6v6c0 1.657 3.582 3 8 3s8-1.343 8-3V6" />
      <path d="M4 12v6c0 1.657 3.582 3 8 3s8-1.343 8-3v-6" />
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
      <path d="M5 18H3v-4M9 18h4" />
    </svg>
  )
}

const features = [
  {
    icon: ExchangeIcon,
    heading: 'Old Gold Exchange',
    text: 'Get 100% value for your old gold jewellery.',
  },
  {
    icon: CoinIcon,
    heading: 'Invest in E-Gold',
    text: 'Securely buy and save digital gold starting from ₹100.',
  },
  {
    icon: TruckIcon,
    heading: 'Free Shipping',
    text: 'Insured delivery across India and internationally.',
  },
]

function GoldServiceFeatures() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
        {features.map(({ icon: Icon, heading, text }) => (
          <div
            className="flex flex-col items-center rounded-xl border border-slate-200 px-6 py-10 text-center"
            key={heading}
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f6f3f9] text-[#4f3267]">
              <Icon className="h-6 w-6" />
            </span>
            <h4 className="mt-6 text-lg font-semibold text-slate-900">{heading}</h4>
            <p className="mt-3 max-w-[280px] text-sm text-slate-600">{text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default GoldServiceFeatures
