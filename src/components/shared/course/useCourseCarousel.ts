import { useCallback, useRef } from 'react'

export function useCourseCarousel() {
  const scrollRef = useRef<HTMLDivElement | null>(null)

  const scroll = useCallback((direction: 'left' | 'right') => {
    const container = scrollRef.current
    if (!container) {
      return
    }
    const scrollDistance = Math.max(container.clientWidth * 0.8, 320)
    container.scrollBy({
      left: direction === 'right' ? scrollDistance : -scrollDistance,
      behavior: 'smooth',
    })
  }, [])

  return { scrollRef, scroll }
}
