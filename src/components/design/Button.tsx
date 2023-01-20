import { ButtonHTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export default function Button ({ children, className }: ButtonProps) {
  const classes = twMerge(`rounded mt-4 cursor-pointer text-center text-lg-white-500 border-2 border-lg-primary-green py-2 transition-colors hover:bg-lg-primary-green ${className ?? ''}`)

  return (
		<button className={classes}>
			{ children }
		</button>
  )
}
