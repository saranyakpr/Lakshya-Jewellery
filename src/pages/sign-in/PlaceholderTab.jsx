import { UserOutlineIcon } from './icons'

function PlaceholderTab({ label, onGoToProfile }) {
  return (
    <div>
      <div className="border-b border-slate-200 pb-2">
        <h2 className="text-base font-bold uppercase tracking-wider text-[#4F3267] !mb-0">
          {label}
        </h2>
      </div>

      <div className="flex flex-col items-center justify-center gap-3 py-20 text-center">
        <div className="flex size-14 items-center justify-center rounded-full bg-purple-50 text-[#4F3267]">
          <UserOutlineIcon className="size-7 text-purple-600" />
        </div>
        <p className="text-base font-bold text-[#4F3267] !mb-0">
          No information found in this section yet.
        </p>
        <p className="text-xs text-slate-500 max-w-sm">
          Manage your profile, view orders, or explore our services like Try at Home and Lakshya
          Treasure Chest.
        </p>
        <button
          className="mt-2 !rounded-lg border border-purple-300 px-4 py-1.5 text-xs font-semibold text-purple-700 transition hover:bg-purple-50"
          onClick={onGoToProfile}
          type="button"
        >
          Go to Profile
        </button>
      </div>
    </div>
  )
}

export default PlaceholderTab
