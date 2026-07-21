import { useState } from 'react'

const genderOptions = ['Female', 'Male', 'Other']

function JoinInsider() {
  const [gender, setGender] = useState('')

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
        <div className="flex w-full max-w-xl flex-col gap-6">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              Join Lakshya Insider
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Receive special offers, early access to new launches and more.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-6">
              {genderOptions.map((option) => (
                <label className="flex items-center gap-2 text-sm text-slate-700" key={option}>
                  <input
                    checked={gender === option}
                    className="h-5 w-5 accent-[#4f3267]"
                    name="gender"
                    onChange={() => setGender(option)}
                    type="radio"
                    value={option}
                  />
                  {option}
                </label>
              ))}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                className="h-[50px] w-full rounded border border-slate-300 bg-white px-5 text-sm text-slate-700 outline-none placeholder:text-slate-400 focus:border-[#4f3267] sm:max-w-[311px]"
                placeholder="Enter your email address"
                type="email"
              />
              <button
                className="h-[50px] shrink-0 rounded bg-[#4f3267] px-8 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-[#3c2650]"
                type="button"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <span className="text-4xl font-bold text-[#4f3267] sm:text-5xl">5 Million+</span>
          <span className="mt-2 text-base text-slate-600">Customers Worldwide</span>
        </div>
      </div>
    </section>
  )
}

export default JoinInsider
