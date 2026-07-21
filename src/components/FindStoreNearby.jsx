import { PinIcon } from './header/HeaderIcons'
import storeImage from '../assets/img/Overlay+Shadow (3).png'

function FindStoreNearby() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              Find your favorite designs at a Store Nearby
            </h2>
            <p className="mt-4 max-w-md text-base text-slate-600">
              Experience the magic of Lakshya in person. Try on your favorite pieces and
              get expert guidance.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative w-full sm:max-w-[351px]">
              <input
                className="h-14 w-full rounded border border-slate-300 bg-white py-4 pl-6 pr-12 text-sm text-slate-700 outline-none placeholder:text-slate-400 focus:border-[#4f3267]"
                placeholder="Enter Pincode"
                type="text"
              />
              <PinIcon className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
            </div>
            <button
              className="h-14 shrink-0 rounded bg-[#4f3267] px-8 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-[#3c2650]"
              type="button"
            >
              Locate Store
            </button>
          </div>
        </div>

        <img
          alt="Elegant woman in a luxury jewellery store, sophisticated atmosphere"
          className="aspect-[616/400] w-full rounded-xl object-cover shadow-sm"
          src={storeImage}
        />
      </div>
    </section>
  )
}

export default FindStoreNearby
