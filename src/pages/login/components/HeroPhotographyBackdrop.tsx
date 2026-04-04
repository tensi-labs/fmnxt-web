import { When } from '../../../components/When'
import { LOGIN_HERO_IMAGES } from '../data/loginPageData'

type HeroPhotographyBackdropProps = {
  isDecorative?: boolean
}

export function HeroPhotographyBackdrop({ isDecorative = false }: HeroPhotographyBackdropProps) {
  return (
    <>
      <div className="absolute inset-0 bg-[#030712]" aria-hidden />
      <div className="absolute inset-0 flex flex-row">
        {LOGIN_HERO_IMAGES.map((imageSource) => (
          <div key={imageSource.src} className="relative min-h-0 flex-1">
            <When isTrue={!isDecorative}>
              <img
                src={imageSource.src}
                alt={imageSource.alt}
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </When>
            <When isTrue={isDecorative}>
              <img
                src={imageSource.src}
                alt=""
                className="h-full w-full object-cover"
                loading="eager"
                decoding="async"
                aria-hidden
              />
            </When>
          </div>
        ))}
      </div>
      <div
        className="absolute inset-0 bg-linear-to-br from-brand-navy/68 via-brand-navy/28 to-brand-navy/78"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_50%_35%,transparent_0%,rgba(0,14,30,0.5)_85%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-brand-navy/20"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(198,156,53,0.12),transparent_55%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[40px_40px] md:bg-size-[48px_48px]"
        aria-hidden
      />
    </>
  )
}
