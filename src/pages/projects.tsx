import { HeadingGradient } from '../components/design/HeadingGradient'
import { Layout } from '../components/design/Layout'
import { Text } from '../components/design/Text'
import { ProjectCard } from '../components/ProjectCard'

import straightNotes from '../assets/projects/straight-notes.png'
import spacetraveling from '../assets/projects/spacetraveling-blog.png'
import ignews from '../assets/projects/ignews.png'

export default function Projects () {
  return (
		<Layout>
			<HeadingGradient>
				Projetos
			</HeadingGradient>
			<Text>
				Alguns dos projetos que desenvolvi. Amo a prática, é a melhor forma de desenvolver novas habilidades e aprender novas ferramentas.
			</Text>
			<section className='my-10 flex flex-col lg:flex-row gap-6 justify-center items-stretch'>
				<ProjectCard
					title='Straight Notes'
					image={straightNotes}
					github='https://github.com/lamongabriel/straight-notes'
					link='https://straight-notes-production.up.railway.app/'
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
					github='https://github.com/lamongabriel/ignews'
				>
					Blog com sistema de matérias por assinatura, onde o usuário deve pagar para consumir o conteúdo.
					Feito utilizando NextJS, SSG, FaunaDB e a API de pagamentos Stripe.
				</ProjectCard>
			</section>
		</Layout>
  )
}
