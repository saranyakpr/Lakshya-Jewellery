import JewelleryHeader from '../components/header/JewelleryHeader'
import Footer from '../components/Footer'
import BrowseDesignsSection from '../components/BrowseDesignsSection'
import { headerContent } from '../data/headerContent'
import tryAtHomeImage from '../assets/img/woman wearing multiple minimalist gold bangles, lifestyle shot.png'

function HeartIcon(props) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.4A4 4 0 0 1 19 10c0 5.5-7 10-7 10Z" />
    </svg>
  )
}

function CalendarIcon(props) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
      {...props}
    >
      <rect height="17" rx="2" width="18" x="3" y="4.5" />
      <path d="M3 9.5h18M8 3v3M16 3v3" />
    </svg>
  )
}

function HomeIcon(props) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M4 11.5 12 4l8 7.5" />
      <path d="M6 10v9h12v-9" />
    </svg>
  )
}

function BagIcon(props) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M6.5 8.5h11l-1 10h-9l-1-10Z" />
      <path d="M9 9V7a3 3 0 0 1 6 0v2" />
    </svg>
  )
}

const steps = [
  {
    icon: HeartIcon,
    title: 'Pick Your Favourite Designs',
    text: 'Top five that stole your Heart',
    bg: 'bg-purple-100',
    color: 'text-purple-600',
  },
  {
    icon: CalendarIcon,
    title: 'Book Your Free Appointment',
    text: 'At your chosen place, date & time',
    bg: 'bg-rose-100',
    color: 'text-rose-500',
  },
  {
    icon: HomeIcon,
    title: 'Try On at Your Leisure',
    text: 'Let us bring the store to you',
    bg: 'bg-sky-100',
    color: 'text-sky-500',
  },
  {
    icon: BagIcon,
    title: 'Buy Only If You Love',
    text: "There's no compulsion to buy",
    bg: 'bg-pink-100',
    color: 'text-pink-500',
  },
]

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

        <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <h2 className="text-center text-2xl font-bold !text-[#4f3267] sm:text-3xl">
            How it Works ?
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ icon: Icon, title, text, bg, color }) => (
              <div className="flex flex-col items-center text-center" key={title}>
                <span
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl ${bg} ${color}`}
                >
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-3 !text-sm !font-bold !text-[#000000ba]">{title}</h3>
                <p className="text-xs text-slate-500">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <BrowseDesignsSection />

        <Footer />
      </div>
    </main>
  )
}

export default TryAtHomePage
