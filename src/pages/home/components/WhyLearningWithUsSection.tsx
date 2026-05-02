import { Col, Row, Typography } from 'antd'
import { FiBookOpen, FiClock, FiGlobe, FiUsers } from 'react-icons/fi'
import { useInView } from '../../../hooks/useInView'

const features = [
  {
    title: 'Expert-led video',
    copy: 'Focused modules from practitioners who know FM operations, CRE decisions, and portfolio realities.',
    icon: FiUsers
  },
  {
    title: 'Top-notch courses',
    copy: 'Clear outcomes and practical takeaways you can use in the next meeting, walkthrough, or review.',
    icon: FiBookOpen
  },
  {
    title: 'Learn anywhere',
    copy: 'Self-paced access across devices—start, pause, and resume around sites, travel, and deadlines.',
    icon: FiGlobe
  },
  {
    title: 'Built for busy weeks',
    copy: 'Short lessons that fit between meetings and shift changes without losing momentum.',
    icon: FiClock
  }
] as const

export function WhyLearningWithUsSection() {
  const [ref, inView] = useInView<HTMLElement>({ once: true, threshold: 0.1 })

  return (
    <section
      ref={ref}
      id="home-why-learn"
      className="home-accent-top relative overflow-hidden rounded-[28px] border border-white/70 bg-white/90 p-6 shadow-lg shadow-slate-900/[0.06] backdrop-blur-sm md:rounded-[34px] md:p-10 lg:p-12"
    >
      <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-brand-gold/10 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-brand-gold/[0.08] blur-3xl" aria-hidden />

      <div className="relative z-[1] mx-auto max-w-3xl text-center">
        <Typography.Text className="text-[11px] font-bold uppercase tracking-[0.28em] text-brand-gold md:text-xs">
          Why FMNXT
        </Typography.Text>
        <span className="mx-auto mt-3 block h-1 w-14 rounded-full bg-brand-gold md:mt-3" aria-hidden />
        <Typography.Title level={2} className="!mb-3 !mt-5 !text-2xl !font-bold !text-slate-900 md:!text-3xl">
          Why learning with us?
        </Typography.Title>
        <Typography.Paragraph className="!mb-0 !text-base !leading-relaxed !text-slate-600">
          Every course is delivered as focused video: short lessons, clear outcomes, and practical context for working FM and CRE
          professionals.
        </Typography.Paragraph>
      </div>

      <Row
        gutter={[20, 20]}
        className={`relative z-[1] mt-10 home-stagger-cards ${inView ? 'home-stagger-cards--visible' : ''}`}
      >
        {features.map(({ title, copy, icon: Icon }) => (
          <Col key={title} xs={24} sm={12} lg={6} className="home-stagger-item">
            <div className="flex h-full flex-col rounded-2xl border border-slate-100 bg-linear-to-b from-white to-brand-gold-light/50 p-6 shadow-sm shadow-slate-200/60 ring-1 ring-brand-gold/15 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-gold/25 hover:shadow-lg hover:shadow-brand-gold/15">
              <span className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-gold text-2xl text-white shadow-lg shadow-brand-gold/35 ring-4 ring-brand-gold-light">
                <Icon aria-hidden />
              </span>
              <Typography.Text strong className="block text-base text-slate-900">
                {title}
              </Typography.Text>
              <Typography.Paragraph className="mb-0 mt-2 text-sm leading-relaxed text-slate-600">{copy}</Typography.Paragraph>
            </div>
          </Col>
        ))}
      </Row>
    </section>
  )
}
