import { ReactNode } from 'react'
import { Header } from '../Header'

interface LayoutProps {
  children: ReactNode
  className?: string
}

export function Layout ({ children, className, ...rest }: LayoutProps) {
  return (
    <>
      <Header />
      <main className="min-h-screen min-w-screen bg-green-background bg-fixed bg-cover bg-black pt-16 overflow-x-hidden">
        <div className={`min-h-[calc(100vh_-_4rem)] w-full max-w-[1280px] px-4 mx-auto ${className ?? ''}`}>
          {children}
        </div>
      </main>
    </>
  )
}
