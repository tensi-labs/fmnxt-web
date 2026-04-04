import { usePointerParallax } from '../../../hooks/usePointerParallax'

export function PageDecorations() {
  const { x, y } = usePointerParallax(18)

  return (
    <div
      className="pointer-events-none absolute inset-x-0 top-0 z-0 min-h-[120vh] overflow-visible"
      style={{ transform: `translate3d(${x * 0.6}px, ${y * 0.6}px, 0)` }}
      aria-hidden
    >
      <div className="home-blob-slow absolute -left-20 top-20 h-72 w-72 rounded-full bg-linear-to-br from-brand-sun/50 via-brand-coral/35 to-transparent blur-3xl md:h-80 md:w-80" />
      <div className="home-blob-slower absolute -right-24 top-40 h-80 w-80 rounded-full bg-linear-to-bl from-brand-violet-bright/40 via-brand-mint/30 to-transparent blur-3xl" />
      <div className="home-blob-slow absolute -left-10 bottom-32 hidden h-64 w-64 rounded-full bg-linear-to-tr from-brand-gold/45 via-brand-mint/35 to-brand-sun/25 blur-3xl lg:block" />
      <div className="absolute right-[12%] top-[28%] h-16 w-16 rounded-2xl border-2 border-brand-sun/60 bg-brand-sun/20 shadow-lg home-float-a md:h-20 md:w-20" />
      <div className="absolute left-[8%] top-[48%] h-10 w-10 rounded-full border-2 border-brand-coral/55 bg-brand-coral/15 home-float-b" />
      <div className="absolute right-[4%] top-[62%] hidden h-8 w-24 rotate-[-14deg] rounded-full bg-linear-to-r from-brand-mint/50 to-brand-gold/40 blur-sm home-float-c xl:block" />
    </div>
  )
}
