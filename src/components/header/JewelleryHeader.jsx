import CategoryNav from './CategoryNav'
import HeaderAction from './HeaderAction'
import {
  BagIcon,
  ChevronDownIcon,
  DiamondIcon,
  GiftIcon,
  HeartIcon,
  PinIcon,
  ReturnIcon,
  UserIcon,
} from './HeaderIcons'
import HeaderSearch from './HeaderSearch'
import PromoStrip from './PromoStrip'
import logo from '../../assets/img/logo.png'
import ringIcon from '../../assets/img/ring.png'
import earring from '../../assets/img/earring.jpg'
import diamond from '../../assets/img/diamond.png'

function LogoMark() {
  return (
    <div className="flex items-center text-[#b31c62]">
      <img
        alt="Lakshya Jewellery logo"
        className="h-10 w-auto shrink-0 sm:h-12 lg:h-14"
        src={logo}
      />
    </div>
  )
}

function HeaderButton({ children }) {
  return (
    <button
      className="flex h-10 items-center gap-2 rounded-md bg-[#7a1f67] px-3 text-xs font-semibold text-white transition hover:bg-[#671756] sm:h-11 sm:px-5 sm:text-sm"
      type="button"
    >
      {children}
    </button>
  )
}

function ServicesButton({ label }) {
  return (
    <button
      className="flex h-10 items-center gap-2 rounded-md bg-[#7a1f67] px-3 text-xs font-semibold text-white transition hover:bg-[#671756] sm:h-11 sm:px-5 sm:text-sm"
      type="button"
    >
      <span>{label}</span>
      <ChevronDownIcon className="size-4" />
    </button>
  )
}

function MobileTopRow({ primaryAction, serviceLabel, searchPlaceholder }) {
  return (
    <div className="flex flex-col gap-3 lg:hidden">
      <div className="flex items-center gap-3">
        <div className="flex-shrink-0">
          <LogoMark />
        </div>
        <div className="flex-1 min-w-0">
          <HeaderSearch placeholder={searchPlaceholder} />
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <HeaderButton>
          <GiftIcon className="size-4" />
          <span>{primaryAction}</span>
        </HeaderButton>
        <ServicesButton label={serviceLabel} />
      </div>
    </div>
  )
}

function DesktopTopRow({
  brand,
  searchPlaceholder,
  primaryAction,
  actions,
  serviceLabel,
}) {
  return (
    <div className="hidden items-center justify-between gap-4 lg:flex">
      <div className="flex items-center gap-4">
        <div className="flex-shrink-0">
          <LogoMark name={brand.name} subtitle={brand.subtitle} />
        </div>
        <div className="min-w-0 w-full max-w-[420px]">
          <HeaderSearch placeholder={searchPlaceholder} />
        </div>
      </div>

      <div className="flex flex-shrink-0 items-center gap-4">
        <HeaderButton>
          <GiftIcon className="size-4" />
          <span>{primaryAction}</span>
        </HeaderButton>
        <div className="flex items-center gap-4">
          {actions.map((action) => (
            <HeaderAction
              badge={action.badge}
              icon={action.icon}
              key={action.label}
              label={action.label}
            />
          ))}
        </div>
        <ServicesButton label={serviceLabel} />
      </div>
    </div>
  )
}

function MobileActionRow({ actions }) {
  return (
    <div className="-mx-1 flex gap-3 overflow-x-auto px-1 lg:hidden [&::-webkit-scrollbar]:hidden">
      {actions.map((action) => (
        <HeaderAction
          badge={action.badge}
          icon={action.icon}
          key={action.label}
          label={action.label}
        />
      ))}
    </div>
  )
}

function JewelleryHeader({
  brand,
  searchPlaceholder,
  primaryAction,
  actions,
  promoItems,
  categories,
  serviceLabel,
}) {
  return (
    <header className="overflow-hidden rounded-sm border border-slate-200 bg-white shadow-sm">
      <div className="flex flex-col gap-4 px-4 py-4 sm:px-5 lg:px-6">
        <MobileTopRow
          primaryAction={primaryAction}
          serviceLabel={serviceLabel}
          searchPlaceholder={searchPlaceholder}
        />

        <DesktopTopRow
          actions={actions}
          brand={brand}
          primaryAction={primaryAction}
          searchPlaceholder={searchPlaceholder}
          serviceLabel={serviceLabel}
        />

        <MobileActionRow actions={actions} />
      </div>

      <PromoStrip items={promoItems} />
      <CategoryNav items={categories} />
    </header>
  )
}

export function buildHeaderProps() {
  return {
    brand: {
      name: 'Lakshya',
      subtitle: 'Jewellery',
    },
    searchPlaceholder: 'Search for jewellery, products, collections...',
    primaryAction: 'Try At Home',
    actions: [
      { label: 'Find Store', icon: <PinIcon className="size-5" /> },
      { label: 'Sign In', icon: <UserIcon className="size-5" /> },
      { label: 'Wishlist', icon: <HeartIcon className="size-5" /> },
      { label: 'Bag', icon: <BagIcon className="size-5" />, badge: 0 },
    ],
    promoItems: [
      { title: 'Your first order', text: 'Use code: WELCOME10' },
      { title: 'Free shipping', text: 'on orders above Rs. 999 across India', icon: '🚚' },
      {
        title: 'BIS Hallmarked jewellery',
        text: 'Certified purity guaranteed',
        icon: <img src={diamond} alt="BIS Hallmarked" className="h-3 w-3" />,
      },
      {
        text: 'Easy 30-day returns & hassle-free exchange',
        icon: <ReturnIcon className="size-4" />,
      },
    ],
    categories: [
      { label: 'Rings', image: ringIcon },
      { label: 'Earrings', image: earring },
      { label: 'Silver by Shayq', image: logo },
      { label: 'Gifting', icon: '🎁' },
      { label: 'Mangalsutras', image: logo },
      { label: 'Necklaces', image: logo },
      { label: "Men's Jewellery", image: logo },
      { label: 'Kids Jewellery', icon: '👧' },
      { label: 'Solitaires', image: logo },
      { label: 'Bracelets & Bangles', image: logo },
      { label: 'More Jewellery', image: logo },
    ],
    serviceLabel: 'Services',
  }
}

export default JewelleryHeader
