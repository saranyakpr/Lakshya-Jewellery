import { SearchIcon } from './HeaderIcons'

function HeaderSearch({ placeholder }) {
  return (
    <label className="relative inline-flex w-full h-10 items-center rounded-lg border border-slate-200 bg-white shadow-sm transition focus-within:border-[#7a1f67] focus-within:ring-2 focus-within:ring-[#7a1f67]/20">
      <input
        className="w-full h-full border-0 bg-transparent px-4 pr-14 text-sm text-slate-700 outline-none placeholder:text-sm placeholder:text-slate-400"
        placeholder={placeholder}
        type="text"
      />
      <button
        aria-label="Search"
        className="absolute right-1 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#7a1f67] text-white transition hover:bg-[#671756]"
        type="button"
      >
        <SearchIcon className="h-5 w-5" />
      </button>
    </label>
  )
}

export default HeaderSearch
