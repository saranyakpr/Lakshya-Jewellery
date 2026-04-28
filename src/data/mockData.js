export const productVisualsById = {
  'prd-1': {
    image: '/products/necklace.svg',
    imageAlt: 'Bridal necklace jewellery set',
  },
  'prd-2': {
    image: '/products/earrings.svg',
    imageAlt: 'Diamond stud earrings',
  },
  'prd-3': {
    image: '/products/bracelet.svg',
    imageAlt: 'Polki bracelet jewellery',
  },
  'prd-4': {
    image: '/products/ring.svg',
    imageAlt: 'Solitaire diamond ring',
  },
}

export const initialData = {
  rates: {
    goldPerGram: 6850,
    diamondPerCarat: 54000,
  },
  session: {
    name: 'Lakshya Guest',
    role: 'customer',
    phone: '+91 98765 43210',
  },
  customers: [
    { id: 'cust-1', name: 'Aarohi Shah', city: 'Chennai', phone: '+91 98765 43210' },
    { id: 'cust-2', name: 'Raghav Menon', city: 'Bengaluru', phone: '+91 99881 22011' },
  ],
  stores: [
    {
      id: 'store-1',
      name: 'Lakshya Chennai Atelier',
      city: 'Chennai',
      address: '12 Sterling Road, Nungambakkam, Chennai',
      contact: '+91 98410 20202',
    },
    {
      id: 'store-2',
      name: 'Lakshya Bengaluru Gallery',
      city: 'Bengaluru',
      address: '18 Vittal Mallya Road, Bengaluru',
      contact: '+91 98455 20202',
    },
    {
      id: 'store-3',
      name: 'Lakshya Hyderabad Lounge',
      city: 'Hyderabad',
      address: 'Road No. 45, Jubilee Hills, Hyderabad',
      contact: '+91 90000 45454',
    },
  ],
  products: [
    {
      id: 'prd-1',
      name: 'Aurelia Bridal Necklace',
      category: 'Bridal',
      description: 'Layered heritage necklace designed for wedding silhouettes and premium events.',
      image: productVisualsById['prd-1'].image,
      imageAlt: productVisualsById['prd-1'].imageAlt,
      goldWeight: 34,
      diamondCarat: 1.8,
      price: 312000,
      badge: 'Best Seller',
    },
    {
      id: 'prd-2',
      name: 'Solstice Diamond Studs',
      category: 'Earrings',
      description: 'Everyday diamond studs with lightweight comfort and luxe finishing.',
      image: productVisualsById['prd-2'].image,
      imageAlt: productVisualsById['prd-2'].imageAlt,
      goldWeight: 10,
      diamondCarat: 1.2,
      price: 138000,
      badge: 'Lightweight',
    },
    {
      id: 'prd-3',
      name: 'Meher Polki Bracelet',
      category: 'Bracelet',
      description: 'Statement bracelet blending artisanal polki craft with contemporary styling.',
      image: productVisualsById['prd-3'].image,
      imageAlt: productVisualsById['prd-3'].imageAlt,
      goldWeight: 20,
      diamondCarat: 0.9,
      price: 176000,
      badge: 'New Drop',
    },
    {
      id: 'prd-4',
      name: 'Noor Solitaire Ring',
      category: 'Rings',
      description: 'Elegant solitaire ring created for proposals, gifting, and milestone moments.',
      image: productVisualsById['prd-4'].image,
      imageAlt: productVisualsById['prd-4'].imageAlt,
      goldWeight: 8,
      diamondCarat: 1.5,
      price: 164000,
      badge: 'Signature',
    },
  ],
  wishlist: ['prd-2'],
  cart: [
    { productId: 'prd-1', quantity: 1 },
    { productId: 'prd-4', quantity: 1 },
  ],
  orders: [
    {
      id: 'ord-101',
      customerId: 'cust-1',
      customerName: 'Aarohi Shah',
      status: 'Confirmed',
      amount: 312000,
      timeline: [
        { label: 'Placed', value: '25 Apr 2026' },
        { label: 'Store', value: 'Chennai Atelier' },
        { label: 'Delivery', value: '28 Apr 2026' },
      ],
    },
    {
      id: 'ord-102',
      customerId: 'cust-2',
      customerName: 'Raghav Menon',
      status: 'Packed',
      amount: 138000,
      timeline: [
        { label: 'Placed', value: '24 Apr 2026' },
        { label: 'Store', value: 'Bengaluru Gallery' },
        { label: 'Delivery', value: '27 Apr 2026' },
      ],
    },
  ],
  bookings: [
    {
      id: 'book-1',
      customerName: 'Aarohi Shah',
      city: 'Chennai',
      preferredDate: '2026-04-29',
      notes: 'Interested in bridal and polki sets.',
    },
  ],
}
