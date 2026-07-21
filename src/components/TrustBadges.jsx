import trustBadges from '../assets/img/image 39.png'

function TrustBadges() {
  return (
    <section className="w-full bg-[#f6f3f9]">
      <div className="mx-auto flex max-w-7xl overflow-x-auto px-4 py-6 sm:justify-center sm:px-6 lg:px-8 [&::-webkit-scrollbar]:hidden">
        <img
          alt="100% Certified, 15 Day Exchange, Lifetime Exchange, One Year Warranty"
          className="h-auto w-full min-w-[520px] max-w-[1121px] object-contain sm:min-w-0"
          src={trustBadges}
        />
      </div>
    </section>
  )
}

export default TrustBadges
