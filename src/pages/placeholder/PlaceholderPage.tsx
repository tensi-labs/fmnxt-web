import { Typography } from 'antd'

type PlaceholderPageProps = {
  title: string
  description?: string
}

export function PlaceholderPage({
  title,
  description = 'We are polishing this experience. Check back soon.',
}: PlaceholderPageProps) {
  return (
    <section className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
      <Typography.Title level={2} className="!mb-2 !text-brand-navy">
        {title}
      </Typography.Title>
      <Typography.Paragraph className="!mb-0 !text-slate-600">{description}</Typography.Paragraph>
    </section>
  )
}
