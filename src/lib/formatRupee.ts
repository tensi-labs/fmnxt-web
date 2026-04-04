export function formatRupee(amount: number) {
  return `₹${amount.toLocaleString('en-IN')}`
}
