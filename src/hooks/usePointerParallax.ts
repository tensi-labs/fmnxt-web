import { useEffect, useState } from 'react'

function reducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
}

/**
 * Subtle screen-relative offset for decorative layers (does not affect layout).
 */
export function usePointerParallax(maxPx = 14) {
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (reducedMotion()) return
    const onMove = (e: MouseEvent) => {
      const cx = window.innerWidth * 0.5
      const cy = window.innerHeight * 0.5
      const nx = (e.clientX - cx) / Math.max(cx, 1)
      const ny = (e.clientY - cy) / Math.max(cy, 1)
      setOffset({ x: nx * maxPx, y: ny * maxPx })
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [maxPx])

  return offset
}
