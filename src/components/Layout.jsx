import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import JewelleryHeader from './header/JewelleryHeader'
import Footer from './Footer'
import { headerContent } from '../data/headerContent'

function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <main className="min-h-screen bg-[#f3f3f3]">
      <div className="mx-auto">
        <JewelleryHeader {...headerContent} />
        <Outlet />
        <Footer />
      </div>
    </main>
  )
}

export default Layout
