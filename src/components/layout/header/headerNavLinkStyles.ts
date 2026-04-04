const headerNavShell = 'inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 py-2 text-sm font-medium transition-colors sm:px-3 lg:px-3.5'

export function headerDefaultNavLinkClass({ isActive }: { isActive: boolean }) {
  return `${headerNavShell} ${
    isActive
      ? 'bg-brand-navy/10 text-brand-navy ring-1 ring-brand-navy/15'
      : 'text-slate-600 hover:bg-slate-100 hover:text-brand-navy'
  }`
}

const subscribeNavShell =
  'inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 py-2 text-sm font-semibold tracking-tight transition-[color,background-color,box-shadow,transform] duration-200 sm:px-3 lg:px-3.5'

export function headerGoldSubscribeNavLinkClass({ isActive }: { isActive: boolean }) {
  return `${subscribeNavShell} ${
    isActive
      ? 'bg-brand-navy text-white shadow-md shadow-brand-navy/20 ring-1 ring-brand-navy/20 ring-offset-2 ring-offset-slate-50'
      : 'bg-brand-navy text-white shadow-sm shadow-brand-navy/15 ring-1 ring-cyan-400/30 hover:-translate-y-px hover:bg-brand-gold hover:text-brand-navy hover:shadow-md hover:shadow-cyan-500/25 hover:ring-brand-gold/50 active:translate-y-0'
  }`
}
