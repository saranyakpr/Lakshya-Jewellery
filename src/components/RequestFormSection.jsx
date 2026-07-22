import { useState } from 'react'
import consultantImage from '../assets/img/jewelry box opening with a gold pendant, gift moment.png'

const languages = ['English', 'Hindi', 'Tamil', 'Telugu']

function RequestFormSection() {
  const [language, setLanguage] = useState('English')

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="text-2xl font-bold !text-[#4f3267] sm:text-2xl">
            Get your own Jewellery Consultant by filling this request form
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Enjoy shopping whenever, wherever you are!
          </p>

          <form className="mt-6 flex flex-col gap-3" onSubmit={(event) => event.preventDefault()}>
            <input
              className="h-12 w-full !rounded-lg border border-slate-300 bg-white px-4 text-sm text-slate-700 outline-none placeholder:text-slate-400 focus:border-[#4f3267]"
              placeholder="Name*"
              type="text"
            />
            <input
              className="h-12 w-full !rounded-lg border border-slate-300 bg-white px-4 text-sm text-slate-700 outline-none placeholder:text-slate-400 focus:border-[#4f3267]"
              placeholder="Mobile Number*"
              type="tel"
            />
            <input
              className="h-12 w-full !rounded-lg border border-slate-300 bg-white px-4 text-sm text-slate-700 outline-none placeholder:text-slate-400 focus:border-[#4f3267]"
              placeholder="Email Address*"
              type="email"
            />

            <div className="flex flex-wrap gap-2">
              {languages.map((lang) => (
                <button
                  className={`!rounded-full px-4 py-1.5 text-sm font-medium transition ${
                    language === lang
                      ? 'bg-[#4f3267] text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  type="button"
                >
                  {lang}
                </button>
              ))}
            </div>

            <button
              className="!rounded-lg bg-purple-500 py-3.5 text-sm font-semibold text-white transition hover:bg-purple-600"
              type="submit"
            >
              Schedule a Call
            </button>
          </form>
        </div>

        <img
          alt="Get your own jewellery consultant"
          className="aspect-[592/500] w-full !rounded-3xl object-cover shadow-lg"
          src={consultantImage}
        />
      </div>
    </section>
  )
}

export default RequestFormSection
