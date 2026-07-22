import { useRef } from 'react'
import twilightRing from '../assets/img/close up of hand wearing gold engagement ring, natural lighting.png'
import butterflyPendant from '../assets/img/collection-butterfly.png'
import classicEarrings from '../assets/img/collection-swirl.png'
import infiniteRing from '../assets/img/minimalist 22kt gold ring for women, delicate thin band.png'
import heartPendant from '../assets/img/collection-ananta.png'

const designs = [
  {
    name: 'Twilight Twist Diamond Ring',
    price: '₹14,762',
    original: '₹15,675',
    image: twilightRing,
  },
  {
    name: 'Twin Blue Butterfly Diamond Pendant',
    price: '₹47,414',
    original: '₹52,100',
    image: butterflyPendant,
  },
  {
    name: 'Classic Leaves Diamond Stud Earrings',
    price: '₹46,044',
    original: '₹48,200',
    image: classicEarrings,
  },
  {
    name: 'Ray Of Infinite Diamond Ring',
    price: '₹14,201',
    original: '₹15,119',
    image: infiniteRing,
  },
  {
    name: 'Twin Heart Diamond Pendant',
    price: '₹22,565',
    original: '₹24,089',
    image: heartPendant,
  },
]

function ChevronIcon({ className = '' }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M15 6l-6 6 6 6" />
    </svg>
  )
}

function BrowseDesignsSection() {
  const trackRef = useRef(null)

  const scrollByCard = (direction) => {
    trackRef.current?.scrollBy({ left: direction * 253, behavior: 'smooth' })
  }

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <h2 className="text-center text-2xl font-bold !text-[#4f3267] sm:text-3xl">
        Browse Designs
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-center text-sm text-slate-600">
        Book a FREE jewellery trial at home, and let your loved ones choose their gifts!
      </p>

      <div className="relative mt-10">
        <button
          aria-label="Previous designs"
          className="absolute -left-4 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center !rounded-full bg-white text-[#4f3267] shadow-md transition hover:bg-slate-50 sm:flex"
          onClick={() => scrollByCard(-1)}
          type="button"
        >
          <ChevronIcon className="size-5" />
        </button>

        <div
          className="flex gap-6 overflow-x-auto scroll-smooth pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          ref={trackRef}
        >
          {designs.map((item) => (
            <div className="w-[237px] shrink-0 !rounded-xl bg-white p-4 shadow-sm" key={item.name}>
              <div className="aspect-square overflow-hidden rounded-lg bg-slate-50">
                <img alt={item.name} className="h-full w-full object-cover" src={item.image} />
              </div>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-sm font-bold text-slate-900">{item.price}</span>
                <span className="text-xs text-slate-400 line-through">{item.original}</span>
              </div>
              <p className="mt-1 text-xs text-slate-500">{item.name}</p>
              <button
                className="mt-3 w-full !rounded-lg border border-[#4f3267] py-2 text-xs font-semibold text-[#4f3267] transition hover:bg-[#4f3267] hover:text-white"
                type="button"
              >
                Try at Home
              </button>
            </div>
          ))}
        </div>

        <button
          aria-label="Next designs"
          className="absolute -right-4 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center !rounded-full bg-white text-[#4f3267] shadow-md transition hover:bg-slate-50 sm:flex"
          onClick={() => scrollByCard(1)}
          type="button"
        >
          <ChevronIcon className="size-5 rotate-180" />
        </button>
      </div>
    </section>
  )
}

export default BrowseDesignsSection
