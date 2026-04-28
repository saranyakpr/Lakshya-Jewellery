import { useState } from 'react'
import { Button } from '../ui/Button'
import { InputField } from '../ui/InputField'
import { Panel } from '../ui/Panel'
import { SectionHeading } from '../ui/SectionHeading'

const initialForm = {
  customerName: '',
  city: '',
  preferredDate: '',
  notes: '',
}

export function TryAtHomeForm({ onSubmit }) {
  const [form, setForm] = useState(initialForm)
  const [message, setMessage] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await onSubmit(form)
    setMessage('Try-at-home request created and stored via the shared booking service.')
    setForm(initialForm)
  }

  return (
    <Panel>
      <SectionHeading
        eyebrow="Booking Request"
        title="Try-at-home request form"
        description="This is intentionally lightweight for the MVP and is wired through the same reusable API layer as the rest of the app."
      />
      <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
        <InputField
          label="Customer name"
          name="customerName"
          onChange={handleChange}
          placeholder="Aarohi Shah"
          value={form.customerName}
        />
        <InputField
          label="City"
          name="city"
          onChange={handleChange}
          placeholder="Chennai"
          value={form.city}
        />
        <InputField
          label="Preferred date"
          name="preferredDate"
          onChange={handleChange}
          type="date"
          value={form.preferredDate}
        />
        <label className="block space-y-2">
          <span className="text-sm font-medium text-white/80">Notes</span>
          <textarea
            className="min-h-28 w-full rounded-2xl border border-[var(--color-line)] bg-black/15 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[var(--color-gold)]"
            name="notes"
            onChange={handleChange}
            placeholder="Mention preferred collection or budget"
            value={form.notes}
          />
        </label>
        <Button className="w-full sm:w-fit" type="submit">
          Submit Booking Request
        </Button>
        {message ? <div className="text-sm text-[var(--color-gold-light)]">{message}</div> : null}
      </form>
    </Panel>
  )
}
