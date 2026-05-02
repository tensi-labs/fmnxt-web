import { Card, Col, Row, Tag, Typography } from 'antd'
import { homeWhyImage } from '../../../const/homeVisuals'
import { HomeDecorativeImage } from './HomeDecorativeImage'

export function WhyFmnxtSection() {
  return (
    <section
      id="home-stay-connected"
      className="home-accent-top home-surface-elevated relative overflow-hidden rounded-2xl border border-neutral-200/90 bg-white p-6 md:rounded-3xl md:p-8 lg:p-10"
    >
      <div className="pointer-events-none absolute -left-8 top-12 h-28 w-28 rounded-full bg-brand-gold-light blur-2xl home-float-a" />
      <div className="pointer-events-none absolute right-20 top-10 h-3 w-3 rotate-12 rounded-sm bg-brand-gold home-float-b" />
      <div className="pointer-events-none absolute right-12 bottom-14 h-2.5 w-2.5 rotate-12 rounded-sm bg-brand-gold-dark home-float-c" />
      <Row gutter={[24, 24]} align="middle">
        <Col xs={24} md={16}>
          <Tag className="border-brand-gold/35! bg-brand-gold-light! font-semibold! text-brand-gold-dark!">Stay connected</Tag>
          <Typography.Title level={3} className="mt-3 mb-2 !text-slate-900">
            Purpose-built learning for Facilities Management and Corporate Real Estate careers.
          </Typography.Title>
          <Typography.Text className="text-slate-600">
            Practical topics, affordable pricing, and simple course delivery for working professionals.
          </Typography.Text>
        </Col>
        <Col xs={24} md={8}>
          <Card
            styles={{ body: { background: 'rgba(255,255,255,0.98)', borderRadius: 20, padding: 12 } }}
            className="mx-auto max-w-xs border-slate-100 shadow-xl shadow-brand-gold/15 ring-1 ring-brand-gold/15 home-float-b"
          >
            <div className="group overflow-hidden rounded-xl ring-2 ring-brand-gold-light">
              <HomeDecorativeImage
                src={homeWhyImage.src}
                fallbackSrc={homeWhyImage.fallbackSrc}
                alt={homeWhyImage.alt}
                className="aspect-[4/3] min-h-[180px]"
                imgClassName="home-img-pan home-img-ken-hover"
              />
            </div>
            <div className="px-1 pb-1 pt-3">
              <Typography.Text strong className="block text-brand-navy">
                FMNXT
              </Typography.Text>
              <Typography.Text className="text-xs text-slate-600">Learn · Transform · Lead</Typography.Text>
            </div>
          </Card>
        </Col>
      </Row>
    </section>
  )
}
