import { HeroPhotographyBackdrop } from './HeroPhotographyBackdrop'

export function LoginFormSideAmbience() {
  return (
    <>
      <div className="absolute inset-0 z-0 md:hidden" aria-hidden>
        <HeroPhotographyBackdrop isDecorative />
      </div>
      <div
        className="pointer-events-none absolute inset-0 hidden bg-[radial-gradient(ellipse_90%_55%_at_100%_-10%,rgba(247,228,143,0.42),transparent_58%)] md:block"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 hidden bg-[radial-gradient(ellipse_70%_50%_at_-5%_105%,rgba(198,156,53,0.16),transparent_55%)] md:block"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 hidden bg-linear-to-t from-brand-gold-light/12 via-transparent to-transparent md:block"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 top-1/4 hidden h-72 w-72 rounded-full bg-brand-gold/22 blur-3xl md:block"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 top-[10%] hidden h-56 w-56 rounded-full bg-brand-gold-light/38 blur-3xl md:block"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-1/4 hidden h-64 w-64 rounded-full bg-brand-navy/[0.07] blur-3xl md:block"
        aria-hidden
      />
    </>
  )
}
