import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface BoxProps {
  children: ReactNode
  className?: string
}

export function Box ({ children, className }: BoxProps) {
  const classes = twMerge(`
		bg-lg-gray-500 p-6 lg:p-10 rounded-lg text-lg-white-500 shadow-lg ${className ?? ''}
	`)

  return (
    <div className={classes}>
      {children}
    </div>
  )
}
