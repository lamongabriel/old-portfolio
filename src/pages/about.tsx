import Image from 'next/image'

import me from '../assets/me.jpg'
import plc from '../assets/plc.png'
import mypc from '../assets/pc.png'
import unifoa from '../assets/unifoa.png'

import {
  FaJava,
  FaGamepad,
  FaReact,
  FaNodeJs,
  FaArrowDown,
  FaHtml5,
  FaCss3,
  FaJsSquare,
  FaHeart,
  FaGithub,
  FaLinkedin,
  FaInstagram
} from 'react-icons/fa'

import { Slide, Fade } from 'react-awesome-reveal'

import { HeadingGradient } from '../components/design/HeadingGradient'
import { Heading } from '../components/design/Heading'
import { Layout } from '../components/design/Layout'
import { Text } from '../components/design/Text'
import { Box } from '../components/design/Box'

export default function About () {
  return (
		<Layout>
			<article>
				<HeadingGradient className=''>Sobre mim</HeadingGradient><br/>

				<section className='my-10'>
					<Fade triggerOnce>
						<div className='lg:flex lg:items-center lg:justify-between lg:gap-10'>
							<Image className='rounded-lg mx-auto' src={me} alt='Gabriel Lamon picture' />
							<div className='lg:max-w-2xl'>
								<Heading className='text-2xl lg:text-3xl mt-10 lg:mt-0'>
									Prazer,<br/> Gabriel Lamon Lopes.
								</Heading>
								<Text>
									Nascido em 2002, na cidade de Volta Redonda - RJ, sou o filho mais novo de três. E desde pequeno possuo um interesse acima da média por tecnologia, aos 2 anos já tinha facilidade em brincar com os videogames e mexer no computador da família.
								</Text>

								<Text>
									Hoje, sou desenvolvedor front-end focado em ReactJS e NextJS, porém tenho habilidades para criar uma aplicação completa do total zero, desenvolvendo desde o banco de dados, back-end até a interface.
								</Text>

								<Heading className='mt-10 text-xl text-center'>
									Vou te contar um pouco da minha história
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

				<section className='my-10' id='me-2012'>
					<Fade triggerOnce>
						<HeadingGradient className='text-3xl'>2012</HeadingGradient>
						<Text>
							Meu interesse por programação vem desde os 10 anos, onde realizava modificações em Java nos jogos que eu jogava e criava servidores para meus amigos jogarem on-line.
						</Text>
						<div className='flex items-center justify-center gap-4 my-10'>
							<FaJava color='white' size={42} />
							<FaGamepad color='white' size={42} />
						</div>
					</Fade>
				</section>

				<section className='my-10' id='me-2017'>
					<Fade className='lg:text-right' triggerOnce>
						<HeadingGradient className='text-3xl mb-4'>2017</HeadingGradient>
						<div className='lg:flex lg:items-center lg:justify-between lg:gap-10'>
							<Image className='rounded-lg lg:order-2 mx-auto' src={plc} alt='Programming PLC'/>
							<div className='lg:order-1 lg:max-w-2xl'>
								<Heading className='text-2xl mt-10'>
									<a href='https://portal.ifrj.edu.br/volta-redonda' className='underline'>
										IFRJ - 8º colocado.
									</a>
								</Heading>
								<Text>
									Após um período de estudos, aos 15 anos, meu interesse em programação se tornou profissão e certificação, ao ingressar no Instituto Federal de Educação, Ciência e Tecnologia do Rio de Janeiro, o IFRJ. Cursando automação industrial obtive o meu primeiro contato com programação para indústrias, desenvolvi para <span className='text-lg-primary-green'>CLP em ladder</span>, desenvolvi <span className='text-lg-primary-green'>sistemas digitais de controle distribuído</span> e desenvolvi em Python e Arduíno.
								</Text>
							</div>
						</div>
					</Fade>
				</section>

				<section className='my-10' id='me-2018'>
					<Fade triggerOnce>
						<HeadingGradient className='text-3xl mb-4'>2018</HeadingGradient>
						<div className='lg:flex lg:items-center lg:justify-between lg:gap-10'>
							<Image className='rounded-lg mx-auto' src={mypc} alt='Inside my PC'/>
							<div className='lg:order-1 lg:max-w-2xl'>
								<Heading className='text-2xl mt-10'>
									Serviços com máquinas
								</Heading>
								<Text>
									Aos 16 comecei a trabalhar por contra própria, com a venda de PCs e manutenção de máquinas pessoais. Foi nessa época que desenvolvi a habilidade de reparo e montagem, eu comprava peças com defeito, reparava-as, e assim montava um PC pronto para uso e os vendia em sites de venda como a OLX.
								</Text>
							</div>
						</div>
					</Fade>
				</section>

				<section className='my-10' id='me-2020'>
					<Slide triggerOnce direction='right'>
						<HeadingGradient className='text-3xl mb-4'>2020</HeadingGradient>
						<Box>
							<div className='flex justify-center items-center my-4 gap-4'>
								<FaHtml5 size={42} color='white'/>
								<FaCss3 size={42} color='white'/>
								<FaJsSquare size={42} color='white'/>
							</div>
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
								Após 8 meses, recebi a proposta da mesma empresa para trabalhar como freelancer e assim fiquei por quase 1 ano e meio. Nesse período desenvolvi para diversos sites, principalmente para o projeto <a href='https://www.cnnbrasil.com.br/business/startup-de-mascaras-fashion-masks-fatura-r-16-milhoes-mas-e-o-pos-pandemia/' className='text-lg-primary-green underline'>Fashion Masks</a>, aonde fui um dos líderes de desenvolvimento, criando diversas páginas, features e integrações. Logo após desenvolvemos para o e-commerce <a href='https://www.foreverliss.com.br/' className='text-lg-primary-green underline'>Forever Liss</a> e <a href='https://hopelingerie.com.br/' className='text-lg-primary-green underline'>Hope Lingerie</a>.
							</Text>
						</Box>
					</Slide>
				</section>

				<div className='my-10 flex justify-center animate-bounce'><FaArrowDown size={16} color='white' /></div>

				<section className='my-10' id='me-2020-2'>
					<Slide triggerOnce direction='left'>
						<Box>
							<div className='flex justify-center items-center my-4 gap-4'>
								<FaReact size={42} />
								<FaNodeJs size={42} />
							</div>
							<HeadingGradient className='text-base tracking-wider'>
								React JS e Node JS, minha paixão
							</HeadingGradient>
							<Text>
								Nesse período, também desenvolvi projetos em VTEX IO, onde conheci o mundo do ReactJS e fiquei completamente maravilhado, e assim construí a minha stack, dedici aprender tudo que o javascript tem para oferecer.
							</Text>
							<Text>
								Minha maneira de criar interfaces mudou totalmente após conhecer o mundo do React, componentização e estado são ferramentas incríveis de desenvolvimento que não abro mão mais. Estudei React a fundo e procurei desenvolver as melhores práticas e maneiras de se trabalhar com ele.
							</Text>
							<Text>
								Assim conheci o Node JS e o Express e comecei a criar aplicações por completo, desde a interface ao banco de dados. Hoje, consigo facilmente desenvolver uma API REST no Node JS e integrar com minha interface seja React ou Next Js.
							</Text>
						</Box>
					</Slide>
				</section>

				<section className='my-10' id='me-2021'>
					<Fade className='lg:text-right' triggerOnce>
						<HeadingGradient className='text-3xl mb-4'>2021</HeadingGradient>
						<div className='lg:flex lg:items-center lg:justify-between lg:gap-10'>
							<Image className='rounded-lg lg:order-2 mx-auto' src={unifoa} alt='Programming PLC'/>
							<div className='lg:order-1 lg:max-w-2xl'>
								<Heading className='text-2xl mt-10'>
									Universidade e projetos.
								</Heading>
								<Text>
									Hoje estou cursando <span className='text-lg-primary-green'>Sistemas de Informação</span> na UniFOA - Centro Univeritário de Volta Redonda, E estou conciliando trabalhos, estudos e projetos. Meu tempo livre é utilizado com família e criação de novos projetos.
								</Text>
								<Text className='lg:text-right'>
									Que tal dar uma olhada nos meus projetos?
								</Text>
								<a href="https://github.com/lamongabriel" title='GitHub' className='inline-block mt-4'>
									<FaGithub size={42} color='white' />
								</a>
							</div>
						</div>
					</Fade>
				</section>

				<div className='my-10 flex justify-center'><FaHeart size={16} color='white' /></div>

				<section className='my-10'>
					<Slide triggerOnce direction='right'>
						<Box className='bg-purple-600'>
							<Heading>
								Hoje, programo por paixão.
							</Heading>
							<Text>
								Minha paixão é programar, amo a sensação de desenvolver um código limpo e funcional, minha maneira de mudar o mundo é com a tecnologia e assim procuro facilitar a vida das pessoas criando softwares e soluções de ponta.
							</Text>
						</Box>
					</Slide>
				</section>

				<section className='my-10'>
				<div className='mt-4 flex gap-4 justify-center'>
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
				</section>
			</article>
		</Layout>
  )
}
