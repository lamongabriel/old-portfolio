import { Header } from "../components/Header";
import { Heading } from "../components/Heading";
import { HeadingGradient } from "../components/HeadingGradient";
import { Layout } from "../components/Layout";

export default function Home() {
  return (
    <>
      <Layout>
        <>
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
        </>
      </Layout>
    </>
  )
}
