import { Card, Col, Row, Typography } from 'antd'
import { useCallback, useState } from 'react'
import { FiBriefcase, FiClock, FiLayers, FiPlayCircle } from 'react-icons/fi'
import { homeBuiltBannerImage } from '../../../const/homeVisuals'
import { useInView } from '../../../hooks/useInView'
import { HomeDecorativeImage } from './HomeDecorativeImage'
import { SectionHeading } from './SectionHeading'

const pillars = [
  {
    title: 'Structured paths',
    copy: 'Clear progression from fundamentals to applied scenarios so you always know what to watch next.',
    icon: FiLayers
  },
  {
    title: 'Video-first delivery',
    copy: 'Focused modules you can replay, pause, and fit around meetings, sites, and travel.',
    icon: FiPlayCircle
  },
  {
    title: 'Workplace context',
    copy: 'Examples grounded in FM operations, CRE decisions, and real portfolio challenges.',
    icon: FiBriefcase
  },
  {
    title: 'Flexible pace',
    copy: 'Self-paced learning with on-demand access whenever your calendar allows.',
    icon: FiClock
  }
] as const

export function BuiltForLearnersSection() {
  const [selected, setSelected] = useState<string>(pillars[0].title)
  const [sectionRef, sectionInView] = useInView<HTMLElement>({ once: true, threshold: 0.12 })
  const [bannerRef, bannerInView] = useInView<HTMLDivElement>({ once: true, threshold: 0.15 })

  const activate = useCallback((title: string) => {
    setSelected(title)
  }, [])

  return (
    <section
      ref={sectionRef}
      id="home-pillars"
      className="overflow-hidden rounded-[28px] border border-slate-200/90 bg-white p-6 shadow-sm shadow-slate-900/5 md:rounded-[34px] md:p-8 lg:p-10"
    >
      <SectionHeading
        kicker="Learning platform"
        title="We strengthen professional skills with structured video learning"
        description="From your first lesson, FMNXT guides you through practical FM and CRE concepts with clear progression, real workplace context, and a learner-friendly experience."
      />

      <div
        ref={bannerRef}
        className={`group relative mt-8 overflow-hidden rounded-2xl border border-slate-200/80 shadow-lg shadow-brand-navy/15 ring-1 ring-brand-sun/30 home-media-enter ${
          bannerInView ? 'home-media-enter--visible' : ''
        }`}
      >
        <HomeDecorativeImage
          src={homeBuiltBannerImage.src}
          fallbackSrc={homeBuiltBannerImage.fallbackSrc}
          alt={homeBuiltBannerImage.alt}
          className="aspect-[2.2/1] min-h-[220px] w-full sm:min-h-[240px] md:min-h-[280px]"
          imgClassName="transition-transform duration-[1.1s] ease-out group-hover:scale-[1.03]"
        />
        <div className="pointer-events-none absolute inset-0 z-[1] bg-linear-to-r from-brand-navy/85 via-brand-navy/45 to-brand-navy/10" aria-hidden />
        <div className="absolute inset-0 z-[2] flex flex-col justify-end p-5 md:p-8">
          <Typography.Text className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-sun drop-shadow-sm">
            Learn anywhere
          </Typography.Text>
          <Typography.Title level={4} className="!mb-0 !mt-1 max-w-xl !text-white drop-shadow-md md:!text-2xl">
            FM & CRE skills that fit real buildings and real portfolios
          </Typography.Title>
        </div>
      </div>

      <Row
        gutter={[16, 16]}
        className={`home-stagger-cards mt-8 ${sectionInView ? 'home-stagger-cards--visible' : ''}`}
      >
        {pillars.map(({ title, copy, icon: Icon }) => {
          const isSelected = selected === title
          return (
            <Col key={title} xs={24} sm={12} lg={6} className="home-stagger-item">
              <Card
                role="button"
                tabIndex={0}
                aria-pressed={isSelected}
                onClick={() => activate(title)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    activate(title)
                  }
                }}
                className={`h-full cursor-pointer rounded-2xl border-slate-200/90 transition-all duration-300 outline-none hover:-translate-y-1 hover:border-brand-gold/45 hover:shadow-lg hover:shadow-brand-gold/15 focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 ${
                  isSelected ? 'border-brand-gold/50 shadow-lg shadow-brand-navy/10 ring-2 ring-brand-gold/60' : ''
                }`}
              >
                <div
                  className={`mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300 ${
                    isSelected ? 'scale-110 bg-brand-navy text-white' : 'bg-brand-gold-light text-brand-gold-dark'
                  }`}
                >
                  <Icon className="text-xl" aria-hidden />
                </div>
                <Typography.Text strong className="block text-brand-navy">
                  {title}
                </Typography.Text>
                <Typography.Paragraph className="mb-0 mt-2 text-sm text-slate-600">{copy}</Typography.Paragraph>
              </Card>
            </Col>
          )
        })}
      </Row>
    </section>
  )
}
