import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Box } from '../components/design/Box'
import { HeadingGradient } from '../components/design/HeadingGradient'
import { Layout } from '../components/design/Layout'

export default function NotFound () {
  const router = useRouter()

  const buttonClasses = `
		rounded
		mt-4
		cursor-pointer
		text-center
		text-lg-white-500
		border-2
		border-lg-primary-green
		py-2
		transition-colors
		hover:bg-lg-primary-green
	`

  return (
		<>
			<Head>
				<title>404!</title>

					<meta
						name="description"
						content="Não encontrado, por favor volte para a home."
					/>

					<meta property="og:title" content="404!" />
					<meta
						property="og:description"
						content="Não encontrado, por favor volte para a home."
					/>
			</Head>
			<Layout className='flex justify-center items-center'>
				<Box className='max-w-md w-full flex flex-col'>
					<HeadingGradient className='text-2xl mx-auto w-fit'>
						404.
					</HeadingGradient>
					<div onClick={() => router.back()} className={buttonClasses}>
						Voltar
					</div>
					<Link href="/" className={buttonClasses}>
						Home
					</Link>
				</Box>
			</Layout>
		</>
  )
}
