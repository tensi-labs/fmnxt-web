import { CheckOutlined } from '@ant-design/icons'
import { BRAND } from '../../../const/branding'
import { LOGIN_GLASS_CARD_CLASS } from '../data/loginPageData'
import { loginGlassCardStyle } from '../loginGlassStyles'
import { HeroPhotographyBackdrop } from './HeroPhotographyBackdrop'

type LoginDesktopHeroPanelProps = {
  heroCategoriesLine: string
  highlightLines: readonly string[]
}

export function LoginDesktopHeroPanel({ heroCategoriesLine, highlightLines }: LoginDesktopHeroPanelProps) {
  return (
    <div className="relative isolate hidden min-h-0 w-full shrink-0 flex-col overflow-hidden rounded-2xl border border-white/10 shadow-lg shadow-black/20 md:flex md:min-h-[min(100%,620px)] md:w-[46%] md:max-w-xl md:flex-1 md:rounded-3xl lg:min-h-[min(100%,700px)]">
      <HeroPhotographyBackdrop />

      <div className="relative z-10 flex min-h-[inherit] flex-1 flex-col pt-5">
        <header className="flex shrink-0 items-center justify-between gap-4 px-5 sm:px-7 md:px-10">
          <div className="flex min-w-0 items-center gap-3 sm:gap-4">
            <img
              src={BRAND.logoMark}
              alt=""
              className="h-9 w-9 shrink-0 object-contain drop-shadow-md sm:h-10 sm:w-10"
              width={40}
              height={40}
              decoding="async"
            />
            <div className="h-px w-8 shrink-0 bg-linear-to-r from-white/35 to-transparent sm:w-10" aria-hidden />
            <div className="min-w-0">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60 sm:text-[11px]">FMNXT</p>
              <p className="truncate text-sm font-medium text-white/90 sm:text-[15px]">Learning platform</p>
            </div>
          </div>
          <div className="hidden shrink-0 rounded-full border border-white/30 bg-white/[0.14] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/95 shadow-[0_4px_24px_rgba(0,0,0,0.2)] backdrop-blur-xl backdrop-saturate-150 sm:block">
            Trusted by teams
          </div>
        </header>

        <div className="relative flex min-h-0 flex-1 items-center justify-center px-6">
          <p className="relative max-w-[16rem] text-center text-[10px] font-medium uppercase leading-relaxed tracking-[0.25em] text-white/45 md:max-w-none md:text-[11px] md:tracking-[0.28em]">
            {heroCategoriesLine}
          </p>
        </div>

        <div className="mt-auto space-y-4 px-5 sm:px-7 md:space-y-5 md:px-10">
          <div className={`${LOGIN_GLASS_CARD_CLASS} p-5 md:rounded-[1.35rem] md:p-7`} style={loginGlassCardStyle}>
            <h2 className="text-xl font-bold leading-tight tracking-tight text-white sm:text-2xl md:text-[1.65rem] lg:text-[1.85rem]">
              Continue your professional development
            </h2>
            <p className="mt-2.5 max-w-lg text-sm leading-relaxed text-white/80 sm:text-[15px]">
              Sign in to access courses, saved progress, and member resources, built for facility and corporate real estate
              leaders.
            </p>
            <ul className="mt-5 space-y-3 border-t border-white/10 pt-5">
              {highlightLines.map((line) => (
                <li key={line} className="flex gap-3 text-sm leading-snug text-white/88">
                  <span className="mt-0.5 flex h-[1.35rem] w-[1.35rem] shrink-0 items-center justify-center rounded-full bg-brand-gold/25 text-[11px] text-brand-gold-light ring-1 ring-brand-gold/35">
                    <CheckOutlined className="text-[10px]" aria-hidden />
                  </span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-center text-[10px] font-medium uppercase tracking-[0.2em] text-white/45 md:text-[11px]">
            Learn, Transform, Lead · The FM & CRE learning platform
          </p>
        </div>
      </div>
    </div>
  )
}
