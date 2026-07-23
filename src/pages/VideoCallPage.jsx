import JewelleryHeader from '../components/header/JewelleryHeader'
import Footer from '../components/Footer'
import { headerContent } from '../data/headerContent'
import videoCallImage from '../assets/img/user generated photo of woman wearing diamond earrings, selfie style.png'
import badgeImage from '../assets/img/close up of hand wearing gold engagement ring, natural lighting.png'
import VideoCallHowItWorksSection from '../components/VideoCallHowItWorksSection'
import RequestFormSection from '../components/RequestFormSection'
import SmartShoppingSection from '../components/SmartShoppingSection'
import BrowseProductsSection from '../components/BrowseProductsSection'
import ReviewsSection from '../components/ReviewsSection'
import FaqSection from '../components/FaqSection'

function VideoCallPage() {
  return (
    <main className="min-h-screen bg-[#f3f3f3]">
      <div className="mx-auto">
        <JewelleryHeader {...headerContent} />

        <section className="relative w-full overflow-hidden">
          <img
            alt="Buy jewellery live on a video call"
            className="h-[320px] w-full object-cover sm:h-[380px] lg:h-[420px]"
            src={videoCallImage}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent" />

          <img
            alt=""
            className="absolute right-4 top-4 hidden h-20 w-32 rounded-lg border-2 border-white object-cover shadow-lg sm:right-8 sm:top-8 sm:block sm:h-24 sm:w-40"
            src={badgeImage}
          />

          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="max-w-xl">
                <h1 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                  Buy Jewellery Live on Video Call
                </h1>
                <p className="mt-3 text-sm text-white/90 sm:text-base">
                  With CL Live, now you get to manage the most precious resource - your time!
                </p>
                <button
                  className="mt-6 !rounded-lg bg-purple-500 px-8 py-3 text-sm font-semibold text-white transition hover:bg-purple-600"
                  type="button"
                >
                  Schedule a Video Call
                </button>
              </div>
            </div>
          </div>
        </section>

        <VideoCallHowItWorksSection />

        <RequestFormSection />

        <SmartShoppingSection />

        <BrowseProductsSection />

        <ReviewsSection />

        <FaqSection />

        <Footer />
      </div>
    </main>
  )
}

export default VideoCallPage
