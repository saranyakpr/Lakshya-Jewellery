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
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-4 !py-16 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:py-10 lg:px-8">
        <div>
          <BarsIcon className="size-5 text-slate-300" />

          <h1 className="mt-3 text-2xl font-bold text-white sm:text-3xl">Lakshya Digital Gold</h1>

          <p className="mt-2 max-w-md text-sm text-slate-400 sm:text-base">
            Invest in Pure 24K Gold Online - 100% Safe &amp; Trustworthy. Start...
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-6">
            <button
              className="!rounded-lg bg-purple-500 px-8 py-2 text-sm !font-semibold text-white transition hover:bg-purple-600"
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

        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <img
            alt="Lakshya Digital Gold jewellery"
            className="aspect-[400/200] w-full rounded-2xl object-cover"
            src={necklaceImage}
          />

          <div className="absolute -right-4 -top-4 flex h-28 w-24 flex-col justify-between !rounded-lg bg-gradient-to-br from-purple-500 to-[#2e1a4d] p-3 shadow-xl sm:-right-5 sm:h-32 sm:w-28 sm:p-4">
            <CoinsIcon className="size-5 text-amber-400" />
            <p className="!text-[11px] !mb-0 font-medium leading-tight text-white/90">Digital Gold by Lakshya</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DigitalGoldBanner
