import { HTMLAttributes, ReactNode } from "react"

interface BoxProps extends HTMLAttributes<HTMLDivElement>{
  children: ReactNode
}

export function Box ({ children }: BoxProps) {
  return (
    <div className="bg-lg-gray-500 p-10 rounded-lg text-lg-white-500 shadow-lg">
      {children}
    </div>
  )
}