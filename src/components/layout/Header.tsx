import { SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { Badge, Input } from 'antd'
import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { useHomeCourseSearch } from '../../context/HomeCourseSearchContext'
import { BRAND } from '../../const/branding'
import { headerCourseNavItem, headerUtilityNavItems } from './header/headerNavItems'
import { headerDefaultNavLinkClass, headerGoldSubscribeNavLinkClass } from './header/headerNavLinkStyles'
import type { HeaderUtilityNavItem } from './header/headerNavTypes'

function resolveUtilityNavLinkClass(item: HeaderUtilityNavItem) {
  return item.variant === 'goldAccent' ? headerGoldSubscribeNavLinkClass : headerDefaultNavLinkClass
}

export function Header() {
  const { query, setQuery } = useHomeCourseSearch()
  const { itemCount: cartItemCount } = useCart()
  const CourseNavIcon = headerCourseNavItem.icon

  return (
    <header className="sticky top-0 z-40 hidden border-b border-b-slate-200/90 border-t border-t-white/80 bg-linear-to-b from-white via-slate-50/98 to-brand-gold-light/30 shadow-sm shadow-slate-900/[0.04] backdrop-blur-md md:block">
      <div className="mx-auto flex h-16 w-full max-w-[1360px] items-center gap-3 px-4 sm:gap-4 sm:px-6 lg:gap-6 lg:px-10">
        <Link to="/" className="flex shrink-0 items-center transition-opacity hover:opacity-90" aria-label="FMNXT home">
          <img
            src={BRAND.logoFull}
            alt="FMNXT. Learn, Transform, Lead."
            className="h-9 w-auto max-w-[min(100%,180px)] object-contain object-left sm:h-10 sm:max-w-[200px] lg:max-w-[220px]"
            width={220}
            height={48}
            decoding="async"
          />
        </Link>

        <nav className="flex min-w-0 flex-1 items-center gap-2 md:gap-3" aria-label="Main navigation">
          <div className="flex shrink-0 items-center">
            <NavLink
              to={headerCourseNavItem.to}
              end={headerCourseNavItem.end ?? false}
              className={headerDefaultNavLinkClass}
            >
              <CourseNavIcon className="text-base opacity-80" />
              <span>{headerCourseNavItem.label}</span>
            </NavLink>
          </div>

          <div className="flex min-h-10 min-w-0 flex-1 items-center py-1">
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search courses…"
              allowClear
              size="large"
              prefix={<SearchOutlined className="text-slate-400" aria-hidden />}
              aria-label="Search courses on home"
              classNames={{ input: '!bg-white !text-slate-900 placeholder:!text-slate-400' }}
              className="w-full max-w-full rounded-full border-slate-200/90 !bg-white shadow-sm shadow-slate-900/5"
            />
          </div>

          <div className="flex shrink-0 items-center justify-end gap-1 overflow-x-auto overscroll-x-contain [-ms-overflow-style:none] [scrollbar-width:none] md:gap-1.5 lg:gap-2 [&::-webkit-scrollbar]:hidden">
            {headerUtilityNavItems.map((item) => {
              const Icon = item.icon
              const linkClass = resolveUtilityNavLinkClass(item)
              return (
                <NavLink key={item.to} to={item.to} end={item.end ?? item.to === '/'} className={linkClass}>
                  {Icon ? <Icon className="text-base opacity-80" /> : null}
                  <span>{item.label}</span>
                </NavLink>
              )
            })}
          </div>
        </nav>

        <div className="flex shrink-0 items-center border-l border-slate-200/90 pl-3 sm:pl-4">
          <Link
            to="/cart"
            aria-label={`Shopping cart, ${cartItemCount} items`}
            className="inline-flex items-center text-slate-600 no-underline transition-colors hover:text-brand-gold-dark"
          >
            <Badge
              count={cartItemCount}
              showZero={false}
              overflowCount={99}
              size="small"
              color={BRAND.gold}
              offset={[-6, 6]}
              classNames={{ root: 'leading-none' }}
            >
              <span className="inline-flex h-9 w-9 items-center justify-center text-current">
                <ShoppingCartOutlined className="text-[22px]" />
              </span>
            </Badge>
          </Link>
        </div>
      </div>
    </header>
  )
}
