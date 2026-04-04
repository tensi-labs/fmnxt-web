import { ArrowLeftOutlined } from '@ant-design/icons'
import { Button, Typography } from 'antd'
import { Link } from 'react-router-dom'

export function CourseDetailNotFound() {
  return (
    <div className="mx-auto max-w-2xl space-y-4">
      <Link to="/courses" className="inline-flex items-center gap-1 text-sm font-medium text-brand-navy hover:text-brand-gold-dark">
        <ArrowLeftOutlined />
        Back to courses
      </Link>
      <Typography.Title level={3}>Course not found</Typography.Title>
      <Typography.Paragraph className="text-slate-600">
        This listing may have moved. Browse the catalog from the home page or course library.
      </Typography.Paragraph>
      <Link to="/">
        <Button type="primary">Go home</Button>
      </Link>
    </div>
  )
}
