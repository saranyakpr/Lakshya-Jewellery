import goldRing from '../../assets/img/minimalist 22kt gold ring for women, delicate thin band.png'
import studEarrings from '../../assets/img/image 27.png'
import braceletImage from '../../assets/img/collection-swirl.png'

export const navGroups = [
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

export const orderTabs = ['My Orders', 'Cancelled Orders']

export const initialOrders = [
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

export const initialCancelledOrders = [
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

export const paymentTabs = ['PAYMENT METHODS', 'TRANSACTIONS', 'REFUND REQUESTS', 'REFUND POLICY']

export const initialRefundRequests = [
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

export const refundStats = [
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

export const initialPaymentMethods = [
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

export const transactionsPageOne = [
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

export const transactionsPageTwo = [
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

export const refundPolicyCards = [
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

export const profileTabs = [
  { id: 'Profile Information', icon: 'profile' },
  { id: 'Addresses', icon: 'addresses' },
  { id: 'Preferences', icon: 'preferences' },
  { id: 'Security', icon: 'security' },
]

export const accountSummaryItems = [
  { id: 'orders', icon: 'orders', label: 'Total Orders', value: '12' },
  { id: 'wishlist', icon: 'wishlist', label: 'Wishlist Items', value: '24' },
  { id: 'try-at-home', icon: 'try-at-home', label: 'Try at Home', value: '3' },
  { id: 'rewards', highlight: true, icon: 'rewards', label: 'Reward Points', value: '250' },
]

export const quickActionItems = [
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

export const recentOrderSummary = {
  amount: '₹1,250',
  date: '23 May 2024',
  image: goldRing,
  orderId: '#LJ123456789',
  status: 'Delivered',
  title: 'Classic Gold Ring',
}

export const initialProfile = {
  dateOfBirth: '12 May 1998',
  email: 'user@gmail.com',
  fullName: 'User',
  gender: 'Female',
  mobileNumber: '+91 98765 43210',
  occupation: 'Software Developer',
  panNumber: 'ABCDE1234F',
}
