import { ReactNode } from "react"

interface HeadingGradientProps {
  children: ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export function HeadingGradient ({ children, size }: HeadingGradientProps) {
  let textSize;
  switch(size){
    case 'xl':
      textSize = 'text-6xl'
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
      font-bold 
      inline-block
      text-transparent
      bg-clip-text 
      bg-gradient-to-r
      from-primary-green 
      to-primary-blue
      leading-tight
      ${textSize}
    `}>
      {children}
    </h2>
  )
}