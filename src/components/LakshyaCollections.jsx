import butterflyImage from '../assets/img/collection-butterfly.png'
import leherImage from '../assets/img/collection-leher.png'
import anantaImage from '../assets/img/collection-ananta.png'
import swirlImage from '../assets/img/collection-swirl.png'

const collections = [
  { eyebrow: 'The All New', name: 'Butterfly', image: butterflyImage },
  { eyebrow: 'Timeless Elegance', name: 'Leher', image: leherImage },
  { eyebrow: 'Infinite Love', name: 'Ananta', image: anantaImage },
  { eyebrow: 'Fluid Motion', name: 'Swirl', image: swirlImage },
]

function LakshyaCollections() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <h2 className="mb-8 text-center font-serif text-[26px] text-[#4f3267] sm:text-[30px]">
        Lakshya Collections
      </h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
        {collections.map((collection) => (
          <div
            className="relative aspect-[290/450] overflow-hidden rounded-xl"
            key={collection.name}
          >
            <img
              alt={`${collection.eyebrow} — ${collection.name}`}
              className="absolute inset-0 h-full w-full object-cover"
              src={collection.image}
            />
            <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 bg-gradient-to-t from-black/70 to-transparent p-6">
              <span className="text-xs uppercase tracking-[1.2px] text-white">
                {collection.eyebrow}
              </span>
              <span className="font-serif text-2xl text-white">{collection.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default LakshyaCollections
