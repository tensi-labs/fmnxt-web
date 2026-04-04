import { homeHeroCollageImages } from '../../../const/homeVisuals'
import { HomeDecorativeImage } from './HomeDecorativeImage'

export function HeroVisualCollage() {
  const [a, b, c] = homeHeroCollageImages

  return (
    <div
      className="relative mx-auto mt-2 h-[min(320px,58vw)] w-full max-w-[420px] sm:h-[340px] md:mt-0 md:h-[380px] lg:mx-0 lg:h-[min(440px,42vw)] lg:max-w-none xl:h-[min(480px,38vw)]"
      aria-hidden
    >
      <div className="pointer-events-none absolute -right-2 -top-10 h-28 w-28 rounded-full bg-linear-to-br from-brand-sun to-brand-coral opacity-85 blur-2xl home-glow-pulse md:right-4 md:h-36 md:w-36" />
      <div className="pointer-events-none absolute -bottom-6 -left-4 h-24 w-24 rounded-full bg-linear-to-tr from-brand-mint to-brand-gold opacity-80 blur-2xl home-glow-pulse-slow md:h-32 md:w-32" />

      <div
        className="absolute left-0 top-2 w-[58%] overflow-hidden rounded-2xl border-[3px] border-white shadow-xl shadow-brand-navy/20 ring-1 ring-brand-sun/40 home-float-a"
        style={{ zIndex: 2 }}
      >
        <HomeDecorativeImage
          src={a.src}
          fallbackSrc={a.fallbackSrc}
          alt=""
          className="aspect-[4/3] min-h-0"
          imgClassName="home-img-ken aspect-[4/3] h-full w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-tr from-brand-sun/40 via-transparent to-brand-coral/30 mix-blend-soft-light" />
      </div>

      <div
        className="absolute right-0 top-0 w-[52%] overflow-hidden rounded-2xl border-[3px] border-white shadow-xl shadow-brand-violet-bright/25 ring-1 ring-brand-mint/50 home-drift-x"
        style={{ zIndex: 3 }}
      >
        <HomeDecorativeImage
          src={b.src}
          fallbackSrc={b.fallbackSrc}
          alt=""
          className="aspect-[4/3] min-h-0"
          imgClassName="home-img-pan aspect-[4/3] w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-bl from-brand-mint/35 via-transparent to-brand-violet-bright/25 mix-blend-soft-light" />
      </div>

      <div
        className="absolute bottom-0 left-[12%] w-[72%] overflow-hidden rounded-2xl border-[3px] border-white shadow-xl shadow-brand-gold/30 ring-1 ring-brand-gold/45 home-float-c"
        style={{ zIndex: 4 }}
      >
        <HomeDecorativeImage
          src={c.src}
          fallbackSrc={c.fallbackSrc}
          alt=""
          className="aspect-[16/9] min-h-0"
          imgClassName="home-img-ken aspect-[16/9] h-full w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-brand-gold/30 via-transparent to-brand-sun/25 mix-blend-soft-light" />
      </div>

      <div className="pointer-events-none absolute right-[6%] top-[38%] hidden h-12 w-12 rotate-12 rounded-2xl border-2 border-brand-sun bg-brand-sun/30 shadow-md md:block home-spin-slow" />
      <div className="pointer-events-none absolute bottom-[8%] left-[2%] h-9 w-9 -rotate-6 rounded-full border-2 border-brand-mint bg-brand-mint/25 shadow-sm home-bob-slow md:h-11 md:w-11" />
    </div>
  )
}
