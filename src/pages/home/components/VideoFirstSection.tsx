import { Col, Row, Typography } from 'antd'
import { FiPlay } from 'react-icons/fi'
import {
  homeVideoLeftColumnImages,
  homeVideoSideRailImages,
  homeVideoSpotlightImage
} from '../../../const/homeVisuals'
import { useInView } from '../../../hooks/useInView'
import { HomeDecorativeImage } from './HomeDecorativeImage'
import { SectionHeading } from './SectionHeading'

function VideoSideRailCard({
  src,
  fallbackSrc,
  alt,
  className = ''
}: {
  src: string
  fallbackSrc: string
  alt: string
  className?: string
}) {
  return (
    <div
      className={`group overflow-hidden rounded-xl border-2 border-white/90 shadow-lg shadow-brand-navy/15 ring-1 ring-brand-sun/20 ${className}`.trim()}
    >
      <HomeDecorativeImage
        src={src}
        fallbackSrc={fallbackSrc}
        alt={alt}
        className="aspect-[4/5] min-h-0 w-full sm:aspect-[3/4]"
        imgClassName="transition-transform duration-700 ease-out group-hover:scale-[1.03]"
      />
    </div>
  )
}

export function VideoFirstSection() {
  const [mediaRef, mediaInView] = useInView<HTMLDivElement>({ once: true, threshold: 0.12 })
  const [left0, left1] = homeVideoLeftColumnImages
  const [rail0, rail1, rail2, rail3] = homeVideoSideRailImages

  return (
    <section
      id="home-video"
      className="relative overflow-hidden rounded-[28px] border border-slate-200/90 bg-linear-to-br from-slate-50 via-white to-brand-sun/10 shadow-md shadow-slate-900/10 ring-1 ring-brand-mint/15 md:rounded-[34px]"
    >
      <div className="pointer-events-none absolute -left-8 top-8 h-24 w-24 rounded-full bg-brand-sun/25 blur-2xl home-float-a" />
      <div className="pointer-events-none absolute right-10 bottom-8 h-28 w-28 rounded-full bg-brand-violet-bright/20 blur-2xl home-float-b" />
      <Row gutter={0}>
        <Col
          xs={24}
          md={9}
          lg={8}
          className="relative flex min-h-[220px] flex-col justify-center overflow-hidden border-b border-white/10 bg-linear-to-br from-brand-navy via-[#0c4a6e] to-brand-violet-bright/35 p-8 text-white md:min-h-[300px] md:border-b-0 md:border-r md:py-12"
        >
          <div className="pointer-events-none absolute -right-6 bottom-0 h-40 w-40 rounded-full bg-brand-sun/20 blur-3xl home-glow-pulse" />
          <div className="pointer-events-none absolute inset-0 hidden md:block" aria-hidden>
            <div className="absolute -right-1 top-[14%] w-[min(46%,150px)] rotate-[7deg] overflow-hidden rounded-xl border-[3px] border-white/25 shadow-xl shadow-black/25 ring-1 ring-brand-sun/30 home-float-a">
              <HomeDecorativeImage
                src={left0.src}
                fallbackSrc={left0.fallbackSrc}
                alt=""
                className="aspect-square min-h-0 w-full"
                imgClassName="opacity-95"
              />
            </div>
            <div className="absolute bottom-[10%] left-0 w-[min(42%,130px)] -rotate-[5deg] overflow-hidden rounded-xl border-[3px] border-white/20 shadow-lg shadow-black/20 ring-1 ring-brand-mint/25 home-float-b">
              <HomeDecorativeImage
                src={left1.src}
                fallbackSrc={left1.fallbackSrc}
                alt=""
                className="aspect-square min-h-0 w-full"
                imgClassName="opacity-90"
              />
            </div>
          </div>
          <div className="relative z-[1]">
            <Typography.Text className="relative mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-brand-sun/95">
              Video delivery
            </Typography.Text>
            <span className="relative mb-4 block h-1 w-10 rounded-full bg-linear-to-r from-brand-sun via-brand-mint to-brand-gold home-accent-shimmer" aria-hidden />
            <Typography.Title level={3} className="!m-0 !text-2xl !font-bold !leading-tight !text-white md:!text-3xl">
              Watch on your schedule
            </Typography.Title>
            <Typography.Paragraph className="!mb-0 !mt-3 !text-sm !leading-relaxed !text-slate-300">
              Built for professionals who learn between meetings, site visits, and portfolio reviews.
            </Typography.Paragraph>
          </div>
        </Col>
        <Col xs={24} md={15} lg={16} className="p-6 md:p-8 lg:p-10">
          <div className="rounded-2xl border border-slate-200/80 bg-white/85 p-6 shadow-[0_12px_40px_rgba(10,37,64,0.08)] backdrop-blur-sm transition-shadow duration-500 hover:shadow-[0_16px_48px_rgba(10,37,64,0.12)] md:p-8">
            <SectionHeading
              kicker="Platform promise"
              title="Watch. Learn. Apply."
              description="Every course is delivered as focused video modules: short lessons, clear outcomes, and practical takeaways for busy FM and CRE professionals."
              showAccent={false}
              titleClassName="!mb-2 !mt-0 !text-3xl !font-bold !leading-tight !tracking-tight text-brand-navy md:!text-4xl lg:!text-[2.75rem]"
            />
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:hidden">
            <VideoSideRailCard {...rail0} />
            <VideoSideRailCard {...rail1} />
            <VideoSideRailCard {...rail2} />
            <VideoSideRailCard {...rail3} />
          </div>

          <div className="mt-4 flex flex-col gap-4 lg:mt-6 lg:flex-row lg:items-stretch">
            <div className="hidden w-[7.25rem] shrink-0 flex-col justify-center gap-3 lg:flex xl:w-[6.75rem]">
              <VideoSideRailCard {...rail0} className="home-float-a" />
              <VideoSideRailCard {...rail1} className="home-float-b" />
            </div>

            <div
              ref={mediaRef}
              className={`group relative min-w-0 flex-1 overflow-hidden rounded-2xl border-[3px] border-white shadow-xl shadow-brand-navy/20 ring-2 ring-brand-sun/35 home-float-c home-media-enter ${
                mediaInView ? 'home-media-enter--visible' : ''
              }`}
            >
              <HomeDecorativeImage
                src={homeVideoSpotlightImage.src}
                fallbackSrc={homeVideoSpotlightImage.fallbackSrc}
                alt={homeVideoSpotlightImage.alt}
                className="aspect-[16/10] min-h-[220px] w-full md:min-h-[260px]"
                imgClassName="transition-transform duration-[1.1s] ease-out group-hover:scale-[1.04]"
              />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-brand-navy/45 via-brand-navy/8 to-transparent" aria-hidden />
              <div
                className="pointer-events-none absolute left-1/2 top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2"
                aria-hidden
              >
                <div className="home-video-play-ring relative flex h-[4.75rem] w-[4.75rem] items-center justify-center rounded-full shadow-[0_12px_40px_rgba(10,37,64,0.4)] ring-[3px] ring-white/90 transition-transform duration-300 ease-out group-hover:scale-110 motion-reduce:transition-none">
                  <span className="absolute inset-0 rounded-full bg-linear-to-br from-white via-white to-brand-sun/20" />
                  <span className="absolute inset-[-6px] rounded-full border-2 border-brand-sun/50 opacity-80" />
                  <FiPlay className="relative z-[1] ml-1 text-[1.85rem] text-brand-navy" strokeWidth={2.35} aria-hidden />
                </div>
              </div>
            </div>

            <div className="hidden w-[7.25rem] shrink-0 flex-col justify-center gap-3 lg:flex xl:w-[6.75rem]">
              <VideoSideRailCard {...rail2} className="home-float-b" />
              <VideoSideRailCard {...rail3} className="home-float-a" />
            </div>
          </div>
        </Col>
      </Row>
    </section>
  )
}
