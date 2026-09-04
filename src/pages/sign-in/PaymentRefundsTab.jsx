import { useState } from 'react'
import ContactSupportModal from './ContactSupportModal'
import {
  initialPaymentMethods,
  initialRefundRequests,
  paymentTabs,
  refundPolicyCards,
  refundStats,
  transactionsPageOne,
  transactionsPageTwo,
} from './data'
import {
  ArrowRightIconSmall,
  BoxIcon,
  CheckCircleIcon,
  ChevronDownSmallIcon,
  ClockIcon,
  CloseIconModal,
  InfoHelpIcon,
  MastercardBadge,
  RefundStatIcon,
  RupayBadge,
  ShieldIcon,
  ThreeDotsIcon,
  UpiBadge,
  VisaBadge,
} from './icons'

const refundRequests = initialRefundRequests

function PaymentRefundsTab({ showNotice }) {
  const [activePaymentTab, setActivePaymentTab] = useState('PAYMENT METHODS')
  const [paymentMethods, setPaymentMethods] = useState(initialPaymentMethods)
  const [openMethodMenu, setOpenMethodMenu] = useState(null)
  const [transactionPage, setTransactionPage] = useState(1)
  const [selectedTransaction, setSelectedTransaction] = useState(null)
  const [selectedRefundModal, setSelectedRefundModal] = useState(null)
  const [showSupportModal, setShowSupportModal] = useState(false)

  const handleSetDefaultMethod = (id) => {
    setPaymentMethods((prev) => prev.map((m) => ({ ...m, isDefault: m.id === id })))
    setOpenMethodMenu(null)
    showNotice('Default payment method updated.', 3000)
  }

  const handleRemoveMethod = (id) => {
    setPaymentMethods((prev) => prev.filter((m) => m.id !== id))
    setOpenMethodMenu(null)
    showNotice('Payment method removed.', 3000)
  }

  const handleAddMethodClick = () => {
    showNotice('Add Payment Method flow coming soon.', 3000)
  }

  return (
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
                        <p className="!mb-0 text-sm font-bold text-[#4F3267]">{method.label}</p>
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
                          setOpenMethodMenu(openMethodMenu === method.id ? null : method.id)
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
            <p className="!mb-0 text-base font-bold text-[#4F3267]">100% Secure Payments</p>
            <p className="!mb-0 text-xs text-slate-500">
              Your payment information is encrypted and secured. We never store your card
              details.
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
                {(transactionPage === 1 ? transactionsPageOne : transactionsPageTwo).map(
                  (txn) => (
                    <tr className="border-b border-slate-50 last:border-0" key={txn.id}>
                      <td className="whitespace-nowrap px-5 py-3 font-bold text-[#4F3267]">
                        {txn.id}
                      </td>
                      <td className="whitespace-nowrap px-5 py-3 text-slate-500">{txn.date}</td>
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
                  ),
                )}
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
                    <span className="text-sm font-semibold text-slate-500">{stat.title}</span>
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
          <h3 className="!mb-4 !mt-10 !text-[1.1rem] !font-bold tracking-wider !text-[#4F3267]">
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
                    <p className="!mb-0 text-sm font-bold text-[#4F3267]">{req.title}</p>
                    <p className="!mb-0 text-xs text-slate-400">Order ID: {req.orderId}</p>
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
                    <p className="!mb-0 text-sm font-bold text-[#4F3267]">{req.amount}</p>
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
                    <p className="!mb-0 text-sm font-bold text-[#4F3267]">{req.refundedTo}</p>
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
                  If you have any questions about payments or refunds, our support team is here
                  to help.
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
            We want you to shop with confidence. Please read our refund policy carefully.
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
            {refundPolicyCards.map((card) => (
              <div
                className="flex flex-col items-center gap-2 rounded-2xl border border-slate-200/80 bg-white p-6 text-center shadow-sm"
                key={card.id}
              >
                <div className="flex size-12 items-center justify-center rounded bg-purple-100 text-purple-600">
                  {card.icon === 'returns' && <ClockIcon className="size-6" />}
                  {card.icon === 'eligibility' && <CheckCircleIcon className="size-6" />}
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
                <span className="font-bold text-[#4F3267]">Note:</span> Custom made, engraved or
                personalized jewellery are not eligible for returns unless received damaged or
                defective.
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

      {/* Transaction Details Modal */}
      {selectedTransaction && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl animate-fade-in">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="!mb-0 text-lg font-bold text-[#4F3267]">Transaction Details</h3>
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
                <span className="font-semibold text-slate-700">{selectedTransaction.date}</span>
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
                  <p className="!mb-0 font-bold text-[#4F3267]">{selectedRefundModal.title}</p>
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
                <span className="font-semibold text-slate-700">{selectedRefundModal.arn}</span>
              </div>
              <div className="pt-1">
                <p className="text-xs font-semibold uppercase text-slate-400 !mb-1">Reason</p>
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

      <ContactSupportModal onClose={() => setShowSupportModal(false)} open={showSupportModal} />
    </div>
  )
}

export default PaymentRefundsTab
