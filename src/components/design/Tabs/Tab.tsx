import { ReactNode } from 'react'

export interface TabProps {
  children: ReactNode
  title: string | number
}

export function Tab ({ children }: TabProps) {
  return (
		<>
			{children}
		</>
  )
}
