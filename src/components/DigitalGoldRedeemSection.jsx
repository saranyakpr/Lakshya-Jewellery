function InfoIcon(props) {
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
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5M12 8h.01" />
    </svg>
  )
}

function RingIcon(props) {
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
      <circle cx="12" cy="15" r="6" />
      <path d="m12 9-2.5-2.5L12 4l2.5 2.5L12 9Z" />
    </svg>
  )
}

function CartIcon(props) {
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
      <circle cx="10" cy="20" r="1" />
      <circle cx="18" cy="20" r="1" />
      <path d="M3 4h2l2.4 12.2a2 2 0 0 0 2 1.6h7.2a2 2 0 0 0 2-1.6L20.5 8H6" />
    </svg>
  )
}

function BankIcon(props) {
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
      <path d="M3 9.5 12 4l9 5.5" />
      <path d="M4.5 9.5v9M9 9.5v9M15 9.5v9M19.5 9.5v9M3 21h18" />
    </svg>
  )
}

function ArrowRightIcon(props) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

function DigitalGoldRedeemSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="flex flex-wrap items-center gap-2">
        <InfoIcon className="size-4 shrink-0 text-purple-400" />
        <p className="text-sm !mb-0 text-slate-500">You can redeem Lakshya eGold online or offline through any of our stores.</p>
        <p className="text-sm !mb-0 font-bold text-purple-500">Redeem</p>
        <p className="text-xl !mb-0 font-bold text-slate-900 sm:text-2xl">eGold to jewellery, in a blink!</p>
      </div>

      <div className="mt-10 flex flex-col items-stretch gap-6 lg:flex-row lg:items-center">
        <div className="flex-1 rounded-2xl bg-white p-6 text-center shadow-sm">
          <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-purple-100 text-purple-500">
            <RingIcon className="size-6" />
          </span>
          <p className="mt-4 !text-sm text-slate-600">Choose your favorite jewellery from Lakshya</p>
        </div>

        <ArrowRightIcon className="mx-auto hidden size-6 shrink-0 text-slate-300 lg:block" />

        <div className="flex-1 rounded-2xl bg-white p-6 text-center shadow-sm">
          <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-purple-100 text-purple-500">
            <CartIcon className="size-6" />
          </span>
          <p className="mt-4 text-sm text-slate-600">Redeem your Lakshya eGold at checkout</p>
        </div>

        <div className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm lg:w-72 lg:shrink-0">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-500">
            <BankIcon className="size-5" />
          </span>
          <div>
            <p className="!text-sm font-bold !mb-0 text-slate-900">Visit Vault</p>
            <p className="!text-xs !mb-0 text-slate-500">Check your gold balance</p>
            <button
              className="mt-1 flex items-center gap-1 !text-xs font-semibold text-purple-500"
              type="button"
            >
              <ArrowRightIcon className="size-3" />
              Verify KYC
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DigitalGoldRedeemSection
