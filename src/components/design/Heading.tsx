import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface HeadingProps {
  children: ReactNode
  className?: string
}

export function Heading ({ children, className }: HeadingProps) {
  const classes = twMerge(`text-white mt-4 leading-tight font-semibold ${className ?? ''}`)

  return (
    <h2 className={classes}>
      {children}
    </h2>
  )
}
