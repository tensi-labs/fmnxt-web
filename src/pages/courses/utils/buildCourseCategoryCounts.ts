import * as R from 'ramda'
import type { Course } from '../../../types/course'

export function buildCourseCategoryCounts(courses: readonly Course[]) {
  return R.countBy((course: Course) => course.category, courses)
}
