import { HeadingGradient } from '../components/design/HeadingGradient'
import { Layout } from '../components/design/Layout'
import { Text } from '../components/design/Text'

import { Tabs } from '../components/design/Tabs'
import { Tab } from '../components/design/Tabs/Tab'

export default function Skills () {
  return (
		<Layout>
			<HeadingGradient>
				Skills
			</HeadingGradient>
			<Text>
				Essas são as habilidades que desenvolvi ao longo de anos desenvolvendo soluções de programação todos os dias.
			</Text>
			<Tabs>
				<Tab title='Front-end'>
					Content 1
				</Tab>
				<Tab title='Back-end'>
				Content 12
				</Tab>
				<Tab title='Ferramentas'>
				Content 13
				</Tab>
			</Tabs>
		</Layout>
  )
}
