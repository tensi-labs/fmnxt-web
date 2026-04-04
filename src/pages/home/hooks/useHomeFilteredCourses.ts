import { useMemo } from 'react'
import { featuredCourses } from '../../../const/mockData'
import { newArrivals } from '../../../const/homePageData'
import { filterCoursesByQuery, filterNewArrivalsByQuery } from '../../../lib/filterHomeCourses'

export function useHomeFilteredCourses(searchQuery: string) {
  const normalizedQuery = searchQuery.trim()

  const filteredNewArrivals = useMemo(() => filterNewArrivalsByQuery(newArrivals, searchQuery), [searchQuery])

  const filteredFeatured = useMemo(
    () => filterCoursesByQuery(featuredCourses, searchQuery),
    [searchQuery],
  )

  return {
    filteredNewArrivals,
    filteredFeatured,
    searchIsActive: normalizedQuery.length > 0,
  }
}
