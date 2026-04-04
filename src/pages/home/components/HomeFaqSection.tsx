import { Collapse, Col, Row, Typography } from 'antd'
import { homeFaqAccentImages, homeFaqVisualImage } from '../../../const/homeVisuals'
import { HomeDecorativeImage } from './HomeDecorativeImage'
import { SectionHeading } from './SectionHeading'

export type FaqItem = { key: string; question: string; answer: string }

type Props = {
  kicker: string
  title: string
  description?: string
  items: FaqItem[]
}

export function HomeFaqSection({ kicker, title, description, items }: Props) {
  return (
    <section
      id="home-faq"
      className="rounded-[28px] border border-slate-200/90 bg-white p-6 shadow-md shadow-slate-900/10 ring-1 ring-brand-sun/10 md:rounded-[34px] md:p-8 lg:p-10"
    >
      <Row gutter={[28, 28]} align="top">
        <Col xs={24} lg={14}>
          <SectionHeading kicker={kicker} title={title} description={description} />
          <Collapse
            className="mt-6 border-0! bg-transparent! [&_.ant-collapse-item]:mb-2 [&_.ant-collapse-item]:overflow-hidden [&_.ant-collapse-item]:rounded-xl! [&_.ant-collapse-item]:border! [&_.ant-collapse-item]:border-slate-200/90! [&_.ant-collapse-item]:transition-shadow! [&_.ant-collapse-item]:duration-300! [&_.ant-collapse-item]:hover:shadow-md! [&_.ant-collapse-header]:py-4! [&_.ant-collapse-header]:font-semibold! [&_.ant-collapse-header]:text-brand-navy!"
            bordered={false}
            expandIconPosition="end"
            items={items.map((item) => ({
              key: item.key,
              label: item.question,
              children: <Typography.Paragraph className="!mb-0 !text-slate-600">{item.answer}</Typography.Paragraph>
            }))}
          />
        </Col>
        <Col xs={24} lg={10} className="overflow-x-clip pb-20 lg:pb-0">
          <div className="relative mx-auto max-w-md px-1 sm:px-0 lg:mx-0 lg:max-w-none">
            <div className="relative overflow-hidden rounded-2xl border-[3px] border-white shadow-xl shadow-brand-navy/15 ring-2 ring-brand-mint/25 home-float-a">
              <HomeDecorativeImage
                src={homeFaqVisualImage.src}
                fallbackSrc={homeFaqVisualImage.fallbackSrc}
                alt={homeFaqVisualImage.alt}
                className="aspect-[4/5] min-h-[200px] sm:aspect-[3/4]"
                imgClassName="home-img-ken"
              />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-brand-navy/40 via-transparent to-brand-sun/15" />
            </div>
            <div className="absolute -bottom-4 left-0 w-[40%] max-w-[150px] rotate-[-6deg] overflow-hidden rounded-lg border-4 border-white shadow-lg home-faq-polaroid-a sm:-bottom-6 sm:-left-4 sm:w-[42%] sm:max-w-[160px]">
              <HomeDecorativeImage
                src={homeFaqAccentImages[0].src}
                fallbackSrc={homeFaqAccentImages[0].fallbackSrc}
                alt={homeFaqAccentImages[0].alt}
                className="aspect-square min-h-0 w-full"
              />
            </div>
            <div className="absolute right-0 top-[18%] w-[36%] max-w-[130px] rotate-[5deg] overflow-hidden rounded-lg border-4 border-white shadow-lg home-faq-polaroid-b sm:-right-5 sm:top-[20%] sm:w-[38%] sm:max-w-[140px]">
              <HomeDecorativeImage
                src={homeFaqAccentImages[1].src}
                fallbackSrc={homeFaqAccentImages[1].fallbackSrc}
                alt={homeFaqAccentImages[1].alt}
                className="aspect-square min-h-0 w-full"
              />
            </div>
          </div>
        </Col>
      </Row>
    </section>
  )
}
