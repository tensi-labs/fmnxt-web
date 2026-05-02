import { ArrowRightOutlined } from '@ant-design/icons'
import { Card, Col, Row, Typography } from 'antd'
import { Link } from 'react-router-dom'
import { heroValueProps } from '../../../const/homePageData'
import { homeLearningTrackImages } from '../../../const/homeVisuals'
import { useInView } from '../../../hooks/useInView'
import { HomeDecorativeImage } from './HomeDecorativeImage'
import { SectionHeading } from './SectionHeading'

export function BuiltForLearnersSection() {
  const [sectionRef, sectionInView] = useInView<HTMLElement>({ once: true, threshold: 0.12 })

  return (
    <section
      ref={sectionRef}
      id="home-pillars"
      className="home-accent-top home-surface-elevated overflow-hidden rounded-[28px] border border-neutral-200/90 bg-white p-6 md:rounded-[34px] md:p-8 lg:p-10"
    >
      <SectionHeading
        kicker="Choose your path"
        title="Three ways we fit serious FM & CRE schedules"
        description="Pick how you want to learn on FMNXT—same practical lessons, flexible to the way your week actually runs."
      />

      <Row
        gutter={[20, 20]}
        className={`home-stagger-cards mt-10 ${sectionInView ? 'home-stagger-cards--visible' : ''}`}
      >
        {heroValueProps.map((item, i) => {
          const visual = homeLearningTrackImages[i]
          return (
            <Col key={item.id} xs={24} md={8} className="home-stagger-item">
              <Card
                className="group h-full overflow-hidden rounded-2xl border-slate-100 shadow-md shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold/35 hover:shadow-xl hover:shadow-brand-gold/15"
                styles={{ body: { padding: 0 } }}
              >
                {visual ? (
                  <div className="relative max-h-48 overflow-hidden bg-slate-100">
                    <HomeDecorativeImage
                      src={visual.src}
                      fallbackSrc={visual.fallbackSrc}
                      alt={visual.alt}
                      className="min-h-44 max-h-48"
                      imgClassName="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-slate-900/40 via-transparent to-transparent opacity-90" />
                  </div>
                ) : null}
                <div className="p-5 md:p-6">
                  <Typography.Text className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand-gold">
                    {item.subtitle}
                  </Typography.Text>
                  <Typography.Title level={4} className="!mb-2 !mt-2 !text-lg !font-bold !text-slate-900 md:!text-xl">
                    {item.title}
                  </Typography.Title>
                  <Typography.Paragraph className="mb-0 line-clamp-5 text-sm leading-relaxed text-slate-600">
                    {item.detail}
                  </Typography.Paragraph>
                  <Link
                    to="/courses"
                    className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-brand-gold underline-offset-2 transition-colors hover:text-brand-gold-dark hover:underline"
                  >
                    Learn more
                    <ArrowRightOutlined className="text-xs" />
                  </Link>
                </div>
              </Card>
            </Col>
          )
        })}
      </Row>
    </section>
  )
}
