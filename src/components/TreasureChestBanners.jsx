import tallBanner from '../assets/img/Rectangle 8 (1).png'
import topBanner from '../assets/img/9kt-gold-banner.png'
import bottomBanner from '../assets/img/Rectangle 11 (1).png'

function TreasureChestBanners() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        <img
          alt="CaratLane Treasure Chest — 9=10 Monthly Saving Scheme, Pay 9 installments & get the 10th FREE!"
          className="aspect-[681/740] w-full rounded-[20px] object-cover sm:row-span-2"
          src={tallBanner}
        />
        <img
          alt="9KT Gold — Because everyday moments deserve gold, Starting at ₹5000"
          className="aspect-[686/368] w-full rounded-[20px] object-cover"
          src={topBanner}
        />
        <img
          alt="Guess who's shining now? Diamonds in silver — Shop Now, Haya Diamonds"
          className="aspect-[686/368] w-full rounded-[20px] object-cover"
          src={bottomBanner}
        />
      </div>
    </section>
  )
}

export default TreasureChestBanners
