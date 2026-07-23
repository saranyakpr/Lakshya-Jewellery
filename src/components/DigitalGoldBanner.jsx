import necklaceImage from '../assets/img/ring.png'

function BarsIcon(props) {
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
      <path d="M5 20V10M12 20V4M19 20v-7" />
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

function CoinsIcon(props) {
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
      <ellipse cx="8" cy="16" rx="6" ry="2.5" />
      <path d="M2 16v-3.5C2 11 4.7 10 8 10s6 1 6 2.5V16" />
      <path d="m13 6 3-3 3 3M16 3v6" />
    </svg>
  )
}

function DigitalGoldBanner() {
  return (
    <section className="w-full bg-black">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <BarsIcon className="size-6 text-slate-300" />

          <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Lakshya Digital Gold</h1>

          <p className="mt-4 max-w-md text-sm text-slate-400 sm:text-base">
            Invest in Pure 24K Gold Online - 100% Safe &amp; Trustworthy. Start...
          </p>

          <div className="mt-8 flex items-center gap-6">
            <button
              className="!rounded-lg bg-purple-500 px-8 py-3 text-sm font-semibold text-white transition hover:bg-purple-600"
              type="button"
            >
              Buy Now
            </button>

            <button
              className="flex items-center gap-1.5 text-sm font-semibold text-white"
              type="button"
            >
              <ChevronDownIcon className="size-4" />
              Learn more
            </button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <img
            alt="Lakshya Digital Gold jewellery"
            className="aspect-[400/280] w-full rounded-2xl object-cover"
            src={necklaceImage}
          />

          <div className="absolute -right-4 -top-6 flex h-40 w-32 flex-col justify-between rounded-2xl bg-gradient-to-br from-purple-500 to-[#2e1a4d] p-4 shadow-xl sm:-right-6 sm:h-48 sm:w-36">
            <CoinsIcon className="size-6 text-amber-400" />
            <p className="text-xs font-medium text-white/90">Digital Gold by Lakshya</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DigitalGoldBanner
