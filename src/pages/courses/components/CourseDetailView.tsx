import { ArrowLeftOutlined, StarFilled } from '@ant-design/icons'
import { Button, message, Typography } from 'antd'
import { Link } from 'react-router-dom'
import { useCart } from '../../../context/CartContext'
import type { HoverDetail } from '../../../types/types'
import type { ResolvedListing } from '../../../lib/resolveCourseListing'
import { formatRupee } from '../../../lib/formatRupee'

type CourseDetailViewProps = {
  resolved: ResolvedListing
  detail: HoverDetail | undefined
}

export function CourseDetailView({ resolved, detail }: CourseDetailViewProps) {
  const { addToCart } = useCart()

  const title = resolved.course.title
  const description = resolved.course.description
  const image =
    resolved.kind === 'catalog'
      ? (resolved.course.image ?? '/course-images/available-1.jpg')
      : resolved.course.image
  const priceInr =
    resolved.kind === 'catalog' ? resolved.course.priceInr : (resolved.course.priceInr ?? null)
  const instructor =
    resolved.kind === 'catalog' ? resolved.course.instructor : resolved.course.instructor
  const rating = resolved.kind === 'catalog' ? resolved.course.rating : resolved.course.rating
  const ratingCount =
    resolved.kind === 'catalog' ? resolved.course.ratingCount : resolved.course.ratingCount
  const level = resolved.course.level
  const durationLabel = `${resolved.course.durationHours} hrs`

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <Link
        to="/"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-navy hover:text-brand-gold-dark"
      >
        <ArrowLeftOutlined />
        Back to home
      </Link>

      <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm">
        <div className="relative aspect-[21/9] max-h-56 w-full overflow-hidden bg-slate-100 sm:aspect-[2.4/1]">
          <img src={image} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="space-y-4 p-5 sm:p-6">
          <Typography.Title level={2} className="!mb-0 !text-brand-navy">
            {title}
          </Typography.Title>

          {instructor ? <p className="text-sm leading-relaxed text-slate-600">{instructor}</p> : null}

          {rating != null && ratingCount != null ? (
            <p className="flex flex-wrap items-center gap-1.5 text-sm text-slate-600">
              <StarFilled className="text-amber-500" />
              <span className="font-semibold tabular-nums text-amber-700">{rating.toFixed(1)}</span>
              <span>({ratingCount.toLocaleString('en-IN')} ratings)</span>
            </p>
          ) : null}

          <p className="text-sm leading-relaxed text-slate-600">
            <span className="font-medium text-slate-800">{durationLabel}</span>
            <span className="text-slate-300"> · </span>
            <span>{level}</span>
          </p>

          {description ? (
            <Typography.Paragraph className="!mb-0 leading-relaxed text-slate-700">{description}</Typography.Paragraph>
          ) : null}

          {detail ? (
            <div className="rounded-xl border border-slate-100 bg-slate-50/80 p-4">
              <Typography.Title level={5} className="!mt-0 !text-brand-navy">
                What you will learn
              </Typography.Title>
              <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-700">
                {detail.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ) : null}

          <div className="flex flex-col gap-3 border-t border-slate-100 pt-4 sm:flex-row sm:items-center sm:justify-between">
            {priceInr != null ? (
              <span className="text-2xl font-bold tabular-nums text-brand-navy">{formatRupee(priceInr)}</span>
            ) : (
              <span className="text-sm text-slate-500">Price on request</span>
            )}
            {priceInr != null ? (
              <Button
                type="primary"
                size="large"
                className="sm:min-w-[200px]"
                onClick={() => {
                  addToCart({ courseId: resolved.course.id, title: resolved.course.title, priceInr })
                  void message.success({ content: 'Added to cart', duration: 2 })
                }}
              >
                Add to cart
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}
