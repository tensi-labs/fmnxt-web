import type { PropsWithChildren, ReactNode } from 'react'

type WhenProps = PropsWithChildren<{
  isTrue: boolean
  children: ReactNode
}>

export default function When({ isTrue, children }: WhenProps) {
  if (!isTrue) {
    return null
  }

  return <>{children}</>
}
