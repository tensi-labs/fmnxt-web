import type { ReactNode } from 'react'
import { HOME_FULL_BLEED } from './HeroSection'

const surfaces = {
  /** Light gray band — alternates with white page */
  muted: 'border-b border-neutral-200/90 bg-[#F2F2F3]',
  /** Pure white full-bleed strip */
  white: 'border-b border-neutral-200/90 bg-white',
  /** Soft top→bottom fade */
  wash: 'border-b border-neutral-200/90 bg-linear-to-b from-white via-[#FAFAFA] to-[#F4F4F5]'
} as const

type Variant = keyof typeof surfaces

type Props = {
  variant: Variant
  children: ReactNode
  /** Extra decorative classes (patterns, etc.) */
  className?: string
  /** Vertical rhythm */
  padded?: boolean
}

export function HomeBand({ variant, children, className = '', padded = true }: Props) {
  return (
    <div className={`${HOME_FULL_BLEED} ${surfaces[variant]} ${className}`.trim()}>
      <div
        className={`mx-auto w-full max-w-[1200px] px-5 sm:px-8 md:px-10 lg:px-12 ${padded ? 'py-14 md:py-16 lg:py-20' : ''}`}
      >
        {children}
      </div>
    </div>
  )
}
