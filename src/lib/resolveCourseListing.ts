import { featuredCourses } from '../const/mockData'
import { newArrivals } from '../const/homePageData'
import type { Course } from '../types/course'

export type ResolvedListing =
  | { kind: 'catalog'; course: Course }
  | { kind: 'new-arrival'; course: Course }

export function resolveCourseListingById(courseId: string): ResolvedListing | null {
  const catalog = featuredCourses.find((c) => c.id === courseId)
  if (catalog) return { kind: 'catalog', course: catalog }
  const arrival = newArrivals.find((c) => c.id === courseId)
  if (arrival) return { kind: 'new-arrival', course: arrival }
  return null
}
