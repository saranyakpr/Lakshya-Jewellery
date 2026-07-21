function IconBase({ children, className = 'size-5', strokeWidth = 1.8 }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      viewBox="0 0 24 24"
    >
      {children}
    </svg>
  )
}

export function SearchIcon(props) {
  return (
    <IconBase {...props}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4 4" />
    </IconBase>
  )
}

export function PinIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M12 21s6-5.4 6-11a6 6 0 1 0-12 0c0 5.6 6 11 6 11Z" />
      <circle cx="12" cy="10" r="2.2" />
    </IconBase>
  )
}

export function UserIcon(props) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="8" r="3.2" />
      <path d="M5.5 19a6.5 6.5 0 0 1 13 0" />
    </IconBase>
  )
}

export function HeartIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.4A4 4 0 0 1 19 10c0 5.5-7 10-7 10Z" />
    </IconBase>
  )
}

export function BagIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M6.5 8.5h11l-1 10h-9l-1-10Z" />
      <path d="M9 9V7a3 3 0 0 1 6 0v2" />
    </IconBase>
  )
}

export function TryAtHomeIcon(props) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M10 8v8" />
      <path d="M14 8v8" />
    </IconBase>
  )
}

export function ChevronDownIcon(props) {
  return (
    <IconBase {...props}>
      <path d="m7 10 5 5 5-5" />
    </IconBase>
  )
}

export function GiftIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M4.5 9.5h15v10h-15Z" />
      <path d="M12 9.5v10" />
      <path d="M3.5 6.5h17v3h-17Z" />
      <path d="M10.5 6.5c-1.8 0-3-1-3-2.2 0-1 0.8-1.8 1.8-1.8 1.6 0 2.7 1.8 2.7 4Z" />
      <path d="M13.5 6.5c1.8 0 3-1 3-2.2 0-1-0.8-1.8-1.8-1.8-1.6 0-2.7 1.8-2.7 4Z" />
    </IconBase>
  )
}

export function DiamondIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M7 4.5h10l3 4.5-8 10-8-10 3-4.5Z" />
      <path d="m9 4.5 3 4.5 3-4.5" />
      <path d="M4 9h16" />
    </IconBase>
  )
}

export function ReturnIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M9 7H5v4" />
      <path d="M5 11a7 7 0 1 0 2-5" />
    </IconBase>
  )
}

