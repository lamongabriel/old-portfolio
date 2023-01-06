import { ReactNode } from 'react'
import { Header } from '../Header'
import { twMerge } from 'tailwind-merge'
import { Fade } from 'react-awesome-reveal'
interface LayoutProps {
  children: ReactNode
  className?: string
}

export function Layout ({ children, className, ...rest }: LayoutProps) {
  const classes = twMerge(`min-h-[calc(100vh_-_4rem)] w-full max-w-[1280px] px-4 mx-auto ${className ?? ''}`)

  return (
    <>
      <Header />
      <main className="min-h-screen min-w-screen bg-green-background bg-fixed bg-cover bg-black pt-16 overflow-x-hidden">
				<Fade>
					<div className={classes}>
						{children}
					</div>
				</Fade>
      </main>
    </>
  )
}
