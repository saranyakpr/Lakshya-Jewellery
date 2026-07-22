import JewelleryHeader from '../components/header/JewelleryHeader'
import Footer from '../components/Footer'
import { headerContent } from '../data/headerContent'
import tryAtHomeImage from '../assets/img/woman wearing multiple minimalist gold bangles, lifestyle shot.png'

function TryAtHomePage() {
  return (
    <main className="min-h-screen bg-[#f3f3f3]">
      <div className="mx-auto">
        <JewelleryHeader {...headerContent} />

        <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h1 className="text-4xl !text-[#4F3267] font-bold leading-tight text-slate-900 sm:text-5xl">
                Try Jewellery at Home,
                <br />
                for Free.
              </h1>
              <p className="mt-5 max-w-md text-lg text-slate-600">
                Find up to 5 designs to try in the comfort of your home at your convenience.
              </p>
              <button
                className="mt-8 !rounded-lg bg-[#4f3267] px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-[#3c2650]"
                type="button"
              >
                Check Availability
              </button>
            </div>

            <div className="relative">
              <span className="absolute -left-4 -top-4 -z-10 h-24 w-24 rounded-full bg-[#f6d9e8]" />
              <img
                alt="Try jewellery at home"
                className="aspect-[552/414] w-full rounded-2xl object-cover shadow-lg"
                src={tryAtHomeImage}
              />
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  )
}

export default TryAtHomePage
