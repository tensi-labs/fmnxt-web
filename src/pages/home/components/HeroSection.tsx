import { ArrowRightOutlined } from '@ant-design/icons'
import { Button, Typography } from 'antd'
import { Link } from 'react-router-dom'
import { homeHeroSplitImage } from '../../../const/homeVisuals'
import { HomeDecorativeImage } from './HomeDecorativeImage'

/** Break out of centered `<main>` to viewport width. */
export const HOME_FULL_BLEED = 'relative ml-[calc(50%-50vw)] mr-[calc(50%-50vw)] w-screen max-w-[100vw]'

/**
 * Inset “bento” hero on a cool neutral ground — asymmetric copy/image ratio,
 * gradient headline line, light tilt on image — distinct from the Webflow template split.
 */
export function HeroSection() {
  return (
    <section
      id="home-hero"
      className={`${HOME_FULL_BLEED} relative overflow-hidden border-b border-neutral-200/90 bg-neutral-100`}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-linear-to-b from-white/70 to-transparent"
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-5 py-12 sm:px-8 md:py-16 lg:px-10 lg:py-20">
        <div className="overflow-hidden rounded-[1.75rem] border border-white/90 bg-white p-1 shadow-[0_32px_64px_-20px_rgba(15,23,42,0.14)] md:rounded-[2rem]">
          <div className="relative rounded-[1.5rem] bg-linear-to-br from-slate-50/95 via-white to-[#ececff]/50 p-6 sm:p-8 md:rounded-[1.75rem] md:p-10 lg:p-12">
            <div className="grid items-center gap-10 md:grid-cols-12 md:gap-8 lg:gap-12">
              <div className="order-2 text-center md:order-1 md:col-span-7 md:text-left">
                <span className="inline-flex rounded-full border border-brand-gold/20 bg-brand-gold-light px-3.5 py-1.5 text-[11px] font-semibold tracking-wide text-brand-gold">
                  FMNXT learning platform
                </span>

                <Typography.Title
                  level={1}
                  className="!mt-5 !mb-0 !text-[2.2rem] !font-extrabold !leading-[1.08] !tracking-[-0.04em] sm:!text-[2.65rem] md:!mt-6 md:!text-[2.95rem] lg:!text-[3.45rem]"
                >
                  <span className="block text-neutral-900">Grow your skills.</span>
                  <span className="mt-2 block bg-linear-to-r from-brand-gold via-[#4f46e5] to-[#6366f1] bg-clip-text text-transparent md:mt-2.5">
                    Define your FM &amp; CRE future.
                  </span>
                </Typography.Title>

                <Typography.Paragraph className="!mb-0 !mt-5 !max-w-lg !text-base !font-normal !leading-relaxed !text-neutral-600 md:!mx-0 md:!mt-6 md:!text-lg">
                  Short, structured video courses in Facilities Management and Corporate Real Estate. Learn on your schedule and
                  apply skills on the job.
                </Typography.Paragraph>

                <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:mt-10 md:flex-row md:justify-start md:gap-4">
                  <Link to="/courses" className="inline-flex w-full justify-center no-underline md:w-auto">
                    <Button
                      type="primary"
                      size="large"
                      icon={<ArrowRightOutlined />}
                      iconPosition="end"
                      className="hero-academy-btn-primary h-12! min-h-12! w-full rounded-xl! border-0! bg-brand-gold! px-7! text-sm! font-semibold! !text-white shadow-md shadow-brand-gold/25 hover:!bg-brand-gold-dark! md:min-w-[11rem]"
                    >
                      Our courses
                    </Button>
                  </Link>
                  <Link to="/about" className="inline-flex w-full justify-center no-underline md:w-auto">
                    <Button
                      size="large"
                      className="hero-academy-btn-secondary h-12! min-h-12! w-full rounded-xl! border-2! border-brand-gold! bg-white! px-7! text-sm! font-semibold! !text-brand-gold hover:!bg-brand-gold-light! md:min-w-[10rem]"
                    >
                      About us
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="order-1 mx-auto w-full max-w-sm md:order-2 md:col-span-5 md:mx-0 md:max-w-none">
                <div className="relative transition-transform duration-500 ease-out md:rotate-[1.75deg] md:hover:rotate-0">
                  <HomeDecorativeImage
                    src={homeHeroSplitImage.src}
                    fallbackSrc={homeHeroSplitImage.fallbackSrc}
                    alt={homeHeroSplitImage.alt}
                    className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-[0_28px_56px_-16px_rgba(15,23,42,0.22)] ring-1 ring-black/[0.06] md:aspect-[3/4] md:rounded-[1.35rem]"
                    imgClassName="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
