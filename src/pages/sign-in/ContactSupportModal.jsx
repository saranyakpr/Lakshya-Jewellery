import { CloseIconModal, MailSupportIcon, PhoneSupportIcon, WhatsAppIcon } from './icons'

function ContactSupportModal({ onClose, open }) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs">
      <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl animate-fade-in">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h3 className="!mb-0 text-lg font-bold text-[#4F3267]">Contact Support</h3>
          <button
            className="text-slate-400 hover:text-slate-600 transition"
            onClick={onClose}
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
              <p className="!mb-0 text-xs text-slate-500">support@lakshyajewellery.com</p>
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
  )
}

export default ContactSupportModal
