import { Box } from '../components/design/Box'
import { Heading } from '../components/design/Heading'
import { HeadingGradient } from '../components/design/HeadingGradient'
import { Layout } from '../components/design/Layout'
import { Text } from '../components/design/Text'

import Image from 'next/image'
import profile from '../assets/profile.png'

import { Fade, Slide } from 'react-awesome-reveal'

import { FaReact, FaJsSquare, FaNodeJs, FaWhatsapp, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Home () {
  return (
    <>
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
						<HeadingGradient >{'<lamongabriel/>'}</HeadingGradient>

						<Text className='mt-10 leading-relaxed'>
							Front-end engineer com 2+ anos de experiência, em constante evolução. Desenvolvo aplicações com foco em desempenho, estabilidade, segurança e estética.
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
								Construindo soluções.
							</HeadingGradient>
							<Text>
								Com uma stack moderna, escalável e de fácil manutenção, desenvolvo diversos tipos de aplicações web, responsivas e acessíveis.
							</Text>
							<Text>
								Tecnologia é minha forma de mudar o mundo, e utilizo React JS + Node JS como intermédio. Meu objetivo é facilitar a vidas das pessoas construindo soluções simples para problemas complexos.
							</Text>
						</Box>
						<Box>
							<HeadingGradient className='text-3xl'>
								Open to work.
							</HeadingGradient>
							<Text>
								Confira meu trabalho e entre em contato comigo.
							</Text>
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
