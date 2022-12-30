import { Header } from "../components/Header";
import { Heading } from "../components/Heading";
import { HeadingGradient } from "../components/HeadingGradient";

export default function Home() {
  return (
    <>
      <Header />
      <main className="h-screen w-screen bg-green-background bg-fixed bg-cover bg-black flex items-center justify-between">
        <div>
          <Heading>
            Hi, I&apos;m
          </Heading>
          <HeadingGradient size="xl">
          {'<lamongabriel/>'}
          </HeadingGradient>
        </div>
        <div className="bg-[#151515] p-10 rounded-lg text-[#FAF9F6] shadow-lg">
          sodjsaiodjisajdiosaj
        </div>
      </main>
    </>
  )
}
