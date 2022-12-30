import { Box } from "../components/Box";
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
          <Box>
            <HeadingGradient size="md">
              Olá, como vai?
            </HeadingGradient>

            sdsd
          </Box>
        </>
      </Layout>
    </>
  )
}
