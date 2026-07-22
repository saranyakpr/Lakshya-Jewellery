import goldRing from '../assets/img/minimalist 22kt gold ring for women, delicate thin band.png'
import engagementRing from '../assets/img/close up of hand wearing gold engagement ring, natural lighting.png'
import anantaImage from '../assets/img/collection-ananta.png'
import studEarrings from '../assets/img/image 27.png'
import swirlImage from '../assets/img/collection-swirl.png'
import brideNecklace from '../assets/img/happy bride wearing heavy gold necklace set, candid moment.png'

const categories = [
  { label: 'Rings', image: goldRing },
  { label: 'Solitaires', image: engagementRing },
  { label: 'Necklaces', image: anantaImage },
  { label: 'Earrings', image: studEarrings },
  { label: 'Bracelets', image: swirlImage },
  { label: 'Mangalsutra', image: brideNecklace },
]

function StoreExperienceSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="text-center">
        <h2 className="text-2xl font-bold !text-[#4f3267] sm:text-3xl">
          Bring the Store Experience Home
        </h2>
        <p className="mt-3 text-sm text-slate-600">
          Enjoy the Best of Shopping at Home, Together with Your Family
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <div
            className="relative flex h-32 items-center overflow-hidden !rounded-xl !bg-gray-300 pl-6"
            key={category.label}
          >
            <span className="relative z-10 text-lg font-semibold text-slate-900">
              {category.label}
            </span>
            <img
              alt={category.label}
              className="absolute right-0 top-0 h-full w-1/2 object-cover"
              src={category.image}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default StoreExperienceSection
