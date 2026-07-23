import { useState } from 'react'

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
  {
    question: 'What is CL Live?',
    answer:
      'CL Live is our live video call shopping experience that lets you browse and buy jewellery from the comfort of your home with a dedicated consultant.',
  },
  {
    question: 'How is the product shown?',
    answer:
      'Our consultant walks you through the pieces on a live video call, showing real-time close-ups, angles and lighting so you can see every detail before you decide.',
  },
  {
    question: 'Is CL Live available outside India?',
    answer:
      'Yes, CL Live is available for customers outside India as well. You can schedule a call at a time that works best for your time zone.',
  },
  {
    question: 'Can I buy directly from CL Live?',
    answer:
      'Yes, you can shortlist and purchase your favourite pieces directly during the video call, with secure payment and doorstep delivery.',
  },
  {
    question: 'What are the payment modes?',
    answer:
      'We accept all major credit and debit cards, UPI, net banking and EMI options for a smooth and secure checkout.',
  },
]

function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null)

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
          {faqs.map(({ question, answer }, index) => {
            const isOpen = openIndex === index

            return (
              <div className="py-3" key={question}>
                <button
                  className="flex w-full items-center justify-between gap-4 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  type="button"
                >
                  <PlusIcon
                    className={`size-4 shrink-0 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}
                  />
                  <span className="text-right text-sm text-slate-700">{question}</span>
                </button>

                <div
                  className={`grid overflow-hidden transition-all duration-300 ${
                    isOpen ? 'mt-3 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <p className="overflow-hidden text-right text-sm text-slate-500">{answer}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FaqSection
