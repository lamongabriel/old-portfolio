import { ReactNode } from "react"

interface HeadingProps {
  children: ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export function Heading ({ children, size }: HeadingProps) {
  let textSize;
  switch(size){
    case 'xl':
      textSize = 'text-8xl'
      break
    case 'lg':
      textSize = 'text-4xl'
      break
    case 'sm':
      textSize = 'text-lg'
      break
    default: 
      textSize = 'text-xl'
      break
  }

  return (
    <h2 className={`
      text-white
      leading-tight
      font-semibold
      ${textSize}
    `}>
      {children}
    </h2>
  )
}