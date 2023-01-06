import { HeadingGradient } from '../components/design/HeadingGradient'
import { Layout } from '../components/design/Layout'
import { Text } from '../components/design/Text'

import { Tabs } from '../components/design/Tabs'
import { Tab } from '../components/design/Tabs/Tab'

import { feTech } from '../utils/feTech'
import { beTech } from '../utils/beTech'
import { tools } from '../utils/tools'

export default function Skills () {
  const hoverCardClasses = `
		hover:scale-110
		transition
		shadow-black
		shadow-lg
		flex
		items-center
		flex-col
		justify-center
		w-[12rem]
		aspect-square
		p-4
		mx-auto
	`

  return (
		<Layout>
			<svg width="0" height="0">
				<linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
					<stop stopColor="#00b37e" offset="0%" />
					<stop stopColor="#6a6aff" offset="100%" />
				</linearGradient>
			</svg>
			<HeadingGradient>
				Skills
			</HeadingGradient>
			<Text>
				Essas são as habilidades que desenvolvi ao longo de anos desenvolvendo soluções de programação todos os dias.
			</Text>
			<Tabs>
				<Tab title='Front-end'>
					<section className='flex gap-6 flex-wrap items-center'>
						{feTech.map((el, index) => (
							<div key={index} className={`${hoverCardClasses} ${el.border ? 'border-[1px] border-lg-primary-green' : ''}`}>
								{<el.icon size={64} style={{ fill: 'url(#blue-gradient)' }} />}
								<Text className='font-bold text-center'>{el.text}</Text>
							</div>
						))}
					</section>
				</Tab>
				<Tab title='Back-end'>
					<section className='flex gap-6 flex-wrap items-center'>
						{beTech.map((el, index) => (
							<div key={index} title={el.text} className={`${hoverCardClasses}`}>
								{<el.icon size={64} style={{ fill: 'url(#blue-gradient)' }} />}
								<Text className='font-bold text-center'>{el.text}</Text>
							</div>
						))}
					</section>
				</Tab>
				<Tab title='Ferramentas'>
					<section className='flex gap-6 flex-wrap items-center'>
						{tools.map((el, index) => (
							<div key={index} title={el.text} className={`${hoverCardClasses}`}>
								{<el.icon size={64} style={{ fill: 'url(#blue-gradient)' }} />}
								<Text className='font-bold text-center'>{el.text}</Text>
							</div>
						))}
					</section>
				</Tab>
			</Tabs>
			<Text className='text-lg-primary-green'>
				Tecnologias mais usadas
			</Text>
		</Layout>
  )
}
