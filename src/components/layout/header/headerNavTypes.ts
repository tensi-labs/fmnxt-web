import type { ComponentType } from 'react'

export type HeaderNavItemVariant = 'default' | 'goldAccent'

export type HeaderCourseNavItem = {
  to: string
  label: string
  icon: ComponentType<{ className?: string }>
  end?: boolean
}

export type HeaderUtilityNavItem = {
  to: string
  label: string
  icon?: ComponentType<{ className?: string }>
  end?: boolean
  variant?: HeaderNavItemVariant
}
