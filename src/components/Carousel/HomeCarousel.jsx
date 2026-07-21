import { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import carouselImage from '../../assets/img/carousel.png'

const slides = [carouselImage, carouselImage, carouselImage]

function ChevronIcon({ className = '' }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="#1e1e1e"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 16 16"
    >
      <path d="M11 14 5 8l6-6" />
    </svg>
  )
}

function NavButton({ direction }) {
  return (
    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e8e0d8] shadow-sm transition hover:bg-[#ded3c6] sm:h-12 sm:w-12">
      <ChevronIcon className={`h-4 w-4 ${direction === 'next' ? 'rotate-180' : ''}`} />
    </span>
  )
}

const HomeCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="relative pb-8 sm:pb-10">
        <Carousel
          activeIndex={activeIndex}
          controls
          indicators={false}
          nextIcon={<NavButton direction="next" />}
          onSelect={setActiveIndex}
          prevIcon={<NavButton direction="prev" />}
        >
          {slides.map((src, index) => (
            <Carousel.Item interval={3000} key={index}>
              <img
                alt={`Promotion slide ${index + 1} of ${slides.length}`}
                className="aspect-[1378/493] w-full rounded-[20px] object-cover"
                src={src}
              />
            </Carousel.Item>
          ))}
        </Carousel>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#f06292]" />
          <span className="flex h-5 items-center rounded-full bg-[#4f3267] px-2.5 text-[11px] font-medium text-white">
            {activeIndex + 1}/{slides.length}
          </span>
          <span className="h-2.5 w-2.5 rounded-full bg-[#f06292]" />
        </div>
      </div>
    </section>
  )
}

export default HomeCarousel
