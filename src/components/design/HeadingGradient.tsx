import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface HeadingGradientProps {
  children: ReactNode
  className?: string
}

export function HeadingGradient ({ children, className }: HeadingGradientProps) {
  const classes = twMerge(`
		text-[clamp(1.5rem,10vw,3rem)]
		mt-4
		font-bold
		inline-block
		text-transparent
		bg-clip-text
		bg-gradient-to-r
		from-lg-primary-green
		to-lg-primary-blue
		leading-tight
		${className ?? ''}
	`)

  return (
    <h2 className={classes}
    >
      {children}
    </h2>
  )
}
