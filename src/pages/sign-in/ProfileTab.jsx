import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ContactSupportModal from './ContactSupportModal'
import { accountSummaryItems, profileTabs, quickActionItems, recentOrderSummary } from './data'
import {
  AccountSummaryIcon,
  CalendarIcon,
  CameraIcon,
  CheckCircleIcon,
  CheckIconSmall,
  ChevronDownSmallIcon,
  ProfileTabIcon,
} from './icons'

function ProfileTab({ onGoToOrders, onGoToPayment, onGoToRewards, profile, setProfile }) {
  const navigate = useNavigate()
  const fileInputRef = useRef(null)

  const [activeProfileTab, setActiveProfileTab] = useState('Profile Information')
  const [avatarImage, setAvatarImage] = useState(null)
  const [saveSuccess, setSaveSuccess] = useState(false)
  const [showSupportModal, setShowSupportModal] = useState(false)

  const fullName = profile.fullName || 'Admin'

  const handleInputChange = (field, value) => {
    setProfile((prev) => ({ ...prev, [field]: value }))
  }

  const handlePhotoUpload = (event) => {
    const file = event.target.files?.[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setAvatarImage(imageUrl)
    }
  }

  const handleSaveProfile = (e) => {
    e.preventDefault()
    setSaveSuccess(true)
    setTimeout(() => {
      setSaveSuccess(false)
    }, 3000)
  }

  const getInitials = () => {
    const trimmed = profile.fullName ? profile.fullName.trim() : ''
    return trimmed ? trimmed.charAt(0).toUpperCase() : 'S'
  }

  const handleAccountSummaryClick = (id) => {
    if (id === 'orders') {
      onGoToOrders()
      return
    }
    if (id === 'wishlist') {
      navigate('/wishlist')
      return
    }
    if (id === 'try-at-home') {
      navigate('/try-at-home')
      return
    }
    if (id === 'rewards') {
      onGoToRewards()
    }
  }

  const handleQuickActionClick = (id) => {
    if (id === 'orders') {
      onGoToOrders()
      return
    }
    if (id === 'addresses') {
      setActiveProfileTab('Addresses')
      return
    }
    if (id === 'payment') {
      onGoToPayment()
      return
    }
    if (id === 'support') {
      setShowSupportModal(true)
    }
  }

  return (
    <div className="w-full">
      {/* Page Title & Subtitle */}
      <div>
        <h1 className="!mb-0 !text-xl sm:!text-2xl !font-bold !text-[#4F3267]">My Profile</h1>
        <p className="!mb-0 mt-1 text-sm text-slate-400">
          Manage your personal information, addresses and account preferences
        </p>
      </div>

      {/* Profile Tab Navigation */}
      <div className="mt-4 flex gap-6 sm:gap-8 border-b border-slate-200 overflow-x-auto no-scrollbar">
        {profileTabs.map((tab) => (
          <button
            className={`-mb-px flex items-center gap-1.5 border-b-2 pb-3 text-xs sm:text-sm !font-bold whitespace-nowrap transition ${
              activeProfileTab === tab.id
                ? 'border-[#4F3267] text-[#4F3267]'
                : 'border-transparent text-slate-400 hover:text-slate-600'
            }`}
            key={tab.id}
            onClick={() => setActiveProfileTab(tab.id)}
            type="button"
          >
            <ProfileTabIcon className="size-4" type={tab.icon} />
            {tab.id}
          </button>
        ))}
      </div>

      {/* Tab Content: Profile Information */}
      {activeProfileTab === 'Profile Information' && (
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Left Column */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            {/* Personal Information Card */}
            <div className="rounded-2xl border border-slate-200/80 bg-white p-3 shadow-sm sm:p-6">
              <h3 className="!mb-5 !text-base !font-bold !text-[#4F3267]">
                Personal Information
              </h3>

              {saveSuccess && (
                <div className="mb-5 flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-800">
                  <CheckCircleIcon className="size-5 shrink-0 text-emerald-600" />
                  <span>Profile information updated successfully!</span>
                </div>
              )}

              <form className="flex flex-col gap-5 sm:flex-row" onSubmit={handleSaveProfile}>
                {/* Avatar */}
                <div className="flex shrink-0 flex-col items-center">
                  {avatarImage ? (
                    <img
                      alt={fullName}
                      className="size-30 rounded-full object-cover shadow-sm"
                      src={avatarImage}
                    />
                  ) : (
                    <div className="flex size-30 items-center justify-center rounded-full bg-purple-100">
                      <span className="select-none text-5xl font-bold text-purple-600">
                        {getInitials()}
                      </span>
                    </div>
                  )}
                  <input
                    accept="image/*"
                    className="hidden"
                    onChange={handlePhotoUpload}
                    ref={fileInputRef}
                    type="file"
                  />
                  <button
                    className="mt-3 inline-flex items-center gap-1.5 whitespace-nowrap !rounded-lg border border-purple-200 px-3 py-1.5 !text-xs font-semibold text-purple-600 transition hover:bg-purple-50"
                    onClick={() => fileInputRef.current?.click()}
                    type="button"
                  >
                    <CameraIcon className="size-3.5" /> Change Photo
                  </button>
                </div>

                {/* Fields */}
                <div className="flex flex-1 flex-col gap-3">
                  {/* Full Name */}
                  <div>
                    <label className="!mb-1.5 block text-sm font-medium text-slate-700">
                      Full Name
                    </label>
                    <input
                      className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-1.5 text-sm text-slate-800 shadow-sm transition focus:border-[#4F3267] focus:outline-none focus:ring-1 focus:ring-[#4F3267]"
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      required
                      type="text"
                      value={profile.fullName}
                    />
                  </div>

                  {/* Email Address */}
                  <div>
                    <label className="!mb-1.5 block text-sm font-medium text-slate-700">
                      Email Address
                    </label>
                    <div className="relative">
                      <input
                        className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-1.5 pr-28 text-sm text-slate-800 shadow-sm transition focus:border-[#4F3267] focus:outline-none focus:ring-1 focus:ring-[#4F3267]"
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                        type="email"
                        value={profile.email}
                      />
                      <span className="absolute right-2.5 top-1/2 inline-flex -translate-y-1/2 items-center gap-1 rounded bg-[#DCFCE7] px-2.5 py-1 text-[11px] font-bold text-[#16A34A]">
                        <CheckIconSmall className="size-3" /> Verified
                      </span>
                    </div>
                  </div>

                  {/* Mobile Number */}
                  <div>
                    <label className="!mb-1.5 block text-sm font-medium text-slate-700">
                      Mobile Number
                    </label>
                    <div className="relative">
                      <input
                        className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-1.5 pr-28 text-sm text-slate-800 shadow-sm transition focus:border-[#4F3267] focus:outline-none focus:ring-1 focus:ring-[#4F3267]"
                        onChange={(e) => handleInputChange('mobileNumber', e.target.value)}
                        required
                        type="tel"
                        value={profile.mobileNumber}
                      />
                      <span className="absolute right-2.5 top-1/2 inline-flex -translate-y-1/2 items-center gap-1 rounded bg-[#DCFCE7] px-2.5 py-1 text-[11px] font-bold text-[#16A34A]">
                        <CheckIconSmall className="size-3" /> Verified
                      </span>
                    </div>
                  </div>

                  {/* Date of Birth + Gender */}
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label className="!mb-1.5 block text-sm font-medium text-slate-700">
                        Date of Birth
                      </label>
                      <div className="relative">
                        <input
                          className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-1.5 pr-10 !text-sm !text-slate-800 !shadow-sm transition focus:border-[#4F3267] focus:outline-none focus:ring-1 focus:ring-[#4F3267]"
                          onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                          type="text"
                          value={profile.dateOfBirth}
                        />
                        <CalendarIcon className="pointer-events-none absolute right-3.5 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
                      </div>
                    </div>
                    <div>
                      <label className="!mb-1.5 block text-sm font-medium text-slate-700">
                        Gender
                      </label>
                      <select
                        className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-1.5 !text-sm !text-slate-800 !shadow-sm transition focus:border-[#4F3267] focus:outline-none focus:ring-1 focus:ring-[#4F3267]"
                        onChange={(e) => handleInputChange('gender', e.target.value)}
                        value={profile.gender}
                      >
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                        <option value="Other">Other</option>
                        <option value="Prefer not to say">Prefer not to say</option>
                      </select>
                    </div>
                  </div>

                  {/* PAN Number */}
                  <div>
                    <label className="!mb-1.5 block text-sm font-medium text-slate-700">
                      PAN Number (Optional)
                    </label>
                    <input
                      className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-1.5 !text-sm !text-slate-800 !shadow-sm transition focus:border-[#4F3267] focus:outline-none focus:ring-1 focus:ring-[#4F3267]"
                      onChange={(e) => handleInputChange('panNumber', e.target.value)}
                      type="text"
                      value={profile.panNumber}
                    />
                  </div>

                  {/* Occupation */}
                  <div>
                    <label className="!mb-1.5 block text-sm font-medium text-slate-700">
                      Occupation (Optional)
                    </label>
                    <input
                      className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-1.5 !text-sm !text-slate-800 !shadow-sm transition focus:border-[#4F3267] focus:outline-none focus:ring-1 focus:ring-[#4F3267]"
                      onChange={(e) => handleInputChange('occupation', e.target.value)}
                      type="text"
                      value={profile.occupation}
                    />
                  </div>

                  {/* Save Changes Button */}
                  <div>
                    <button
                      className="!rounded-lg bg-[#4F3267] px-6 py-2.5 !text-sm !font-semibold text-white shadow-md transition hover:bg-[#3d2452] active:scale-[0.98]"
                      type="submit"
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* Recent Order Card */}
            <div className="rounded-2xl border border-slate-200/80 bg-white p-3 shadow-sm sm:p-6">
              <div className="flex items-center justify-between">
                <h3 className="!mb-0 !text-base !font-bold !text-[#4F3267]">Recent Order</h3>
                <button
                  className="!text-xs font-bold text-purple-600 transition hover:text-purple-800"
                  onClick={onGoToOrders}
                  type="button"
                >
                  View All Orders
                </button>
              </div>
              <button
                className="mt-4 flex w-full items-center justify-between gap-4 rounded-xl border border-slate-100 p-3 text-left transition hover:bg-slate-50"
                onClick={onGoToOrders}
                type="button"
              >
                <div className="flex items-center gap-3">
                  <img
                    alt={recentOrderSummary.title}
                    className="size-12 shrink-0 rounded-lg object-cover"
                    src={recentOrderSummary.image}
                  />
                  <div>
                    <p className="!mb-0 text-sm font-bold text-[#4F3267]">
                      {recentOrderSummary.title}
                    </p>
                    <p className="!mb-0 text-xs text-slate-400">
                      Order ID: {recentOrderSummary.orderId}
                    </p>
                    <p className="!mb-0 text-xs text-slate-400">{recentOrderSummary.date}</p>
                  </div>
                </div>
                <div className="flex shrink-0 items-center gap-3">
                  <div className="text-right">
                    <p className="!mb-0 text-sm font-bold text-[#4F3267]">
                      {recentOrderSummary.amount}
                    </p>
                    <p className="!mb-0 text-xs font-semibold text-emerald-600">
                      {recentOrderSummary.status}
                    </p>
                  </div>
                  <ChevronDownSmallIcon className="size-4 -rotate-90 text-slate-400" />
                </div>
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            {/* Account Summary Card */}
            <div className="rounded-2xl border border-slate-200/80 bg-white p-3 shadow-sm sm:p-6">
              <h3 className="!mb-2 !text-base !font-bold !text-[#4F3267]">Account Summary</h3>
              <div className="flex flex-col divide-y divide-slate-100">
                {accountSummaryItems.map((item) => (
                  <button
                    className="flex items-center justify-between gap-3 py-2 text-left transition hover:bg-slate-50"
                    key={item.id}
                    onClick={() => handleAccountSummaryClick(item.id)}
                    type="button"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex size-9 items-center justify-center rounded bg-purple-100 text-purple-600">
                        <AccountSummaryIcon className="size-4" type={item.icon} />
                      </div>
                      <span className="text-sm font-semibold text-slate-600">{item.label}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span
                        className={`text-sm font-extrabold ${
                          item.highlight ? 'text-[#DE57E5]' : 'text-[#4F3267]'
                        }`}
                      >
                        {item.value}
                      </span>
                      <ChevronDownSmallIcon className="size-3.5 -rotate-90 text-slate-300" />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Actions Card */}
            <div className="rounded-2xl border border-slate-200/80 bg-white p-3 shadow-sm sm:p-6">
              <h3 className="!mb-2 !text-base !font-bold !text-[#4F3267]">Quick Actions</h3>
              <div className="flex flex-col divide-y divide-slate-100">
                {quickActionItems.map((item) => (
                  <button
                    className="flex items-center justify-between gap-3 py-2 text-left transition hover:bg-slate-50"
                    key={item.id}
                    onClick={() => handleQuickActionClick(item.id)}
                    type="button"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex size-9 items-center justify-center rounded bg-purple-100 text-purple-600">
                        <AccountSummaryIcon className="size-4" type={item.icon} />
                      </div>
                      <div>
                        <p className="!mb-0 text-sm font-semibold text-[#4F3267]">{item.title}</p>
                        <p className="!mb-0 text-[11px] text-slate-400">{item.subtitle}</p>
                      </div>
                    </div>
                    <ChevronDownSmallIcon className="size-3.5 -rotate-90 shrink-0 text-slate-300" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab Content: Addresses / Preferences / Security placeholders */}
      {activeProfileTab !== 'Profile Information' && (
        <div className="mt-8 flex flex-col items-center justify-center gap-3 rounded-2xl border border-slate-200/80 bg-white py-20 text-center">
          <div className="flex size-14 items-center justify-center rounded-full bg-purple-50 text-purple-600">
            <ProfileTabIcon
              className="size-7"
              type={profileTabs.find((tab) => tab.id === activeProfileTab)?.icon}
            />
          </div>
          <p className="!mb-0 text-base font-bold text-[#4F3267]">
            No {activeProfileTab.toLowerCase()} added yet
          </p>
          <p className="max-w-sm text-xs text-slate-500">
            {activeProfileTab === 'Addresses' &&
              'Save a delivery address to speed up checkout next time.'}
            {activeProfileTab === 'Preferences' &&
              'Set your shopping and notification preferences here.'}
            {activeProfileTab === 'Security' &&
              'Manage your password and account security settings here.'}
          </p>
        </div>
      )}

      <ContactSupportModal onClose={() => setShowSupportModal(false)} open={showSupportModal} />
    </div>
  )
}

export default ProfileTab
