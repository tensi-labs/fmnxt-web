import { Col, Row, Typography } from 'antd'
import { FiClock, FiLayers, FiPlay, FiUsers } from 'react-icons/fi'
import type { HomeStatItem } from '../../../const/homePageData'
import { useAnimatedCount } from '../../../hooks/useAnimatedCount'
import { useInView } from '../../../hooks/useInView'

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
      className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-white/20 to-white/5 text-lg text-white shadow-inner shadow-white/10 ring-1 ring-white/15 transition-transform duration-300 group-hover:scale-105 group-hover:from-brand-sun/30 group-hover:to-brand-gold/20"
      aria-hidden
    >
      <Icon className="text-white" />
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
    <div className="relative flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.06] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-md transition-all duration-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-2xl before:bg-linear-to-br before:from-brand-gold/0 before:to-brand-mint/0 before:opacity-0 before:transition-opacity before:duration-300 group-hover:before:from-brand-gold/10 group-hover:before:to-brand-mint/5 group-hover:before:opacity-100 md:p-5">
      <div className="relative z-[1] flex flex-1 flex-col items-center text-center md:items-start md:text-left">
        <StatIcon name={icon} />
        <Typography.Title
          level={2}
          className="!mb-1 !mt-4 !text-[1.85rem] !font-extrabold !leading-none !tracking-tight !text-white tabular-nums drop-shadow-sm md:!text-[2.35rem]"
          aria-label={ariaLabel}
        >
          {n}
          {suffix}
        </Typography.Title>
        <Typography.Text className="relative z-[1] text-[11px] font-semibold uppercase tracking-[0.2em] text-white/90 md:text-xs">
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
    <div className="group relative flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.06] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-md transition-all duration-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-2xl before:bg-linear-to-br before:from-brand-sun/0 before:to-brand-coral/0 before:opacity-0 before:transition-opacity before:duration-300 group-hover:before:from-brand-sun/15 group-hover:before:to-brand-coral/10 group-hover:before:opacity-100 md:p-5">
      <div className="relative z-[1] flex flex-1 flex-col items-center text-center md:items-start md:text-left">
        <StatIcon name={icon} />
        <Typography.Title
          level={2}
          className={`!mb-1 !mt-4 !text-[1.85rem] !font-extrabold !leading-none !tracking-tight !text-white md:!text-[2.35rem] ${
            inView ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          } transition-all duration-700 ease-out motion-reduce:scale-100 motion-reduce:opacity-100`}
          aria-label={ariaLabel}
        >
          {value}
        </Typography.Title>
        <Typography.Text className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/90 md:text-xs">
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
      className="relative overflow-hidden rounded-[28px] border border-white/10 bg-linear-to-br from-brand-navy via-[#0a3d5c] to-[#063652] px-4 pb-8 pt-12 shadow-2xl shadow-brand-navy/40 md:rounded-[36px] md:px-8 md:pb-10 md:pt-14 lg:px-10"
      aria-label="Platform highlights"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: `radial-gradient(ellipse 80% 50% at 20% 0%, rgba(6, 182, 212, 0.18), transparent),
            radial-gradient(ellipse 60% 40% at 90% 100%, rgba(255, 176, 32, 0.12), transparent),
            radial-gradient(ellipse 50% 30% at 70% 20%, rgba(139, 92, 246, 0.08), transparent)`
        }}
        aria-hidden
      />
      <div className="pointer-events-none absolute -right-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-brand-gold/15 blur-3xl home-float-a" aria-hidden />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-brand-mint/12 blur-3xl home-float-b" aria-hidden />

      <div className="relative z-[1] mx-auto mb-8 max-w-2xl text-center md:mb-10">
        <Typography.Text className="text-[11px] font-bold uppercase tracking-[0.28em] text-brand-sun/90">By the numbers</Typography.Text>
        <Typography.Title
          level={3}
          className="!mb-0 !mt-2 !text-xl !font-bold !leading-snug !text-white md:!text-2xl"
        >
          A platform built for scale and for your next career move
        </Typography.Title>
      </div>

      <div
        className="absolute left-4 right-4 top-[4.25rem] h-px bg-linear-to-r from-transparent via-white/25 to-transparent md:left-8 md:right-8 md:top-[5rem] lg:left-10 lg:right-10"
        aria-hidden
      />

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
    </section>
  )
}
