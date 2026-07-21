import { useEffect, useRef } from 'react'
import leftImage from '../assets/img/Rectangle 9.png'
import rightImage from '../assets/img/image 27.png'

const cards = [
  { label: 'Alor Gold Stud Earrings', price: '₹5,200', original: '₹5,700' },
  { label: 'Alor Gold Stud Earrings', price: '₹5,200', original: '₹5,700' },
  { label: 'Alor Gold Stud Earrings', price: '₹5,200', original: '₹5,700' },
  { label: 'Alor Gold', price: '₹5,200', original: '' },
]

function FeatureSection() {
  const carouselRef = useRef(null)
  const animationRef = useRef(null)
  const pausedRef = useRef(false)

  useEffect(() => {
    const element = carouselRef.current
    if (!element) return

    const speed = 0.18
    const maxScroll = element.scrollWidth / 2

    const step = () => {
      if (!element) return
      if (!pausedRef.current) {
        element.scrollLeft += speed
        if (element.scrollLeft >= maxScroll) {
          element.scrollLeft -= maxScroll
        }
      }
      animationRef.current = requestAnimationFrame(step)
    }

    animationRef.current = requestAnimationFrame(step)
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [])

  const duplicatedCards = [...cards, ...cards]

  const scrollByCard = (direction) => {
    const element = carouselRef.current
    if (!element) return

    const cardWidth = 156
    const maxScroll = element.scrollWidth / 2
    const nextScroll = element.scrollLeft + direction * cardWidth

    if (nextScroll >= maxScroll) {
      element.scrollLeft = nextScroll - maxScroll
    } else if (nextScroll < 0) {
      element.scrollLeft = maxScroll + nextScroll
    } else {
      element.scrollLeft = nextScroll
    }
  }

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2">
        <img
          src={leftImage}
          alt="Left section image"
          className="w-full rounded-l-[2rem] object-cover"
        />

        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-b from-[#f5ebff] via-[#e6d4ff] to-[#f6eeff] shadow-lg">
          <div className="absolute inset-x-0 top-0 h-1/2 bg-[radial-gradient(circle_at_top_right,_rgba(120,60,180,0.18),_transparent_32%),radial-gradient(circle_at_top_left,_rgba(153,102,255,0.18),_transparent_32%)]" />
          <div className="relative flex min-h-[520px] flex-col p-5 sm:p-6">
            <div className="mb-6 flex-1 overflow-hidden rounded-[2rem] bg-white/40 p-4 shadow-inner backdrop-blur-sm sm:p-6">
              <div
                ref={carouselRef}
                onMouseEnter={() => { pausedRef.current = true }}
                onMouseLeave={() => { pausedRef.current = false }}
                className="flex gap-4 overflow-hidden pb-4 sm:pb-6"
              >
                {duplicatedCards.map((card, index) => (
                  <div
                    key={`${card.label}-${index}`}
                    className={`min-w-[140px] rounded-3xl border p-4 text-center shadow-sm transition duration-200 ${
                      index % cards.length === 0
                        ? 'border-[#7a1f67] bg-white'
                        : 'border-white/80 bg-white/90'
                    }`}
                  >
                    <div className="mx-auto mb-3 flex h-20 w-20 items-center justify-center overflow-hidden rounded-3xl bg-slate-100">
                      <img src={rightImage} alt={card.label} className="h-full w-full object-contain" />
                    </div>
                    <p className="text-sm font-semibold text-slate-950">{card.price}</p>
                    {card.original ? (
                      <p className="mt-1 text-[11px] text-slate-500 line-through">{card.original}</p>
                    ) : null}
                    <p className="mt-2 text-[11px] leading-5 text-slate-600">{card.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-auto flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex gap-3">
                <button
                  onClick={() => scrollByCard(-1)}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/80 bg-white text-slate-700 shadow-sm transition hover:bg-slate-100"
                >
                  ←
                </button>
                <button
                  onClick={() => scrollByCard(1)}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#7a1f67] text-white shadow-sm transition hover:bg-[#651450]"
                >
                  →
                </button>
              </div>
              <button className="inline-flex w-full items-center justify-center rounded-full bg-[#7a1f67] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#651450] sm:w-auto sm:text-base">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeatureSection
