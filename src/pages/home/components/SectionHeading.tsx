import { Typography } from 'antd'
import type { ReactNode } from 'react'

type Props = {
  kicker: string
  title: ReactNode
  description?: string
  align?: 'left' | 'center'
  /** Short accent bar under the kicker (Infotek-style). */
  showAccent?: boolean
  titleClassName?: string
}

export function SectionHeading({
  kicker,
  title,
  description,
  align = 'left',
  showAccent = true,
  titleClassName
}: Props) {
  const isCenter = align === 'center'
  return (
    <header className={isCenter ? 'mx-auto max-w-3xl text-center' : ''}>
      <Typography.Text
        className={`mb-0 block text-[11px] font-bold uppercase tracking-[0.2em] text-brand-gold-dark md:text-xs ${
          isCenter ? '' : ''
        }`}
      >
        {kicker}
      </Typography.Text>
      {showAccent ? (
        <span
          className={`home-accent-shimmer mt-2 mb-3 block h-1.5 w-14 max-w-full rounded-full md:mb-4 ${
            isCenter ? 'mx-auto' : ''
          }`}
          aria-hidden
        />
      ) : null}
      <Typography.Title
        level={2}
        className={
          titleClassName ??
          `!mb-2 !mt-0 !text-[1.35rem] !font-bold !leading-[1.15] !tracking-tight text-brand-navy md:!text-[1.75rem] ${
            isCenter ? '' : ''
          }`
        }
      >
        {title}
      </Typography.Title>
      {description ? (
        <Typography.Paragraph
          className={`!mb-0 !max-w-3xl !text-[0.95rem] !font-normal !leading-relaxed !text-slate-600 md:!text-base ${
            isCenter ? '!mx-auto' : ''
          }`}
        >
          {description}
        </Typography.Paragraph>
      ) : null}
    </header>
  )
}
