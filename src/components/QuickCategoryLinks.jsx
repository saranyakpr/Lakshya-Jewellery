import earStudsIcon from '../assets/img/quicklink-ear-studs.svg'
import ringsIcon from '../assets/img/quicklink-rings.svg'
import necklacesIcon from '../assets/img/quicklink-necklaces.svg'
import banglesIcon from '../assets/img/quicklink-bangles.svg'
import mangalsutraIcon from '../assets/img/quicklink-mangalsutra.svg'
import pendantsIcon from '../assets/img/quicklink-pendants.svg'
import newArrivalsIcon from '../assets/img/quicklink-new-arrivals.svg'

const quickLinks = [
  { label: 'Ear Studs', icon: earStudsIcon },
  { label: 'Rings', icon: ringsIcon },
  { label: 'Necklaces', icon: necklacesIcon },
  { label: 'Bangles', icon: banglesIcon },
  { label: 'Mangalsutra', icon: mangalsutraIcon },
  { label: 'Pendants', icon: pendantsIcon },
  { label: 'New Arrivals', icon: newArrivalsIcon },
]

function QuickCategoryLinks() {
  return (
    <section className="w-full bg-[#f6effb]">
      <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-x-8 gap-y-6 px-4 py-8 sm:px-6 sm:py-10 lg:flex-nowrap lg:justify-between lg:px-8">
        {quickLinks.map((item) => (
          <div className="flex flex-col items-center gap-3" key={item.label}>
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-sm sm:h-24 sm:w-24">
              <img alt="" className="h-7 w-7 object-contain sm:h-[30px] sm:w-[30px]" src={item.icon} />
            </span>
            <span className="whitespace-nowrap text-sm font-medium text-[#374151]">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default QuickCategoryLinks
