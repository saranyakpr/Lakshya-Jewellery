import { useRef, useState } from 'react'
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

function UserOutlineIcon(props) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

function CheckCircleIcon(props) {
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
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <path d="m9 11 3 3L22 4" />
    </svg>
  )
}

const navGroups = [
  {
    label: 'Orders',
    items: [
      { id: 'orders', label: 'Orders and Returns' },
      { id: 'payment', label: 'Payment' },
      { id: 'refunds', label: 'Manage Refunds' },
    ],
  },
  {
    label: 'Appointments',
    items: [{ id: 'try-at-home', label: 'Try at Home', link: '/try-at-home' }],
  },
  {
    label: 'Offers',
    items: [{ id: 'coupons', label: 'Coupons' }],
  },
  {
    label: 'Accounts',
    items: [{ id: 'profile', label: 'Profile' }],
  },
  {
    label: 'Credits',
    items: [
      { id: 'xclusive', label: 'Xclusive' },
      { id: 'treasure-chest', label: 'Lakshya Treasure Chest', link: '/treasure-chest' },
    ],
  },
]

function CheckIconSmall(props) {
  return (
    <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

function ArrowRightIconSmall(props) {
  return (
    <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  )
}

function HomeOutlineIcon(props) {
  return (
    <svg fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" {...props}>
      <path
        d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h4v-6h4v6h4a1 1 0 001-1V10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function CloseIconModal(props) {
  return (
    <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" {...props}>
      <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const initialOrders = [
  {
    id: 'ORD-2024-001',
    date: 'Jan 12, 2024',
    total: '₹24,500',
    status: 'Delivered',
    statusType: 'delivered',
    category: 'Ring',
    title: 'Diamond Solitaire Ring',
    size: 'US 6',
    tracking: 'TRK9823741',
    hasTracker: false,
    shippingAddress: 'Flat 402, Lotus Heights, MG Road, Bengaluru, Karnataka 560001',
  },
  {
    id: 'ORD-2024-002',
    date: 'Feb 3, 2024',
    total: '₹18,200',
    status: 'In Transit',
    statusType: 'in-transit',
    category: 'Earring',
    title: 'Gold Drop Earrings',
    size: 'Standard',
    tracking: 'TRK9823742',
    hasTracker: true,
    estDelivery: '2-3 days',
    shippingAddress: 'Flat 402, Lotus Heights, MG Road, Bengaluru, Karnataka 560001',
  },
  {
    id: 'ORD-2024-003',
    date: 'Mar 15, 2024',
    total: '₹9,800',
    status: 'Processing',
    statusType: 'processing',
    category: 'Bangle',
    title: 'Gold Bangle Set',
    size: '2.6',
    tracking: 'TRK9823743',
    hasTracker: false,
    shippingAddress: 'Flat 402, Lotus Heights, MG Road, Bengaluru, Karnataka 560001',
  },
]

const initialCancelledOrders = [
  {
    id: 'ORD-2023-089',
    date: 'Dec 5, 2023',
    total: '₹12,000',
    status: 'Cancelled',
    statusType: 'cancelled',
    category: 'Necklace',
    title: 'Pearl Necklace',
    size: 'Standard',
    cancelledDate: 'Dec 5, 2023',
    refundStatus: 'Processed & Credited',
    refundAmount: '₹12,000',
    refundDate: 'Dec 7, 2023',
    refundMethod: 'Original Payment Method (UPI)',
    shippingAddress: 'Flat 402, Lotus Heights, MG Road, Bengaluru, Karnataka 560001',
  },
]

const orderTabs = ['My Orders', 'Cancelled Orders']
const paymentTabs = ['PAYMENT METHODS', 'TRANSACTION', 'REFUND REQUESTS', 'REFUND POLICY']

function SignInPage() {
  const navigate = useNavigate()
  const fileInputRef = useRef(null)

  // Navigation State
  const [activeNavItem, setActiveNavItem] = useState('orders')
  const [activeOrderTab, setActiveOrderTab] = useState(orderTabs[0])
  const [activePaymentTab, setActivePaymentTab] = useState('REFUND REQUESTS')

  // Orders State
  const [orders, setOrders] = useState(initialOrders)
  const [cancelledOrders, setCancelledOrders] = useState(initialCancelledOrders)
  const [selectedOrderDetails, setSelectedOrderDetails] = useState(null)
  const [selectedTrackOrder, setSelectedTrackOrder] = useState(null)
  const [selectedRefundDetails, setSelectedRefundDetails] = useState(null)
  const [actionNotice, setActionNotice] = useState(null)

  // Profile Form State
  const [profile, setProfile] = useState({
    firstName: 'Admin',
    lastName: 'User',
    email: 'admin@gmail.com',
    phoneNumber: '+91 98765 43210',
    address: '',
    pinCode: '',
  })

  // Avatar Image state
  const [avatarImage, setAvatarImage] = useState(null)
  const [saveSuccess, setSaveSuccess] = useState(false)

  const handleInputChange = (field, value) => {
    setProfile((prev) => ({ ...prev, [field]: value }))
  }

  const handleNavItemClick = (item) => {
    if (item.link) {
      navigate(item.link)
      return
    }
    if (item.id === 'refunds') {
      setActiveNavItem('refunds')
      setActivePaymentTab('REFUND REQUESTS')
      return
    }
    if (item.id === 'payment') {
      setActiveNavItem('payment')
      setActivePaymentTab('REFUND REQUESTS')
      return
    }
    setActiveNavItem(item.id)
  }

  const handlePhotoUpload = (event) => {
    const file = event.target.files?.[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setAvatarImage(imageUrl)
    }
  }

  const handleRemovePhoto = () => {
    setAvatarImage(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const handleSaveProfile = (e) => {
    e.preventDefault()
    setSaveSuccess(true)
    setTimeout(() => {
      setSaveSuccess(false)
    }, 3000)
  }

  const handleCancelOrder = (order) => {
    setOrders((prev) => prev.filter((o) => o.id !== order.id))
    setCancelledOrders((prev) => [
      {
        ...order,
        status: 'Cancelled',
        statusType: 'cancelled',
        cancelledDate: 'Today',
        refundStatus: 'In Progress',
        refundAmount: order.total,
        refundDate: 'Within 5-7 days',
        refundMethod: 'Original Payment Method (UPI)',
      },
      ...prev,
    ])
    setActionNotice(`Order ${order.id} has been cancelled successfully.`)
    setTimeout(() => setActionNotice(null), 4000)
  }

  const handleReturnExchange = (order) => {
    setActionNotice(`Return/Exchange request initiated for ${order.id}.`)
    setTimeout(() => setActionNotice(null), 4000)
  }

  const handleReorder = (order) => {
    setActionNotice(`${order.title} has been added to your bag for reordering!`)
    setTimeout(() => setActionNotice(null), 4000)
  }

  // Calculate initials for avatar fallback
  const getInitials = () => {
    const firstInitial = profile.firstName ? profile.firstName.trim().charAt(0) : 'S'
    const lastInitial = profile.lastName ? profile.lastName.trim().charAt(0) : 'S'
    return `${firstInitial}${lastInitial}`.toUpperCase()
  }

  const fullName = `${profile.firstName} ${profile.lastName}`.trim() || 'Admin'

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
              {/* Profile View */}
              {activeNavItem === 'profile' && (
                <div className="w-full">
                  {/* Top Tab Header */}
                  <div className="border-b border-slate-200">
                    <button
                      className="-mb-px border-b-2 border-[#4F3267] pb-3 text-sm !font-bold !uppercase tracking-wider text-[#4F3267]"
                      type="button"
                    >
                      MY PROFILE
                    </button>
                  </div>

                  {/* Profile Header (Avatar + User Info + Actions) */}
                  <div className="mt-8 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
                    {/* Avatar */}
                    <div className="relative shrink-0">
                      {avatarImage ? (
                        <img
                          alt={fullName}
                          className="size-24 sm:size-28 rounded-full object-cover shadow-lg ring-4 ring-pink-100"
                          src={avatarImage}
                        />
                      ) : (
                        <div className="flex size-24 sm:size-28 items-center justify-center rounded-full bg-gradient-to-tr from-[#ec2e99] to-[#f472b6] shadow-[0_10px_25px_rgba(236,72,153,0.35)]">
                          <span className="text-3xl sm:text-4xl font-bold tracking-tight text-white select-none">
                            {getInitials()}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* User Summary & Photo Actions */}
                    <div className="flex flex-col">
                      <h2 className="!mb-0 !text-xl sm:!text-2xl !font-bold text-[#4F3267]">
                        {fullName}
                      </h2>
                      <p className="!mb-0 mt-0.5 text-sm text-slate-500">
                        {profile.email || 'srishakthi@gmail.com'}
                      </p>
                      <p className="!mb-0 mt-0.5 text-sm text-slate-500">
                        {profile.phoneNumber || '+91 98765 43210'}
                      </p>

                      <div className="mt-3 flex items-center gap-2 text-xs sm:text-sm font-semibold">
                        <input
                          accept="image/*"
                          className="hidden"
                          onChange={handlePhotoUpload}
                          ref={fileInputRef}
                          type="file"
                        />
                        <button
                          className="!text-purple-600 hover:!text-purple-800 transition underline underline-offset-2"
                          onClick={() => fileInputRef.current?.click()}
                          type="button"
                        >
                          Change Photo
                        </button>
                        <span className="text-slate-300">|</span>
                        <button
                          className="!text-red-500 hover:!text-red-700 transition underline underline-offset-2"
                          onClick={handleRemovePhoto}
                          type="button"
                        >
                          Remove Photo
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Basic Information Section */}
                  <div className="mt-12">
                    <div className="flex items-center gap-2 text-[#4F3267]">
                      <UserOutlineIcon className="size-5" />
                      <h3 className="!mb-0 !text-sm !font-bold uppercase tracking-wider text-[#4F3267]">
                        BASIC INFORMATION
                      </h3>
                    </div>

                    {/* Success Alert */}
                    {saveSuccess && (
                      <div className="mt-4 flex items-center gap-2 rounded-lg bg-emerald-50 border border-emerald-200 p-3 text-sm text-emerald-800">
                        <CheckCircleIcon className="size-5 text-emerald-600 shrink-0" />
                        <span>Profile information updated successfully!</span>
                      </div>
                    )}

                    {/* Form Fields */}
                    <form className="mt-6" onSubmit={handleSaveProfile}>
                      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        {/* First Name */}
                        <div>
                          <label className="!mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#4F3267]">
                            FIRST NAME <span className="text-red-500">*</span>
                          </label>
                          <input
                            className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-800 shadow-sm transition placeholder:text-slate-400 focus:border-[#4F3267] focus:outline-none focus:ring-1 focus:ring-[#4F3267]"
                            onChange={(e) => handleInputChange('firstName', e.target.value)}
                            placeholder="Enter first name"
                            required
                            type="text"
                            value={profile.firstName}
                          />
                        </div>

                        {/* Last Name */}
                        <div>
                          <label className="!mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#4F3267]">
                            LAST NAME <span className="text-red-500">*</span>
                          </label>
                          <input
                            className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-800 shadow-sm transition placeholder:text-slate-400 focus:border-[#4F3267] focus:outline-none focus:ring-1 focus:ring-[#4F3267]"
                            onChange={(e) => handleInputChange('lastName', e.target.value)}
                            placeholder="Enter last name"
                            required
                            type="text"
                            value={profile.lastName}
                          />
                        </div>

                        {/* Email */}
                        <div>
                          <label className="!mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#4F3267]">
                            EMAIL <span className="text-red-500">*</span>
                          </label>
                          <input
                            className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-800 shadow-sm transition placeholder:text-slate-400 focus:border-[#4F3267] focus:outline-none focus:ring-1 focus:ring-[#4F3267]"
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            placeholder="Enter email address"
                            required
                            type="email"
                            value={profile.email}
                          />
                        </div>

                        {/* Phone Number */}
                        <div>
                          <label className="!mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#4F3267]">
                            PHONE NUMBER <span className="text-red-500">*</span>
                          </label>
                          <input
                            className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-800 shadow-sm transition placeholder:text-slate-400 focus:border-[#4F3267] focus:outline-none focus:ring-1 focus:ring-[#4F3267]"
                            onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                            placeholder="Enter phone number"
                            required
                            type="tel"
                            value={profile.phoneNumber}
                          />
                        </div>

                        {/* Address */}
                        <div>
                          <label className="!mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#4F3267]">
                            ADDRESS <span className="text-red-500">*</span>
                          </label>
                          <input
                            className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-800 shadow-sm transition placeholder:text-slate-400 focus:border-[#4F3267] focus:outline-none focus:ring-1 focus:ring-[#4F3267]"
                            onChange={(e) => handleInputChange('address', e.target.value)}
                            placeholder="Enter complete address"
                            required
                            type="text"
                            value={profile.address}
                          />
                        </div>

                        {/* Pin Code */}
                        <div>
                          <label className="!mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#4F3267]">
                            PIN CODE <span className="text-red-500">*</span>
                          </label>
                          <input
                            className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-800 shadow-sm transition placeholder:text-slate-400 focus:border-[#4F3267] focus:outline-none focus:ring-1 focus:ring-[#4F3267]"
                            onChange={(e) => handleInputChange('pinCode', e.target.value)}
                            placeholder="Enter 6-digit PIN code"
                            required
                            type="text"
                            value={profile.pinCode}
                          />
                        </div>
                      </div>

                      {/* Save Changes Button */}
                      <div className="mt-8 flex items-center gap-4">
                        <button
                          className="!rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition hover:opacity-95 active:scale-[0.98]"
                          type="submit"
                        >
                          Save Changes
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}

              {/* Payment & Refunds View */}
              {(activeNavItem === 'payment' || activeNavItem === 'refunds') && (
                <div className="w-full">
                  {/* Page Title & Subtitle */}
                  <div>
                    <h1 className="!mb-0 !text-xl sm:!text-2xl !font-bold text-[#4F3267]">
                      Payment & Refunds
                    </h1>
                    <p className="!mb-0 mt-1 text-sm text-slate-400">
                      View your payment methods, transaction and refund status
                    </p>
                  </div>

                  {/* Tab Navigation */}
                  <div className="mt-8 flex gap-6 sm:gap-10 border-b border-slate-200 overflow-x-auto no-scrollbar">
                    {paymentTabs.map((tab) => (
                      <button
                        className={`-mb-px border-b-2 pb-3 text-xs sm:text-sm !font-bold uppercase tracking-wider whitespace-nowrap transition ${
                          activePaymentTab === tab
                            ? 'border-[#4F3267] text-[#4F3267]'
                            : 'border-transparent text-slate-400 hover:text-slate-600'
                        }`}
                        key={tab}
                        onClick={() => setActivePaymentTab(tab)}
                        type="button"
                      >
                        {tab}
                      </button>
                    ))}
                  </div>

                  {/* Tab Content: REFUND REQUESTS */}
                  {activePaymentTab === 'REFUND REQUESTS' && (
                    <div className="mt-8">
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
                        {/* Card 1: Total Refunds */}
                        <div className="flex min-h-[145px] flex-col items-center justify-center rounded-2xl border border-slate-200/80 bg-white p-6 text-center shadow-sm">
                          <p className="!mb-0 text-sm font-semibold text-[#4F3267]">
                            Total Refunds
                          </p>
                          <p className="!mb-0 mt-2 !text-2xl sm:!text-3xl !font-extrabold text-[#4F3267]">
                            ₹2,250
                          </p>
                          <p className="!mb-0 mt-2 text-xs text-slate-400">
                            Across 3 requests
                          </p>
                        </div>

                        {/* Card 2: Approved */}
                        <div className="flex min-h-[145px] flex-col items-center justify-center rounded-2xl border border-slate-200/80 bg-white p-6 text-center shadow-sm">
                          <p className="!mb-0 text-sm font-semibold text-[#4F3267]">
                            Approved
                          </p>
                          <p className="!mb-0 mt-2 !text-2xl sm:!text-3xl !font-extrabold text-[#4F3267]">
                            ₹2,450
                          </p>
                          <p className="!mb-0 mt-2 text-xs text-slate-400">
                            3 requests
                          </p>
                        </div>

                        {/* Card 3: In Progress */}
                        <div className="flex min-h-[145px] flex-col items-center justify-center rounded-2xl border border-slate-200/80 bg-white p-6 text-center shadow-sm">
                          <p className="!mb-0 text-sm font-semibold text-[#4F3267]">
                            In Progress
                          </p>
                          <p className="!mb-0 mt-2 !text-2xl sm:!text-3xl !font-extrabold text-[#4F3267]">
                            ₹0
                          </p>
                          <p className="!mb-0 mt-2 text-xs text-slate-400">
                            0 requests
                          </p>
                        </div>

                        {/* Card 4: Outline Frame */}
                        <div className="min-h-[145px] rounded-2xl border border-slate-200/80 bg-white" />
                      </div>
                    </div>
                  )}

                  {/* Tab Content: PAYMENT METHODS */}
                  {activePaymentTab === 'PAYMENT METHODS' && (
                    <div className="mt-8 rounded-2xl border border-slate-200/80 bg-white p-8 text-center">
                      <p className="!mb-0 text-base font-bold text-[#4F3267]">
                        Saved Payment Methods
                      </p>
                      <p className="mt-1 text-xs text-slate-400">
                        No saved credit/debit cards or UPI IDs.
                      </p>
                      <button
                        className="mt-4 !rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 px-5 py-2 text-xs font-semibold text-white shadow transition hover:opacity-95"
                        type="button"
                      >
                        + Add New Payment Method
                      </button>
                    </div>
                  )}

                  {/* Tab Content: TRANSACTION */}
                  {activePaymentTab === 'TRANSACTION' && (
                    <div className="mt-8 rounded-2xl border border-slate-200/80 bg-white p-8 text-center">
                      <p className="!mb-0 text-base font-bold text-[#4F3267]">
                        Recent Transactions
                      </p>
                      <p className="mt-1 text-xs text-slate-400">
                        All your payment transactions and receipts will appear here.
                      </p>
                    </div>
                  )}

                  {/* Tab Content: REFUND POLICY */}
                  {activePaymentTab === 'REFUND POLICY' && (
                    <div className="mt-8 rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8">
                      <h3 className="!mb-3 text-base font-bold text-[#4F3267]">
                        Lakshya Jewellery Refund Policy
                      </h3>
                      <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-slate-600 !pl-4 list-disc">
                        <li>Refunds for returned products are processed within 5-7 working days after receipt and quality check.</li>
                        <li>Amount will be refunded directly to the original payment source (UPI / Card / NetBanking).</li>
                        <li>For Cash on Delivery (COD) orders, refunds are credited via NEFT/Bank Transfer to your verified account.</li>
                        <li>Lakshya Jewellery 100% money-back guarantee applies on eligible gold and diamond items within 30 days.</li>
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {/* Orders & Returns View */}
              {activeNavItem === 'orders' && (
                <div>
                  {/* Order Tabs */}
                  <div className="flex gap-8 border-b border-slate-200">
                    {orderTabs.map((tab) => (
                      <button
                        className={`-mb-px border-b-2 pb-2.5 text-sm !font-bold !uppercase tracking-wide transition ${
                          activeOrderTab === tab
                            ? 'border-[#4F3267] text-[#4F3267]'
                            : 'border-transparent text-slate-400 hover:text-slate-600'
                        }`}
                        key={tab}
                        onClick={() => setActiveOrderTab(tab)}
                        type="button"
                      >
                        {tab}
                      </button>
                    ))}
                  </div>

                  {/* My Orders Tab with Data */}
                  {activeOrderTab === 'My Orders' && (
                    <div className="mt-6">
                      {orders.length > 0 ? (
                        <div className="flex flex-col gap-6">
                          {orders.map((order) => (
                            <div
                              className="rounded-2xl border border-slate-200/80 bg-white p-3 sm:p-6 shadow-sm transition hover:shadow-md"
                              key={order.id}
                            >
                              {/* Order Metadata Row */}
                              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-3">
                                <div className="flex flex-wrap items-center gap-6 sm:gap-10">
                                  <div>
                                    <p className="!mb-0 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                                      ORDER ID
                                    </p>
                                    <p className="!mb-0 text-sm font-bold text-[#4F3267]">
                                      {order.id}
                                    </p>
                                  </div>
                                  <div>
                                    <p className="!mb-0 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                                      DATE
                                    </p>
                                    <p className="!mb-0 text-sm font-bold text-[#4F3267]">
                                      {order.date}
                                    </p>
                                  </div>
                                  <div>
                                    <p className="!mb-0 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                                      TOTAL
                                    </p>
                                    <p className="!mb-0 text-sm font-bold text-[#4F3267]">
                                      {order.total}
                                    </p>
                                  </div>
                                </div>

                                {/* Status Badge */}
                                <div>
                                  {order.statusType === 'delivered' && (
                                    <span className="inline-flex items-center rounded-full bg-[#E8F8F0] px-3.5 py-1 text-xs font-bold text-[#16A34A]">
                                      {order.status}
                                    </span>
                                  )}
                                  {order.statusType === 'in-transit' && (
                                    <span className="inline-flex items-center rounded-full bg-[#EBF5FF] px-3.5 py-1 text-xs font-bold text-[#0284C7]">
                                      {order.status}
                                    </span>
                                  )}
                                  {order.statusType === 'processing' && (
                                    <span className="inline-flex items-center rounded-full bg-[#FEF9C3] px-3.5 py-1 text-xs font-bold text-[#CA8A04]">
                                      {order.status}
                                    </span>
                                  )}
                                </div>
                              </div>

                              {/* Order Product Details & Action Buttons */}
                              <div className="mt-3 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
                                <div className="flex items-center gap-4 sm:gap-5">
                                  {/* Category Thumbnail */}
                                  <div className="flex size-20 sm:size-24 shrink-0 items-center justify-center rounded-2xl bg-[#F5EEFB] text-base sm:text-lg font-bold text-[#4F3267] shadow-inner">
                                    {order.category}
                                  </div>

                                  {/* Product Details */}
                                  <div className="flex flex-col">
                                    <h3 className="!mb-1 !text-base sm:text-lg !font-bold !text-[#4F3267]">
                                      {order.title}
                                    </h3>
                                    <p className="!mb-0.5 text-xs sm:text-sm text-slate-500">
                                      Size: <span className="font-semibold text-slate-700">{order.size}</span>
                                    </p>
                                    <p className="!mb-0 text-xs sm:text-sm text-slate-500">
                                      Tracking:{' '}
                                      <span className="font-bold text-slate-700">
                                        {order.tracking}
                                      </span>
                                    </p>
                                  </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-col gap-2 sm:w-36 shrink-0">
                                  <button
                                    className="w-full !rounded-lg bg-gradient-to-r from-[#DE57E5] to-[#A159FF] px-4 py-2 !text-sm !font-semibold text-white shadow-sm transition hover:opacity-95"
                                    onClick={() => setSelectedTrackOrder(order)}
                                    type="button"
                                  >
                                    Track Order
                                  </button>
                                  <button
                                    className="w-full !rounded-lg border !border-[#4F3267]/30 px-4 py-2 !text-sm !font-bold !text-[#4F3267] transition hover:bg-purple-50"
                                    onClick={() => setSelectedOrderDetails(order)}
                                    type="button"
                                  >
                                    View Details
                                  </button>
                                  {order.statusType === 'delivered' ? (
                                    <button
                                      className="w-full !rounded-lg border border-slate-300 px-4 py-2 !text-sm !font-bold !text-slate-600 transition hover:bg-slate-50"
                                      onClick={() => handleReturnExchange(order)}
                                      type="button"
                                    >
                                      Return/Exchange
                                    </button>
                                  ) : (
                                    <button
                                      className="w-full !rounded-lg border border-red-300 px-4 py-2 !text-sm !font-bold !text-red-500 transition hover:bg-red-50"
                                      onClick={() => handleCancelOrder(order)}
                                      type="button"
                                    >
                                      Cancel
                                    </button>
                                  )}
                                </div>
                              </div>

                              {/* Shipment Progress Stepper (for In Transit Order) */}
                              {order.hasTracker && (
                                <div className="mt-6 rounded-xl border border-sky-100 bg-[#F0F8FF] p-4 sm:p-5">
                                  <div className="flex items-center justify-between text-xs">
                                    <span className="font-bold text-sky-700">
                                      Shipment Progress
                                    </span>
                                    <span className="text-slate-500">
                                      Est. delivery: {order.estDelivery}
                                    </span>
                                  </div>

                                  {/* Progress Bar Timeline */}
                                  <div className="mt-5 px-2">
                                    <div className="relative flex items-center justify-between">
                                      {/* Connecting Lines */}
                                      <div className="absolute left-4 right-4 top-1/2 -translate-y-1/2 flex items-center -z-0">
                                        <div className="h-0.5 flex-1 bg-emerald-500" />
                                        <div className="h-0.5 flex-1 bg-[#0284C7]" />
                                        <div className="h-0.5 flex-1 bg-slate-200" />
                                      </div>

                                      {/* Step 1: Ordered */}
                                      <div className="relative z-10 flex flex-col items-center">
                                        <div className="flex size-7 items-center justify-center rounded-full bg-emerald-500 text-white shadow-sm ring-4 ring-[#F0F8FF]">
                                          <CheckIconSmall className="size-4" />
                                        </div>
                                        <span className="mt-2 text-[11px] font-bold text-emerald-700">
                                          Ordered
                                        </span>
                                      </div>

                                      {/* Step 2: Packed */}
                                      <div className="relative z-10 flex flex-col items-center">
                                        <div className="flex size-7 items-center justify-center rounded-full bg-emerald-500 text-white shadow-sm ring-4 ring-[#F0F8FF]">
                                          <CheckIconSmall className="size-4" />
                                        </div>
                                        <span className="mt-2 text-[11px] font-bold text-emerald-700">
                                          Packed
                                        </span>
                                      </div>

                                      {/* Step 3: In Transit */}
                                      <div className="relative z-10 flex flex-col items-center">
                                        <div className="flex size-7 items-center justify-center rounded-full bg-[#0284C7] text-white shadow-sm ring-4 ring-[#F0F8FF]">
                                          <ArrowRightIconSmall className="size-4" />
                                        </div>
                                        <span className="mt-2 text-[11px] font-bold text-[#0284C7]">
                                          In Transit
                                        </span>
                                      </div>

                                      {/* Step 4: Delivered */}
                                      <div className="relative z-10 flex flex-col items-center">
                                        <div className="flex size-7 items-center justify-center rounded-full bg-slate-100 text-slate-400 border border-slate-300 shadow-sm ring-4 ring-[#F0F8FF]">
                                          <HomeOutlineIcon className="size-4" />
                                        </div>
                                        <span className="mt-2 text-[11px] font-medium text-slate-400">
                                          Delivered
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="flex flex-col items-center justify-center gap-3 py-24 text-center">
                          <BoxIcon className="size-10 text-slate-300" />
                          <p className="text-lg font-bold text-[#4F3267] !mb-0">
                            No Active Orders
                          </p>
                          <button
                            className="!rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90"
                            onClick={() => navigate('/')}
                            type="button"
                          >
                            Continue Shopping
                          </button>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Cancelled Orders Tab */}
                  {activeOrderTab === 'Cancelled Orders' && (
                    <div className="mt-6">
                      {cancelledOrders.length > 0 ? (
                        <div className="flex flex-col gap-6">
                          {cancelledOrders.map((order) => (
                            <div
                              className="overflow-hidden rounded-2xl border border-[#FDE2E4] bg-white shadow-sm transition hover:shadow-md"
                              key={order.id}
                            >
                              {/* Soft Pink Tinted Header */}
                              <div className="bg-[#FFF5F5] px-5 py-3 sm:px-6">
                                <div className="flex flex-wrap items-center justify-between gap-4">
                                  <div className="flex flex-wrap items-center gap-6 sm:gap-10">
                                    <div>
                                      <p className="!mb-0 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                                        ORDER ID
                                      </p>
                                      <p className="!mb-0 text-sm font-bold text-[#4F3267]">
                                        {order.id}
                                      </p>
                                    </div>
                                    <div>
                                      <p className="!mb-0 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                                        DATE
                                      </p>
                                      <p className="!mb-0 text-sm font-bold text-[#4F3267]">
                                        {order.date}
                                      </p>
                                    </div>
                                    <div>
                                      <p className="!mb-0 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                                        TOTAL
                                      </p>
                                      <p className="!mb-0 text-sm font-bold text-[#4F3267]">
                                        {order.total}
                                      </p>
                                    </div>
                                  </div>
                                  <span className="inline-flex items-center rounded-full bg-[#FFE8E8] px-3.5 py-1 text-xs font-bold text-[#E11D48]">
                                    Cancelled
                                  </span>
                                </div>
                              </div>

                              {/* Product Details & Action Buttons */}
                              <div className="p-3 sm:p-3">
                                <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
                                  <div className="flex items-center gap-4 sm:gap-5">
                                    {/* Category Thumbnail in soft pink */}
                                    <div className="flex size-20 sm:size-24 shrink-0 items-center justify-center rounded-2xl bg-[#FFEBEB] text-sm sm:text-base font-bold text-[#E11D48] shadow-inner">
                                      {order.category}
                                    </div>

                                    {/* Product Details */}
                                    <div className="flex flex-col">
                                      <h3 className="!mb-1 !text-base sm:text-lg !font-bold !text-[#4F3267]">
                                        {order.title}
                                      </h3>
                                      <p className="!mb-0.5 text-xs sm:text-sm text-slate-500">
                                        Size: <span className="font-semibold text-slate-700">{order.size}</span>
                                      </p>
                                      <p className="!mb-0 mt-1 text-xs sm:text-sm font-semibold text-[#E11D48]">
                                        Order was cancelled on {order.cancelledDate || order.date}
                                      </p>
                                    </div>
                                  </div>

                                  {/* Action Buttons: Reorder & View Refund */}
                                  <div className="flex flex-col gap-2 sm:w-36 shrink-0">
                                    <button
                                      className="w-full !rounded-lg bg-gradient-to-r from-[#DE57E5] to-[#A159FF] px-4 py-2 text-xs !font-semibold text-white shadow-sm transition hover:opacity-95 text-center"
                                      onClick={() => handleReorder(order)}
                                      type="button"
                                    >
                                      Reorder
                                    </button>
                                    <button
                                      className="w-full !rounded-lg border border-[#4F3267]/40 px-4 py-2 !text-sm !font-bold !text-[#4F3267] transition hover:bg-purple-50 text-center"
                                      onClick={() => setSelectedRefundDetails(order)}
                                      type="button"
                                    >
                                      View Refund
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="flex flex-col items-center justify-center gap-3 py-24 text-center">
                          <BoxIcon className="size-10 text-slate-300" />
                          <p className="text-lg font-bold text-[#4F3267] !mb-0">
                            No Cancelled Orders
                          </p>
                          <p className="text-xs text-slate-400 max-w-sm">
                            You do not have any cancelled orders in your account history.
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* Other Side Navigation Sections */}
              {activeNavItem !== 'profile' &&
                activeNavItem !== 'orders' &&
                activeNavItem !== 'payment' &&
                activeNavItem !== 'refunds' && (
                  <div>
                    <div className="border-b border-slate-200 pb-2">
                      <h2 className="text-base font-bold uppercase tracking-wider text-[#4F3267] !mb-0">
                        {navGroups
                          .flatMap((g) => g.items)
                          .find((i) => i.id === activeNavItem)?.label || 'Account'}
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
                        Manage your profile, view orders, or explore our services like Try at Home and Lakshya Treasure Chest.
                      </p>
                      <button
                        className="mt-2 !rounded-lg border border-purple-300 px-4 py-1.5 text-xs font-semibold text-purple-700 transition hover:bg-purple-50"
                        onClick={() => setActiveNavItem('profile')}
                        type="button"
                      >
                        Go to Profile
                      </button>
                    </div>
                  </div>
                )}
            </div>
          </div>

          {/* View Details Modal */}
          {selectedOrderDetails && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs">
              <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl animate-fade-in">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <h3 className="!mb-0 text-lg font-bold text-[#4F3267]">
                    Order Details: {selectedOrderDetails.id}
                  </h3>
                  <button
                    className="text-slate-400 hover:text-slate-600 transition"
                    onClick={() => setSelectedOrderDetails(null)}
                    type="button"
                  >
                    <CloseIconModal className="size-5" />
                  </button>
                </div>
                <div className="mt-4 space-y-3 text-sm">
                  <div className="flex justify-between border-b border-slate-50 py-2">
                    <span className="text-slate-500">Product:</span>
                    <span className="font-semibold text-[#4F3267]">{selectedOrderDetails.title}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-50 py-2">
                    <span className="text-slate-500">Size / Specifications:</span>
                    <span className="font-semibold text-slate-700">{selectedOrderDetails.size}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-50 py-2">
                    <span className="text-slate-500">Order Date:</span>
                    <span className="font-semibold text-slate-700">{selectedOrderDetails.date}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-50 py-2">
                    <span className="text-slate-500">Status:</span>
                    <span className="font-bold text-[#4F3267]">{selectedOrderDetails.status}</span>
                  </div>
                  {selectedOrderDetails.tracking && (
                    <div className="flex justify-between border-b border-slate-50 py-2">
                      <span className="text-slate-500">Tracking Number:</span>
                      <span className="font-bold text-purple-600">{selectedOrderDetails.tracking}</span>
                    </div>
                  )}
                  <div className="flex justify-between border-b border-slate-50 py-2">
                    <span className="text-slate-500">Total Amount:</span>
                    <span className="text-base font-extrabold text-[#4F3267]">{selectedOrderDetails.total}</span>
                  </div>
                  <div className="pt-2">
                    <p className="text-xs font-semibold uppercase text-slate-400 !mb-1">Delivery Address</p>
                    <p className="text-xs text-slate-600">{selectedOrderDetails.shippingAddress}</p>
                  </div>
                </div>
                <div className="mt-6 flex justify-end">
                  <button
                    className="!rounded-lg bg-[#4F3267] px-5 py-2 text-xs font-semibold text-white transition hover:bg-[#3d2452]"
                    onClick={() => setSelectedOrderDetails(null)}
                    type="button"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Track Order Live Modal */}
          {selectedTrackOrder && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs">
              <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl animate-fade-in">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div>
                    <h3 className="!mb-0 text-lg font-bold text-[#4F3267]">
                      Live Tracking
                    </h3>
                    <p className="!mb-0 text-xs text-slate-500">{selectedTrackOrder.id} ({selectedTrackOrder.tracking})</p>
                  </div>
                  <button
                    className="text-slate-400 hover:text-slate-600 transition"
                    onClick={() => setSelectedTrackOrder(null)}
                    type="button"
                  >
                    <CloseIconModal className="size-5" />
                  </button>
                </div>
                <div className="mt-5 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white text-xs font-bold">
                      ✓
                    </div>
                    <div>
                      <p className="!mb-0 text-xs font-bold text-[#4F3267]">Order Placed & Confirmed</p>
                      <p className="!mb-0 text-[11px] text-slate-400">{selectedTrackOrder.date}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white text-xs font-bold">
                      ✓
                    </div>
                    <div>
                      <p className="!mb-0 text-xs font-bold text-[#4F3267]">Quality Checked & Packed</p>
                      <p className="!mb-0 text-[11px] text-slate-400">Lakshya Fulfillment Center, Bengaluru</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#0284C7] text-white text-xs font-bold">
                      →
                    </div>
                    <div>
                      <p className="!mb-0 text-xs font-bold text-[#0284C7]">In Transit with BlueDart Express</p>
                      <p className="!mb-0 text-[11px] text-slate-400">AWB: {selectedTrackOrder.tracking}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 opacity-50">
                    <div className="flex size-6 shrink-0 items-center justify-center rounded-full border border-slate-300 text-slate-400 text-xs">
                      4
                    </div>
                    <div>
                      <p className="!mb-0 text-xs font-semibold text-slate-600">Out for Delivery</p>
                      <p className="!mb-0 text-[11px] text-slate-400">Expected soon</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex justify-end">
                  <button
                    className="!rounded-lg bg-[#4F3267] px-5 py-2 text-xs font-semibold text-white transition hover:bg-[#3d2452]"
                    onClick={() => setSelectedTrackOrder(null)}
                    type="button"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* View Refund Details Modal */}
          {selectedRefundDetails && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs">
              <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl animate-fade-in">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <h3 className="!mb-0 text-lg font-bold text-[#4F3267]">
                    Refund Status: {selectedRefundDetails.id}
                  </h3>
                  <button
                    className="text-slate-400 hover:text-slate-600 transition"
                    onClick={() => setSelectedRefundDetails(null)}
                    type="button"
                  >
                    <CloseIconModal className="size-5" />
                  </button>
                </div>
                <div className="mt-4 space-y-3 text-sm">
                  <div className="flex justify-between border-b border-slate-50 py-2">
                    <span className="text-slate-500">Item:</span>
                    <span className="font-semibold text-[#4F3267]">{selectedRefundDetails.title}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-50 py-2">
                    <span className="text-slate-500">Refund Amount:</span>
                    <span className="text-base font-bold text-emerald-600">
                      {selectedRefundDetails.refundAmount || selectedRefundDetails.total}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-slate-50 py-2">
                    <span className="text-slate-500">Refund Status:</span>
                    <span className="inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-bold text-emerald-700">
                      {selectedRefundDetails.refundStatus || 'Processed & Credited'}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-slate-50 py-2">
                    <span className="text-slate-500">Payment Source:</span>
                    <span className="font-semibold text-slate-700">
                      {selectedRefundDetails.refundMethod || 'Original Payment Method (UPI)'}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-slate-50 py-2">
                    <span className="text-slate-500">Credited Date:</span>
                    <span className="font-semibold text-slate-700">
                      {selectedRefundDetails.refundDate || 'Dec 7, 2023'}
                    </span>
                  </div>
                  <div className="pt-2">
                    <p className="text-xs text-slate-500">
                      The refund has been successfully transferred to your source payment method. For any banking queries, quote ARN #REF-{selectedRefundDetails.id.replace('ORD-', '')}.
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex justify-end">
                  <button
                    className="!rounded-lg bg-[#4F3267] px-5 py-2 text-xs font-semibold text-white transition hover:bg-[#3d2452]"
                    onClick={() => setSelectedRefundDetails(null)}
                    type="button"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}

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
