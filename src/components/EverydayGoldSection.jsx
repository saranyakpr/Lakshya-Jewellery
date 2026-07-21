import studEarrings from '../assets/img/image 27.png'
import goldRing from '../assets/img/minimalist 22kt gold ring for women, delicate thin band.png'

const products = [
  { name: 'Classic Gold Studs', price: '₹ 14,299', image: studEarrings },
  { name: 'Essence Gold Ring', price: '₹ 8,950', image: goldRing },
]

function EverydayGoldSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 rounded-2xl bg-[#faf5ec] p-6 sm:p-8 lg:grid-cols-2 lg:items-center lg:gap-10 lg:p-12">
        <div className="flex flex-col items-start gap-6">
          <div>
            <h2 className="font-serif text-3xl text-[#4f3267] sm:text-4xl">Everyday 22KT Gold</h2>
            <p className="mt-3 max-w-sm text-base text-slate-600">
              Timeless gold designs crafted for your daily elegance.
            </p>
          </div>
          <button
            className="rounded border border-[#4f3267] px-8 py-3 text-sm font-medium uppercase tracking-wide text-[#4f3267] transition hover:bg-[#4f3267] hover:text-white"
            type="button"
          >
            Explore All
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          {products.map((product) => (
            <div
              className="flex flex-col items-center rounded-xl border border-black/5 bg-white px-4 py-6 text-center shadow-sm sm:px-6"
              key={product.name}
            >
              <div className="aspect-square w-full max-w-[192px] overflow-hidden rounded-lg bg-slate-50">
                <img
                  alt={product.name}
                  className="h-full w-full object-cover"
                  src={product.image}
                />
              </div>
              <p className="mt-4 text-sm font-medium text-slate-800">{product.name}</p>
              <p className="mt-1 text-base font-semibold text-[#4f3267]">{product.price}</p>
              <button
                className="mt-4 w-full rounded bg-[#4f3267] py-2.5 text-sm font-medium text-white transition hover:bg-[#3c2650]"
                type="button"
              >
                Shop Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EverydayGoldSection
