import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface TextProps {
  children: ReactNode
  className?: string
}

export function Text ({ children, className }: TextProps) {
  const classes = twMerge(`text-lg-white-500 mt-4 leading-normal text-justify ${className ?? ''}`)

  return (
    <p className={classes}>
      {children}
    </p>
  )
}
