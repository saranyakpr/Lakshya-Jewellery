import HomeCarousel from './components/Carousel/HomeCarousel'
import JewelleryHeader from './components/header/JewelleryHeader'
import FeatureSection from './components/FeatureSection'
import PromoBanners from './components/PromoBanners'
import TrustBadges from './components/TrustBadges'
import TreasureChestBanners from './components/TreasureChestBanners'
import LakshyaCollections from './components/LakshyaCollections'
import QuickCategoryLinks from './components/QuickCategoryLinks'
import EverydayGoldSection from './components/EverydayGoldSection'
import SpotlightCards from './components/SpotlightCards'
import FindStoreNearby from './components/FindStoreNearby'
import TrialOptions from './components/TrialOptions'
import GoldServiceFeatures from './components/GoldServiceFeatures'
import Expressions from './components/Expressions'
import JoinInsider from './components/JoinInsider'
import { headerContent } from './data/headerContent'

function App() {
  return (
    <main className="min-h-screen bg-[#f3f3f3]">
      <div className="mx-auto">
        <JewelleryHeader {...headerContent} />
        <HomeCarousel />
        <FeatureSection />
        <PromoBanners />
        <TrustBadges />
        <TreasureChestBanners />
        <LakshyaCollections />
        <QuickCategoryLinks />
        <EverydayGoldSection />
        <SpotlightCards />
        <FindStoreNearby />
        <TrialOptions />
        <GoldServiceFeatures />
        <Expressions />
        <JoinInsider />
      </div>
    </main>
  )
}

export default App
