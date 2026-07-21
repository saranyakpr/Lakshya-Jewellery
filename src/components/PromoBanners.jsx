import tallBanner from '../assets/img/Rectangle 8.png'
import topBanner from '../assets/img/Rectangle 10.png'
import bottomBanner from '../assets/img/Rectangle 11.png'

function PromoBanners() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        <img
          alt="Shaya by CaratLane — 925 Silver Jewellery, One of a Kind Silver Jewellery"
          className="aspect-[681/740] w-full rounded-[20px] object-cover sm:row-span-2"
          src={tallBanner}
        />
        <img
          alt="Not every wish for mom needs to be on Mother's Day — Tap to manifest, 11:11 Make a wish"
          className="aspect-[686/368] w-full rounded-[20px] object-cover"
          src={topBanner}
        />
        <img
          alt="Golden Hour Styles — The summer your style got prettier, Shop Now"
          className="aspect-[686/368] w-full rounded-[20px] object-cover"
          src={bottomBanner}
        />
      </div>
    </section>
  )
}

export default PromoBanners
