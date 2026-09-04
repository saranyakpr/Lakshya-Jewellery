import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import goldRing from '../assets/img/minimalist 22kt gold ring for women, delicate thin band.png'
import studEarrings from '../assets/img/image 27.png'
import braceletImage from '../assets/img/collection-swirl.png'

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

function ReceiptRefundIcon(props) {
  return (
    <svg fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 14l6-6m0 0l-3.75 0M15 8l0 3.75" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  )
}

function CheckmarkIcon(props) {
  return (
    <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

function ProgressCircleIcon(props) {
  return (
    <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  )
}

function InfoHelpIcon(props) {
  return (
    <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" {...props}>
      <circle cx="12" cy="12" r="10" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 16v-4m0-4h.01" />
    </svg>
  )
}

function ChevronDownSmallIcon(props) {
  return (
    <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
    </svg>
  )
}

function PhoneSupportIcon(props) {
  return (
    <svg fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  )
}

function MailSupportIcon(props) {
  return (
    <svg fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  )
}

function ThreeDotsIcon(props) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <circle cx="12" cy="5" r="1.8" />
      <circle cx="12" cy="12" r="1.8" />
      <circle cx="12" cy="19" r="1.8" />
    </svg>
  )
}

function ShieldIcon(props) {
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
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" />
    </svg>
  )
}

function WalletIcon(props) {
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
      <path d="M21 7H5a2 2 0 00-2 2v8a2 2 0 002 2h16a2 2 0 002-2v-6a2 2 0 00-2-2h-4a1.5 1.5 0 000 3h4" />
      <path d="M16 7V5.5A1.5 1.5 0 0014.5 4H5" />
    </svg>
  )
}

function ClockIcon(props) {
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
      <path d="M12 7v5l3 3" />
    </svg>
  )
}

function XMarkIcon(props) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.5"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  )
}

function RefundStatIcon({ type, className }) {
  if (type === 'total') return <WalletIcon className={className} />
  if (type === 'approved') return <CheckIconSmall className={className} />
  if (type === 'in-progress') return <ClockIcon className={className} />
  if (type === 'rejected') return <XMarkIcon className={className} />
  return null
}

function VisaBadge({ className = '' }) {
  return (
    <div
      className={`flex items-center justify-center rounded bg-[#1A1F71] font-black italic text-white ${className}`}
    >
      VISA
    </div>
  )
}

function MastercardBadge({ className = '' }) {
  return (
    <div className={`flex items-center ${className}`}>
      <span className="size-4 rounded-full bg-[#EB001B] opacity-90" />
      <span className="-ml-1.5 size-4 rounded-full bg-[#F79E1B] opacity-90" />
    </div>
  )
}

function RupayBadge({ className = '' }) {
  return (
    <div className={`font-black italic text-[#0B4EA2] ${className}`}>
      Ru<span className="text-[#F47216]">Pay</span>
    </div>
  )
}

function UpiBadge({ className = '' }) {
  return <div className={`font-black text-slate-700 ${className}`}>UPI</div>
}

function HeartIcon(props) {
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
      <path d="M12 20s-7-4.35-9.5-8.5C1 8.5 2.5 5 6 5c2 0 3.5 1.2 4.5 2.6C11.5 6.2 13 5 15 5c3.5 0 5 3.5 3.5 6.5C19 15.65 12 20 12 20Z" />
    </svg>
  )
}

function StarIcon(props) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.6"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M12 3.5l2.6 5.4 5.9.7-4.3 4.1 1.1 5.9L12 16.7l-5.3 2.9 1.1-5.9-4.3-4.1 5.9-.7L12 3.5Z" />
    </svg>
  )
}

function MapPinIcon(props) {
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
      <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.3" />
    </svg>
  )
}

function CreditCardIcon(props) {
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
      <rect height="14" rx="2" width="20" x="2" y="5" />
      <path d="M2 10h20" />
    </svg>
  )
}

function SlidersIcon(props) {
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
      <path d="M4 6h9M17 6h3M4 12h3M9 12h11M4 18h13M19 18h1" />
      <circle cx="13" cy="6" r="1.6" />
      <circle cx="7" cy="12" r="1.6" />
      <circle cx="17" cy="18" r="1.6" />
    </svg>
  )
}

function CalendarIcon(props) {
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
      <rect height="17" rx="2" width="18" x="3" y="4.5" />
      <path d="M3 9.5h18M8 3v3M16 3v3" />
    </svg>
  )
}

function CameraIcon(props) {
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
      <path d="M4 8a2 2 0 0 1 2-2h1.2l.9-1.5A1.5 1.5 0 0 1 9.4 4h5.2a1.5 1.5 0 0 1 1.3.8L16.8 6H18a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8Z" />
      <circle cx="12" cy="13" r="3.2" />
    </svg>
  )
}

function ProfileTabIcon({ type, className }) {
  if (type === 'profile') return <UserOutlineIcon className={className} />
  if (type === 'addresses') return <MapPinIcon className={className} />
  if (type === 'preferences') return <SlidersIcon className={className} />
  if (type === 'security') return <ShieldIcon className={className} />
  return null
}

function AccountSummaryIcon({ type, className }) {
  if (type === 'orders') return <BoxIcon className={className} />
  if (type === 'wishlist') return <HeartIcon className={className} />
  if (type === 'try-at-home') return <HomeOutlineIcon className={className} />
  if (type === 'rewards') return <StarIcon className={className} />
  if (type === 'addresses') return <MapPinIcon className={className} />
  if (type === 'payment') return <CreditCardIcon className={className} />
  if (type === 'support') return <InfoHelpIcon className={className} />
  return null
}

const navGroups = [
  {
    label: 'Orders',
    items: [
      { id: 'orders', label: 'Orders and Returns' },
      { id: 'payment', label: 'Payment & Refund' },
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
const paymentTabs = ['PAYMENT METHODS', 'TRANSACTIONS', 'REFUND REQUESTS', 'REFUND POLICY']

const initialRefundRequests = [
  {
    id: 'REF-001',
    orderId: '#LJ123456789',
    title: 'Classic Gold Ring',
    image: goldRing,
    requestedDate: '20 May 2024',
    amount: '₹1,250',
    status: 'Approved',
    refundedDate: '22 May 2024',
    refundedTo: 'UPI •••• 1234',
    methodType: 'UPI (Google Pay / PhonePe)',
    arn: 'ARN-8392019482',
    reason: 'Customer requested cancellation before order dispatch',
    items: [{ name: 'Classic Gold Ring (22KT Gold)', qty: 1, price: '₹1,250' }],
  },
  {
    id: 'REF-002',
    orderId: '#LJ123456123',
    title: 'Silver Floral Earrings',
    image: studEarrings,
    requestedDate: '15 May 2024',
    amount: '₹800',
    status: 'Approved',
    refundedDate: '17 May 2024',
    refundedTo: 'Bank •••• 4567',
    methodType: 'HDFC Bank Account (NEFT)',
    arn: 'ARN-5729104821',
    reason: 'Size exchange adjusted amount refund',
    items: [{ name: 'Silver Floral Stud Earrings (925 Silver)', qty: 1, price: '₹800' }],
  },
  {
    id: 'REF-003',
    orderId: '#LJ123455999',
    title: 'Diamond Bracelet',
    image: braceletImage,
    requestedDate: '10 May 2024',
    amount: '₹400',
    status: 'Approved',
    refundedDate: '12 May 2024',
    refundedTo: 'UPI •••• 9876',
    methodType: 'UPI (Paytm / BHIM)',
    arn: 'ARN-2948103957',
    reason: 'Special promotional coupon balance adjustment refund',
    items: [{ name: 'Delicate Diamond Swirl Bracelet (18KT Gold)', qty: 1, price: '₹400' }],
  },
]

const refundStats = [
  {
    id: 'total',
    title: 'Total Refunds',
    amount: '₹2,450',
    subtext: 'Across 3 requests',
    iconBg: 'bg-[#8B5CF6]',
    icon: 'total',
  },
  {
    id: 'approved',
    title: 'Approved',
    amount: '₹2,450',
    subtext: '3 requests',
    iconBg: 'bg-[#22C55E]',
    icon: 'approved',
  },
  {
    id: 'in-progress',
    title: 'In Progress',
    amount: '₹0',
    subtext: '0 requests',
    iconBg: 'bg-[#F97316]',
    icon: 'in-progress',
  },
  {
    id: 'rejected',
    title: 'Rejected',
    amount: '₹0',
    subtext: '0 requests',
    iconBg: 'bg-[#EF4444]',
    icon: 'rejected',
  },
]

const initialPaymentMethods = [
  {
    id: 'pm-1',
    brand: 'visa',
    label: 'Visa ending in 4242',
    detail: 'Expires 12/26',
    holder: 'User',
    isDefault: true,
  },
  {
    id: 'pm-2',
    brand: 'upi',
    label: 'UPI ID',
    detail: 'shakthi235@okaxis',
    holder: 'User',
    isDefault: false,
  },
]

const transactionsPageOne = [
  {
    id: '#LJ123456789',
    date: '22 May 2024, 10:30 AM',
    description: 'Classic Gold Ring',
    method: 'UPI (•••• 1234)',
    amount: '₹1,250',
    status: 'Success',
  },
  {
    id: '#LJ123456123',
    date: '17 May 2024, 02:15 PM',
    description: 'Silver Floral Earrings',
    method: 'Bank (•••• 4567)',
    amount: '₹800',
    status: 'Success',
  },
  {
    id: '#LJ123455999',
    date: '12 May 2024, 11:05 AM',
    description: 'Diamond Bracelet',
    method: 'UPI (•••• 9876)',
    amount: '₹400',
    status: 'Refunded',
  },
  {
    id: '#LJ123455555',
    date: '08 May 2024, 06:40 PM',
    description: 'Gold Pendant',
    method: 'Card (•••• 4242)',
    amount: '₹2,150',
    status: 'Success',
  },
  {
    id: '#LJ123455111',
    date: '01 May 2024, 09:20 AM',
    description: 'Pearl Necklace',
    method: 'UPI (•••• 1234)',
    amount: '₹1,950',
    status: 'Failed',
  },
]

const transactionsPageTwo = [
  {
    id: '#LJ123454777',
    date: '24 Apr 2024, 04:10 PM',
    description: 'Rose Gold Chain',
    method: 'Card (•••• 4242)',
    amount: '₹3,400',
    status: 'Success',
  },
  {
    id: '#LJ123454321',
    date: '18 Apr 2024, 01:50 PM',
    description: 'Kundan Choker Set',
    method: 'UPI (•••• 1234)',
    amount: '₹5,600',
    status: 'Success',
  },
]

const refundPolicyCards = [
  {
    id: 'returns',
    icon: 'returns',
    title: '30-Day Easy Returns',
    desc: 'You can request a return within 30 days of delivery for most products.',
  },
  {
    id: 'eligibility',
    icon: 'eligibility',
    title: 'Eligibility',
    desc: 'Items must be unused, in original condition with all tags and certificates.',
  },
  {
    id: 'process',
    icon: 'process',
    title: 'Refund Process',
    desc: 'Once we receive and inspect your return, refunds are processed within 5-7 business days.',
  },
  {
    id: 'methods',
    icon: 'methods',
    title: 'Refund Methods',
    desc: 'Refunds are issued to the original payment method or as store credit.',
  },
]

const profileTabs = [
  { id: 'Profile Information', icon: 'profile' },
  { id: 'Addresses', icon: 'addresses' },
  { id: 'Preferences', icon: 'preferences' },
  { id: 'Security', icon: 'security' },
]

const accountSummaryItems = [
  { id: 'orders', icon: 'orders', label: 'Total Orders', value: '12' },
  { id: 'wishlist', icon: 'wishlist', label: 'Wishlist Items', value: '24' },
  { id: 'try-at-home', icon: 'try-at-home', label: 'Try at Home', value: '3' },
  { id: 'rewards', highlight: true, icon: 'rewards', label: 'Reward Points', value: '250' },
]

const quickActionItems = [
  { id: 'orders', icon: 'orders', subtitle: 'Track and manage your orders', title: 'View Orders' },
  {
    id: 'addresses',
    icon: 'addresses',
    subtitle: 'Add or edit your addresses',
    title: 'Manage Addresses',
  },
  {
    id: 'payment',
    icon: 'payment',
    subtitle: 'View and manage payment options',
    title: 'Payment Methods',
  },
  {
    id: 'support',
    icon: 'support',
    subtitle: "We're here to help you",
    title: 'Contact Support',
  },
]

const recentOrderSummary = {
  amount: '₹1,250',
  date: '23 May 2024',
  image: goldRing,
  orderId: '#LJ123456789',
  status: 'Delivered',
  title: 'Classic Gold Ring',
}

function SignInPage() {
  const navigate = useNavigate()
  const fileInputRef = useRef(null)

  // Navigation State
  const [activeNavItem, setActiveNavItem] = useState('orders')
  const [activeOrderTab, setActiveOrderTab] = useState(orderTabs[0])
  const [activePaymentTab, setActivePaymentTab] = useState('PAYMENT METHODS')
  const [activeProfileTab, setActiveProfileTab] = useState('Profile Information')

  // Orders State
  const [orders, setOrders] = useState(initialOrders)
  const [cancelledOrders, setCancelledOrders] = useState(initialCancelledOrders)
  const [selectedOrderDetails, setSelectedOrderDetails] = useState(null)
  const [selectedTrackOrder, setSelectedTrackOrder] = useState(null)
  const [selectedRefundDetails, setSelectedRefundDetails] = useState(null)
  const [refundRequests, setRefundRequests] = useState(initialRefundRequests)
  const [selectedRefundModal, setSelectedRefundModal] = useState(null)
  const [showSupportModal, setShowSupportModal] = useState(false)
  const [actionNotice, setActionNotice] = useState(null)

  // Payment Methods State
  const [paymentMethods, setPaymentMethods] = useState(initialPaymentMethods)
  const [openMethodMenu, setOpenMethodMenu] = useState(null)

  // Transactions State
  const [transactionPage, setTransactionPage] = useState(1)
  const [selectedTransaction, setSelectedTransaction] = useState(null)

  // Profile Form State
  const [profile, setProfile] = useState({
    dateOfBirth: '1998-05-12',
    email: 'user@gmail.com',
    fullName: 'User',
    gender: 'Female',
    mobileNumber: '+91 98765 43210',
    occupation: 'Software Developer',
    panNumber: 'ABCDE1234F',
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
      setActivePaymentTab('PAYMENT METHODS')
      return
    }
    if (item.id === 'profile') {
      setActiveNavItem('profile')
      setActiveProfileTab('Profile Information')
      return
    }
    setActiveNavItem(item.id)
  }

  const handleAccountSummaryClick = (id) => {
    if (id === 'orders') {
      setActiveNavItem('orders')
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
      setActiveNavItem('xclusive')
    }
  }

  const handleQuickActionClick = (id) => {
    if (id === 'orders') {
      setActiveNavItem('orders')
      return
    }
    if (id === 'addresses') {
      setActiveProfileTab('Addresses')
      return
    }
    if (id === 'payment') {
      setActiveNavItem('payment')
      setActivePaymentTab('PAYMENT METHODS')
      return
    }
    if (id === 'support') {
      setShowSupportModal(true)
    }
  }

  const handleSetDefaultMethod = (id) => {
    setPaymentMethods((prev) => prev.map((m) => ({ ...m, isDefault: m.id === id })))
    setOpenMethodMenu(null)
    setActionNotice('Default payment method updated.')
    setTimeout(() => setActionNotice(null), 3000)
  }

  const handleRemoveMethod = (id) => {
    setPaymentMethods((prev) => prev.filter((m) => m.id !== id))
    setOpenMethodMenu(null)
    setActionNotice('Payment method removed.')
    setTimeout(() => setActionNotice(null), 3000)
  }

  const handleAddMethodClick = () => {
    setActionNotice('Add Payment Method flow coming soon.')
    setTimeout(() => setActionNotice(null), 3000)
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
    const trimmed = profile.fullName ? profile.fullName.trim() : ''
    return trimmed ? trimmed.charAt(0).toUpperCase() : 'S'
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
              {/* Profile View */}
              {activeNavItem === 'profile' && (
                <div className="w-full">
                  {/* Page Title & Subtitle */}
                  <div>
                    <h1 className="!mb-0 !text-xl sm:!text-2xl !font-bold !text-[#4F3267]">
                      My Profile
                    </h1>
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

                          <form className="flex flex-col gap-5" onSubmit={handleSaveProfile}>
                            <div className="flex flex-col items-start gap-5 sm:flex-row">
                              {/* Avatar */}
                              <div className="flex shrink-0 flex-col items-center">
                                {avatarImage ? (
                                  <img
                                    alt={fullName}
                                    className="!size-30 rounded-full object-cover shadow-sm"
                                    src={avatarImage}
                                  />
                                ) : (
                                  <div className="flex size-16 items-center justify-center rounded-full bg-purple-100">
                                    <span className="select-none text-2xl font-bold text-purple-600">
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
                                  className="mt-3 inline-flex items-center gap-1.5 !rounded-lg border border-purple-200 px-3 py-1.5 text-xs font-semibold text-purple-600 transition hover:bg-purple-50"
                                  onClick={() => fileInputRef.current?.click()}
                                  type="button"
                                >
                                  <CameraIcon className="size-3.5" /> Change Photo
                                </button>
                              </div>

                              {/* Full Name */}
                              <div className="w-full flex-1">
                                <label className="!mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#4F3267]">
                                  Full Name
                                </label>
                                <input
                                  className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-800 shadow-sm transition focus:border-[#4F3267] focus:outline-none focus:ring-1 focus:ring-[#4F3267]"
                                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                                  required
                                  type="text"
                                  value={profile.fullName}
                                />
                              </div>
                            </div>

                            {/* Email Address */}
                            <div>
                              <label className="!mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#4F3267]">
                                Email Address
                              </label>
                              <div className="flex items-center gap-3">
                                <input
                                  className="w-full flex-1 rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-800 shadow-sm transition focus:border-[#4F3267] focus:outline-none focus:ring-1 focus:ring-[#4F3267]"
                                  onChange={(e) => handleInputChange('email', e.target.value)}
                                  required
                                  type="email"
                                  value={profile.email}
                                />
                                <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-[#DCFCE7] px-2.5 py-1 text-[11px] font-bold text-[#16A34A]">
                                  <CheckIconSmall className="size-3" /> Verified
                                </span>
                              </div>
                            </div>

                            {/* Mobile Number */}
                            <div>
                              <label className="!mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#4F3267]">
                                Mobile Number
                              </label>
                              <div className="flex items-center gap-3">
                                <input
                                  className="w-full flex-1 rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-800 shadow-sm transition focus:border-[#4F3267] focus:outline-none focus:ring-1 focus:ring-[#4F3267]"
                                  onChange={(e) =>
                                    handleInputChange('mobileNumber', e.target.value)
                                  }
                                  required
                                  type="tel"
                                  value={profile.mobileNumber}
                                />
                                <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-[#DCFCE7] px-2.5 py-1 text-[11px] font-bold text-[#16A34A]">
                                  <CheckIconSmall className="size-3" /> Verified
                                </span>
                              </div>
                            </div>

                            {/* Date of Birth + Gender */}
                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                              <div>
                                <label className="!mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#4F3267]">
                                  Date of Birth
                                </label>
                                <div className="relative">
                                  <input
                                    className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-800 shadow-sm transition focus:border-[#4F3267] focus:outline-none focus:ring-1 focus:ring-[#4F3267]"
                                    onChange={(e) =>
                                      handleInputChange('dateOfBirth', e.target.value)
                                    }
                                    type="date"
                                    value={profile.dateOfBirth}
                                  />
                                  {/* <CalendarIcon className="pointer-events-none absolute right-3.5 top-1/2 size-4 -translate-y-1/2 text-slate-400" /> */}
                                </div>
                              </div>
                              <div>
                                <label className="!mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#4F3267]">
                                  Gender
                                </label>
                                <select
                                  className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-800 shadow-sm transition focus:border-[#4F3267] focus:outline-none focus:ring-1 focus:ring-[#4F3267]"
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
                              <label className="!mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#4F3267]">
                                PAN Number (Optional)
                              </label>
                              <input
                                className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-800 shadow-sm transition focus:border-[#4F3267] focus:outline-none focus:ring-1 focus:ring-[#4F3267]"
                                onChange={(e) => handleInputChange('panNumber', e.target.value)}
                                type="text"
                                value={profile.panNumber}
                              />
                            </div>

                            {/* Occupation */}
                            <div>
                              <label className="!mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#4F3267]">
                                Occupation (Optional)
                              </label>
                              <input
                                className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-800 shadow-sm transition focus:border-[#4F3267] focus:outline-none focus:ring-1 focus:ring-[#4F3267]"
                                onChange={(e) => handleInputChange('occupation', e.target.value)}
                                type="text"
                                value={profile.occupation}
                              />
                            </div>

                            {/* Save Changes Button */}
                            <div>
                              <button
                                className="!rounded-lg bg-[#4F3267] px-6 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-[#3d2452] active:scale-[0.98]"
                                type="submit"
                              >
                                Save Changes
                              </button>
                            </div>
                          </form>
                        </div>

                        {/* Recent Order Card */}
                        <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm sm:p-6">
                          <div className="flex items-center justify-between">
                            <h3 className="!mb-0 text-base font-bold text-[#4F3267]">
                              Recent Order
                            </h3>
                            <button
                              className="!text-xs font-bold text-purple-600 transition hover:text-purple-800"
                              onClick={() => setActiveNavItem('orders')}
                              type="button"
                            >
                              View All Orders
                            </button>
                          </div>
                          <button
                            className="mt-4 flex w-full items-center justify-between gap-4 rounded-xl border border-slate-100 p-3 text-left transition hover:bg-slate-50"
                            onClick={() => setActiveNavItem('orders')}
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
                                <p className="!mb-0 text-xs text-slate-400">
                                  {recentOrderSummary.date}
                                </p>
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
                        <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm sm:p-6">
                          <h3 className="!mb-2 text-base font-bold text-[#4F3267]">
                            Account Summary
                          </h3>
                          <div className="flex flex-col divide-y divide-slate-100">
                            {accountSummaryItems.map((item) => (
                              <button
                                className="flex items-center justify-between gap-3 py-3 text-left transition hover:bg-slate-50"
                                key={item.id}
                                onClick={() => handleAccountSummaryClick(item.id)}
                                type="button"
                              >
                                <div className="flex items-center gap-3">
                                  <div className="flex size-9 items-center justify-center rounded-full bg-purple-50 text-purple-600">
                                    <AccountSummaryIcon className="size-4" type={item.icon} />
                                  </div>
                                  <span className="text-sm font-semibold text-slate-600">
                                    {item.label}
                                  </span>
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
                        <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm sm:p-6">
                          <h3 className="!mb-2 text-base font-bold text-[#4F3267]">
                            Quick Actions
                          </h3>
                          <div className="flex flex-col divide-y divide-slate-100">
                            {quickActionItems.map((item) => (
                              <button
                                className="flex items-center justify-between gap-3 py-3 text-left transition hover:bg-slate-50"
                                key={item.id}
                                onClick={() => handleQuickActionClick(item.id)}
                                type="button"
                              >
                                <div className="flex items-center gap-3">
                                  <div className="flex size-9 items-center justify-center rounded-full bg-purple-50 text-purple-600">
                                    <AccountSummaryIcon className="size-4" type={item.icon} />
                                  </div>
                                  <div>
                                    <p className="!mb-0 text-sm font-semibold text-[#4F3267]">
                                      {item.title}
                                    </p>
                                    <p className="!mb-0 text-[11px] text-slate-400">
                                      {item.subtitle}
                                    </p>
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
                </div>
              )}

              {/* Payment & Refunds View */}
              {(activeNavItem === 'payment' || activeNavItem === 'refunds') && (
                <div className="w-full">
                  {/* Page Title & Subtitle */}
                  <div>
                    <h1 className="!mb-0 !text-xl sm:!text-2xl !font-bold !text-[#4F3267]">
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

                  {/* Tab Content: PAYMENT METHODS */}
                  {activePaymentTab === 'PAYMENT METHODS' && (
                    <div className="mt-3 grid grid-cols-1 gap-6 lg:grid-cols-3">
                      <div className="lg:col-span-2">
                        <h3 className="!mb-4 !text-[1.1rem] !font-bold tracking-wider !text-[#4F3267]">
                          Saved Payment Methods
                        </h3>
                        <div className="flex flex-col gap-3">
                          {paymentMethods.map((method) => (
                            <div
                              className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm"
                              key={method.id}
                            >
                              <div className="flex items-center gap-4">
                                {method.brand === 'visa' ? (
                                  <VisaBadge className="h-8 w-12 text-xs shrink-0" />
                                ) : (
                                  <div className="flex h-8 w-12 shrink-0 items-center justify-center rounded-md bg-slate-100">
                                    <UpiBadge className="text-sm" />
                                  </div>
                                )}
                                <div>
                                  <div className="flex items-center gap-2">
                                    <p className="!mb-0 text-sm font-bold text-[#4F3267]">
                                      {method.label}
                                    </p>
                                    {method.isDefault && (
                                      <span className="inline-flex items-center rounded-full bg-[#EDE9FE] px-2 py-0.5 text-[10px] font-bold text-[#7C3AED]">
                                        Default
                                      </span>
                                    )}
                                  </div>
                                  <p className="!mb-0 text-xs text-slate-400">{method.detail}</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-4">
                                <span className="hidden text-xs text-slate-500 sm:inline">
                                  {method.holder}
                                </span>
                                <div className="relative">
                                  <button
                                    className="p-1 text-slate-400 transition hover:text-slate-600"
                                    onClick={() =>
                                      setOpenMethodMenu(
                                        openMethodMenu === method.id ? null : method.id,
                                      )
                                    }
                                    type="button"
                                  >
                                    <ThreeDotsIcon className="size-5" />
                                  </button>
                                  {openMethodMenu === method.id && (
                                    <div className="absolute right-0 z-10 mt-1 w-40 rounded-lg border border-slate-200 bg-white py-1 shadow-lg">
                                      {!method.isDefault && (
                                        <button
                                          className="block w-full px-3 py-2 text-left text-xs font-semibold text-slate-600 hover:bg-slate-50"
                                          onClick={() => handleSetDefaultMethod(method.id)}
                                          type="button"
                                        >
                                          Set as Default
                                        </button>
                                      )}
                                      <button
                                        className="block w-full px-3 py-2 text-left text-xs font-semibold text-red-500 hover:bg-red-50"
                                        onClick={() => handleRemoveMethod(method.id)}
                                        type="button"
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          ))}

                          <button
                            className="flex items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-purple-200 bg-purple-50/40 py-4 text-sm font-bold text-purple-600 transition hover:bg-purple-50"
                            onClick={handleAddMethodClick}
                            type="button"
                          >
                            <span className="text-lg leading-none">+</span> Add New Payment Method
                          </button>
                        </div>
                      </div>

                      {/* Secure Payments Panel */}
                      <div className="flex flex-col items-center gap-3 rounded-2xl border border-slate-200/80 bg-white p-6 text-center shadow-sm">
                        <div className="flex size-14 items-center justify-center rounded-full bg-purple-50 text-purple-600">
                          <ShieldIcon className="size-7" />
                        </div>
                        <p className="!mb-0 text-base font-bold text-[#4F3267]">
                          100% Secure Payments
                        </p>
                        <p className="!mb-0 text-xs text-slate-500">
                          Your payment information is encrypted and secured. We never store your
                          card details.
                        </p>
                        <div className="mt-2 flex items-center gap-3">
                          <VisaBadge className="h-6 w-10 text-[9px]" />
                          <MastercardBadge className="h-5" />
                          <RupayBadge className="text-xs" />
                          <UpiBadge className="text-xs" />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Tab Content: TRANSACTIONS */}
                  {activePaymentTab === 'TRANSACTIONS' && (
                    <div className="mt-3">
                      <h3 className="!mb-4 !text-[1.1rem] !font-bold tracking-wider !text-[#4F3267]">
                        Transaction History
                      </h3>
                      <div className="overflow-x-auto rounded-2xl border border-slate-200/80 bg-white shadow-sm">
                        <table className="w-full min-w-[900px] text-left text-sm">
                          <thead>
                            <tr className="border-b border-slate-100 bg-slate-50/60 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                              <th className="whitespace-nowrap px-5 py-3">Order ID</th>
                              <th className="whitespace-nowrap px-5 py-3">Date</th>
                              <th className="whitespace-nowrap px-5 py-3">Description</th>
                              <th className="whitespace-nowrap px-5 py-3">Payment Method</th>
                              <th className="whitespace-nowrap px-5 py-3">Amount</th>
                              <th className="whitespace-nowrap px-5 py-3">Status</th>
                              <th className="px-5 py-3" />
                            </tr>
                          </thead>
                          <tbody>
                            {(transactionPage === 1
                              ? transactionsPageOne
                              : transactionsPageTwo
                            ).map((txn) => (
                              <tr className="border-b border-slate-50 last:border-0" key={txn.id}>
                                <td className="whitespace-nowrap px-5 py-3 font-bold text-[#4F3267]">
                                  {txn.id}
                                </td>
                                <td className="whitespace-nowrap px-5 py-3 text-slate-500">
                                  {txn.date}
                                </td>
                                <td className="whitespace-nowrap px-5 py-3 text-slate-700">
                                  {txn.description}
                                </td>
                                <td className="whitespace-nowrap px-5 py-3 text-slate-500">
                                  {txn.method}
                                </td>
                                <td className="whitespace-nowrap px-5 py-3 font-bold text-[#4F3267]">
                                  {txn.amount}
                                </td>
                                <td className="px-5 py-3">
                                  <span
                                    className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-bold ${
                                      txn.status === 'Success'
                                        ? 'bg-[#DCFCE7] text-[#16A34A]'
                                        : txn.status === 'Refunded'
                                          ? 'bg-[#DBEAFE] text-[#2563EB]'
                                          : 'bg-[#FFE4E6] text-[#E11D48]'
                                    }`}
                                  >
                                    {txn.status}
                                  </span>
                                </td>
                                <td className="px-5 py-3">
                                  <button
                                    className="!rounded-lg border border-purple-200 px-3 py-1 text-xs font-bold text-purple-600 transition hover:bg-purple-50"
                                    onClick={() => setSelectedTransaction(txn)}
                                    type="button"
                                  >
                                    View
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      {/* Pagination */}
                      <div className="mt-5 flex items-center justify-center gap-2">
                        <button
                          className="flex size-8 items-center justify-center rounded-lg border border-slate-200 text-slate-400 transition hover:bg-slate-50 disabled:opacity-40"
                          disabled={transactionPage === 1}
                          onClick={() => setTransactionPage(1)}
                          type="button"
                        >
                          ‹
                        </button>
                        {[1, 2].map((page) => (
                          <button
                            className={`flex size-8 items-center justify-center rounded-lg text-xs font-bold transition ${
                              transactionPage === page
                                ? 'bg-[#4F3267] text-white'
                                : 'border border-slate-200 text-slate-500 hover:bg-slate-50'
                            }`}
                            key={page}
                            onClick={() => setTransactionPage(page)}
                            type="button"
                          >
                            {page}
                          </button>
                        ))}
                        <button
                          className="flex size-8 items-center justify-center rounded-lg border border-slate-200 text-slate-400 transition hover:bg-slate-50 disabled:opacity-40"
                          disabled={transactionPage === 2}
                          onClick={() => setTransactionPage(2)}
                          type="button"
                        >
                          ›
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Tab Content: REFUND REQUESTS */}
                  {activePaymentTab === 'REFUND REQUESTS' && (
                    <div className="mt-3">
                      <h3 className="!mb-4 !text-[1.1rem] !font-bold tracking-wider !text-[#4F3267]">
                        Refund Overview
                      </h3>
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
                        {refundStats.map((stat) => (
                          <div
                            className="flex min-h-[110px] flex-col gap-3 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm"
                            key={stat.id}
                          >
                            <div className="flex gap-2.5">
                              <div
                                className={`flex size-9 shrink-0 items-center justify-center rounded-full text-white ${stat.iconBg}`}
                              >
                                <RefundStatIcon className="size-4" type={stat.icon} />
                              </div>
                                <div>
                                  <span className="text-sm font-semibold text-slate-500">
                                    {stat.title}
                                  </span>
                                  <p className="!mb-0 !text-2xl !font-extrabold text-[#4F3267]">
                                  {stat.amount}
                                </p>
                                <p className="!mb-0 text-xs text-slate-400">{stat.subtext}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Refund Requests List */}
                      <h3 className="!mb-4 mt-3 mt-10 !text-[1.1rem] !font-bold tracking-wider !text-[#4F3267]">
                        Your Refund Requests
                      </h3>
                      <div className="flex flex-col gap-4">
                        {refundRequests.map((req) => (
                          <div
                            className="flex flex-col gap-4 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-5"
                            key={req.id}
                          >
                            <div className="flex items-center gap-4">
                              <img
                                alt={req.title}
                                className="size-14 shrink-0 rounded-xl object-cover"
                                src={req.image}
                              />
                              <div>
                                <p className="!mb-0 text-sm font-bold text-[#4F3267]">
                                  {req.title}
                                </p>
                                <p className="!mb-0 text-xs text-slate-400">
                                  Order ID: {req.orderId}
                                </p>
                                <p className="!mb-0 text-xs text-slate-400">
                                  Requested on: {req.requestedDate}
                                </p>
                              </div>
                            </div>

                            <div className="flex flex-wrap items-center gap-6 sm:gap-10">
                              <div>
                                <p className="!mb-0 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                                  Amount
                                </p>
                                <p className="!mb-0 text-sm font-bold text-[#4F3267]">
                                  {req.amount}
                                </p>
                              </div>
                              <div>
                                <span className="inline-flex items-center rounded-full bg-[#DCFCE7] px-3 py-1 text-xs font-bold text-[#16A34A]">
                                  {req.status}
                                </span>
                                <p className="!mb-0 mt-1 text-[11px] text-slate-400">
                                  Refunded on: {req.refundedDate}
                                </p>
                              </div>
                              <div>
                                <p className="!mb-0 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                                  Refunded to
                                </p>
                                <p className="!mb-0 text-sm font-bold text-[#4F3267]">
                                  {req.refundedTo}
                                </p>
                              </div>
                              <button
                                className="flex items-center gap-1 !rounded-lg border border-purple-200 px-3 py-1.5 text-xs font-bold text-purple-600 transition hover:bg-purple-50"
                                onClick={() => setSelectedRefundModal(req)}
                                type="button"
                              >
                                View Details <ChevronDownSmallIcon className="size-3.5 -rotate-90" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Need Help Bar */}
                      <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl border border-purple-100 bg-purple-50/50 p-4 sm:flex-row sm:items-center sm:p-5">
                        <div className="flex items-center gap-3">
                          <InfoHelpIcon className="size-6 shrink-0 text-purple-500" />
                          <div>
                            <p className="!mb-0 text-sm font-bold text-[#4F3267]">Need Help?</p>
                            <p className="!mb-0 text-xs text-slate-500">
                              If you have any questions about payments or refunds, our support
                              team is here to help.
                            </p>
                          </div>
                        </div>
                        <button
                          className="!rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 px-5 py-2 text-xs font-semibold text-white shadow transition hover:opacity-95 shrink-0"
                          onClick={() => setShowSupportModal(true)}
                          type="button"
                        >
                          Contact Support
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Tab Content: REFUND POLICY */}
                  {activePaymentTab === 'REFUND POLICY' && (
                    <div className="mt-3">
                      <h3 className="!mb-1 !text-[1.1rem] !font-bold tracking-wider !text-[#4F3267]">
                        Our Refund Policy
                      </h3>
                      <p className="!mb-6 text-sm text-slate-400">
                        We want you to shop with confidence. Please read our refund policy
                        carefully.
                      </p>

                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
                        {refundPolicyCards.map((card) => (
                          <div
                            className="flex flex-col items-center gap-3 rounded-2xl border border-slate-200/80 bg-white p-6 text-center shadow-sm"
                            key={card.id}
                          >
                            <div className="flex size-12 items-center justify-center rounded-full bg-purple-50 text-purple-600">
                              {card.icon === 'returns' && <ClockIcon className="size-6" />}
                              {card.icon === 'eligibility' && (
                                <CheckCircleIcon className="size-6" />
                              )}
                              {card.icon === 'process' && <BoxIcon className="size-6" />}
                              {card.icon === 'methods' && <ShieldIcon className="size-6" />}
                            </div>
                            <p className="!mb-0 text-sm font-bold text-[#4F3267]">{card.title}</p>
                            <p className="!mb-0 text-xs text-slate-500">{card.desc}</p>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 flex flex-col items-start justify-between gap-3 rounded-2xl border border-purple-100 bg-purple-50/50 p-4 sm:flex-row sm:items-center sm:p-5">
                        <div className="flex items-start gap-3">
                          <InfoHelpIcon className="size-5 shrink-0 text-purple-500" />
                          <p className="!mb-0 text-xs text-slate-600 sm:text-sm">
                            <span className="font-bold text-[#4F3267]">Note:</span> Custom made,
                            engraved or personalized jewellery are not eligible for returns unless
                            received damaged or defective.
                          </p>
                        </div>
                        <a
                          className="flex shrink-0 items-center gap-1 text-xs font-bold text-purple-600 transition hover:text-purple-800 sm:text-sm"
                          href="#"
                        >
                          Read Full Policy <ArrowRightIconSmall className="size-3.5" />
                        </a>
                      </div>
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
                                  <div className="mt-4 px-2">
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

          {/* Transaction Details Modal */}
          {selectedTransaction && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs">
              <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl animate-fade-in">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <h3 className="!mb-0 text-lg font-bold text-[#4F3267]">
                    Transaction Details
                  </h3>
                  <button
                    className="text-slate-400 hover:text-slate-600 transition"
                    onClick={() => setSelectedTransaction(null)}
                    type="button"
                  >
                    <CloseIconModal className="size-5" />
                  </button>
                </div>
                <div className="mt-4 space-y-3 text-sm">
                  <div className="flex justify-between border-b border-slate-50 py-2">
                    <span className="text-slate-500">Order ID:</span>
                    <span className="font-bold text-[#4F3267]">{selectedTransaction.id}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-50 py-2">
                    <span className="text-slate-500">Date:</span>
                    <span className="font-semibold text-slate-700">
                      {selectedTransaction.date}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-slate-50 py-2">
                    <span className="text-slate-500">Description:</span>
                    <span className="font-semibold text-slate-700">
                      {selectedTransaction.description}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-slate-50 py-2">
                    <span className="text-slate-500">Payment Method:</span>
                    <span className="font-semibold text-slate-700">
                      {selectedTransaction.method}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-slate-50 py-2">
                    <span className="text-slate-500">Amount:</span>
                    <span className="text-base font-extrabold text-[#4F3267]">
                      {selectedTransaction.amount}
                    </span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-slate-500">Status:</span>
                    <span
                      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-bold ${
                        selectedTransaction.status === 'Success'
                          ? 'bg-[#DCFCE7] text-[#16A34A]'
                          : selectedTransaction.status === 'Refunded'
                            ? 'bg-[#DBEAFE] text-[#2563EB]'
                            : 'bg-[#FFE4E6] text-[#E11D48]'
                      }`}
                    >
                      {selectedTransaction.status}
                    </span>
                  </div>
                </div>
                <div className="mt-6 flex justify-end">
                  <button
                    className="!rounded-lg bg-[#4F3267] px-5 py-2 text-xs font-semibold text-white transition hover:bg-[#3d2452]"
                    onClick={() => setSelectedTransaction(null)}
                    type="button"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Refund Request Details Modal */}
          {selectedRefundModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs">
              <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl animate-fade-in">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <h3 className="!mb-0 text-lg font-bold text-[#4F3267]">
                    Refund Details: {selectedRefundModal.orderId}
                  </h3>
                  <button
                    className="text-slate-400 hover:text-slate-600 transition"
                    onClick={() => setSelectedRefundModal(null)}
                    type="button"
                  >
                    <CloseIconModal className="size-5" />
                  </button>
                </div>
                <div className="mt-4 space-y-3 text-sm">
                  <div className="flex items-center gap-3 border-b border-slate-50 pb-3">
                    <img
                      alt={selectedRefundModal.title}
                      className="size-12 rounded-lg object-cover"
                      src={selectedRefundModal.image}
                    />
                    <div>
                      <p className="!mb-0 font-bold text-[#4F3267]">
                        {selectedRefundModal.title}
                      </p>
                      <p className="!mb-0 text-xs text-slate-400">
                        {selectedRefundModal.methodType}
                      </p>
                    </div>
                  </div>
                  {selectedRefundModal.items?.map((item) => (
                    <div className="flex justify-between text-xs text-slate-500" key={item.name}>
                      <span>
                        {item.name} × {item.qty}
                      </span>
                      <span className="font-semibold text-slate-700">{item.price}</span>
                    </div>
                  ))}
                  <div className="flex justify-between border-b border-slate-50 py-2">
                    <span className="text-slate-500">Refund Amount:</span>
                    <span className="text-base font-extrabold text-emerald-600">
                      {selectedRefundModal.amount}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-slate-50 py-2">
                    <span className="text-slate-500">Status:</span>
                    <span className="inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-bold text-emerald-700">
                      {selectedRefundModal.status}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-slate-50 py-2">
                    <span className="text-slate-500">Refunded To:</span>
                    <span className="font-semibold text-slate-700">
                      {selectedRefundModal.refundedTo}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-slate-50 py-2">
                    <span className="text-slate-500">Refunded On:</span>
                    <span className="font-semibold text-slate-700">
                      {selectedRefundModal.refundedDate}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-slate-50 py-2">
                    <span className="text-slate-500">ARN:</span>
                    <span className="font-semibold text-slate-700">
                      {selectedRefundModal.arn}
                    </span>
                  </div>
                  <div className="pt-1">
                    <p className="text-xs font-semibold uppercase text-slate-400 !mb-1">
                      Reason
                    </p>
                    <p className="text-xs text-slate-600">{selectedRefundModal.reason}</p>
                  </div>
                </div>
                <div className="mt-6 flex justify-end">
                  <button
                    className="!rounded-lg bg-[#4F3267] px-5 py-2 text-xs font-semibold text-white transition hover:bg-[#3d2452]"
                    onClick={() => setSelectedRefundModal(null)}
                    type="button"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Contact Support Modal */}
          {showSupportModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs">
              <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl animate-fade-in">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <h3 className="!mb-0 text-lg font-bold text-[#4F3267]">Contact Support</h3>
                  <button
                    className="text-slate-400 hover:text-slate-600 transition"
                    onClick={() => setShowSupportModal(false)}
                    type="button"
                  >
                    <CloseIconModal className="size-5" />
                  </button>
                </div>
                <div className="mt-4 flex flex-col gap-3 text-sm">
                  <a
                    className="flex items-center gap-3 rounded-xl border border-slate-200 p-3 transition hover:bg-slate-50"
                    href="tel:+914442935000"
                  >
                    <PhoneSupportIcon className="size-5 text-purple-600" />
                    <div>
                      <p className="!mb-0 font-semibold text-[#4F3267]">Call Us</p>
                      <p className="!mb-0 text-xs text-slate-500">+91 44 4293 5000</p>
                    </div>
                  </a>
                  <a
                    className="flex items-center gap-3 rounded-xl border border-slate-200 p-3 transition hover:bg-slate-50"
                    href="mailto:support@lakshyajewellery.com"
                  >
                    <MailSupportIcon className="size-5 text-purple-600" />
                    <div>
                      <p className="!mb-0 font-semibold text-[#4F3267]">Email Us</p>
                      <p className="!mb-0 text-xs text-slate-500">
                        support@lakshyajewellery.com
                      </p>
                    </div>
                  </a>
                  <a
                    className="flex items-center gap-3 rounded-xl border border-slate-200 p-3 transition hover:bg-slate-50"
                    href="https://wa.me/914442935000"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <WhatsAppIcon className="size-5 text-purple-600" />
                    <div>
                      <p className="!mb-0 font-semibold text-[#4F3267]">WhatsApp</p>
                      <p className="!mb-0 text-xs text-slate-500">Chat with our team</p>
                    </div>
                  </a>
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
