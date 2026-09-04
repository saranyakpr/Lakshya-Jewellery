import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import OrdersTab from './sign-in/OrdersTab'
import PaymentRefundsTab from './sign-in/PaymentRefundsTab'
import PlaceholderTab from './sign-in/PlaceholderTab'
import ProfileTab from './sign-in/ProfileTab'
import { initialProfile, navGroups } from './sign-in/data'
import { CheckCircleIcon, WhatsAppIcon } from './sign-in/icons'

function SignInPage() {
  const navigate = useNavigate()

  const [activeNavItem, setActiveNavItem] = useState('orders')
  const [actionNotice, setActionNotice] = useState(null)
  const [profile, setProfile] = useState(initialProfile)

  const showNotice = (message, duration = 4000) => {
    setActionNotice(message)
    setTimeout(() => setActionNotice(null), duration)
  }

  const handleNavItemClick = (item) => {
    if (item.link) {
      navigate(item.link)
      return
    }
    setActiveNavItem(item.id)
  }

  const fullName = profile.fullName || 'Admin'

  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto">
        <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
          {/* Action Notification Banner */}
          {actionNotice && (
            <div className="mb-6 flex items-center justify-between rounded-xl bg-purple-50 border border-purple-200 p-4 text-sm text-[#4F3267] shadow-sm">
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="size-5 text-purple-600 shrink-0" />
                <span className="font-semibold">{actionNotice}</span>
              </div>
              <button
                className="text-purple-600 hover:text-purple-800 font-bold text-xs uppercase"
                onClick={() => setActionNotice(null)}
                type="button"
              >
                Dismiss
              </button>
            </div>
          )}

          <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
            {/* Sidebar Navigation */}
            <aside className="w-full shrink-0 lg:w-64">
              <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-4 sm:p-5 lg:border-0 lg:bg-transparent lg:p-0">
                <p className="!mb-0 !text-[1.05rem] !font-bold text-[#4F3267]">{fullName}</p>
                <p className="!mb-0 text-sm text-slate-500">{profile.email || 'user@gmail.com'}</p>
                <button
                  className="mt-1.5 inline-block !text-xs font-bold text-purple-600 hover:text-purple-800 transition"
                  onClick={() => setActiveNavItem('profile')}
                  type="button"
                >
                  Edit Profile
                </button>
              </div>

              <nav className="mt-6 sm:mt-8 flex flex-col gap-4">
                {navGroups.map(({ label, items }) => (
                  <div key={label}>
                    <p className="!mb-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400">
                      {label}
                    </p>
                    <ul className="flex flex-col gap-1 !mb-0 !mt-0 !pl-0 list-none">
                      {items.map((item) => {
                        const isActive = activeNavItem === item.id
                        return (
                          <li key={item.id}>
                            <button
                              className={`w-full text-left !text-sm font-semibold py-1 transition-colors ${
                                isActive
                                  ? '!text-purple-600 font-bold'
                                  : 'text-slate-700 hover:!text-purple-600'
                              }`}
                              onClick={() => handleNavItemClick(item)}
                              type="button"
                            >
                              {item.label}
                            </button>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                ))}
              </nav>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 min-w-0">
              {activeNavItem === 'profile' && (
                <ProfileTab
                  onGoToOrders={() => setActiveNavItem('orders')}
                  onGoToPayment={() => setActiveNavItem('payment')}
                  onGoToRewards={() => setActiveNavItem('xclusive')}
                  profile={profile}
                  setProfile={setProfile}
                />
              )}

              {activeNavItem === 'payment' && <PaymentRefundsTab showNotice={showNotice} />}

              {activeNavItem === 'orders' && <OrdersTab showNotice={showNotice} />}

              {activeNavItem !== 'profile' &&
                activeNavItem !== 'orders' &&
                activeNavItem !== 'payment' && (
                  <PlaceholderTab
                    label={
                      navGroups.flatMap((g) => g.items).find((i) => i.id === activeNavItem)
                        ?.label || 'Account'
                    }
                    onGoToProfile={() => setActiveNavItem('profile')}
                  />
                )}
            </div>
          </div>

          {/* WhatsApp floating button */}
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
