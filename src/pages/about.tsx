import Image from 'next/image'

import me from '../assets/me.jpg'

import hope from '../assets/logos/logo-hope.png'
import fashly from '../assets/logos/logo-fashion-masks.png'
import foreverliss from '../assets/logos/logo-forever-liss.png'
import aquamar from '../assets/logos/logo-aquamar.png'
import custapouco from '../assets/logos/logo-custapouco.png'
import inovaki from '../assets/logos/logo-inovaki.png'

import ifrj from '../assets/logos/logo-ifrj.jpg'
import unifoa from '../assets/logos/logo-unifoa.jpg'

import {
  FaArrowDown,
  FaGithub,
  FaLinkedin,
  FaInstagram
} from 'react-icons/fa'

import { Slide, Fade } from 'react-awesome-reveal'

import { HeadingGradient } from '../components/design/HeadingGradient'
import { Heading } from '../components/design/Heading'
import { Layout } from '../components/design/Layout'
import { Text } from '../components/design/Text'
import Head from 'next/head'

export default function About () {
  return (
		<>
			<Head>
				<title>Sobre | lamongabriel</title>

				<meta
					name="description"
					content="Prazer, Gabriel Lamon Lopes. Desenvolvedor front-end React JS."
				/>

				<meta property="og:title" content="Sobre | lamongabriel" />
				<meta
					property="og:description"
					content="Prazer, Gabriel Lamon Lopes. Desenvolvedor front-end React JS."
				/>
				<meta property="og:image" content="/images/profile.png" />
			</Head>
			<Layout>
				<article>
					<HeadingGradient className=''>Sobre mim</HeadingGradient><br />

					<section className='my-10'>
						<Fade triggerOnce>
							<div className='lg:flex lg:items-center lg:justify-between lg:gap-10'>
								<Image className='rounded-lg mx-auto' src={me} alt='Gabriel Lamon picture' />
								<div className='lg:max-w-2xl'>
									<Heading className='text-2xl lg:text-3xl mt-10 lg:mt-0'>
										Prazer,<br /> Gabriel Lamon Lopes.
									</Heading>
									<div className='my-6 flex gap-4 justify-start'>
										<a href="https://github.com/lamongabriel">
											<FaGithub size={32} color='white' />
										</a>
										<a href='https://www.linkedin.com/in/lamongabriel/'>
											<FaLinkedin size={32} color='white' />
										</a>
										<a href='https://www.instagram.com/lamongabriel/'>
											<FaInstagram size={32} color='white' />
										</a>
									</div>
									<Text>
										Nascido em 2002, na cidade de Volta Redonda - RJ, sou o filho mais novo de três. E desde pequeno possuo um interesse acima da média por tecnologia e programação.
									</Text>

									<Text>
										Hoje, sou front-end focado em React JS e Next JS, também desenvolvo aplicações back-end com Node JS.
									</Text>

									<Text>
										Desenvolvi para gigantes do e-commerce brasileiro: Forever Liss, Aquamar e Grupo HOPE.
									</Text>

									<Heading className='mt-10 text-xl text-center'>
										Vou te contar um pouco sobre mim
									</Heading>

									<div className='mt-4 flex justify-center animate-bounce'>
										<a href='#me-2012'>
											<FaArrowDown size={16} color='white' />
										</a>
									</div>

								</div>
							</div>
						</Fade>
					</section>

					<section className='my-10'>
						<HeadingGradient className='mt-0'>
							Experiência
						</HeadingGradient>
						<Slide>
							<div className='flex flex-col gap-4 mt-10 items-start sm:flex-row'>
								<Image src={inovaki} alt="Inovaki Logo" className='w-24 h-24 rounded'/>
								<div>
									<Heading className='mt-0'>
										Inovaki Serviços de Informação na Internet LTDA
									</Heading>
									<HeadingGradient className='text-base mt-0 my-1'>
										Analista de desenvolvimento júnior
									</HeadingGradient>
									<Text className='mt-0 italic text-gray-400'>
										jan de 2021 - out de 2022 · 1 ano 10 meses
									</Text>
									<ul className='text-lg-white-500 mt-4 flex flex-col gap-2'>
										<li>Desenvolvi e realizei manutenção no projeto Fashion Masks, onde foi gerado mais de R$1.000.000 de renda para costureiras na pandemia.</li>
										<li>Desenvolvi features para gigantes como Aquamar, Forever Liss, Custa Pouco Seduzir e Grupo HOPE.</li>
										<li>Desenvolvi o carrinho de compras e a Wishlist para o e-commerce Forever Liss.</li>
										<li>ReactJS, NodeJS e NextJS.</li>
										<li>HTML5, CSS3, Styled-Components, SASS, Bootstrap.</li>
										<li>Implementação das páginas e desenvolvimento no CMS VTEX Legado.</li>
									</ul>

									<div className='flex gap-4 items-center justify-center max-w-sm mt-4'>
										<div className='flex-1'>
											<Image src={fashly} alt='Logo Fashly'/>
										</div>
										<div className='flex-1'>
											<Image src={aquamar} alt='Logo Aquamar'/>
										</div>
										<div className='flex-1'>
											<Image src={hope} alt='Logo Hope'/>
										</div>
										<div className='flex-1'>
											<Image src={foreverliss} alt='Logo Forever Liss'/>
										</div>
										<div className='flex-1'>
											<Image src={custapouco} alt='Logo Custa Pouco Seduzir'/>
										</div>
									</div>

								</div>
							</div>
						</Slide>
						<Slide>
							<div className='flex flex-col gap-4 mt-10 items-start sm:flex-row'>
								<Image src={inovaki} alt="Inovaki Logo" className='w-24 h-24 rounded'/>
								<div>
									<Heading className='mt-0'>
										Inovaki Serviços de Informação na Internet LTDA
									</Heading>
									<HeadingGradient className='text-base mt-0 my-1'>
										Desenvolvedor de front-end - Estágio
									</HeadingGradient>
									<Text className='mt-0 italic text-gray-400'>
										jun de 2020 - jan de 2021 · 8 meses
									</Text>
									<ul className='text-lg-white-500 mt-4 leading-relaxed'>
										<li>Estágio e capacitação para desenvolvimentos de sistemas web.</li>
										<li>HTML5, CSS3, SASS, JavaScript e PHP</li>
										<li>Desenvolvimento em VTEX para o projeto Fashion Masks</li>
										<li>Controle e emissão de notas fiscais de serviços prestados.</li>
										<li>Desenvolvi um sistema de assinaturas de e-mail para o branding da Fashion Masks.</li>
									</ul>
								</div>
							</div>
						</Slide>
					</section>

					<section className='my-10'>
						<HeadingGradient className='mt-0'>
							Escolaridade
						</HeadingGradient>
						<Slide>
							<div className='flex flex-col gap-4 mt-10 items-start sm:flex-row'>
								<Image src={unifoa} alt="UniFOA Logo" className='w-24 h-24 rounded'/>
								<div>
									<Heading className='mt-0'>
										Centro Universitário de Volta Redonda - UniFOA
									</Heading>
									<HeadingGradient className='text-base mt-0 my-1'>
										Bacharelado em Sistemas de Informação
									</HeadingGradient>
									<Text className='mt-0 italic text-gray-400'>
										2021 - 2024
									</Text>
								</div>
							</div>
						</Slide>
						<Slide>
							<div className='flex flex-col gap-4 mt-10 items-start sm:flex-row'>
								<Image src={ifrj} alt="IFRJ Logo" className='w-24 h-24 rounded'/>
								<div>
									<Heading className='mt-0'>
										Instituto Federal de Educação, Ciência e Tecnologia do Rio de Janeiro - IFRJ
									</Heading>
									<HeadingGradient className='text-base mt-0 my-1'>
										Técnico em Automação Industrial
									</HeadingGradient>
									<Text className='mt-0 italic text-gray-400'>
										2017 - 2021
									</Text>
								</div>
							</div>
						</Slide>
					</section>
				</article>
			</Layout>
		</>
  )
}
