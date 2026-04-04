import type { CSSProperties, ReactNode } from 'react'
import { useInView } from '../../../hooks/useInView'

export type RevealVariant = 'pop' | 'slideUp' | 'slideLeft' | 'fade' | 'tilt'

type Props = {
  children: ReactNode
  className?: string
  /** Stagger sibling reveals (ms). */
  delayMs?: number
  /** Distinct entrance per section (avoids one repeated motion everywhere). */
  variant?: RevealVariant
}

export function RevealOnScroll({ children, className = '', delayMs = 0, variant = 'pop' }: Props) {
  const [ref, inView] = useInView<HTMLDivElement>({ once: true, threshold: 0.08 })

  const style = {
    '--reveal-delay': `${delayMs}ms`
  } as CSSProperties

  const v = `home-reveal-inner--${variant}`

  return (
    <div ref={ref} className={className.trim()} style={style}>
      <div className={`home-reveal-inner ${v} ${inView ? 'home-reveal-inner--in' : ''}`.trim()}>{children}</div>
    </div>
  )
}
