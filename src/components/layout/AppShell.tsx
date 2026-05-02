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
          className="relative min-h-screen overflow-x-clip bg-white text-slate-900"
        >
          <Header />
          {isHomeRoute ? <HomeViewportRails /> : null}
          <main
            className={`relative z-10 mx-auto w-full max-w-[1360px] px-4 pb-24 sm:px-6 md:pb-6 lg:px-10 ${
              isHomeRoute ? 'pt-0' : 'py-6'
            } ${isLoginRoute ? 'max-md:p-0' : ''}`}
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
