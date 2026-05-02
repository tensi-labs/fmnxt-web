import { usePointerParallax } from '../../../hooks/usePointerParallax'

export function PageDecorations() {
  const { x, y } = usePointerParallax(18)

  return (
    <div
      className="pointer-events-none absolute inset-x-0 top-0 z-0 min-h-[120vh] overflow-visible"
      style={{ transform: `translate3d(${x * 0.6}px, ${y * 0.6}px, 0)` }}
      aria-hidden
    >
      <div className="home-blob-slow absolute -left-20 top-20 h-72 w-72 rounded-full bg-linear-to-br from-brand-gold/25 via-brand-gold-light/60 to-transparent blur-3xl md:h-80 md:w-80" />
      <div className="home-blob-slower absolute -right-24 top-40 h-80 w-80 rounded-full bg-linear-to-bl from-brand-violet-bright/25 via-brand-gold/15 to-transparent blur-3xl" />
      <div className="home-blob-slow absolute -left-10 bottom-32 hidden h-64 w-64 rounded-full bg-linear-to-tr from-brand-navy/12 via-brand-mint/25 to-brand-gold-light/40 blur-3xl lg:block" />
      <div className="absolute right-[12%] top-[28%] h-16 w-16 rounded-2xl border-2 border-brand-gold/45 bg-brand-gold/15 shadow-lg home-float-a md:h-20 md:w-20" />
      <div className="absolute left-[8%] top-[48%] h-10 w-10 rounded-full border-2 border-brand-gold-dark/40 bg-brand-gold-light/80 home-float-b" />
      <div className="absolute right-[4%] top-[62%] hidden h-8 w-24 rotate-[-14deg] rounded-full bg-linear-to-r from-brand-mint/40 to-brand-gold/30 blur-sm home-float-c xl:block" />
    </div>
  )
}
