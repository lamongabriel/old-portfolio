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
        {children}
      </main>
    </>
  )

}