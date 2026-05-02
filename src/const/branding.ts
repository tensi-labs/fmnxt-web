/**
 * Primary: rgb(52, 52, 255) — interactive CTAs, links, accents.
 * Logos: use PNG assets only (`logoFull`, `logoMark` under /public/branding/).
 */
export const BRAND = {
  /** Dark text / headings on light surfaces (pairs with primary blue) */
  navy: '#161654',
  /** Primary brand — rgb(52, 52, 255) */
  gold: '#3434FF',
  goldLight: '#ECECFF',
  goldDark: '#2B2BDD',
  /** CTA / emphasis (use sparingly) */
  accentAmber: '#F59E0B',
  logoFull: '/branding/fmnxt-logo-full.png',
  logoMark: '/branding/fmnxt-logo-mark.png',
} as const
