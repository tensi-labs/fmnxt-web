import { Button, Card, Empty } from 'antd'
import { Link } from 'react-router-dom'

export function CartEmptyCard() {
  return (
    <Card className="rounded-2xl border-slate-200">
      <Empty description="Your cart is empty" image={Empty.PRESENTED_IMAGE_SIMPLE}>
        <Link to="/courses">
          <Button type="primary">Browse courses</Button>
        </Link>
      </Empty>
    </Card>
  )
}
