import Head from 'next/head'

import { HeadingGradient } from '../components/design/HeadingGradient'
import { Layout } from '../components/design/Layout'
import { Text } from '../components/design/Text'
import { ProjectCard } from '../components/ProjectCard'

import straightNotes from '../assets/projects/straight-notes.png'
import spacetraveling from '../assets/projects/spacetraveling-blog.png'
import ignews from '../assets/projects/ignews.png'
import inovaki from '../assets/projects/inovaki-home.png'
import dtmoney from '../assets/projects/dt-money.png'
import termo from '../assets/projects/termo.png'

export default function Projects () {
  return (
		<>
			<Head>
				<title>Projetos | lamongabriel</title>

					<meta
						name="description"
						content="Alguns dos projetos que desenvolvi. Amo a prática, é a melhor forma de desenvolver novas habilidades e aprender novas ferramentas."
					/>

					<meta property="og:title" content="Projetos | lamongabriel" />
					<meta
						property="og:description"
						content="Alguns dos projetos que desenvolvi. Amo a prática, é a melhor forma de desenvolver novas habilidades e aprender novas ferramentas."
					/>
					<meta property="og:image" content="/images/profile.png" />
				</Head>
			<Layout>
				<HeadingGradient>
					Projetos
				</HeadingGradient>
				<Text>
					Alguns dos projetos que desenvolvi. Amo a prática, é a melhor forma de desenvolver novas habilidades e aprender novas ferramentas.
				</Text>
				<section className='my-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
					<ProjectCard
						title='Straight Notes'
						image={straightNotes}
						github='https://github.com/lamongabriel/straight-notes'
						link='https://straight-notes-lamongabriel.vercel.app/'
					>
						App para criação e armazenamento de notas. Com sistema de login suas notas ficarão
						seguras na nuvem onde é possível acessar somente com uma conexão de internet.
					</ProjectCard>
					<ProjectCard
						title='Spacetraveling Blog'
						image={spacetraveling}
						github='https://github.com/lamongabriel/spacetraveling-blog'
						link='https://spacetraveling-blog.vercel.app/'
					>
						Blog de notícias do mundo tecnológico, criado com Static Site Generation e
						Prismic CMS para criação de novos artigos.
					</ProjectCard>
					<ProjectCard
						title='ig.news'
						image={ignews}
						link='https://ignews-lamongabriel.vercel.app/'
						github='https://github.com/lamongabriel/ignews'
					>
						Blog com sistema de matérias por assinatura, onde o usuário deve pagar para consumir o conteúdo.
						Feito utilizando NextJS, SSG, FaunaDB e a API de pagamentos Stripe.
					</ProjectCard>
					<ProjectCard
						title='Inovaki'
						image={inovaki}
						link='https://inovaki.vercel.app/'
					>
						Ao lado de meus parceiros, desenvolvi com NextJS o novo site para a agência de programação Inovaki - Serviços de Informação na Internet.
						Priorizando o SEO esse site foi construído para promover os diversos serviços da agência.
					</ProjectCard>
					<ProjectCard
						title='Wordle Clone'
						image={termo}
						link='https://lamongabriel.github.io/termo-wordle-clone/'
						github='https://github.com/lamongabriel/termo-wordle-clone'
					>
						Já jogou Wordle? o famoso jogo de palavras do NY Times? este foi traduzido e se chama termo,
						desenvolvi um clone do site Termo com lógica totalmente nova utilizando somente JavaScript.
					</ProjectCard>
					<ProjectCard
						title='DT Money'
						image={dtmoney}
						link='https://lamongabriel-dtmoney.vercel.app/'
						github='https://github.com/lamongabriel/dt-money'
					>
						App para gerenciar melhor suas finanças, feito com a API Fake MirageJS e ReactJS, esse aplicativo irá te ajudar
						a controlar melhor o seu dinheiro recebido e o seu dinheiro gasto.
					</ProjectCard>
				</section>
			</Layout>
		</>
  )
}
