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

function VideoIcon(props) {
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
      <rect height="12" rx="2" width="14" x="3" y="6" />
      <path d="m17 10 4-2.5v9L17 14" />
    </svg>
  )
}

const steps = [
  {
    icon: CalendarIcon,
    title: 'Step 1: Schedule a Live Video Call',
    text: 'Call now or book an appointment by mentioning the date and time for the live video call',
  },
  {
    icon: BagIcon,
    title: 'Step 2: Shop for Jewellery',
    text: 'Mention the product, occasion or shortlisted designs, to help us recommend the right jewellery for you',
  },
  {
    icon: VideoIcon,
    title: 'Step 3: View Jewellery in Real-Time',
    text: 'Shortlist your favourites and even ask for real time pictures and videos to share with others',
  },
]

function VideoCallHowItWorksSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <h2 className="text-center text-2xl font-bold !text-[#4f3267] sm:text-3xl">
        How it works
      </h2>

      <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-3">
        {steps.map(({ icon: Icon, title, text, bg, color }) => (
          <div className="flex flex-col items-center text-center" key={title}>
            <span
              className={'flex h-16 w-16 items-center justify-center rounded-full text-[#A873FF] bg-[#a873ff36]'}
            >
              <Icon className="size-7" />
            </span>
            <h3 className="mt-3 !text-[1rem] font-bold !text-[#000000c2]">{title}</h3>
            <p className="mt-2 max-w-xs text-xs text-slate-500">{text}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <button
          className="!rounded-lg bg-purple-500 px-10 py-2 !text-sm font-semibold text-white transition hover:bg-purple-600"
          type="button"
        >
          Schedule a Video Call
        </button>
      </div>
    </section>
  )
}

export default VideoCallHowItWorksSection
