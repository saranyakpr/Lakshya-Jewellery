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

function ClockIcon(props) {
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
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
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

const features = [
  {
    icon: ClockIcon,
    title: 'Unparalleled convenience',
    text: 'Buy in-store or online 24×7. Purchase gold online or offline through one of our jewellery stores.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'What you buy is what you get',
    text: 'No carrying cost or hidden charges. Every gram of Lakshya eGold you buy online is backed by real gold deposits.',
  },
  {
    icon: RefreshIcon,
    title: '100% guaranteed buyback',
    text: 'Redeem your Lakshya eGold balance across our 200+ online stores and physical outlets.',
  },
]

function DigitalGoldFeaturesSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="!text-sm font-semibold text-purple-500 sm:text-sm !mb-0">Know More</p>

          <h2 className="mt-2 text-2xl !font-bold leading-snug text-slate-900 sm:text-3xl">
            Invest in a high-payoff digital gold. Buy, sell, or redeem your Lakshya eGold in
            exchange for beautiful jewellery.
          </h2>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <button
              className="!rounded-lg bg-purple-500 px-8 py-2 text-sm !font-semibold text-white transition hover:bg-purple-600"
              type="button"
            >
              Buy eGold Now
            </button>

            <button
              className="flex items-center gap-1.5 text-sm font-semibold text-slate-900"
              type="button"
            >
              <ChevronDownIcon className="size-4" />
              How to redeem?
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          {features.map(({ icon: Icon, title, text }) => (
            <div className="flex items-start gap-4" key={title}>
              <span className="flex !size-9 shrink-0 items-center justify-center text-purple-500">
                <Icon className="size-8" />
              </span>
              <div>
                <h3 className="!text-[1.2rem] !font-bold text-slate-900 sm:text-base">{title}</h3>
                <p className="mt-1 text-sm text-slate-500">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DigitalGoldFeaturesSection
