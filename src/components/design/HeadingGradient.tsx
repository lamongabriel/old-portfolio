import { ReactNode } from 'react'

interface HeadingGradientProps {
  children: ReactNode
  className?: string
}

export function HeadingGradient ({ children, className }: HeadingGradientProps) {
  return (
    <h2 className={`
      font-bold
      inline-block
      text-transparent
      bg-clip-text
      bg-gradient-to-r
      from-lg-primary-green
      to-lg-primary-blue
      leading-tight
      ${className ?? ''}
    `}
    >
      {children}
    </h2>
  )
}
