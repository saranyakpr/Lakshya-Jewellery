import JewelleryHeader from '../components/header/JewelleryHeader'
import Footer from '../components/Footer'
import { headerContent } from '../data/headerContent'
import DigitalGoldBanner from '../components/DigitalGoldBanner'

function DigitalGoldPage() {
  return (
    <main className="min-h-screen bg-[#f3f3f3]">
      <div className="mx-auto">
        <JewelleryHeader {...headerContent} />

        <DigitalGoldBanner />

        <Footer />
      </div>
    </main>
  )
}

export default DigitalGoldPage
