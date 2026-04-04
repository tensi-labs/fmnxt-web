import type { CSSProperties } from 'react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { FiClock, FiTarget, FiZap } from 'react-icons/fi'
import type { HeroValueProp } from '../../../const/homePageData'

const iconFor = {
  industry: FiTarget,
  pace: FiClock,
  outcomes: FiZap
} as const

type Props = {
  items: readonly HeroValueProp[]
}

function reducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
}

export function HeroValuePropsBand({ items }: Props) {
  const [active, setActive] = useState(0)
  const wrapRef = useRef<HTMLDivElement>(null)
  const [glow, setGlow] = useState({ x: 50, y: 50 })
  const [parallax, setParallax] = useState({ x: 0, y: 0 })

  const safe = items.length > 0 ? active % items.length : 0
  const current = items[safe]

  useEffect(() => {
    if (items.length <= 1) return
    const t = window.setInterval(() => setActive((i) => (i + 1) % items.length), 5200)
    return () => window.clearInterval(t)
  }, [items.length])

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (reducedMotion()) return
    const el = wrapRef.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = ((e.clientX - r.left) / r.width) * 100
    const y = ((e.clientY - r.top) / r.height) * 100
    setGlow({ x, y })
    const cx = e.clientX - r.left - r.width / 2
    const cy = e.clientY - r.top - r.height / 2
    setParallax({ x: cx * 0.04, y: cy * 0.04 })
  }, [])

  const onPointerLeave = useCallback(() => {
    setGlow({ x: 50, y: 42 })
    setParallax({ x: 0, y: 0 })
  }, [])

  return (
    <div
      ref={wrapRef}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      className="relative overflow-hidden rounded-[24px] border border-white/60 bg-white/40 p-4 shadow-inner shadow-white/40 backdrop-blur-md md:rounded-[32px] md:p-6 lg:p-8"
    >
      {/* Pointer-follow spotlight */}
      <div
        className="pointer-events-none absolute inset-0 opacity-90 transition-opacity duration-300"
        style={
          {
            background: `radial-gradient(520px circle at ${glow.x}% ${glow.y}%, rgba(6,182,212,0.22), transparent 55%),
              radial-gradient(380px circle at ${100 - glow.x * 0.6}% ${100 - glow.y * 0.5}%, rgba(255,176,32,0.14), transparent 50%)`
          } as CSSProperties
        }
        aria-hidden
      />

      {/* Floating orbs (parallax nudge from pointer) */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        style={{ transform: `translate3d(${parallax.x}px, ${parallax.y}px, 0)` }}
        aria-hidden
      >
        <div className="absolute -left-8 top-[8%] h-28 w-28 rounded-full bg-brand-sun/35 blur-2xl home-float-a" />
        <div className="absolute right-[5%] top-[12%] h-24 w-24 rounded-full bg-brand-mint/30 blur-2xl home-float-b" />
        <div className="absolute bottom-[10%] left-[35%] h-32 w-32 rounded-full bg-brand-violet-bright/20 blur-3xl home-float-c" />
        <div className="absolute right-[20%] bottom-[5%] h-16 w-16 rounded-full border-2 border-brand-coral/40 bg-brand-coral/15 home-bob-slow" />
      </div>

      <div className="relative z-[1]">
        <div className="mb-4 flex flex-col gap-1 md:mb-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-gold-dark">Why professionals choose FMNXT</p>
            <p className="mt-1 text-lg font-bold text-brand-navy md:text-xl">Three ways we fit serious FM & CRE schedules</p>
          </div>
          <div className="flex gap-1.5 md:pb-0.5" role="tablist" aria-label="Highlight selection">
            {items.map((item, i) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={i === safe}
                aria-label={`Show benefit ${i + 1}`}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === safe ? 'w-8 bg-brand-navy' : 'w-2 bg-slate-300 hover:bg-brand-gold/70'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
          {items.map((item, i) => {
            const Icon = iconFor[item.id as keyof typeof iconFor] ?? FiTarget
            const on = i === safe
            return (
              <button
                key={item.id}
                type="button"
                aria-pressed={on}
                onClick={() => setActive(i)}
                className={`relative flex flex-col rounded-2xl border p-4 text-left transition-all duration-300 md:p-5 ${
                  on
                    ? 'border-brand-navy/25 bg-white/90 shadow-lg shadow-brand-navy/10 ring-2 ring-brand-gold/50 scale-[1.02]'
                    : 'border-slate-200/80 bg-white/55 hover:border-brand-gold/40 hover:bg-white/80 hover:shadow-md'
                }`}
              >
                <span
                  className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl text-lg transition-colors duration-300 ${
                    on ? 'bg-linear-to-br from-brand-navy to-brand-gold text-white' : 'bg-slate-100 text-brand-navy'
                  }`}
                >
                  <Icon aria-hidden />
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">0{i + 1}</span>
                <span className="mt-1 font-bold leading-snug text-brand-navy md:text-[1.05rem]">{item.title}</span>
                <span className="mt-1.5 text-xs leading-relaxed text-slate-600">{item.subtitle}</span>
                {on ? (
                  <span className="mt-3 block h-1 w-full max-w-[4rem] rounded-full bg-linear-to-r from-brand-gold to-brand-sun" aria-hidden />
                ) : null}
              </button>
            )
          })}
        </div>

        <div
          className="relative mt-4 overflow-hidden rounded-2xl border border-brand-gold/25 bg-linear-to-br from-white/90 via-brand-gold-light/30 to-brand-sun/10 p-4 shadow-sm md:mt-5 md:p-5"
          aria-live="polite"
        >
          <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-brand-mint/20 blur-2xl" aria-hidden />
          <p className="relative text-sm leading-relaxed text-slate-700 md:text-[0.95rem]">{current?.detail}</p>
        </div>
      </div>
    </div>
  )
}
