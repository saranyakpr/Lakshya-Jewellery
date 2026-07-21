import { SearchIcon } from './HeaderIcons'

function HeaderSearch({ placeholder }) {
  return (
    <label className="flex h-10 w-full max-w-[500px] items-stretch overflow-hidden rounded border border-[#ddd] bg-white shadow-sm transition focus-within:border-[#60195e]">
      <input
        className="h-full w-full min-w-0 border-0 bg-transparent px-4 text-sm text-slate-700 outline-none placeholder:text-sm placeholder:text-[#757575]"
        placeholder={placeholder}
        type="text"
      />
      <button
        aria-label="Search"
        className="flex w-12 shrink-0 items-center justify-center bg-[#60195e] text-white transition hover:bg-[#4f3267]"
        type="button"
      >
        <SearchIcon className="h-5 w-5" />
      </button>
    </label>
  )
}

export default HeaderSearch
