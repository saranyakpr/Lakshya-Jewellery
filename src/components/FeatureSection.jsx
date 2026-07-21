import leftImage from '../assets/img/Rectangle 9.png'
import rightImage from '../assets/img/image 27.png'

function FeatureSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2">
          <img
            src={leftImage}
            alt="Left section image"
            className="w-full rounded-l-[2rem] object-contain"
          />

          <img
            src={rightImage}
            alt="Right section image"
            className="w-full rounded-[2rem] object-contain"
          />
      </div>
    </section>
  )
}

export default FeatureSection
