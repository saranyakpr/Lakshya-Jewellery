import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function BoxIcon(props) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="m3 7 9-4 9 4-9 4-9-4Z" />
      <path d="M3 7v10l9 4 9-4V7M12 11v10" />
    </svg>
  )
}

function WhatsAppIcon(props) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm5.8 14.2c-.2.7-1.4 1.3-2 1.4-.5.1-1.1.1-1.8-.1-.4-.1-1-.3-1.7-.6-3-1.3-4.9-4.3-5.1-4.5-.1-.2-1.2-1.6-1.2-3.1s.8-2.2 1.1-2.5c.3-.3.6-.4.8-.4h.6c.2 0 .4 0 .6.5.2.5.7 1.8.8 1.9.1.2.1.3 0 .5-.1.2-.1.3-.3.5-.1.2-.3.4-.4.5-.1.1-.3.3-.1.6.2.3.9 1.4 1.9 2.3 1.3 1.2 2.4 1.5 2.7 1.7.3.2.5.1.7-.1.2-.2.8-.9 1-1.2.2-.3.4-.2.7-.1.3.1 1.7.8 2 1 .3.1.5.2.6.3.1.2.1.7-.1 1.4Z" />
    </svg>
  )
}

const navGroups = [
  {
    label: 'Orders',
    items: [
      { label: 'Orders and Returns', active: true },
      { label: 'Payment' },
      { label: 'Manage Refunds' },
    ],
  },
  {
    label: 'Appointments',
    items: [{ label: 'Try at Home' }],
  },
  {
    label: 'Offers',
    items: [{ label: 'Coupons' }],
  },
  {
    label: 'Accounts',
    items: [{ label: 'Profile' }],
  },
  {
    label: 'Credits',
    items: [{ label: 'Xclusive' }, { label: 'Lakshya Treasure Chest' }],
  },
]

const tabs = ['My Orders', 'Cancelled Orders']

function SignInPage() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState(tabs[0])

  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto">
        <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
            <aside className="w-full shrink-0 lg:w-64">
              <div>
                <p className="!text-[1rem] !font-bold text-[#4F3267] mb-0">User Name</p>
                <p className="text-sm text-slate-500 !mb-0">user@gmail.com</p>
                <button className="mt-1 !text-xs font-semibold text-purple-500" type="button">
                  Edit Profile
                </button>
              </div>

              <nav className="mt-8 flex flex-col gap-3">
                {navGroups.map(({ label, items }) => (
                  <div key={label}>
                    <p className="text-sm text-slate-400 !mb-0">{label}</p>
                    <ul className="mt-2 flex flex-col gap-1 !mb-0 !mt-0 !pl-0">
                      {items.map((item) => (
                        <li key={item.label}>
                          <button
                            className={`!text-sm font-semibold transition ${
                              item.active
                                ? 'text-purple-500'
                                : 'text-slate-900 hover:text-purple-500'
                            }`}
                            type="button"
                          >
                            {item.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </nav>
            </aside>

            <div className="flex-1">
              <div className="flex gap-8 border-b border-slate-200">
                {tabs.map((tab) => (
                  <button
                    className={`-mb-px border-b-2 pb-3 text-sm font-bold uppercase tracking-wide transition ${
                      activeTab === tab
                        ? 'border-[#4F3267] text-[#4F3267]'
                        : 'border-transparent text-slate-400 hover:text-slate-600'
                    }`}
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    type="button"
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="flex flex-col items-center justify-center gap-3 py-24 text-center">
                <BoxIcon className="size-10 text-slate-300" />
                <p className="text-lg font-bold text-[#4F3267] !mb-0">
                  {activeTab === 'My Orders' ? 'No Active Orders' : 'No Cancelled Orders'}
                </p>
                <button
                  className="!rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90"
                  onClick={() => navigate('/')}
                  type="button"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>

          <a
            aria-label="Chat with us on WhatsApp"
            className="fixed bottom-6 right-6 flex size-12 items-center justify-center rounded-full bg-[#4f3267] text-white shadow-lg transition hover:bg-[#3c2650]"
            href="https://wa.me/914442935000"
            rel="noreferrer"
            target="_blank"
          >
            <WhatsAppIcon className="size-6" />
          </a>
        </section>
      </div>
    </main>
  )
}

export default SignInPage
