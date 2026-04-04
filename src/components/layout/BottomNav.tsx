import {
  AppstoreOutlined,
  BookOutlined,
  DashboardOutlined,
  HomeOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { NavLink } from 'react-router-dom'

const items = [
  { to: '/', label: 'Home', icon: HomeOutlined },
  { to: '/courses', label: 'Courses', icon: AppstoreOutlined },
  { to: '/library', label: 'Library', icon: BookOutlined },
  { to: '/dashboard', label: 'Dashboard', icon: DashboardOutlined },
  { to: '/login', label: 'Account', icon: UserOutlined },
] as const

export function BottomNav() {
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200/90 bg-white/95 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 shadow-[0_-4px_24px_rgba(15,23,42,0.08)] backdrop-blur-md md:hidden"
      aria-label="Primary navigation"
    >
      <div className="mx-auto flex max-w-2xl items-stretch justify-around px-1 md:max-w-4xl lg:max-w-5xl">
        {items.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex min-w-0 flex-1 flex-col items-center gap-0.5 rounded-lg px-1 py-1 text-[10px] font-medium transition ${
                isActive ? 'text-brand-navy' : 'text-slate-500'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-xl transition ${
                    isActive ? 'bg-brand-gold-light/35 text-brand-navy' : 'text-slate-500'
                  }`}
                >
                  <Icon className="text-lg" />
                </span>
                <span className="max-w-full truncate">{label}</span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
