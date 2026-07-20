import HomeCarousel from './components/Carousel/HomeCarousel'
import JewelleryHeader from './components/header/JewelleryHeader'
import { headerContent } from './data/headerContent'

function App() {
  return (
    <main className="min-h-screen bg-[#f3f3f3]">
      <div className="mx-auto">
        <JewelleryHeader {...headerContent} />
        <HomeCarousel/>
      </div>
    </main>
  )
}

export default App
