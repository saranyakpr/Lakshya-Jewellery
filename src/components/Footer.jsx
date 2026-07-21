function PhoneIcon(props) {
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
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
    </svg>
  )
}

function MailIcon(props) {
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
      <path d="m2 7 10 6 10-6" />
    </svg>
  )
}

function WhatsAppIcon(props) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M12 2a10 10 0 0 0-8.6 15.06L2 22l5.1-1.34A10 10 0 1 0 12 2Zm0 18.2a8.15 8.15 0 0 1-4.16-1.14l-.3-.18-3.02.79.81-2.95-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.13c-.25-.12-1.45-.71-1.67-.8-.22-.08-.39-.12-.55.13-.16.24-.63.79-.78.96-.14.16-.29.18-.53.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.7-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.42-.55-.42h-.47c-.16 0-.43.06-.65.31-.22.25-.86.84-.86 2.04 0 1.2.88 2.36 1 2.52.12.16 1.74 2.66 4.22 3.73.59.25 1.05.4 1.41.52.59.19 1.13.16 1.55.1.47-.07 1.45-.59 1.66-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.47-.28Z" />
    </svg>
  )
}

function AppleIcon(props) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M16.365 1.43c0 1.14-.47 2.11-1.19 2.86-.78.82-2.03 1.46-3.06 1.38-.14-1.1.44-2.24 1.14-2.96.79-.83 2.16-1.44 3.11-1.28Zm3.02 16.6c-.4.93-.87 1.8-1.5 2.6-.86 1.1-1.57 1.86-2.68 1.88-1.06.02-1.4-.68-2.62-.68-1.22 0-1.6.66-2.6.7-1.07.04-1.88-1.02-2.75-2.11-1.5-1.9-2.65-5.36-1.1-7.7.77-1.16 2.14-1.9 3.63-1.92 1.06-.02 2.06.72 2.7.72.64 0 1.85-.9 3.12-.77.53.02 2.02.21 2.98 1.62-.08.05-1.78 1.04-1.76 3.1.02 2.47 2.17 3.3 2.19 3.31-.02.05-.34 1.18-1.11 2.34Z" />
    </svg>
  )
}

function PlayIcon(props) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M4.5 2.75a1 1 0 0 0-.5.87v16.76a1 1 0 0 0 .5.87l9.4-9.25-9.4-9.25Z" />
      <path d="m14.9 12 2.63-2.6 3.24 1.87c.6.35.6 1.21 0 1.56l-3.24 1.87L14.9 12Z" />
      <path d="m4.7 21.44 9.1-8.95 2.44 2.4-9.36 6.9a1 1 0 0 1-2.18-.35Z" />
      <path d="m4.7 2.56 9.1 8.95 2.44-2.4-9.36-6.9a1 1 0 0 0-2.18.35Z" />
    </svg>
  )
}

function FacebookIcon(props) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <circle cx="12" cy="12" fill="none" r="10.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M13.5 8.5h1.5V6h-1.8c-1.6 0-2.7 1-2.7 2.7V11H9v2.5h1.5V18h2.6v-4.5H15l.4-2.5h-2.3V9c0-.35.15-.5.4-.5Z" />
    </svg>
  )
}

function InstagramIcon(props) {
  return (
    <svg fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 24 24" {...props}>
      <rect height="17" rx="4.5" width="17" x="3.5" y="3.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" fill="currentColor" r="1" stroke="none" />
    </svg>
  )
}

function PinterestIcon(props) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <circle cx="12" cy="12" fill="none" r="10.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M11.6 6.2c-3 0-4.6 2-4.6 4.2 0 1.3.5 2.4 1.6 2.8.17.07.33 0 .38-.2l.16-.6c.05-.2.03-.27-.11-.44a2.4 2.4 0 0 1-.5-1.5c0-1.55 1.18-3.03 3.1-3.03 1.7 0 2.63 1.03 2.63 2.4 0 1.8-.8 3.33-1.98 3.33-.65 0-1.14-.54-.98-1.2.19-.78.55-1.63.55-2.2 0-.5-.27-.92-.83-.92-.66 0-1.2.68-1.2 1.6 0 .58.2.97.2.97l-.8 3.36c-.23.98-.03 2.18 0 2.3.02.07.11.09.15.03.06-.08.85-1.05 1.12-2l.42-1.6c.22.42.86.78 1.54.78 2.02 0 3.4-1.85 3.4-4.32 0-1.9-1.6-3.66-4.05-3.66Z" />
    </svg>
  )
}

function TwitterIcon(props) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M20 6.6c-.57.26-1.18.43-1.82.51a3.18 3.18 0 0 0 1.4-1.76 6.36 6.36 0 0 1-2 .77 3.15 3.15 0 0 0-5.37 2.88 8.94 8.94 0 0 1-6.5-3.3 3.16 3.16 0 0 0 .98 4.2 3.13 3.13 0 0 1-1.43-.4v.04a3.16 3.16 0 0 0 2.53 3.1 3.2 3.2 0 0 1-1.42.05 3.16 3.16 0 0 0 2.95 2.2A6.34 6.34 0 0 1 4 16.07a8.94 8.94 0 0 0 4.84 1.42c5.8 0 8.98-4.8 8.98-8.98l-.01-.41A6.4 6.4 0 0 0 20 6.6Z" />
    </svg>
  )
}

function YoutubeIcon(props) {
  return (
    <svg fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 24 24" {...props}>
      <rect height="14" rx="4" width="19" x="2.5" y="5" />
      <path d="M10.5 9.5v5l4.3-2.5-4.3-2.5Z" fill="currentColor" stroke="none" />
    </svg>
  )
}

function VisaBadge() {
  return (
    <span className="flex h-[30px] w-[46px] items-center justify-center rounded bg-[#1a1f71]">
      <span className="text-[11px] font-bold italic text-white">VISA</span>
    </span>
  )
}

function MastercardBadge() {
  return (
    <span className="flex h-[30px] w-[46px] items-center justify-center rounded border border-slate-200 bg-white">
      <span className="relative flex h-3.5 w-6 items-center">
        <span className="absolute left-0 h-3.5 w-3.5 rounded-full bg-[#eb001b] opacity-90" />
        <span className="absolute right-0 h-3.5 w-3.5 rounded-full bg-[#f79e1b] opacity-90" />
      </span>
    </span>
  )
}

function PayPalBadge() {
  return (
    <span className="flex h-[30px] w-[46px] items-center justify-center rounded bg-[#003087]">
      <span className="text-[9px] font-bold italic text-white">PayPal</span>
    </span>
  )
}

function ApplePayBadge() {
  return (
    <span className="flex h-[30px] w-[46px] items-center justify-center gap-0.5 rounded bg-black">
      <AppleIcon className="h-2.5 w-2.5 text-white" />
      <span className="text-[10px] font-semibold text-white">Pay</span>
    </span>
  )
}

const linkColumns = [
  {
    heading: 'Know Your Jewellery',
    links: ['Diamond Guide', 'Jewellery Guide', 'Gemstones Guide', 'Gold Rate', 'Digital Gold'],
  },
  {
    heading: 'Lakshya Advantage',
    links: [
      '15 Day Returns',
      'FREE Shipping',
      'Lifetime Exchange',
      'Financing Options',
      'Old Gold Exchange',
    ],
  },
  {
    heading: 'Customer Service',
    links: ['Track Your Order', 'Returns & Refunds', 'Contact Us', 'Quality & Grading', 'Size Guide'],
  },
  {
    heading: 'About Us',
    links: ['Our Story', 'Press', 'Blog', 'Careers', 'Social Initiative'],
  },
]

const socialIcons = [FacebookIcon, InstagramIcon, PinterestIcon, TwitterIcon, YoutubeIcon]

function Footer() {
  return (
    <footer className="w-full bg-[#f4f2f5]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
          {linkColumns.map((col) => (
            <div key={col.heading}>
              <h5 className="!text-[.9rem] !font-bold uppercase tracking-wide !text-[#4f3267]">
                {col.heading}
              </h5>
              <ul className="mt-6 flex flex-col gap-2 text-[.8rem] text-[#4B5563] p-0">
                {col.links.map((link) => (
                  <li key={link}>
                    <button
                      className="text-sm text-slate-600 transition hover:text-[#4f3267]"
                      type="button"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h5 className="!text-[.9rem] !font-bold uppercase tracking-wide !text-[#4f3267]">
              Contact Us
            </h5>
            <div className="mt-6 flex flex-col gap-2">
              <div className="flex items-start gap-3">
                <PhoneIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#4f3267]" />
                <div className="text-sm text-slate-600">
                  <p className="!m-0">+91-44-42935000</p>
                  <p className="!m-0 text-xs text-slate-400">(9 AM - 9 PM, 7 days a week)</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MailIcon className="h-3.5 w-3.5 shrink-0 text-[#4f3267]" />
                <span className="text-sm text-slate-600">contactus@lakshya.com</span>
              </div>
              <div className="flex items-center gap-3">
                <WhatsAppIcon className="h-4 w-4 shrink-0 text-[#25d366]" />
                <span className="text-sm text-slate-600">Chat with us on WhatsApp</span>
              </div>
            </div>

            <div className="mt-8">
              <h5 className="!text-[.9rem] !font-bold uppercase tracking-wide !text-[#4f3267]">
                Download Our App
              </h5>
              <div className="mt-4 !flex gap-2">
                <span className="flex h-8 items-center gap-1.5 rounded bg-slate-900 px-3 text-white">
                  <AppleIcon className="h-3.5 w-3.5" />
                  <span className="text-[.7rem] font-medium">App Store</span>
                </span>
                <span className="flex h-8 items-center gap-1.5 rounded bg-slate-900 px-3 text-white">
                  <PlayIcon className="h-3.5 w-3.5" />
                  <span className="text-[.7rem] font-medium">Google Play</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-6 border-t border-slate-300/60 pt-8">
          <div className="flex items-center gap-3">
            {socialIcons.map((Icon, index) => (
              <span
                className="flex h-9 w-9 items-center justify-center rounded-full text-slate-500"
                key={index}
              >
                <Icon className="h-5 w-5" />
              </span>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <VisaBadge />
            <MastercardBadge />
            <PayPalBadge />
            <ApplePayBadge />
          </div>
          <p className="text-center text-xs text-slate-400">
            © 2024 Lakshya. All rights reserved.
            <br />
            Prices inclusive of all taxes. Gold rates are subject to market volatility.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
