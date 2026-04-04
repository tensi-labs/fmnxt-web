/** Flip faces share height — keep front/back sections in sync. */
export const COURSE_FLIP_SHELL = 'min-h-[380px] h-[380px]';

/** Front cover — short thumb so total card height stays low. */
export const COURSE_FLIP_COVER = 'h-38';

const courseCardBtnBase =
  'inline-flex min-h-8 w-full min-w-0 flex-1 cursor-pointer items-center justify-center rounded-lg px-2 text-center text-xs font-semibold tracking-tight no-underline transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy disabled:cursor-not-allowed disabled:opacity-50';

/** Secondary CTA — link styled as button (view full details). */
export const courseCardBtnSecondary = `${courseCardBtnBase} border border-slate-300 bg-white text-brand-navy shadow-sm hover:bg-slate-50 active:bg-slate-100/90`;

/** Icon-only add-to-cart on flip back (pair with View details). */
export const courseCardCartIconBtn =
  'inline-flex h-8 w-9 shrink-0 cursor-pointer items-center justify-center rounded-lg border-0 bg-brand-navy text-[15px] leading-none text-white shadow-sm transition-colors hover:bg-brand-navy/92 active:bg-brand-navy/88 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy disabled:cursor-not-allowed disabled:opacity-50 hover:bg-brand-gold';

/** Shared pill colors for course level on card fronts. */
export function courseLevelPillClass(level: string): string {
  if (level === 'Beginner') return 'bg-emerald-50 text-emerald-800';
  if (level === 'Advanced') return 'bg-rose-50 text-rose-900';
  return 'bg-sky-50 text-sky-900';
}
