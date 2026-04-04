import { BRAND } from '../../const/branding'
import { usePointerParallax } from '../../hooks/usePointerParallax'

/** Vertical “journey” spine with steps (left rail). */
function LearningPathSpine() {
  const steps = ['Start', 'Build', 'Apply']
  return (
    <div className="flex flex-col items-end gap-0 pr-0.5" aria-hidden>
      {steps.map((label, i) => (
        <div key={label} className="flex flex-col items-end">
          <div className="flex items-center gap-2">
            <span className="text-[8px] font-semibold uppercase tracking-wider text-brand-navy/40">{label}</span>
            <span
              className={`h-2 w-2 shrink-0 rounded-full ring-2 ring-white/90 ${
                i === 0 ? 'bg-brand-sun' : i === 1 ? 'bg-brand-gold' : 'bg-brand-mint'
              }`}
            />
          </div>
          {i < steps.length - 1 ? (
            <div className="mr-1 mt-1 h-7 w-px shrink-0 bg-linear-to-b from-brand-sun/50 via-brand-gold/40 to-brand-mint/45" />
          ) : null}
        </div>
      ))}
    </div>
  )
}

/** Abstract stacked “modules” (no photos). */
function LeftModuleStack({ dx, dy }: { dx: number; dy: number }) {
  const cards = [
    { label: 'Learn', bar: 'w-4/5', tilt: '-rotate-1', from: 'from-brand-sun/35', to: 'to-brand-sun/5' },
    { label: 'Practice', bar: 'w-full', tilt: 'rotate-1', from: 'from-brand-gold/30', to: 'to-cyan-500/10' },
    { label: 'Lead', bar: 'w-3/5', tilt: '-rotate-[0.5deg]', from: 'from-brand-mint/30', to: 'to-emerald-600/10' }
  ]
  return (
    <div
      className="flex w-full max-w-[5.5rem] flex-col items-end gap-2.5 py-4"
      style={{ transform: `translate3d(${dx}px, ${dy}px, 0)` }}
      aria-hidden
    >
      {cards.map((c) => (
        <div
          key={c.label}
          className={`w-full rounded-xl border border-white/50 bg-linear-to-br ${c.from} ${c.to} px-2.5 py-2 shadow-md shadow-brand-navy/8 ring-1 ring-white/40 backdrop-blur-sm ${c.tilt}`}
        >
          <span className="block text-right text-[8px] font-bold uppercase tracking-wider text-brand-navy/50">{c.label}</span>
          <div className={`mt-2 ml-auto h-0.5 rounded-full bg-white/50 ${c.bar}`} />
        </div>
      ))}
    </div>
  )
}

/** Stacked topic chips (right rail). */
function TopicStack() {
  const items = [
    { label: 'On-demand', className: 'bg-brand-navy/10 text-brand-navy/75 ring-brand-navy/15' },
    { label: 'FM & CRE', className: 'ml-2 bg-brand-sun/20 text-brand-gold-dark/90 ring-brand-sun/35' },
    { label: 'Skill paths', className: 'ml-4 bg-brand-mint/15 text-brand-gold-dark/80 ring-brand-mint/25' }
  ]
  return (
    <div className="flex flex-col items-start gap-2 pl-0.5" aria-hidden>
      {items.map(({ label, className }) => (
        <span
          key={label}
          className={`rounded-full px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide ring-1 ${className}`}
        >
          {label}
        </span>
      ))}
    </div>
  )
}

/** Flowing line + blocks (no photos). */
function RightFlowDecor({ dx, dy }: { dx: number; dy: number }) {
  return (
    <div
      className="flex min-h-[8rem] w-full max-w-[4.5rem] flex-col items-start justify-center py-4 pl-0.5"
      style={{ transform: `translate3d(${dx}px, ${dy}px, 0)` }}
      aria-hidden
    >
      <svg className="mb-3 w-10 shrink-0 text-brand-gold-dark/40" viewBox="0 0 40 72" fill="none">
        <path
          d="M8 64 C8 40 32 36 32 12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="opacity-80"
        />
        <circle cx="32" cy="10" r="3" className="fill-brand-sun/70" />
        <circle cx="8" cy="64" r="2.5" className="fill-brand-mint/60" />
      </svg>
      <div className="flex w-full flex-col gap-2">
        <div className="h-2 w-full rounded-full bg-linear-to-r from-brand-gold/35 to-transparent" />
        <div className="h-2 w-4/5 rounded-full bg-linear-to-r from-brand-mint/30 to-transparent" />
        <div className="h-2 w-3/5 rounded-full bg-linear-to-r from-brand-violet-bright/25 to-transparent" />
      </div>
    </div>
  )
}

export function HomeViewportRails() {
  const { x, y } = usePointerParallax(10)

  return (
    <>
      {/*
        Absolute so rails scroll with the page (see AppShell relative wrapper).
        Side art is gradient + geometry only (no catalog photos).
      */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 top-16 z-1 hidden w-[3px] rounded-full md:block"
        style={{
          background: 'linear-gradient(180deg, #ffb020 0%, #06b6d4 42%, #34d399 100%)',
          opacity: 0.65,
          boxShadow: '2px 0 12px rgba(6, 182, 212, 0.15)'
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 top-16 z-1 hidden w-[3px] rounded-full md:block"
        style={{
          background: 'linear-gradient(180deg, #34d399 0%, #06b6d4 48%, #ffb020 100%)',
          opacity: 0.55,
          boxShadow: '-2px 0 12px rgba(255, 176, 32, 0.12)'
        }}
        aria-hidden
      />

      <div
        className="pointer-events-none absolute bottom-0 left-0 top-16 z-0 hidden min-[1340px]:block"
        style={{ width: 'max(52px, calc((100vw - 1360px) / 2))' }}
        aria-hidden
      >
        <div
          className="absolute inset-0 opacity-90"
          style={{
            background: `
              radial-gradient(ellipse 120% 45% at 100% 12%, rgba(6, 182, 212, 0.14), transparent 55%),
              radial-gradient(ellipse 100% 40% at 85% 55%, rgba(255, 176, 32, 0.1), transparent 50%),
              radial-gradient(ellipse 80% 35% at 100% 88%, rgba(52, 211, 153, 0.08), transparent 48%)
            `,
            maskImage: 'linear-gradient(90deg, black 0%, black 50%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(90deg, black 0%, black 50%, transparent 100%)'
          }}
        />
        <div
          className="absolute -left-6 top-1/4 h-32 w-32 rounded-full bg-brand-sun/15 blur-2xl home-float-a"
          style={{ transform: `translate3d(${x * 0.25}px, ${y * 0.15}px, 0)` }}
        />
        <div className="relative flex h-full flex-col items-end pb-36 pt-10 pr-3">
          <div
            className="rounded-2xl border border-white/60 bg-white/35 p-2 shadow-md shadow-brand-navy/5 ring-1 ring-brand-gold/15 backdrop-blur-md"
            style={{ transform: `translate3d(${x * 0.12}px, ${y * 0.08}px, 0)` }}
          >
            <img
              src={BRAND.logoMark}
              alt=""
              width={32}
              height={32}
              className="h-8 w-8 object-contain"
              decoding="async"
            />
          </div>
          <div className="mt-5">
            <LearningPathSpine />
          </div>
          <div className="flex min-h-0 w-full flex-1 flex-col items-end justify-center">
            <LeftModuleStack dx={x * 0.18} dy={y * 0.1} />
          </div>
          <p
            className="max-h-[min(200px,28vh)] shrink-0 text-[9px] font-semibold uppercase leading-loose tracking-[0.42em] text-brand-gold-dark/45"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            Path · Practice · Progress
          </p>
        </div>
      </div>

      <div
        className="pointer-events-none absolute bottom-0 right-0 top-16 z-0 hidden min-[1340px]:block"
        style={{ width: 'max(52px, calc((100vw - 1360px) / 2))' }}
        aria-hidden
      >
        <div
          className="absolute inset-0 opacity-95"
          style={{
            background: `
              radial-gradient(ellipse 120% 50% at 0% 18%, rgba(139, 92, 246, 0.1), transparent 55%),
              radial-gradient(ellipse 100% 42% at 15% 52%, rgba(52, 211, 153, 0.09), transparent 50%),
              radial-gradient(ellipse 90% 38% at 0% 85%, rgba(6, 182, 212, 0.1), transparent 48%)
            `,
            maskImage: 'linear-gradient(270deg, black 0%, black 50%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(270deg, black 0%, black 50%, transparent 100%)'
          }}
        />
        <div
          className="absolute -right-8 bottom-1/3 h-28 w-28 rounded-full bg-brand-violet-bright/12 blur-2xl home-float-b"
          style={{ transform: `translate3d(${-x * 0.2}px, ${-y * 0.12}px, 0)` }}
        />
        <div className="relative flex h-full flex-col items-start pb-36 pt-10 pl-3">
          <TopicStack />
          <div className="flex min-h-0 w-full flex-1 flex-col items-start justify-center">
            <RightFlowDecor dx={-x * 0.16} dy={-y * 0.09} />
          </div>
          <div className="flex shrink-0 flex-col gap-4">
            <p
              className="text-[9px] font-semibold uppercase leading-loose tracking-[0.38em] text-brand-navy/40"
              style={{ writingMode: 'vertical-rl' }}
            >
              Learn anywhere
            </p>
            <div className="flex flex-col gap-2.5 border-l-2 border-dashed border-brand-gold/35 pl-2.5">
              <span className="flex items-center gap-1.5 text-[8px] font-bold text-brand-gold-dark/55">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-sun" />
                Modules
              </span>
              <span className="flex items-center gap-1.5 text-[8px] font-bold text-brand-navy/40">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
                Tracks
              </span>
              <span className="flex items-center gap-1.5 text-[8px] font-bold text-brand-mint/70">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-mint" />
                Catalog
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
