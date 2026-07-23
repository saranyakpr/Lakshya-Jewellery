import { useState } from 'react'

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

const faqCategories = [
  {
    category: 'General',
    faqs: [
      {
        question: 'What is digital gold?',
        answer:
          'Digital gold lets you buy, sell and hold 24K gold online in small amounts, with every gram backed by real physical gold stored securely in insured vaults.',
      },
      {
        question: 'What is Lakshya Digital Gold?',
        answer:
          'Lakshya Digital Gold, or Lakshya eGold, is our own digital gold offering that lets you invest online and redeem it for jewellery across our stores.',
      },
      {
        question: 'Why should I buy Lakshya Digital Gold?',
        answer:
          'It offers a safe, low-entry way to invest in 24K gold with no storage worries, guaranteed buyback, and easy redemption against jewellery purchases.',
      },
      {
        question: 'How to buy Lakshya Digital Gold?',
        answer:
          'Simply create an account, complete your KYC, choose the amount of gold you want and pay online - your gold is credited to your account instantly.',
      },
    ],
  },
  {
    category: 'Buy',
    faqs: [
      {
        question: 'How do I buy Lakshya Digital Gold?',
        answer:
          'Go to the Digital Gold section, enter the amount or grams you wish to buy, complete the payment and your eGold balance is updated immediately.',
      },
      {
        question: 'What is the minimum and maximum gold amount I can purchase?',
        answer:
          'You can start investing with as little as ₹100 worth of gold, with no upper limit, subject to standard KYC verification for larger purchases.',
      },
    ],
  },
]

function DigitalGoldFaqSection() {
  const [openKey, setOpenKey] = useState(null)

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="flex flex-col gap-12">
        {faqCategories.map(({ category, faqs }) => (
          <div key={category}>
            <h3 className="text-base font-bold text-slate-900">{category}</h3>

            <div className="mt-4 divide-y divide-slate-200">
              {faqs.map(({ question, answer }, index) => {
                const key = `${category}-${index}`
                const isOpen = openKey === key

                return (
                  <div className="py-5" key={key}>
                    <button
                      className="flex w-full items-center justify-between gap-4 text-left"
                      onClick={() => setOpenKey(isOpen ? null : key)}
                      type="button"
                    >
                      <PlusIcon
                        className={`size-4 shrink-0 text-gray-500 transition-transform duration-200 ${
                          isOpen ? 'rotate-45' : ''
                        }`}
                      />
                      <span className="text-right text-sm text-slate-700">{question}</span>
                    </button>

                    <div
                      className={`grid overflow-hidden transition-all duration-300 ${
                        isOpen ? 'mt-3 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <p className="overflow-hidden text-right text-sm text-slate-500">
                        {answer}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default DigitalGoldFaqSection
