import { HTMLAttributes, ReactNode } from "react"

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement>{
  children: ReactNode
}

export function Heading ({ children, className, ...rest }: HeadingProps) {
  return (
    <h2 className={`text-white leading-tight font-semibold ${className}`} {...rest}>
      {children}
    </h2>
  )
}