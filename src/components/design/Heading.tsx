import { ReactNode } from 'react'

interface HeadingProps {
  children: ReactNode
  className?: string
}

export function Heading ({ children, className }: HeadingProps) {
  return (
    <h2 className={`text-white leading-tight font-semibold ${className ?? ''}`}>
      {children}
    </h2>
  )
}
