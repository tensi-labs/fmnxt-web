import type { PropsWithChildren } from 'react'
import { useLocation } from 'react-router-dom'
import { CartProvider } from '../../context/CartContext'
import { HomeCourseSearchProvider } from '../../context/HomeCourseSearchContext'
import { BottomNav } from './BottomNav'
import { Footer } from './Footer'
import { HomeViewportRails } from './HomeViewportRails'
import { Header } from './Header'

export function AppShell({ children }: PropsWithChildren) {
  const { pathname } = useLocation()
  const isLoginRoute = pathname === '/login'
  const isHomeRoute = pathname === '/'

  return (
    <CartProvider>
      <HomeCourseSearchProvider>
        <div
          className={`relative min-h-screen overflow-x-clip text-slate-900 ${
            isHomeRoute
              ? 'home-shell-gradient'
              : 'bg-linear-to-b from-slate-100 via-brand-gold-light/35 to-slate-100'
          }`}
        >
          <Header />
          {isHomeRoute ? <HomeViewportRails /> : null}
          <main
            className={`relative z-10 mx-auto w-full max-w-[1360px] px-4 py-6 pb-24 sm:px-6 md:pb-6 lg:px-10 ${
              isLoginRoute ? 'max-md:p-0' : ''
            }`}
          >
            {children}
          </main>
          <Footer className={isLoginRoute ? 'max-md:hidden' : undefined} />
          <BottomNav />
        </div>
      </HomeCourseSearchProvider>
    </CartProvider>
  )
}
