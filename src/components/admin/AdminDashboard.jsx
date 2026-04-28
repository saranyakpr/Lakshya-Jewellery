import { useState } from 'react'
import { Button } from '../ui/Button'
import { InputField } from '../ui/InputField'
import { Panel } from '../ui/Panel'
import { SectionHeading } from '../ui/SectionHeading'
import { formatCurrency } from '../../utils/formatters'

const defaultProduct = {
  name: '',
  category: '',
  price: '',
  goldWeight: '',
  diamondCarat: '',
  badge: '',
  description: '',
}

export function AdminDashboard({
  customers,
  onOrderStatusUpdate,
  onProductCreate,
  onProductDelete,
  onProductUpdate,
  onRatesUpdate,
  orders,
  products,
  rates,
  snapshot,
}) {
  const [newProduct, setNewProduct] = useState(defaultProduct)
  const [rateForm, setRateForm] = useState({
    goldPerGram: rates.goldPerGram,
    diamondPerCarat: rates.diamondPerCarat,
  })

  const handleProductChange = (event) => {
    const { name, value } = event.target
    setNewProduct((current) => ({ ...current, [name]: value }))
  }

  const handleRateChange = (event) => {
    const { name, value } = event.target
    setRateForm((current) => ({ ...current, [name]: value }))
  }

  const handleCreateProduct = async (event) => {
    event.preventDefault()
    await onProductCreate({
      ...newProduct,
      price: Number(newProduct.price),
      goldWeight: Number(newProduct.goldWeight),
      diamondCarat: Number(newProduct.diamondCarat),
    })
    setNewProduct(defaultProduct)
  }

  const handleSaveRates = async (event) => {
    event.preventDefault()
    await onRatesUpdate({
      goldPerGram: Number(rateForm.goldPerGram),
      diamondPerCarat: Number(rateForm.diamondPerCarat),
    })
  }

  return (
    <Panel className="space-y-6">
      <SectionHeading
        eyebrow="Admin Dashboard"
        title="Operations, pricing, and commerce control center"
        description="The dashboard covers product CRUD, order management, customer visibility, and manual price updates called out in the proposal."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {[
          { label: 'Products', value: snapshot.productCount },
          { label: 'Orders', value: snapshot.orderCount },
          { label: 'Customers', value: snapshot.customerCount },
          { label: 'Revenue', value: formatCurrency(snapshot.estimatedRevenue) },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-card)] p-5"
          >
            <div className="text-sm text-white/50">{item.label}</div>
            <div className="mt-2 font-display text-3xl text-white">{item.value}</div>
          </div>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1fr_1fr]">
        <form className="space-y-4 rounded-[1.75rem] border border-[var(--color-line)] bg-[var(--color-card)] p-5" onSubmit={handleCreateProduct}>
          <div className="text-lg font-semibold text-white">Product Management</div>
          <div className="grid gap-4 sm:grid-cols-2">
            <InputField label="Name" name="name" onChange={handleProductChange} value={newProduct.name} />
            <InputField label="Category" name="category" onChange={handleProductChange} value={newProduct.category} />
            <InputField label="Price" name="price" onChange={handleProductChange} type="number" value={newProduct.price} />
            <InputField label="Gold Weight" name="goldWeight" onChange={handleProductChange} type="number" value={newProduct.goldWeight} />
            <InputField label="Diamond Carat" name="diamondCarat" onChange={handleProductChange} type="number" value={newProduct.diamondCarat} />
            <InputField label="Badge" name="badge" onChange={handleProductChange} value={newProduct.badge} />
          </div>
          <label className="block space-y-2">
            <span className="text-sm font-medium text-white/80">Description</span>
            <textarea
              className="min-h-28 w-full rounded-2xl border border-[var(--color-line)] bg-black/15 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[var(--color-gold)]"
              name="description"
              onChange={handleProductChange}
              value={newProduct.description}
            />
          </label>
          <Button type="submit">Add Product</Button>

          <div className="grid gap-3">
            {products.slice(0, 4).map((product) => (
              <div
                key={product.id}
                className="flex flex-col gap-3 rounded-2xl border border-[var(--color-line)] bg-black/15 p-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <div className="font-semibold text-white">{product.name}</div>
                  <div className="text-sm text-[var(--color-muted)]">{formatCurrency(product.price)}</div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button
                    onClick={() =>
                      onProductUpdate(product.id, {
                        price: product.price + 2500,
                        badge: 'Updated',
                      })
                    }
                    size="sm"
                    tone="secondary"
                  >
                    Quick Update
                  </Button>
                  <Button onClick={() => onProductDelete(product.id)} size="sm" tone="danger">
                    Delete
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </form>

        <div className="space-y-6">
          <form className="space-y-4 rounded-[1.75rem] border border-[var(--color-line)] bg-[var(--color-card)] p-5" onSubmit={handleSaveRates}>
            <div className="text-lg font-semibold text-white">Manual Gold / Diamond Rates</div>
            <div className="grid gap-4 sm:grid-cols-2">
              <InputField
                label="Gold Per Gram"
                name="goldPerGram"
                onChange={handleRateChange}
                type="number"
                value={rateForm.goldPerGram}
              />
              <InputField
                label="Diamond Per Carat"
                name="diamondPerCarat"
                onChange={handleRateChange}
                type="number"
                value={rateForm.diamondPerCarat}
              />
            </div>
            <Button type="submit">Save Rates</Button>
          </form>

          <div className="rounded-[1.75rem] border border-[var(--color-line)] bg-[var(--color-card)] p-5">
            <div className="text-lg font-semibold text-white">Order Management</div>
            <div className="mt-4 space-y-3">
              {orders.map((order) => (
                <div
                  key={order.id}
                  className="flex flex-col gap-3 rounded-2xl border border-[var(--color-line)] bg-black/15 p-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <div className="font-semibold text-white">{order.id.toUpperCase()}</div>
                    <div className="text-sm text-[var(--color-muted)]">{order.status}</div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['Confirmed', 'Packed', 'Delivered'].map((status) => (
                      <Button
                        key={status}
                        onClick={() => onOrderStatusUpdate(order.id, status)}
                        size="sm"
                        tone={order.status === status ? 'primary' : 'ghost'}
                      >
                        {status}
                      </Button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-[var(--color-line)] bg-[var(--color-card)] p-5">
            <div className="text-lg font-semibold text-white">Customer Overview</div>
            <div className="mt-4 space-y-3">
              {customers.map((customer) => (
                <div key={customer.id} className="rounded-2xl bg-black/15 p-4">
                  <div className="font-semibold text-white">{customer.name}</div>
                  <div className="mt-1 text-sm text-[var(--color-muted)]">{customer.phone}</div>
                  <div className="mt-1 text-sm text-[var(--color-muted)]">{customer.city}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Panel>
  )
}
