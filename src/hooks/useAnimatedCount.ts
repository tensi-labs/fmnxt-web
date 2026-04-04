import { useEffect, useState } from 'react'

function prefersReducedMotion() {
  if (typeof window === 'undefined' || !window.matchMedia) return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Eases from 0 to `target` when `active` becomes true (for stat counters).
 */
export function useAnimatedCount(target: number, active: boolean, durationMs = 1100) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) return
    if (prefersReducedMotion()) {
      setValue(target)
      return
    }
    let start: number | null = null
    let frame = 0
    const tick = (t: number) => {
      if (start == null) start = t
      const p = Math.min((t - start) / durationMs, 1)
      const eased = 1 - (1 - p) ** 3
      setValue(Math.round(target * eased))
      if (p < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [active, target, durationMs])

  return value
}
