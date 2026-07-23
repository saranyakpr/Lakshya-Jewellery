import JewelleryHeader from '../components/header/JewelleryHeader'
import Footer from '../components/Footer'
import { headerContent } from '../data/headerContent'
import DigitalGoldBanner from '../components/DigitalGoldBanner'
import DigitalGoldFeaturesSection from '../components/DigitalGoldFeaturesSection'
import DigitalGoldRedeemSection from '../components/DigitalGoldRedeemSection'
import DigitalGoldCallbackSection from '../components/DigitalGoldCallbackSection'
import DigitalGoldFaqSection from '../components/DigitalGoldFaqSection'

function DigitalGoldPage() {
  return (
    <main className="min-h-screen bg-[#f3f3f3]">
      <div className="mx-auto">
        <JewelleryHeader {...headerContent} />

        <DigitalGoldBanner />

        <DigitalGoldFeaturesSection />

        <DigitalGoldRedeemSection />

        <DigitalGoldCallbackSection />

        <DigitalGoldFaqSection />

        <Footer />
      </div>
    </main>
  )
}

export default DigitalGoldPage
