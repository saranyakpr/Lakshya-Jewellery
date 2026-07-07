import { SearchIcon } from './HeaderIcons'

function HeaderSearch({ placeholder }) {
  return (
    <label className="flex items-center gap-2 rounded-md border border-slate-200 bg-white text-slate-500 shadow-sm sm:h-10">
      <input
        className="w-full border-0 bg-transparent text-sm outline-none placeholder:text-xs placeholder:text-slate-400 sm:pl-3 sm:placeholder:text-sm"
        placeholder={placeholder}
        type="text"
      />
      <button
        aria-label="Search"
        className="flex h-8 w-8 shrink-0 items-center justify-center cursor-pointer bg-[#7a1f67] text-white transition hover:bg-[#671756] sm:h-10 sm:w-13"
        type="button"
      >
        <SearchIcon className="size-4" />
      </button>
    </label>
  )
}

export default HeaderSearch
