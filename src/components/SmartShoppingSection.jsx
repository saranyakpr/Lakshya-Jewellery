import ringsFlatlay from '../assets/img/ring.png'
import banglesLifestyle from '../assets/img/woman wearing multiple minimalist gold bangles, lifestyle shot.png'
import brideNecklace from '../assets/img/happy bride wearing heavy gold necklace set, candid moment.png'

const features = [
  {
    image: ringsFlatlay,
    title: '6000+ Designs at your Fingertips',
    text: 'Get your shortlisted design shipped in 48 hours!',
  },
  {
    image: banglesLifestyle,
    title: 'Make it a Fun Experience',
    text: 'Ask your friends, family to share their opinions, as you shop.',
  },
  {
    image: brideNecklace,
    title: 'Get Tips on Jewellery Shopping',
    text: 'Have face-to-face consultation for styling, pricing & more.',
  },
]

function SmartShoppingSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <h2 className="text-center text-2xl font-bold !text-[#4f3267] sm:text-3xl">
        Designed for Smart Shopping!
      </h2>

      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div
            className="overflow-hidden !rounded-2xl bg-white shadow-sm"
            key={feature.title}
          >
            <img
              alt={feature.title}
              className="aspect-[394/192] w-full object-cover"
              src={feature.image}
            />
            <div className="p-6">
              <h3 className="!text-base font-bold !text-center !text-[#121111d4]">{feature.title}</h3>
              <p className="mt-2 text-sm text-slate-500 !text-center">{feature.text}</p>
            </div>
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

export default SmartShoppingSection
