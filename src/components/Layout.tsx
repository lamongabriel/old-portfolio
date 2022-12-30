import { ReactNode } from "react";
import { Header } from "./Header";

interface LayoutProps {
  children: ReactNode
}

export function Layout ({children}: LayoutProps) {
  return (
    <>
      <Header />
      <main className="min-h-screen min-w-screen bg-green-background bg-fixed bg-cover bg-black pt-16">
        <div className="min-h-[calc(100vh_-_4rem)] w-full max-w-[1280px] px-4 mx-auto">
          {children}
        </div>
      </main>
    </>
  )

}