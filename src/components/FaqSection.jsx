function PhoneIcon(props) {
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
      <path d="M4.5 4.5h4l2 5-2.5 1.5a11 11 0 0 0 5 5l1.5-2.5 5 2v4a2 2 0 0 1-2 2 16 16 0 0 1-15-15 2 2 0 0 1 2-2Z" />
    </svg>
  )
}

function PlusIcon(props) {
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
      <path d="M12 5v14M5 12h14" />
    </svg>
  )
}

const faqs = [
  'What is CL Live?',
  'How is the product shown?',
  'Is CL Live available outside India?',
  'Can I buy directly from CL Live?',
  'What are the payment modes?',
]

function FaqSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="text-3xl font-bold !text-[#363636] sm:text-4xl">Have Some Questions?</h2>

          <div className="mt-6 flex max-w-xs items-center gap-3 rounded-xl bg-purple-50 p-4">
            <PhoneIcon className="size-5 shrink-0 text-purple-500" />
            <div>
              <p className="text-xs font-semibold text-slate-600">Just give us a call at</p>
              <p className="text-lg font-bold text-purple-500">+91 44-42935000</p>
            </div>
          </div>
        </div>

        <div className="divide-y divide-slate-200">
          {faqs.map((question) => (
            <div className="flex items-center justify-between gap-4 py-5" key={question}>
              <PlusIcon className="size-4 shrink-0 text-gray-500 " />
              <span className="text-right text-sm text-slate-700">{question}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FaqSection
