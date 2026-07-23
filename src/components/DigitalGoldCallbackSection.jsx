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

function DigitalGoldCallbackSection() {
  const [mobileNumber, setMobileNumber] = useState('')

  return (
    <section className="mx-auto bg-white w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-sm text-slate-400 !mb-0">Got questions? We have all the answers!</p>
          <h2 className="mt-2 !text-3xl !font-bold leading-snug text-slate-900 sm:text-3xl">
            Have questions about Lakshya eGold? Share your number and we will call you back!
          </h2>
        </div>

        <div className="mx-auto w-full max-w-sm rounded-2xl bg-white p-8 shadow-sm">
          <PhoneIcon className="mx-auto size-7 text-purple-500" />
          <p className="mt-3 text-center text-sm font-bold text-slate-900">
            At Your Service. Always.
          </p>

          <form
            className="mt-6 flex flex-col gap-2"
            onSubmit={(event) => event.preventDefault()}
          >
            <label className="text-xs text-slate-500" htmlFor="digital-gold-mobile-number">
              Mobile Number
            </label>
            <input
              className="h-12 w-full !rounded-lg border border-slate-300 bg-white px-4 text-sm text-slate-700 outline-none placeholder:text-slate-400 focus:border-purple-500"
              id="digital-gold-mobile-number"
              onChange={(event) => setMobileNumber(event.target.value)}
              type="tel"
              value={mobileNumber}
            />

            <button
              className="mt-2 !rounded-lg bg-purple-500 py-2 text-sm !font-semibold text-white transition hover:bg-purple-600"
              type="submit"
            >
              Request Call Back
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default DigitalGoldCallbackSection
