import { ArrowRightOutlined } from '@ant-design/icons'
import { Button, Col, Row, Tag, Typography } from 'antd'
import { Link } from 'react-router-dom'
import { homeHeroCollageImages } from '../../../const/homeVisuals'
import { HomeDecorativeImage } from './HomeDecorativeImage'

const tags = ['FM operations', 'CRE strategy', 'Workplace', 'Sustainability', 'MEP basics'] as const

export function GrowYourCareerSection() {
  return (
    <section
      id="home-grow-career"
      className="relative overflow-hidden rounded-[28px] border border-white/20 bg-linear-to-br from-brand-gold via-[#4f4fff] to-brand-gold-dark p-6 shadow-xl shadow-brand-gold/30 md:rounded-[34px] md:p-10 lg:p-12"
    >
      <div className="pointer-events-none absolute inset-0 home-dot-grid opacity-[0.12]" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.12)_0%,transparent_45%,rgba(0,0,0,0.08)_100%)]" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 opacity-90"
        style={{
          backgroundImage: `radial-gradient(ellipse 70% 55% at 90% 15%, rgba(255,255,255,0.35), transparent),
            radial-gradient(ellipse 55% 45% at 10% 90%, rgba(52, 52, 255, 0.25), transparent)`
        }}
        aria-hidden
      />
      <div className="pointer-events-none absolute -right-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-white/25 blur-3xl" aria-hidden />

      <Row gutter={[32, 32]} align="middle" className="relative z-[2]">
        <Col xs={24} lg={14}>
          <Tag className="mb-3 border-0! bg-white/25! text-[11px]! font-semibold! uppercase tracking-wider! text-white! backdrop-blur-sm">
            Get started
          </Tag>
          <Typography.Title
            level={2}
            className="!m-0 !text-2xl !font-bold !leading-tight !tracking-tight !text-white drop-shadow-sm md:!text-3xl lg:!text-4xl"
          >
            Grow your career! Start learning with FMNXT.
          </Typography.Title>
          <Typography.Paragraph className="!mb-0 !mt-4 !max-w-xl !text-base !font-medium !leading-relaxed !text-white/95">
            Short, applied video programs in facilities management and corporate real estate—built for how you work.
          </Typography.Paragraph>
          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span
                key={t}
                className="inline-flex items-center rounded-full border border-white/35 bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm"
              >
                {t}
              </span>
            ))}
          </div>
          <Link to="/courses" className="mt-8 inline-flex no-underline">
            <Button
              type="primary"
              size="large"
              icon={<ArrowRightOutlined />}
              iconPosition="end"
              className="h-12! rounded-lg! border-0! bg-white! px-7! font-semibold! text-brand-gold! shadow-lg shadow-black/15 hover:!bg-brand-gold-light!"
            >
              Browse courses
            </Button>
          </Link>
        </Col>
        <Col xs={24} lg={10}>
          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            {homeHeroCollageImages.map((img, i) => (
              <div
                key={img.src}
                className={`group overflow-hidden rounded-2xl border-[3px] border-white/40 shadow-xl shadow-black/15 ring-2 ring-white/30 ${
                  i === 1 ? 'mt-4 sm:mt-6' : ''
                } ${i === 2 ? '-mt-2 sm:-mt-3' : ''}`.trim()}
              >
                <HomeDecorativeImage
                  src={img.src}
                  fallbackSrc={img.fallbackSrc}
                  alt={img.alt}
                  className="aspect-[4/3] min-h-0 w-full"
                  imgClassName="transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </section>
  )
}
