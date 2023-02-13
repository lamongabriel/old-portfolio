import Image from 'next/image'
import Head from 'next/head'

import { Box } from '../components/design/Box'
import { Heading } from '../components/design/Heading'
import { HeadingGradient } from '../components/design/HeadingGradient'
import { Layout } from '../components/design/Layout'
import { Text } from '../components/design/Text'
import { Fade, Slide } from 'react-awesome-reveal'

import profile from '../assets/profile.png'

import hope from '../assets/logos/logo-hope.png'
import fashly from '../assets/logos/logo-fashion-masks.png'
import foreverliss from '../assets/logos/logo-forever-liss.png'
import aquamar from '../assets/logos/logo-aquamar.png'

import {
  FaReact,
  FaJsSquare,
  FaNodeJs,
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt
} from 'react-icons/fa'

export default function Home () {
  return (
    <>
			<Head>
				<title>Portfólio | lamongabriel</title>

					<meta
						name="description"
						content="Bem vindo! conheça o meu portfólio."
					/>

					<meta property="og:title" content="Portfólio | lamongabriel" />
					<meta
						property="og:description"
						content="Bem vindo! conheça o meu portfólio."
					/>
					<meta property="og:image" content="/images/profile.png" />
			</Head>
      <Layout className='flex flex-col gap-10 my-10 lg:flex-row lg:justify-between lg:items-center lg:my-0'>

				<Fade className='lg:flex-1 lg:max-w-md'>
					<section>

						<Image
							className="mb-10 rounded-full"
							src={profile}
							alt="Gabriel Lamon profile image"
							title='Gabriel Lamon Lopes'
							width={180}
							height={180}
						/>

						<Heading className='text-lg'>Olá, eu sou</Heading>
						<HeadingGradient className='m-0'>{'<lamongabriel/>'}</HeadingGradient>

						<div className='flex gap-4 items-center justify-center flex-wrap'>
							<div className='max-w-1/2 flex-1'>
								<Image src={fashly} alt='Logo Fashly'/>
							</div>
							<div className='max-w-1/2 flex-1'>
								<Image src={aquamar} alt='Logo Aquamar'/>
							</div>
							<div className='max-w-1/2 flex-1'>
								<Image src={hope} alt='Logo Hope'/>
							</div>
							<div className='max-w-1/2 flex-1'>
								<Image src={foreverliss} alt='Logo Forever Liss'/>
							</div>
						</div>

						<Text className='leading-relaxed'>
							Desenvolvedor front-end com 2+ anos de experiência, em constante evolução. Desenvolvo aplicações com foco em desempenho, estabilidade, segurança e estética.
						</Text>

						<svg width="0" height="0">
							<linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
								<stop stopColor="#00b37e" offset="0%" />
								<stop stopColor="#6a6aff" offset="100%" />
							</linearGradient>
						</svg>

						<div className='flex mt-10 gap-4'>
							<FaReact style={{ fill: 'url(#blue-gradient)' }} size={42} title='React JS'/>
							<FaNodeJs style={{ fill: 'url(#blue-gradient)' }} size={42} title='Node JS'/>
							<FaJsSquare style={{ fill: 'url(#blue-gradient)' }} size={42} title='JavaScript'/>
						</div>

					</section>
				</Fade>

				<Slide className='lg:flex-1 lg:max-w-2xl' direction='right'>
					<section className="flex flex-col gap-4">
						<Box>
							<HeadingGradient className='text-3xl'>
								Desenvolvo aplicações modernas.
							</HeadingGradient>
							<Text>
								Atuando na área desde 2020, busco a melhor solução para sua empresa.
							</Text>
							<Text>
								Construí features para gigantes: Hope Lingerie, Forever Liss e Aquamar.
							</Text>
							<Text>
								Desenvolvi e realizei manutenção no projeto Fashion Masks, onde foi gerado mais de R$1.000.000 de renda para costureiras na pandemia.
							</Text>
							<ul className='flex gap-4 text-lg-primary-green font-bold mt-4'>
								<li>React JS</li>
								<li>Next JS / SSG</li>
								<li>TypeScript</li>
								<li>Node JS</li>
							</ul>
						</Box>
						<Box>
							<HeadingGradient className='text-3xl'>
								Entre em contato comigo.
							</HeadingGradient>
							<div className='flex gap-2 mt-4 items-center'>
								<FaPhoneAlt /> <a href='tel:5524999457654'>+55 (24) 99945-7654</a>
							</div>
							<div className='mt-4 flex gap-4'>
								<a href="https://github.com/lamongabriel">
									<FaGithub size={32} color='white' />
								</a>
								<a href='https://wa.me/5524999457654?text=Ol%C3%A1%2C+gostaria+de+fazer+um+or%C3%A7amento.'>
									<FaWhatsapp size={32} color='white' />
								</a>
								<a href='https://www.linkedin.com/in/lamongabriel/'>
									<FaLinkedin size={32} color='white' />
								</a>
								<a href='mailto:gabriel-lamon@outlook.com'>
									<FaEnvelope size={32} color='white' />
								</a>
							</div>
						</Box>
					</section>
				</Slide>
      </Layout>
    </>
  )
}
