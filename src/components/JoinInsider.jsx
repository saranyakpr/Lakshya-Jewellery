import { useState } from 'react'

const genderOptions = ['Female', 'Male', 'Other']

function JoinInsider() {
  const [gender, setGender] = useState('')

  return (
    <section className="w-full bg-[#4f3267]">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-10 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:px-8">
        <div className="flex w-full max-w-xl flex-col gap-6">
          <div>
            <h2 className="font-serif text-3xl text-white sm:text-4xl">Join Lakshya Insider</h2>
            <p className="mt-3 text-base text-white/80">
              Receive special offers, early access to new launches and more.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-6">
              {genderOptions.map((option) => (
                <label
                  className="gap-2 text-sm text-white"
                  key={option}
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  <input
                    checked={gender === option}
                    className="h-5 w-5 accent-white"
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
                className="h-[50px] w-full rounded border border-white/30 bg-white/10 px-5 text-sm text-white outline-none placeholder:text-white/60 focus:border-white sm:max-w-[311px]"
                placeholder="Enter your email address"
                type="email"
              />
              <button
                className="h-[50px] shrink-0 rounded bg-white px-8 text-sm font-semibold uppercase tracking-wide text-[#4f3267] transition hover:bg-white/90"
                type="button"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <span className="font-serif text-4xl text-white sm:text-5xl">5 Million+</span>
          <span className="mt-2 text-sm uppercase tracking-wide text-white/80">
            Customers Worldwide
          </span>
        </div>
      </div>
    </section>
  )
}

export default JoinInsider
