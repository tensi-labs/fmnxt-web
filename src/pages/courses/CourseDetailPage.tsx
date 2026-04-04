import { useParams } from 'react-router-dom'
import { featuredHoverDetails, newArrivalHoverDetails } from '../../const/homePageData'
import { resolveCourseListingById } from '../../lib/resolveCourseListing'
import { CourseDetailNotFound } from './components/CourseDetailNotFound'
import { CourseDetailView } from './components/CourseDetailView'

export function CourseDetailPage() {
  const { courseId = '' } = useParams()
  const resolved = courseId ? resolveCourseListingById(courseId) : null

  if (!resolved) {
    return <CourseDetailNotFound />
  }

  const detail =
    resolved.kind === 'catalog'
      ? featuredHoverDetails[resolved.course.id]
      : newArrivalHoverDetails[resolved.course.id]

  return <CourseDetailView resolved={resolved} detail={detail} />
}
