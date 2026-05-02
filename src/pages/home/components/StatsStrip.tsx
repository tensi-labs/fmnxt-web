import { Col, Row, Typography } from 'antd'
import { FiClock, FiLayers, FiPlay, FiUsers } from 'react-icons/fi'
import type { HomeStatItem } from '../../../const/homePageData'
import { useAnimatedCount } from '../../../hooks/useAnimatedCount'
import { useInView } from '../../../hooks/useInView'
import { HOME_FULL_BLEED } from './HeroSection'

type Props = {
  stats: readonly HomeStatItem[]
}

const statIcons = {
  users: FiUsers,
  play: FiPlay,
  layers: FiLayers,
  clock: FiClock
} as const

function StatIcon({ name }: { name: keyof typeof statIcons }) {
  const Icon = statIcons[name]
  return (
    <span
      className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-gold-light text-base text-brand-gold ring-1 ring-brand-gold/15 transition-transform duration-300 group-hover:scale-[1.03]"
      aria-hidden
    >
      <Icon className="text-brand-gold" aria-hidden />
    </span>
  )
}

function StatCount({
  label,
  end,
  suffix,
  active,
  ariaLabel,
  icon
}: {
  label: string
  end: number
  suffix: string
  active: boolean
  ariaLabel: string
  icon: keyof typeof statIcons
}) {
  const n = useAnimatedCount(end, active)
  return (
    <div className="relative flex h-full flex-col rounded-xl border border-neutral-200 bg-[#FAFAFA] p-4 transition-colors duration-300 group-hover:border-neutral-300 md:p-5">
      <div className="relative z-[1] flex flex-1 flex-col items-center text-center md:items-start md:text-left">
        <StatIcon name={icon} />
        <Typography.Title
          level={2}
          className="!mb-1 !mt-3 !text-[1.65rem] !font-bold !leading-none !tracking-tight !text-neutral-900 tabular-nums md:!text-[2rem]"
          aria-label={ariaLabel}
        >
          {n}
          {suffix}
        </Typography.Title>
        <Typography.Text className="relative z-[1] text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500 md:text-[11px]">
          {label}
        </Typography.Text>
      </div>
    </div>
  )
}

function StatStatic({
  label,
  value,
  ariaLabel,
  inView,
  icon
}: {
  label: string
  value: string
  ariaLabel: string
  inView: boolean
  icon: keyof typeof statIcons
}) {
  return (
    <div className="group relative flex h-full flex-col rounded-xl border border-neutral-200 bg-[#FAFAFA] p-4 transition-colors duration-300 group-hover:border-neutral-300 md:p-5">
      <div className="relative z-[1] flex flex-1 flex-col items-center text-center md:items-start md:text-left">
        <StatIcon name={icon} />
        <Typography.Title
          level={2}
          className={`!mb-1 !mt-3 !text-[1.65rem] !font-bold !leading-none !tracking-tight !text-neutral-900 md:!text-[2rem] ${
            inView ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          } transition-all duration-700 ease-out motion-reduce:scale-100 motion-reduce:opacity-100`}
          aria-label={ariaLabel}
        >
          {value}
        </Typography.Title>
        <Typography.Text className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500 md:text-[11px]">
          {label}
        </Typography.Text>
      </div>
    </div>
  )
}

export function StatsStrip({ stats }: Props) {
  const [ref, inView] = useInView<HTMLElement>({ once: true, threshold: 0.18 })

  return (
    <section
      ref={ref}
      id="home-stats"
      className={`${HOME_FULL_BLEED} relative overflow-hidden border-b border-neutral-200 bg-white`}
      aria-label="Platform highlights"
    >
      <div className="pointer-events-none absolute inset-0 home-dot-grid-subtle opacity-40" aria-hidden />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-brand-gold/35 to-transparent" aria-hidden />
      <div className="relative z-[1] mx-auto max-w-[1200px] px-5 py-14 sm:px-8 md:px-10 md:py-16 lg:px-12 lg:py-20">
        <div className="relative z-[1] mx-auto mb-10 max-w-2xl text-center md:mb-12">
          <Typography.Text className="mb-0 block text-[10px] font-bold uppercase tracking-[0.32em] text-brand-gold sm:text-[11px]">
            By the numbers
          </Typography.Text>
          <span className="mx-auto mt-3 block h-1 w-16 rounded-full bg-brand-gold" aria-hidden />
          <Typography.Title
            level={3}
            className="!mb-0 !mt-6 !text-xl !font-bold !leading-snug !tracking-tight !text-neutral-900 md:!text-2xl"
          >
            A platform built for scale and for your next career move
          </Typography.Title>
        </div>

        <Row gutter={[16, 16]} className="relative z-[1]">
          {stats.map((s) => (
            <Col key={s.label} xs={12} sm={12} xl={6}>
              <div className="group h-full">
                {s.kind === 'count' ? (
                  <StatCount
                    label={s.label}
                    end={s.end}
                    suffix={s.suffix}
                    active={inView}
                    ariaLabel={s.ariaLabel}
                    icon={s.icon}
                  />
                ) : (
                  <StatStatic label={s.label} value={s.value} ariaLabel={s.ariaLabel} inView={inView} icon={s.icon} />
                )}
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  )
}
