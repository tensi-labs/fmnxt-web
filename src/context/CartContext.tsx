import type { PropsWithChildren } from 'react'
import { createContext, useCallback, useContext, useMemo, useState } from 'react'

export type CartLine = {
  courseId: string
  title: string
  priceInr: number
  quantity: number
}

type CartContextValue = {
  lines: CartLine[]
  itemCount: number
  subtotalInr: number
  addToCart: (item: { courseId: string; title: string; priceInr: number }) => void
  removeLine: (courseId: string) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: PropsWithChildren) {
  const [lines, setLines] = useState<CartLine[]>([])

  const addToCart = useCallback((payload: { courseId: string; title: string; priceInr: number }) => {
    setLines((prev) => {
      const i = prev.findIndex((l) => l.courseId === payload.courseId)
      if (i >= 0) {
        const next = [...prev]
        next[i] = { ...next[i], quantity: next[i].quantity + 1 }
        return next
      }
      return [...prev, { ...payload, quantity: 1 }]
    })
  }, [])

  const removeLine = useCallback((courseId: string) => {
    setLines((prev) => prev.filter((l) => l.courseId !== courseId))
  }, [])

  const clearCart = useCallback(() => setLines([]), [])

  const { itemCount, subtotalInr } = useMemo(() => {
    const itemCount = lines.reduce((s, l) => s + l.quantity, 0)
    const subtotalInr = lines.reduce((s, l) => s + l.priceInr * l.quantity, 0)
    return { itemCount, subtotalInr }
  }, [lines])

  const value = useMemo(
    () => ({
      lines,
      itemCount,
      subtotalInr,
      addToCart,
      removeLine,
      clearCart,
    }),
    [lines, itemCount, subtotalInr, addToCart, removeLine, clearCart],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
