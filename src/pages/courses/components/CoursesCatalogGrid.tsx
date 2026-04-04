import { BookOutlined } from '@ant-design/icons'
import { Button, Card, Col, Row, Tag, Typography } from 'antd'
import * as R from 'ramda'
import type { Course } from '../../../types/course'

type CoursesCatalogGridProps = {
  courses: readonly Course[]
}

export function CoursesCatalogGrid({ courses }: CoursesCatalogGridProps) {
  return (
    <Row gutter={[16, 16]}>
      {R.map((course: Course) => (
        <Col key={course.id} xs={24} md={12}>
          <Card className="!h-full !rounded-2xl !border-slate-200 !shadow-sm">
            <Tag color="processing">{course.category}</Tag>
            <Typography.Title level={4} className="!mt-3 !text-slate-900">
              {course.title}
            </Typography.Title>
            <Typography.Text className="!text-slate-600">
              {course.durationHours} hrs · {course.level}
            </Typography.Text>
            <Typography.Title level={4} className="!mb-0 !mt-3">
              INR {course.priceInr}
            </Typography.Title>
            <Button type="primary" ghost icon={<BookOutlined />} className="!mt-4">
              View details
            </Button>
          </Card>
        </Col>
      ), courses)}
    </Row>
  )
}
