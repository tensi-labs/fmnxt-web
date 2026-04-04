import { Typography } from 'antd'
import { When } from '../../components/When'
import { useCart } from '../../context/CartContext'
import { CartEmptyCard } from './components/CartEmptyCard'
import { CartLinesCard } from './components/CartLinesCard'

export function CartPage() {
  const { lines, subtotalInr, removeLine, clearCart } = useCart()
  const isCartEmpty = lines.length === 0

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <Typography.Title level={2} className="mb-0">
        Cart
      </Typography.Title>
      <Typography.Paragraph className="text-slate-600">
        Review courses before checkout. Prices use mock data until checkout is connected.
      </Typography.Paragraph>

      <When isTrue={isCartEmpty}>
        <CartEmptyCard />
      </When>

      <When isTrue={!isCartEmpty}>
        <CartLinesCard lines={lines} subtotalInr={subtotalInr} onRemoveLine={removeLine} onClearCart={clearCart} />
      </When>
    </div>
  )
}
