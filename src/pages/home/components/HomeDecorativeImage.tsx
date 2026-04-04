import { useCallback, useState } from 'react'
import { FiImage } from 'react-icons/fi'

type Props = {
  src: string
  alt: string
  /** Second on-brand URL if primary fails (never random stock). */
  fallbackSrc?: string
  /** Outer wrapper: set aspect ratio and/or min-height so layout never collapses. */
  className?: string
  /** Extra classes on the img. */
  imgClassName?: string
}

type Stage = 'primary' | 'fallback' | 'none'

/**
 * Marketing image with layout reserve, `referrerPolicy` for Unsplash, and optional second FM/CRE-themed URL before gradient fallback.
 */
export function HomeDecorativeImage({ src, alt, className = '', imgClassName = '', fallbackSrc }: Props) {
  const [stage, setStage] = useState<Stage>('primary')

  const onError = useCallback(() => {
    setStage((s) => {
      if (s === 'primary' && fallbackSrc) return 'fallback'
      return 'none'
    })
  }, [fallbackSrc])

  const url = stage === 'primary' ? src : stage === 'fallback' ? (fallbackSrc ?? '') : ''

  return (
    <div className={`relative w-full overflow-hidden bg-slate-200 ${className}`.trim()}>
      {stage !== 'none' ? (
        <img
          key={url}
          src={url}
          alt={alt}
          onError={onError}
          referrerPolicy="no-referrer"
          loading="lazy"
          decoding="async"
          draggable={false}
          className={`absolute inset-0 h-full w-full object-cover ${imgClassName}`.trim()}
        />
      ) : (
        <div
          className="flex min-h-[220px] w-full flex-col items-center justify-center gap-3 bg-linear-to-br from-brand-navy via-brand-gold-dark to-brand-mint px-6 py-12 text-center text-white/95"
          role="img"
          aria-label={alt}
        >
          <FiImage className="text-4xl opacity-85" aria-hidden />
          <span className="max-w-sm text-sm font-medium leading-relaxed">{alt}</span>
        </div>
      )}
    </div>
  )
}
