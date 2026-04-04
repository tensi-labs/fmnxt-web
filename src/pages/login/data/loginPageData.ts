import type { LoginSocialProvider } from '../../../types/loginPage'

export const LOGIN_HERO_IMAGES = [
  {
    src: '/login/hero-corporate-cityscape.jpg',
    alt: 'Modern office towers and urban corporate environment.',
  },
  {
    src: '/login/hero-team-learning.jpg',
    alt: 'Team members collaborating and learning together at work.',
  },
] as const

export const LOGIN_HERO_HIGHLIGHTS = [
  'Learn, Transform, Lead: built for FM and CRE professionals',
  'Practical programs shaped by industry practitioners',
  'One hub for courses, credentials, and member resources',
] as const

export const LOGIN_HERO_CATEGORIES = ['FM operations', 'CRE strategy', 'Workplace', 'Sustainability'] as const

export const LOGIN_GLASS_CARD_CLASS =
  'rounded-2xl border border-white/35 bg-white/[0.13] shadow-[0_12px_40px_-8px_rgba(0,0,0,0.45),inset_0_1px_0_0_rgba(255,255,255,0.22),inset_0_0_0_1px_rgba(255,255,255,0.08)] backdrop-blur-2xl backdrop-saturate-150'

export const LOGIN_SOCIAL_PROVIDERS: LoginSocialProvider[] = [
  { id: 'google', label: 'Google', icon: '/login/icons/google.svg', hint: 'Google' },
  { id: 'facebook', label: 'Facebook', icon: '/login/icons/facebook.svg', hint: 'Facebook' },
  { id: 'apple', label: 'Apple', icon: '/login/icons/apple.svg', hint: 'Apple' },
]
