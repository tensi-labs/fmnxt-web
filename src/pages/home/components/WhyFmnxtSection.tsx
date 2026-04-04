import { Card, Col, Row, Tag, Typography } from 'antd'
import { homeWhyImage } from '../../../const/homeVisuals'
import { HomeDecorativeImage } from './HomeDecorativeImage'

export function WhyFmnxtSection() {
  return (
    <section
      id="home-why"
      className="relative overflow-hidden rounded-[28px] bg-linear-to-br from-brand-navy via-[#0c4a6e] to-brand-violet-bright/40 p-6 shadow-lg shadow-brand-navy/25 md:rounded-[34px] md:p-8"
    >
      <div className="pointer-events-none absolute -left-6 top-10 h-24 w-24 rounded-full border border-white/20 home-float-a" />
      <div className="pointer-events-none absolute right-16 top-8 h-3 w-3 rotate-12 rounded-sm bg-brand-sun/70 home-float-b" />
      <div className="pointer-events-none absolute right-10 bottom-12 h-2.5 w-2.5 rotate-12 rounded-sm bg-brand-mint/80 home-float-c" />
      <Row gutter={[24, 24]} align="middle">
        <Col xs={24} md={16}>
          <Tag className="border-brand-sun/50! bg-brand-sun/15! text-brand-sun!">Why FMNXT</Tag>
          <Typography.Title level={3} className="mt-3 mb-2 !text-white">
            Purpose-built learning for Facilities Management and Corporate Real Estate careers.
          </Typography.Title>
          <Typography.Text className="text-slate-200">
            Practical topics, affordable pricing, and simple course delivery for working professionals.
          </Typography.Text>
        </Col>
        <Col xs={24} md={8}>
          <Card
            styles={{ body: { background: 'rgba(255,255,255,0.98)', borderRadius: 20, padding: 12 } }}
            className="mx-auto max-w-xs border-0 shadow-2xl shadow-brand-navy/30 home-float-b"
          >
            <div className="group overflow-hidden rounded-xl">
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
