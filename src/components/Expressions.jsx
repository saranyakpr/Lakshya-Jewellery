import expressionSelfie from '../assets/img/user generated photo of woman wearing diamond earrings, selfie style.png'
import expressionRing from '../assets/img/close up of hand wearing gold engagement ring, natural lighting.png'
import expressionBride from '../assets/img/happy bride wearing heavy gold necklace set, candid moment.png'
import expressionGiftBox from '../assets/img/jewelry box opening with a gold pendant, gift moment.png'
import expressionBangles from '../assets/img/woman wearing multiple minimalist gold bangles, lifestyle shot.png'

const photos = [
  { src: expressionSelfie, alt: 'Woman wearing diamond earrings, selfie style' },
  { src: expressionRing, alt: 'Close up of hand wearing gold engagement ring, natural lighting' },
  { src: expressionBride, alt: 'Happy bride wearing heavy gold necklace set, candid moment' },
  { src: expressionGiftBox, alt: 'Jewelry box opening with a gold pendant, gift moment' },
  { src: expressionBangles, alt: 'Woman wearing multiple minimalist gold bangles, lifestyle shot' },
]

function Expressions() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <h2 className="mb-8 text-center font-serif text-3xl text-[#4f3267] sm:text-4xl">
        Expressions
      </h2>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {photos.map((photo) => (
          <img
            alt={photo.alt}
            className="aspect-[234/256] w-full rounded-xl object-cover"
            key={photo.alt}
            src={photo.src}
          />
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <button
          className="rounded border border-slate-200 bg-white px-8 py-3 text-sm font-semibold uppercase tracking-wide text-[#4f3267] shadow-sm transition hover:bg-slate-50"
          type="button"
        >
          Share Your Story
        </button>
      </div>
    </section>
  )
}

export default Expressions
