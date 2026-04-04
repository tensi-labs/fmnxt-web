import { DownOutlined } from '@ant-design/icons'
import { Card, Col, Row, Typography } from 'antd'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { homeLearningTrackImages } from '../../../const/homeVisuals'
import { useInView } from '../../../hooks/useInView'
import { HomeDecorativeImage } from './HomeDecorativeImage'
import { SectionHeading } from './SectionHeading'

type Track = { title: string; copy: string }

type Props = {
  tracks: Track[]
}

export function LearningTracksSection({ tracks }: Props) {
  const [expanded, setExpanded] = useState<number | null>(0)
  const [sectionRef, sectionInView] = useInView<HTMLElement>({ once: true, threshold: 0.1 })

  return (
    <section
      ref={sectionRef}
      id="home-tracks"
      className="rounded-[28px] border border-slate-200/90 bg-linear-to-br from-slate-50 via-brand-gold-light/30 to-brand-sun/10 p-6 shadow-md shadow-slate-900/10 ring-1 ring-brand-mint/10 md:rounded-[34px] md:p-8"
    >
      <SectionHeading
        align="center"
        kicker="Learning tracks"
        title="Explore the core areas that matter most"
        description="FMNXT organizes content into tracks so you can deepen skills where your role needs it most. Tap a card to expand and jump to the catalog."
      />
      <Row
        gutter={[16, 16]}
        className={`home-stagger-cards mt-8 ${sectionInView ? 'home-stagger-cards--visible' : ''}`}
      >
        {tracks.map((track, i) => {
          const open = expanded === i
          const visual = homeLearningTrackImages[i]
          return (
            <Col key={track.title} xs={24} md={8} className="home-stagger-item">
              <Card
                className={`group h-full overflow-hidden rounded-2xl border-slate-200/90 bg-white/95 transition-all duration-500 ${
                  open
                    ? '-translate-y-1 border-brand-gold/50 shadow-xl shadow-brand-navy/12 ring-1 ring-brand-sun/30'
                    : 'hover:-translate-y-1 hover:border-brand-gold/40 hover:shadow-xl hover:shadow-brand-navy/10'
                }`}
                styles={{ body: { paddingTop: 16 } }}
                cover={
                  visual ? (
                    <div className="relative max-h-52 overflow-hidden">
                      <HomeDecorativeImage
                        src={visual.src}
                        fallbackSrc={visual.fallbackSrc}
                        alt={visual.alt}
                        className="min-h-48 max-h-52 sm:min-h-52"
                        imgClassName="home-img-ken-hover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                      />
                      <div className="pointer-events-none absolute inset-0 z-[1] bg-linear-to-t from-brand-navy/35 via-transparent to-transparent opacity-90" />
                    </div>
                  ) : undefined
                }
              >
                <button
                  type="button"
                  className="flex w-full cursor-pointer items-start gap-2 border-0 bg-transparent p-0 text-left"
                  aria-expanded={open}
                  onClick={() => setExpanded((v) => (v === i ? null : i))}
                >
                  <span className="min-w-0 flex-1">
                    <Typography.Text strong className="block text-brand-navy">
                      {track.title}
                    </Typography.Text>
                    <Typography.Paragraph className={`mb-0 mt-2 text-slate-600 ${open ? '' : 'line-clamp-2'}`}>
                      {track.copy}
                    </Typography.Paragraph>
                  </span>
                  <DownOutlined
                    className={`mt-1 shrink-0 text-brand-gold-dark transition-transform duration-500 ${open ? 'rotate-180' : ''}`}
                    aria-hidden
                  />
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-500 ease-out motion-reduce:transition-none ${
                    open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pt-4">
                      <Link
                        to="/courses"
                        className="inline-flex items-center gap-1 text-sm font-bold text-brand-gold-dark underline-offset-2 transition-all hover:gap-2 hover:text-brand-navy hover:underline"
                      >
                        Browse courses in this area
                        <span aria-hidden>→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
          )
        })}
      </Row>
    </section>
  )
}
