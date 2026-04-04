import { AppstoreOutlined, UserAddOutlined, UserOutlined } from '@ant-design/icons'
import type { HeaderCourseNavItem, HeaderUtilityNavItem } from './headerNavTypes'

export const headerCourseNavItem: HeaderCourseNavItem = {
  to: '/courses',
  label: 'Course',
  icon: AppstoreOutlined,
}

export const headerUtilityNavItems: HeaderUtilityNavItem[] = [
  { to: '/login', label: 'Login', icon: UserOutlined },
  { to: '/signup', label: 'Sign-up', icon: UserAddOutlined },
  { to: '/subscribe', label: 'Subscribe', variant: 'goldAccent' },
  { to: '/corporates', label: 'FMNXT for Corporates' },
]
