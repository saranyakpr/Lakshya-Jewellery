import { useEffect, useState } from 'react'
import CategoryNav from './CategoryNav'
import HeaderAction from './HeaderAction'
import {
  BagIcon,
  ChevronDownIcon,
  HeartIcon,
  PinIcon,
  TryAtHomeIcon,
  UserIcon,
} from './HeaderIcons'
import HeaderSearch from './HeaderSearch'
import PromoStrip from './PromoStrip'
import logo from '../../assets/img/logo.png'
import { categories } from '../../data/categories'

function LogoMark() {
  return (
    <div className="flex items-center text-[#b31c62]">
      <img
        alt="Lakshya Jewellery logo"
        className="h-10 w-auto shrink-0 sm:h-12 lg:h-18"
        src={logo}
      />
    </div>
  )
}

function HeaderButton({ children }) {
  return (
    <button
      className="flex h-10 items-center gap-2 rounded bg-[#60195e] px-3 text-sm font-semibold text-white transition hover:bg-[#4f3267] sm:h-10 sm:px-5 sm:text-base"
      type="button"
    >
      {children}
    </button>
  )
}

function ServicesButton({ label }) {
  return (
    <button
      className="flex h-10 items-center gap-2 rounded border border-[#d9d9d9] bg-[#60195e] px-3 text-sm font-semibold text-white transition hover:bg-[#4f3267] sm:h-10 sm:px-5 sm:text-base"
      type="button"
    >
      <span>{label}</span>
      <ChevronDownIcon className="size-4" />
    </button>
  )
}

function MobileTopRow({ primaryAction, serviceLabel, searchPlaceholder, actions }) {
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

      <div className="flex flex-wrap items-center gap-2 px-1">
        <HeaderButton>
          <TryAtHomeIcon className="size-4" />
          <span>{primaryAction}</span>
        </HeaderButton>
        <ServicesButton label={serviceLabel} />

        <div className="flex flex-wrap items-center gap-2">
          {actions.map((action) => (
            <HeaderAction
              badge={action.badge}
              icon={action.icon}
              key={action.label}
              label={action.label}
            />
          ))}
        </div>
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
      <div className="flex flex-1 min-w-0 items-center gap-4">
        <div className="flex-shrink-0">
          <LogoMark name={brand.name} subtitle={brand.subtitle} />
        </div>
        <div className="min-w-0 flex-1">
          <HeaderSearch placeholder={searchPlaceholder} />
        </div>
      </div>

      <div className="flex flex-shrink-0 items-center gap-4">
        <HeaderButton>
          <TryAtHomeIcon className="size-4" />
          <span>{primaryAction}</span>
        </HeaderButton>
        <div className="flex items-center gap-3">
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

function JewelleryHeader({
  brand,
  searchPlaceholder,
  primaryAction,
  actions,
  promoItems,
  categories,
  serviceLabel,
}) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-[#e8e0e8] bg-white">
      <div className="flex flex-col gap-4 px-2 py-2 sm:px-5 lg:px-6">
        <MobileTopRow
          actions={actions}
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
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isScrolled ? 'max-h-0 opacity-0' : 'max-h-24 opacity-100'
        }`}
      >
        <PromoStrip items={promoItems} />
      </div>
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
      { icon: '🎁', title: 'Get 10% off on your first order', text: '— Use code: WELCOME10' },
      { icon: '🚚', title: 'Free shipping', text: 'on orders above ₹999 across India' },
      { icon: '💎', title: 'BIS Hallmarked', text: 'jewellery — Certified purity guaranteed' },
      { icon: '🔄', title: 'Easy 30-day returns', text: '& hassle-free exchange policy' },
      { icon: '✨', title: 'Try At Home', text: 'available in 60+ cities across India' },
    ],
    categories,
    serviceLabel: 'Services',
  }
}

export default JewelleryHeader
