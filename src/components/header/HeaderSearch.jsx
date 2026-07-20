import { SearchIcon } from './HeaderIcons'

function HeaderSearch({ placeholder }) {
  return (
    <label className="inline-flex w-full max-w-[420px] items-center rounded-full border border-slate-200 bg-white shadow-sm transition focus-within:border-[#7a1f67] focus-within:ring-2 focus-within:ring-[#7a1f67]/20 sm:h-12">
      <input
        className="flex-1 min-w-0 border-0 bg-transparent px-4 py-3 text-sm text-slate-700 outline-none placeholder:text-sm placeholder:text-slate-400"
        placeholder={placeholder}
        type="text"
      />
      <button
        aria-label="Search"
        className="inline-flex h-12 min-w-[48px] items-center justify-center rounded-r-full border-l border-slate-200 bg-[#7a1f67] text-white transition hover:bg-[#671756]"
        type="button"
      >
        <SearchIcon className="h-5 w-5" />
      </button>
    </label>
  )
}

export default HeaderSearch
