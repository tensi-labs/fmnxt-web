import { When } from '../../../components/When'
import type { LoginSocialProvider } from '../../../types/loginPage'
import { notifySocialFeatureComingSoon } from '../utils/loginToasts'

type LoginSocialProvidersRowProps = {
  providers: LoginSocialProvider[]
}

export function LoginSocialProvidersRow({ providers }: LoginSocialProvidersRowProps) {
  const hasProviders = providers.length > 0

  return (
    <When isTrue={hasProviders}>
      <div className="flex items-center justify-center gap-3 sm:gap-4">
        {providers.map((provider) => (
          <button
            key={provider.id}
            type="button"
            aria-label={`Connect with ${provider.label}`}
            className="flex size-12 shrink-0 cursor-pointer items-center justify-center rounded-xl border border-slate-200/95 bg-white shadow-sm outline-none transition hover:border-slate-300 hover:shadow-md focus-visible:ring-2 focus-visible:ring-brand-gold/45 focus-visible:ring-offset-2 sm:size-14"
            onClick={() => notifySocialFeatureComingSoon(provider.hint)}
          >
            <img
              src={provider.icon}
              alt=""
              width={26}
              height={26}
              className="size-[26px] object-contain sm:size-7"
              decoding="async"
            />
          </button>
        ))}
      </div>
    </When>
  )
}
