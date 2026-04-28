import { initialData, productVisualsById } from '../data/mockData'

const productVisuals = {
  bracelet: {
    image: '/products/bracelet.svg',
    imageAlt: 'Bracelet jewellery piece',
  },
  earrings: {
    image: '/products/earrings.svg',
    imageAlt: 'Earrings jewellery piece',
  },
  necklace: {
    image: '/products/necklace.svg',
    imageAlt: 'Necklace jewellery piece',
  },
  ring: {
    image: '/products/ring.svg',
    imageAlt: 'Ring jewellery piece',
  },
}

function clone(value) {
  return JSON.parse(JSON.stringify(value))
}

function getVisualKey(product = {}) {
  const matchSource = `${product.category ?? ''} ${product.name ?? ''}`.toLowerCase()

  if (matchSource.includes('necklace') || matchSource.includes('bridal')) {
    return 'necklace'
  }

  if (matchSource.includes('earring') || matchSource.includes('stud')) {
    return 'earrings'
  }

  if (matchSource.includes('bracelet') || matchSource.includes('bangle') || matchSource.includes('polki')) {
    return 'bracelet'
  }

  return 'ring'
}

function withProductVisual(product) {
  const matchedVisual = productVisualsById[product.id] ?? productVisuals[getVisualKey(product)]

  return {
    ...matchedVisual,
    ...product,
    image: product.image ?? matchedVisual.image,
    imageAlt: product.imageAlt ?? matchedVisual.imageAlt ?? product.name ?? 'Jewellery item',
  }
}

function createInitialState() {
  const baseState = clone(initialData)

  return {
    ...baseState,
    products: baseState.products.map(withProductVisual),
  }
}

let platformState = createInitialState()

function getState() {
  return clone(platformState)
}

function commitState(updater) {
  platformState = updater(getState())
  return getState()
}

export async function getPlatformData() {
  return getState()
}

export async function loginWithOtp(payload) {
  const nextState = commitState((state) => ({
    ...state,
    session: {
      name: payload.role === 'admin' ? 'Lakshya Admin' : 'Lakshya Customer',
      phone: payload.phone,
      role: payload.role,
    },
  }))

  return { user: nextState.session }
}

export async function toggleWishlist(productId) {
  const nextState = commitState((state) => ({
    ...state,
    wishlist: state.wishlist.includes(productId)
      ? state.wishlist.filter((id) => id !== productId)
      : [...state.wishlist, productId],
  }))

  return nextState.wishlist
}

export async function addToCart(productId, quantity) {
  const safeQuantity = Math.max(1, Number(quantity) || 1)

  const nextState = commitState((state) => {
    const existingItem = state.cart.find((item) => item.productId === productId)
    const cart = existingItem
      ? state.cart.map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + safeQuantity }
            : item,
        )
      : [...state.cart, { productId, quantity: safeQuantity }]

    return {
      ...state,
      cart,
    }
  })

  return nextState.cart
}

export async function removeFromCart(productId) {
  const nextState = commitState((state) => ({
    ...state,
    cart: state.cart.filter((item) => item.productId !== productId),
  }))

  return nextState.cart
}

export async function updateCartQuantity(productId, quantity) {
  const safeQuantity = Math.max(1, Number(quantity) || 1)

  const nextState = commitState((state) => ({
    ...state,
    cart: state.cart.map((item) =>
      item.productId === productId ? { ...item, quantity: safeQuantity } : item,
    ),
  }))

  return nextState.cart
}

export async function createCheckoutOrder(payload) {
  const currentState = getState()
  const cartItems = payload.items ?? currentState.cart

  const amount = currentState.products.reduce((sum, product) => {
    const cartItem = cartItems.find((item) => item.productId === product.id)
    return cartItem ? sum + product.price * cartItem.quantity : sum
  }, 0)

  const order = {
    amount,
    customerId: payload.customerId,
    customerName:
      currentState.customers.find((customer) => customer.id === payload.customerId)?.name ??
      'Guest',
    id: `ord-${Date.now()}`,
    status: 'Confirmed',
    timeline: [
      { label: 'Placed', value: 'Today' },
      { label: 'Store', value: currentState.stores[0]?.name ?? 'Primary Store' },
      { label: 'Delivery', value: 'Within 3 business days' },
    ],
  }

  commitState((state) => ({
    ...state,
    cart: [],
    orders: [order, ...state.orders],
  }))

  return { message: 'Checkout completed successfully.', order }
}

export async function createBookingRequest(payload) {
  const booking = {
    id: `book-${Date.now()}`,
    ...payload,
  }

  const nextState = commitState((state) => ({
    ...state,
    bookings: [booking, ...state.bookings],
  }))

  return nextState.bookings[0]
}

export async function addProduct(product) {
  const createdProduct = withProductVisual({
    badge: product.badge ?? 'New',
    category: product.category ?? 'Jewellery',
    description: product.description ?? '',
    diamondCarat: product.diamondCarat ?? 0,
    goldWeight: product.goldWeight ?? 0,
    id: `prd-${Date.now()}`,
    name: product.name ?? 'Untitled Product',
    price: product.price ?? 0,
  })

  const nextState = commitState((state) => ({
    ...state,
    products: [createdProduct, ...state.products],
  }))

  return nextState.products[0]
}

export async function updateProduct(productId, updates) {
  let updatedProduct = null

  commitState((state) => ({
    ...state,
    products: state.products.map((product) => {
      if (product.id !== productId) {
        return product
      }

      updatedProduct = withProductVisual({
        ...product,
        ...updates,
      })

      return updatedProduct
    }),
  }))

  return clone(updatedProduct)
}

export async function removeProduct(productId) {
  commitState((state) => ({
    ...state,
    cart: state.cart.filter((item) => item.productId !== productId),
    products: state.products.filter((product) => product.id !== productId),
    wishlist: state.wishlist.filter((id) => id !== productId),
  }))

  return { success: true }
}

export async function updateOrderStatus(orderId, status) {
  let updatedOrder = null

  commitState((state) => ({
    ...state,
    orders: state.orders.map((order) => {
      if (order.id !== orderId) {
        return order
      }

      updatedOrder = { ...order, status }
      return updatedOrder
    }),
  }))

  return clone(updatedOrder)
}

export async function updateRates(rates) {
  const nextState = commitState((state) => ({
    ...state,
    rates: {
      ...state.rates,
      ...rates,
    },
  }))

  return nextState.rates
}

export function getDashboardSnapshot(platform) {
  return {
    customerCount: platform.customers.length,
    estimatedRevenue: platform.orders.reduce((sum, order) => sum + order.amount, 0),
    orderCount: platform.orders.length,
    productCount: platform.products.length,
  }
}
