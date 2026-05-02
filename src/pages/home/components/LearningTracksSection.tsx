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
  /** Renders on the muted “Courses & study paths” surface (template-style card). */
  surface?: 'default' | 'muted'
}

export function LearningTracksSection({ tracks, surface = 'default' }: Props) {
  const [expanded, setExpanded] = useState<number | null>(0)
  const [sectionRef, sectionInView] = useInView<HTMLElement>({ once: true, threshold: 0.1 })

  return (
    <section
      ref={sectionRef}
      id="home-tracks"
      className={`rounded-2xl p-6 md:rounded-3xl md:p-8 ${
        surface === 'muted'
          ? 'border border-white/80 bg-white shadow-md'
          : 'border border-slate-200 bg-white shadow-sm'
      }`}
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
                    ?                       surface === 'muted'
                      ? '-translate-y-1 border-brand-gold/30 shadow-lg shadow-brand-gold/15 ring-1 ring-brand-gold/25'
                      : '-translate-y-1 border-brand-navy/20 shadow-lg shadow-slate-200/80 ring-1 ring-brand-navy/10'
                    : 'hover:-translate-y-1 hover:border-slate-300 hover:shadow-md hover:shadow-slate-200/60'
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
                    <Typography.Text strong className={`block ${surface === 'muted' ? 'text-slate-900' : 'text-brand-navy'}`}>
                      {track.title}
                    </Typography.Text>
                    <Typography.Paragraph className={`mb-0 mt-2 text-slate-600 ${open ? '' : 'line-clamp-2'}`}>
                      {track.copy}
                    </Typography.Paragraph>
                  </span>
                  <DownOutlined
                    className={`mt-1 shrink-0 transition-transform duration-500 ${open ? 'rotate-180' : ''} ${
                      surface === 'muted' ? 'text-brand-gold' : 'text-brand-gold-dark'
                    }`}
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
                        className={`inline-flex items-center gap-1 text-sm font-bold underline-offset-2 transition-all hover:gap-2 hover:underline ${
                          surface === 'muted' ? 'text-brand-gold hover:text-brand-gold-dark' : 'text-brand-gold-dark hover:text-brand-navy'
                        }`}
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
