import { createContext, useContext, useMemo, useState, type PropsWithChildren } from 'react'

type HomeCourseSearchContextValue = {
  query: string
  setQuery: (q: string) => void
}

const HomeCourseSearchContext = createContext<HomeCourseSearchContextValue | null>(null)

export function HomeCourseSearchProvider({ children }: PropsWithChildren) {
  const [query, setQuery] = useState('')

  const value = useMemo(() => ({ query, setQuery }), [query])

  return <HomeCourseSearchContext.Provider value={value}>{children}</HomeCourseSearchContext.Provider>
}

export function useHomeCourseSearch() {
  const ctx = useContext(HomeCourseSearchContext)
  if (!ctx) {
    throw new Error('useHomeCourseSearch must be used within HomeCourseSearchProvider')
  }
  return ctx
}
