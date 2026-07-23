import studEarrings from '../assets/img/image 27.png'
import goldRing from '../assets/img/minimalist 22kt gold ring for women, delicate thin band.png'
import swirlImage from '../assets/img/collection-swirl.png'
import ringsFlatlay from '../assets/img/ring.png'
import butterflyImage from '../assets/img/collection-butterfly.png'
import anantaImage from '../assets/img/collection-ananta.png'

const categories = [
  { label: 'Earrings', image: studEarrings },
  { label: 'Rings', image: goldRing },
  { label: 'Bracelets', image: swirlImage },
  { label: "Men's Collection", image: ringsFlatlay },
  { label: 'Kids Jewellery', image: butterflyImage },
  { label: 'Other Jewellery', image: anantaImage },
]

function BrowseProductsSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="text-center">
        <h2 className="text-2xl !font-bold !text-[#4f3267] sm:text-3xl">
          Browse Products. Shortlist your Design.
        </h2>
        <p className="mt-1 text-2xl font-bold !text-[#4f3267] sm:text-3xl">Book a call Today!</p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <div
            className="relative aspect-[405/160] overflow-hidden !rounded-xl"
            key={category.label}
          >
            <img
              alt={category.label}
              className="h-full w-full object-cover"
              src={category.image}
            />
            <div className="absolute inset-0 bg-black/40" />
            <span className="absolute inset-0 flex items-center justify-center text-lg font-semibold text-white">
              {category.label}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <button
          className="!rounded-lg bg-purple-500 px-10 py-2 !text-md font-semibold text-white transition hover:bg-purple-600"
          type="button"
        >
          Schedule a Video Call
        </button>
      </div>
    </section>
  )
}

export default BrowseProductsSection
