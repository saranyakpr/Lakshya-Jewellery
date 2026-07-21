import silverRingsImage from '../assets/img/ring.png'
import gemstoneEarringsCard from '../assets/img/Overlay+Shadow.png'
import mangalsutraImage from '../assets/img/happy bride wearing heavy gold necklace set, candid moment.png'

function SpotlightCards() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        <div className="relative aspect-[394/256] overflow-hidden rounded-xl shadow-sm">
          <img
            alt="Silver Diamond Rings"
            className="absolute inset-0 h-full w-full object-cover"
            src={silverRingsImage}
          />
          <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 bg-gradient-to-t from-black/70 to-transparent p-6">
            <span className="text-lg font-semibold text-white">Silver Diamond Rings</span>
            <span className="text-sm text-white/90">Starting at ₹ 2,499</span>
          </div>
        </div>

        <img
          alt="Gemstone Earrings — Up to 20% Off"
          className="aspect-[394/256] w-full rounded-xl object-cover shadow-sm"
          src={gemstoneEarringsCard}
        />

        <div className="relative aspect-[394/256] overflow-hidden rounded-xl shadow-sm">
          <img
            alt="New Mangalsutras"
            className="absolute inset-0 h-full w-full object-cover"
            src={mangalsutraImage}
          />
          <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 bg-gradient-to-t from-black/70 to-transparent p-6">
            <span className="text-lg font-semibold text-white">New Mangalsutras</span>
            <span className="text-sm text-white/90">Shop Latest Designs</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SpotlightCards
