import { Card, Tag, Typography } from 'antd'
import * as R from 'ramda'
type CoursesCatalogIntroCardProps = {
  totalCourseCount: number
  categoryEntries: [string, number][]
}

export function CoursesCatalogIntroCard({ totalCourseCount, categoryEntries }: CoursesCatalogIntroCardProps) {
  return (
    <Card className="!rounded-2xl !border-slate-200 !shadow-sm">
      <Typography.Title level={2} className="!mb-1 !text-3xl !font-black !text-slate-900">
        Courses
      </Typography.Title>
      <Typography.Paragraph className="!mb-4 !text-slate-600">
        Browse top picks in FM, CRE, and Engineering tracks.
      </Typography.Paragraph>
      <div className="mt-4 flex flex-wrap gap-2">
        <Tag color="blue">All ({totalCourseCount})</Tag>
        {R.map(([category, count]) => (
          <Tag key={category}>
            {category} ({count})
          </Tag>
        ), categoryEntries)}
      </div>
    </Card>
  )
}
