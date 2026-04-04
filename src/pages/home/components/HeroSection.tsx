import { ArrowRightOutlined } from '@ant-design/icons'
import { Button, Card, Col, Progress, Row, Space, Tag, Typography } from 'antd'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiBarChart2, FiCalendar } from 'react-icons/fi'
import { heroValueProps } from '../../../const/homePageData'
import { useInView } from '../../../hooks/useInView'
import { HeroValuePropsBand } from './HeroValuePropsBand'
import { HeroVisualCollage } from './HeroVisualCollage'

function reducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
}

export function HeroSection() {
  const [progressPct, setProgressPct] = useState(0)
  const [progRef, progInView] = useInView<HTMLDivElement>({ once: true, threshold: 0.35 })

  useEffect(() => {
    if (!progInView) return
    if (reducedMotion()) {
      setProgressPct(42)
      return
    }
    let start: number | null = null
    const target = 42
    const duration = 1400
    let frame = 0
    const tick = (t: number) => {
      if (start == null) start = t
      const p = Math.min((t - start) / duration, 1)
      const eased = 1 - (1 - p) ** 3
      setProgressPct(Math.round(target * eased))
      if (p < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [progInView])

  return (
    <section
      id="home-hero"
      className="relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-linear-to-br from-white via-brand-gold-light/45 to-brand-sun/15 p-5 shadow-md shadow-brand-navy/10 ring-1 ring-brand-mint/20 md:rounded-[40px] md:p-8 lg:p-10"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_circle_at_85%_12%,rgba(255,176,32,0.14),transparent_55%),radial-gradient(700px_circle_at_8%_88%,rgba(52,211,153,0.12),transparent_50%)]" />
      <div className="pointer-events-none absolute right-8 top-8 hidden h-4 w-4 rotate-12 rounded-sm bg-brand-sun/80 xl:block home-float-a" />
      <div className="pointer-events-none absolute left-10 top-14 hidden h-3 w-3 rotate-6 rounded-sm bg-brand-mint/70 xl:block home-float-b" />
      <div className="pointer-events-none absolute right-24 bottom-10 hidden h-3 w-3 rotate-12 rounded-sm bg-brand-coral/65 xl:block home-float-c" />

      <div className="relative z-[1] grid gap-8 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-10">
        <div className="flex flex-col pt-1 md:pt-2 lg:col-span-5 xl:col-span-5">
          <Tag className="w-fit border-brand-sun/45! bg-linear-to-r from-brand-sun/25 to-brand-mint/20! text-brand-navy! text-[11px]! font-semibold! shadow-sm">
            FMNXT Learning Platform
          </Tag>
          <Typography.Title className="mb-3 mt-3 max-w-none bg-linear-to-r from-brand-navy via-brand-gold to-brand-sun bg-clip-text text-[32px]! leading-[0.98] text-transparent md:mt-4 md:text-[clamp(2.5rem,4.2vw,3.75rem)] lg:max-w-[34rem] xl:max-w-none">
            Power up your FM & CRE learning with practical video paths for busy professionals
          </Typography.Title>
          <Typography.Paragraph className="max-w-2xl text-sm text-slate-600 md:text-base lg:max-w-none">
            FMNXT offers short, structured video courses in Facilities Management and Corporate Real Estate. Learn from
            practical modules, watch lessons anytime, and build skills you can apply immediately.
          </Typography.Paragraph>
          <div className="mt-5 flex flex-wrap items-center gap-3 md:mt-6">
            <Link to="/courses" className="inline-flex no-underline">
              <Button
                type="primary"
                size="large"
                icon={<ArrowRightOutlined />}
                iconPosition="end"
                className="h-11! rounded-full! px-6! font-semibold! shadow-md shadow-brand-gold/25 transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                Explore courses
              </Button>
            </Link>
            <Link to="/login" className="inline-flex no-underline">
              <Button
                size="large"
                className="h-11! rounded-full! border-brand-navy/20! px-6! font-semibold! text-brand-navy! transition-colors hover:border-brand-gold! hover:text-brand-gold-dark!"
              >
                Sign in
              </Button>
            </Link>
          </div>
        </div>

        <div className="relative z-[1] grid min-h-0 gap-3 lg:col-span-7 xl:col-span-7">
          <HeroVisualCollage />
          <div className="rounded-2xl border border-brand-gold/25 bg-linear-to-r from-brand-gold-light/40 via-white to-slate-50 p-4 shadow-sm transition-shadow duration-300 hover:shadow-md lg:hidden">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Quick Snapshot</p>
            <div className="mt-2 flex gap-2">
              <Tag className="border-brand-navy/20! bg-brand-navy/8! text-brand-navy!">30+ video modules</Tag>
              <Tag className="border-brand-gold/35! bg-brand-gold-light/50! text-brand-gold-dark!">Self-paced</Tag>
            </div>
          </div>
          <div ref={progRef}>
            <Card
              styles={{
                body: {
                  background: 'linear-gradient(135deg, #0e7490 0%, #06b6d4 55%, #34d399 100%)',
                  borderRadius: 20
                }
              }}
              className="border-0 shadow-md shadow-brand-gold/20 transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-mint/25 md:shadow-lg"
            >
              <Space align="center">
                <FiBarChart2 className="text-white" aria-hidden />
                <Typography.Text className="uppercase text-xs text-white/85">Video structure</Typography.Text>
              </Space>
              <Typography.Title level={5} className="mb-2 mt-2 text-white">
                Recorded lessons with clear progression
              </Typography.Title>
              <Progress percent={progressPct} showInfo={false} strokeColor="#ecfeff" trailColor="rgba(255,255,255,0.25)" />
            </Card>
          </div>
          <Row gutter={12}>
            <Col xs={24} sm={12}>
              <Card
                styles={{ body: { background: 'rgba(207, 250, 254, 0.45)', borderRadius: 16 } }}
                className="border-brand-gold/35 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
              >
                <Tag className="mb-2 border-brand-navy/15! bg-brand-navy/10! text-brand-navy!">Learning Focus</Tag>
                <Typography.Title level={4} className="my-1 text-slate-900">
                  Role-Ready Skills
                </Typography.Title>
                <Typography.Text className="text-xs leading-relaxed text-slate-600">
                  Learn FM and CRE workflows through practical examples, implementation steps, and real project use cases.
                </Typography.Text>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card
                styles={{ body: { background: 'linear-gradient(135deg, #e0f2fe 0%, #cffafe 100%)', borderRadius: 16 } }}
                className="mt-5! border-cyan-200/80 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:mt-0!"
              >
                <Space size={6}>
                  <FiCalendar className="text-brand-gold-dark" aria-hidden />
                  <Typography.Text className="text-xs text-brand-navy/80">Course access</Typography.Text>
                </Space>
                <Typography.Text strong className="mt-2 block !text-brand-navy">
                  Self-paced video learning
                </Typography.Text>
                <Typography.Text className="text-xs text-slate-600">Watch anytime after enrollment</Typography.Text>
              </Card>
            </Col>
          </Row>
        </div>

        <div className="lg:col-span-12">
          <HeroValuePropsBand items={heroValueProps} />
        </div>
      </div>
    </section>
  )
}
