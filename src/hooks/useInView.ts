import { useEffect, useRef, useState } from 'react'

type Options = {
  rootMargin?: string
  once?: boolean
  threshold?: number | number[]
}

export function useInView<T extends HTMLElement>(options: Options = {}) {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)
  const { rootMargin = '0px', once = true, threshold = 0.12 } = options

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        const e = entries[0]
        if (!e) return
        if (e.isIntersecting) {
          setInView(true)
          if (once) obs.unobserve(el)
        } else if (!once) {
          setInView(false)
        }
      },
      { rootMargin, threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [once, rootMargin, threshold])

  return [ref, inView] as const
}
