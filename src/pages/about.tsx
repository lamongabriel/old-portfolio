import Image from 'next/image'
import { Layout } from '../components/design/Layout'

import family from '../assets/family.png'
import plc from '../assets/plc.png'
import mypc from '../assets/pc.png'

import { HeadingGradient } from '../components/design/HeadingGradient'
import { Text } from '../components/design/Text'
import { FaJava, FaGamepad, FaReact, FaNodeJs, FaArrowDown } from 'react-icons/fa'
import { Heading } from '../components/design/Heading'
import { Box } from '../components/design/Box'

export default function About () {
  return (
		<Layout>
			<article>
				<HeadingGradient className=''>Sobre mim</HeadingGradient><br/>

				<section className='my-10'>
					<Image className='rounded-lg' src={family} alt='Family picture' />
					<Heading className='text-2xl mt-10'>
						Me chamo Gabriel Lamon Lopes
					</Heading>
					<Text>
						Nascido em 2002, na cidade de Volta Redonda - RJ, sou o filho mais novo de três. E desde pequeno possuo um interesse acima da média por tecnologia, aos 2 anos já tinha facilidade em brincar com os videogames que meu pai comprava para mim e a mexer no computador da família.
					</Text>
					<HeadingGradient className='text-3xl'>2012</HeadingGradient>
					<Text>
						Meu interesse por programação vem desde os 10 anos, onde realizava modificações em Java nos jogos que eu jogava e criava servidores para meus amigos jogarem on-line.
					</Text>
					<div className='flex items-center justify-center gap-4 my-10'>
						<FaJava color='white' size={42} />
						<FaGamepad color='white' size={42} />
					</div>
				</section>

				<section className='my-10'>
					<HeadingGradient className='text-3xl mb-4'>2017</HeadingGradient>
					<Image className='rounded-lg' src={plc} alt='Programming PLC'/>
					<Heading className='text-2xl mt-10'>
						IFRJ
					</Heading>
					<Text>
						Após um período de estudos, aos 15 anos, meu interesse em programação se tornou profissão e certificação, ao ingressar no Instituto Federal de Educação, Ciência e Tecnologia do Rio de Janeiro, o IFRJ. Cursando automação industrial obtive o meu primeiro contato com programação para indústrias, desenvolvi para <span className='text-lg-primary-green'>CLP em ladder</span>, desenvolvi <span className='text-lg-primary-green'>sistemas digitais de controle distribuído</span> e desenvolvi em Python e Arduíno.
					</Text>
				</section>

				<section className='my-10'>
					<HeadingGradient className='text-3xl mb-4'>2018</HeadingGradient>
					<Image className='rounded-lg' src={mypc} alt='Inside my PC'/>
					<Heading className='text-2xl mt-10'>
						Serviços com máquinas
					</Heading>
					<Text>
						Aos 16 comecei a trabalhar por contra própria, com a venda de PCs e manutenção de máquinas pessoais. Foi nessa época que desenvolvi a habilidade de reparo e montagem, eu comprava peças com defeito, reparava-as, e assim montava um PC pronto para uso e os vendia em sites de venda como a OLX.
					</Text>
				</section>

				<section className='my-10'>
					<HeadingGradient className='text-3xl mb-4'>2020</HeadingGradient>
					<Box>
						<HeadingGradient className='text-base tracking-wider'>
							Primeira oportunidade com programação
						</HeadingGradient>
						<Text>
						Logo após, com 18 anos, recebi minha primeira proposta de estágio, onde trabalharia e desenvolveria aplicações front-end com HTML5, CSS3 E JavaScript, principalmente para a plataforma VTEX.
						</Text>
						<HeadingGradient className='text-base tracking-wider'>
							Efetivação
						</HeadingGradient>
						<Text>
							Após 8 meses, recebi a proposta da mesma empresa para trabalhar como freelancer e assim fiquei por quase 1 ano e meio. Nesse período desenvolvi para diversos sites, principalmente para o projeto Fashion Masks, aonde fui um dos líderes de desenvolvimento, criando diversas páginas, features e integrações. Logo após desenvolvemos para Forever Liss e Hope Lingerie.
						</Text>
					</Box>
				</section>

				<div className='my-10 flex justify-center animate-bounce'><FaArrowDown size={16} color='white' /></div>

				<section className='my-10'>
					<Box>
						<div className='flex justify-center items-center my-4 gap-4'>
							<FaReact size={42} />
							<FaNodeJs size={42} />
						</div>
						<HeadingGradient className='text-base tracking-wider'>
							React JS e Node JS, minha paixão
						</HeadingGradient>
						<Text>
							Logo após, com 18 anos, recebi minha primeira proposta de estágio, onde trabalharia e desenvolveria aplicações front-end com HTML5, CSS3 E JavaScript, principalmente para a plataforma VTEX.
						</Text>
						<Text>
							Após 8 meses, recebi a proposta da mesma empresa para trabalhar como freelancer e assim fiquei por quase 1 ano e meio. Nesse período desenvolvi para diversos sites, principalmente para o projeto Fashion Masks, aonde fui um dos líderes de desenvolvimento, criando diversas páginas, features e integrações. Logo após desenvolvemos para Forever Liss e Hope Lingerie.
						</Text>
					</Box>
				</section>

			</article>
		</Layout>
  )
}
