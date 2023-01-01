import { ReactNode } from 'react'

interface TextProps {
  children: ReactNode
  className?: string
}

export function Text ({ children, className }: TextProps) {
  return (
    <p className={`text-lg-white-500 my-4 leading-normal text-justify ${className ?? ''}`}>
      {children}
    </p>
  )
}
