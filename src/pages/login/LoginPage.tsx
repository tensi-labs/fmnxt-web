import { Form } from 'antd'
import type { LoginFormValues } from '../../types/loginPage'
import { LoginDesktopHeroPanel } from './components/LoginDesktopHeroPanel'
import { LOGIN_HERO_CATEGORIES, LOGIN_HERO_HIGHLIGHTS } from './data/loginPageData'
import { formatLoginHeroCategories } from './helpers/formatLoginHeroCategories'
import { LoginFormGlassCard } from './components/LoginFormGlassCard'
import { LoginFormSideAmbience } from './components/LoginFormSideAmbience'
import { notifyDemoLoginSuccess } from './utils/loginToasts'

export function LoginPage() {
  const [form] = Form.useForm<LoginFormValues>()
  const heroCategoriesDisplayLine = formatLoginHeroCategories(LOGIN_HERO_CATEGORIES)

  const handleCredentialsSubmit = (values: LoginFormValues) => {
    notifyDemoLoginSuccess(values.email)
  }

  return (
    <div className="-mx-4 flex min-h-[calc(100dvh-5.25rem)] flex-col overflow-hidden bg-[#030712] max-md:mx-0 max-md:min-h-[calc(100dvh-5.25rem)] max-md:pb-24 max-md:pt-3 sm:-mx-6 md:mb-8 md:min-h-[calc(100dvh-6rem)] md:flex-row md:items-stretch md:rounded-2xl md:border md:border-slate-200/60 md:bg-linear-to-br md:from-slate-100 md:via-sky-50/80 md:to-brand-gold-light/40 md:pb-0 md:pt-0 md:shadow-xl md:shadow-slate-900/5 lg:-mx-10">
      <LoginDesktopHeroPanel heroCategoriesLine={heroCategoriesDisplayLine} highlightLines={LOGIN_HERO_HIGHLIGHTS} />

      <div className="relative flex w-full flex-1 flex-col justify-start overflow-hidden bg-transparent px-5 py-4 sm:px-8 md:w-[54%] md:justify-center md:bg-linear-to-br md:from-slate-50 md:via-white md:to-brand-gold-light/30 md:px-10 md:py-0 lg:px-14">
        <LoginFormSideAmbience />
        <LoginFormGlassCard form={form} onFinish={handleCredentialsSubmit} />
      </div>
    </div>
  )
}
