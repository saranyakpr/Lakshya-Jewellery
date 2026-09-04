import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { initialCancelledOrders, initialOrders, orderTabs } from './data'
import {
  ArrowRightIconSmall,
  BoxIcon,
  CheckIconSmall,
  CloseIconModal,
  HomeOutlineIcon,
} from './icons'

function OrdersTab({ showNotice }) {
  const navigate = useNavigate()

  const [activeOrderTab, setActiveOrderTab] = useState(orderTabs[0])
  const [orders, setOrders] = useState(initialOrders)
  const [cancelledOrders, setCancelledOrders] = useState(initialCancelledOrders)
  const [selectedOrderDetails, setSelectedOrderDetails] = useState(null)
  const [selectedTrackOrder, setSelectedTrackOrder] = useState(null)
  const [selectedRefundDetails, setSelectedRefundDetails] = useState(null)

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
    showNotice(`Order ${order.id} has been cancelled successfully.`)
  }

  const handleReturnExchange = (order) => {
    showNotice(`Return/Exchange request initiated for ${order.id}.`)
  }

  const handleReorder = (order) => {
    showNotice(`${order.title} has been added to your bag for reordering!`)
  }

  return (
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
                        <p className="!mb-0 text-sm font-bold text-[#4F3267]">{order.id}</p>
                      </div>
                      <div>
                        <p className="!mb-0 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                          DATE
                        </p>
                        <p className="!mb-0 text-sm font-bold text-[#4F3267]">{order.date}</p>
                      </div>
                      <div>
                        <p className="!mb-0 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                          TOTAL
                        </p>
                        <p className="!mb-0 text-sm font-bold text-[#4F3267]">{order.total}</p>
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
                          <span className="font-bold text-slate-700">{order.tracking}</span>
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
                        <span className="font-bold text-sky-700">Shipment Progress</span>
                        <span className="text-slate-500">Est. delivery: {order.estDelivery}</span>
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
              <p className="text-lg font-bold text-[#4F3267] !mb-0">No Active Orders</p>
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
                          <p className="!mb-0 text-sm font-bold text-[#4F3267]">{order.id}</p>
                        </div>
                        <div>
                          <p className="!mb-0 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                            DATE
                          </p>
                          <p className="!mb-0 text-sm font-bold text-[#4F3267]">{order.date}</p>
                        </div>
                        <div>
                          <p className="!mb-0 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                            TOTAL
                          </p>
                          <p className="!mb-0 text-sm font-bold text-[#4F3267]">{order.total}</p>
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
                            Size:{' '}
                            <span className="font-semibold text-slate-700">{order.size}</span>
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
              <p className="text-lg font-bold text-[#4F3267] !mb-0">No Cancelled Orders</p>
              <p className="text-xs text-slate-400 max-w-sm">
                You do not have any cancelled orders in your account history.
              </p>
            </div>
          )}
        </div>
      )}

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
                  <span className="font-bold text-purple-600">
                    {selectedOrderDetails.tracking}
                  </span>
                </div>
              )}
              <div className="flex justify-between border-b border-slate-50 py-2">
                <span className="text-slate-500">Total Amount:</span>
                <span className="text-base font-extrabold text-[#4F3267]">
                  {selectedOrderDetails.total}
                </span>
              </div>
              <div className="pt-2">
                <p className="text-xs font-semibold uppercase text-slate-400 !mb-1">
                  Delivery Address
                </p>
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
                <h3 className="!mb-0 text-lg font-bold text-[#4F3267]">Live Tracking</h3>
                <p className="!mb-0 text-xs text-slate-500">
                  {selectedTrackOrder.id} ({selectedTrackOrder.tracking})
                </p>
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
                  <p className="!mb-0 text-xs font-bold text-[#4F3267]">
                    Order Placed & Confirmed
                  </p>
                  <p className="!mb-0 text-[11px] text-slate-400">{selectedTrackOrder.date}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white text-xs font-bold">
                  ✓
                </div>
                <div>
                  <p className="!mb-0 text-xs font-bold text-[#4F3267]">
                    Quality Checked & Packed
                  </p>
                  <p className="!mb-0 text-[11px] text-slate-400">
                    Lakshya Fulfillment Center, Bengaluru
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#0284C7] text-white text-xs font-bold">
                  →
                </div>
                <div>
                  <p className="!mb-0 text-xs font-bold text-[#0284C7]">
                    In Transit with BlueDart Express
                  </p>
                  <p className="!mb-0 text-[11px] text-slate-400">
                    AWB: {selectedTrackOrder.tracking}
                  </p>
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
                <span className="font-semibold text-[#4F3267]">
                  {selectedRefundDetails.title}
                </span>
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
                  The refund has been successfully transferred to your source payment method. For
                  any banking queries, quote ARN #REF-
                  {selectedRefundDetails.id.replace('ORD-', '')}.
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
    </div>
  )
}

export default OrdersTab
