export function formatCurrency(value) {
  return new Intl.NumberFormat('en-IN', {
    currency: 'INR',
    maximumFractionDigits: 0,
    style: 'currency',
  }).format(value)
}

export function formatMetalMix(product) {
  return `${product.goldWeight}g gold • ${product.diamondCarat}ct diamond`
}
