import { Box } from '../components/design/Box'
import { Heading } from '../components/design/Heading'
import { HeadingGradient } from '../components/design/HeadingGradient'
import { Layout } from '../components/design/Layout'
import { Text } from '../components/design/Text'

import Image from 'next/image'
import profile from '../assets/profile.png'

import { Fade, Slide } from 'react-awesome-reveal'

export default function Home () {
  return (
    <>
      <Layout className="flex justify-between items-center gap-10">
				<Fade className='flex-1 max-w-[460px]'>
					<section>
						<Image className="mb-10 rounded-full" src={profile} alt="Gabriel Lamon profile image" width={180} height={180}/>
						<Heading className='text-lg'>
							Olá, eu sou
						</Heading>
						<HeadingGradient className="text-5xl">
							{'<lamongabriel/>'}
						</HeadingGradient>
						<Text className='mt-10 leading-relaxed'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pretium, velit nec pulvinar ultricies, ante dui interdum risus, at placerat purus ipsum ac augue.
						</Text>
					</section>
				</Fade>
				<Slide className='flex-1 max-w-[640px]' direction='right'>
					<section className="flex flex-col gap-4">
						<Box>
							<HeadingGradient>
								Eu desenvolvo websites
							</HeadingGradient>
							<Text>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pretium, velit nec pulvinar ultricies, ante dui interdum risus, at placerat purus ipsum ac augue. Nullam aliquet placerat lectus non eleifend. Praesent nec pretium nibh, eget euismod justo. Quisque iaculis maximus dolor. Nam rhoncus, ipsum ac tincidunt luctus, diam nisi tempus justo, vel rutrum neque mi vel magna. Sed at dolor consectetur, consectetur mauris eget, placerat metus
							</Text>
						</Box>
						<Box>
							<HeadingGradient>
								Eu desenvolvo websites
							</HeadingGradient>
							<Text>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pretium, velit nec pulvinar ultricies, ante dui interdum risus, at placerat purus ipsum ac augue. Nullam aliquet placerat lectus non eleifend. Praesent nec pretium nibh, eget euismod justo. Quisque iaculis maximus dolor. Nam rhoncus, ipsum ac tincidunt luctus, diam nisi tempus justo, vel rutrum neque mi vel magna. Sed at dolor consectetur, consectetur mauris eget, placerat metus
							</Text>
						</Box>
						<Box>
							<HeadingGradient>
								Eu desenvolvo websites
							</HeadingGradient>
							<Text>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pretium, velit nec pulvinar ultricies, ante dui interdum risus, at placerat purus ipsum ac augue. Nullam aliquet placerat lectus non eleifend. Praesent nec pretium nibh, eget euismod justo. Quisque iaculis maximus dolor. Nam rhoncus, ipsum ac tincidunt luctus, diam nisi tempus justo, vel rutrum neque mi vel magna. Sed at dolor consectetur, consectetur mauris eget, placerat metus
							</Text>
						</Box>
					</section>
				</Slide>
      </Layout>
    </>
  )
}
