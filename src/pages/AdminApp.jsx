import { useEffect, useState } from 'react'
import { AdminDashboard } from '../components/admin/AdminDashboard'
import { Button } from '../components/ui/Button'
import { Panel } from '../components/ui/Panel'
import { SectionHeading } from '../components/ui/SectionHeading'
import {
  addProduct,
  getDashboardSnapshot,
  getPlatformData,
  removeProduct,
  updateOrderStatus,
  updateProduct,
  updateRates,
} from '../services/platformService'

export function AdminApp() {
  const [platform, setPlatform] = useState(null)

  const refreshPlatform = async () => {
    const data = await getPlatformData()
    setPlatform(data)
  }

  useEffect(() => {
    let isMounted = true

    getPlatformData().then((data) => {
      if (!isMounted) {
        return
      }
      setPlatform(data)
    })

    return () => {
      isMounted = false
    }
  }, [])

  if (!platform) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[var(--color-ink)] text-white">
        <div className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-white/70">
          Loading admin panel...
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[var(--color-ink)] px-4 py-4 text-[var(--color-text)] sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6">
        <header className="rounded-[2rem] border border-white/10 bg-[rgba(18,13,15,0.88)] px-5 py-4 shadow-2xl shadow-black/25 backdrop-blur-xl">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="font-display text-3xl text-white">Lakshya Admin</div>
              <div className="mt-1 text-sm text-[var(--color-muted)]">
                Separate admin frontend for products, orders, customers, and live rate updates
              </div>
            </div>
            <a
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/6 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/12"
              href="http://localhost:5173/"
              rel="noreferrer"
              target="_blank"
            >
              Open Storefront
            </a>
          </div>
        </header>

        <Panel className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading
              eyebrow="Static Mock Setup"
              title="Admin workspace on its own port"
              description="This frontend is isolated from the customer website and currently runs on local static data. We can swap in real APIs later without changing the admin UI structure."
            />
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Button onClick={refreshPlatform}>Refresh Data</Button>
          </div>
        </Panel>

        <AdminDashboard
          customers={platform.customers}
          onOrderStatusUpdate={async (orderId, status) => {
            await updateOrderStatus(orderId, status)
            await refreshPlatform()
          }}
          onProductCreate={async (product) => {
            await addProduct(product)
            await refreshPlatform()
          }}
          onProductDelete={async (productId) => {
            await removeProduct(productId)
            await refreshPlatform()
          }}
          onProductUpdate={async (productId, updates) => {
            await updateProduct(productId, updates)
            await refreshPlatform()
          }}
          onRatesUpdate={async (rates) => {
            await updateRates(rates)
            await refreshPlatform()
          }}
          orders={platform.orders}
          products={platform.products}
          rates={platform.rates}
          snapshot={getDashboardSnapshot(platform)}
        />
      </div>
    </div>
  )
}
