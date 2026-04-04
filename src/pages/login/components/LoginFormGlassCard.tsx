import type { FormInstance } from 'antd/es/form'
import { Link } from 'react-router-dom'
import { LOGIN_GLASS_CARD_CLASS, LOGIN_SOCIAL_PROVIDERS } from '../data/loginPageData'
import type { LoginFormValues } from '../../../types/loginPage'
import { loginGlassCardStyle } from '../loginGlassStyles'
import { notifySocialFeatureComingSoon } from '../utils/loginToasts'
import { LoginCredentialsForm } from './LoginCredentialsForm'
import { LoginFormBrandIntro } from './LoginFormBrandIntro'
import { LoginSocialProvidersRow } from './LoginSocialProvidersRow'

type LoginFormGlassCardProps = {
  form: FormInstance<LoginFormValues>
  onFinish: (values: LoginFormValues) => void
}

export function LoginFormGlassCard({ form, onFinish }: LoginFormGlassCardProps) {
  return (
    <div className="relative z-10 mx-auto w-full max-w-[420px]">
      <div
        className={`${LOGIN_GLASS_CARD_CLASS} p-7 sm:p-8 md:rounded-3xl md:p-9 max-md:border-white/40 max-md:bg-white/18 max-md:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.45)]`}
        style={loginGlassCardStyle}
      >
        <LoginFormBrandIntro />
        <h2 className="mt-8 text-lg font-bold tracking-tight text-white md:text-brand-navy">Log in</h2>
        <LoginCredentialsForm form={form} onFinish={onFinish} />

        <div className="my-8 flex items-center gap-2.5 sm:gap-3" role="separator" aria-label="Other account options">
          <div className="h-px min-w-0 flex-1 bg-linear-to-r from-transparent via-white/35 to-white/10 md:via-brand-gold/35 md:to-slate-200/90" />
          <span className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/70 sm:text-[11px] md:text-slate-500">
            <span className="text-brand-gold-light md:text-brand-gold-dark">·</span> Or with{' '}
            <span className="text-brand-gold-light md:text-brand-gold-dark">·</span>
          </span>
          <div className="h-px min-w-0 flex-1 bg-linear-to-l from-transparent via-white/35 to-white/10 md:via-brand-gold/35 md:to-slate-200/90" />
        </div>

        <LoginSocialProvidersRow providers={LOGIN_SOCIAL_PROVIDERS} />

        <p className="mt-8 text-center text-[15px] text-white/80 md:text-slate-600">
          Don&apos;t have an account?{' '}
          <Link
            to="/signup"
            className="font-semibold text-brand-gold-light underline decoration-brand-gold-light/40 decoration-2 underline-offset-[5px] transition-colors hover:text-white hover:decoration-white/50 md:text-brand-navy md:decoration-brand-navy/25 md:hover:text-brand-gold-dark md:hover:decoration-brand-gold-dark/40"
          >
            Create one
          </Link>
        </p>

        <div className="mt-5 flex justify-center border-t border-white/15 pt-5">
          <button
            type="button"
            className="text-sm font-medium text-white/75 transition-colors hover:text-brand-gold-light md:text-slate-500 md:hover:text-brand-gold-dark"
            onClick={() => notifySocialFeatureComingSoon('Organization / SSO')}
          >
            Organization or SSO →
          </button>
        </div>
      </div>
    </div>
  )
}
