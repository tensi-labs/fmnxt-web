import * as R from 'ramda'
import { featuredCourses } from '../../const/mockData'
import { CoursesCatalogGrid } from './components/CoursesCatalogGrid'
import { CoursesCatalogIntroCard } from './components/CoursesCatalogIntroCard'
import { buildCourseCategoryCounts } from './utils/buildCourseCategoryCounts'

export function CoursesPage() {
  const categoryCounts = buildCourseCategoryCounts(featuredCourses)

  return (
    <section className="space-y-6">
      <CoursesCatalogIntroCard
        totalCourseCount={featuredCourses.length}
        categoryEntries={R.toPairs(categoryCounts)}
      />
      <CoursesCatalogGrid courses={featuredCourses} />
    </section>
  )
}
