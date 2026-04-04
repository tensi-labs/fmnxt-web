import { DeleteOutlined } from '@ant-design/icons'
import { Button, Card, Typography } from 'antd'
import { Link } from 'react-router-dom'
import type { CartLine } from '../../../context/CartContext'
import { formatRupee } from '../../../lib/formatRupee'

type CartLinesCardProps = {
  lines: CartLine[]
  subtotalInr: number
  onRemoveLine: (courseId: string) => void
  onClearCart: () => void
}

export function CartLinesCard({ lines, subtotalInr, onRemoveLine, onClearCart }: CartLinesCardProps) {
  return (
    <Card className="rounded-2xl border-slate-200">
      <ul className="divide-y divide-slate-100">
        {lines.map((line) => (
          <li key={line.courseId} className="flex flex-wrap items-start justify-between gap-3 py-4 first:pt-0 last:pb-0">
            <div className="min-w-0 flex-1">
              <Link
                to={`/courses/${line.courseId}`}
                className="font-semibold text-brand-navy hover:text-brand-gold-dark hover:underline"
              >
                {line.title}
              </Link>
              <p className="mt-1 text-sm text-slate-600">
                {formatRupee(line.priceInr)} each · Qty {line.quantity}
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <span className="text-sm font-semibold tabular-nums text-slate-800">
                {formatRupee(line.priceInr * line.quantity)}
              </span>
              <Button
                type="text"
                danger
                icon={<DeleteOutlined />}
                aria-label={`Remove ${line.title} from cart`}
                onClick={() => onRemoveLine(line.courseId)}
              />
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex flex-col gap-3 border-t border-slate-100 pt-4 sm:flex-row sm:items-center sm:justify-between">
        <Typography.Text strong className="text-base">
          Subtotal: <span className="tabular-nums text-brand-navy">{formatRupee(subtotalInr)}</span>
        </Typography.Text>
        <div className="flex flex-wrap gap-2">
          <Button onClick={onClearCart}>Clear cart</Button>
          <Button type="primary" disabled>
            Checkout (coming soon)
          </Button>
        </div>
      </div>
    </Card>
  )
}
