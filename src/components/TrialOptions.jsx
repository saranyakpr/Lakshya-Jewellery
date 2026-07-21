import houseIcon from '../assets/img/house icon stylized with jewellery elements, 3d render.png'
import videoIcon from '../assets/img/video camera icon gold and purple, 3d style.png'

function ArrowIcon() {
  return (
    <svg
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  )
}

const cards = [
  {
    heading: 'Unsure About What Design to Pick?',
    text: 'Book a FREE trial at your home and try before you buy!',
    action: 'Book Free Trial',
    icon: houseIcon,
  },
  {
    heading: 'View Designs on Live Video Call',
    text: 'Connect with our experts virtually from the comfort of your home.',
    action: 'Schedule Call',
    icon: videoIcon,
  },
]

function TrialOptions() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
        {cards.map((card) => (
          <div
            className="flex items-center justify-between gap-4 rounded-2xl bg-pink-100 p-6 sm:p-8"
            key={card.heading}
          >
            <div className="flex flex-col gap-4">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 sm:text-2xl">
                  {card.heading}
                </h3>
                <p className="mt-3 max-w-[290px] text-sm text-slate-600 sm:text-base">
                  {card.text}
                </p>
              </div>
              <button
                className="inline-flex w-fit items-center gap-2 text-sm font-semibold uppercase tracking-wide text-[#4f3267] transition hover:gap-3"
                type="button"
              >
                {card.action}
                <ArrowIcon />
              </button>
            </div>
            <img
              alt=""
              className="h-20 w-20 shrink-0 object-contain sm:h-32 sm:w-32"
              src={card.icon}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default TrialOptions
