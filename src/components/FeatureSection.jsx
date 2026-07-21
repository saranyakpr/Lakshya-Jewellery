import { useRef } from 'react'
import leftImage from '../assets/img/Rectangle 9.png'
import cardImage from '../assets/img/image 27.png'

const cards = [
  { price: '₹5,200', original: '₹5,700', label: 'Alor Gold Stud Earrings ...' },
  { price: '₹5,200', original: '₹5,700', label: 'Alor Gold Stud Earrings ...' },
  { price: '₹5,200', original: '₹5,700', label: 'Alor Gold Stud Earrings ...' },
  { price: '₹5,200', original: '', label: 'Alor Gold' },
]

function ArrowIcon({ className = '' }) {
  return (
    <svg
      className={`h-4 w-4 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.75"
      viewBox="0 0 24 24"
    >
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  )
}

function FeatureSection() {
  const trackRef = useRef(null)

  const scrollByCard = (direction) => {
    const element = trackRef.current
    if (!element) return
    element.scrollBy({ left: direction * 190, behavior: 'smooth' })
  }

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 overflow-hidden rounded-[20px] shadow-lg lg:grid-cols-2">
        <img
          alt="Everything you love, under 30K — Shop Now"
          className="h-64 w-full object-cover sm:h-80 lg:h-full"
          src={leftImage}
        />

        <div className="flex flex-col justify-between gap-10 bg-gradient-to-b from-[#d2c5ff] to-[#f6f3ff] p-6 sm:p-8 lg:min-h-[458px] lg:p-10">
          <div
            className="flex min-w-0 gap-8 overflow-x-auto pb-1 [scrollbar-width:none] sm:gap-12 [&::-webkit-scrollbar]:hidden"
            ref={trackRef}
          >
            {cards.map((card, index) => (
              <div className="flex w-[142px] shrink-0 flex-col" key={`${card.label}-${index}`}>
                <div
                  className={`h-[142px] w-[142px] overflow-hidden rounded-[17px] bg-white ${
                    index === 0 ? 'ring-1 ring-[#a284ff]' : ''
                  }`}
                >
                  <img alt={card.label} className="h-full w-full object-cover" src={cardImage} />
                </div>
                <div className="mt-2.5 flex items-baseline gap-1.5">
                  <span className="text-sm font-medium text-[#4f3267]">{card.price}</span>
                  {card.original ? (
                    <span className="text-sm text-[#b2b1b4] line-through">{card.original}</span>
                  ) : null}
                </div>
                <p className="mt-1 text-[11px] leading-snug text-[#b2b1b4]">{card.label}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex gap-3">
              <button
                aria-label="Previous products"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#4f3267] shadow-sm transition hover:bg-slate-50"
                onClick={() => scrollByCard(-1)}
                type="button"
              >
                <ArrowIcon className="rotate-180" />
              </button>
              <button
                aria-label="Next products"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#4f3267] text-white shadow-sm transition hover:bg-[#3c2650]"
                onClick={() => scrollByCard(1)}
                type="button"
              >
                <ArrowIcon />
              </button>
            </div>
            <button
              className="rounded-xl bg-[#4f3267] px-8 py-3 text-sm font-medium text-white transition hover:bg-[#3c2650] sm:text-base"
              type="button"
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeatureSection
