import { Box } from '../components/design/Box'
import { Heading } from '../components/design/Heading'
import { HeadingGradient } from '../components/design/HeadingGradient'
import { Layout } from '../components/design/Layout'

import Image from 'next/image'
import profile from '../assets/profile.png'

import { Fade, Slide } from 'react-awesome-reveal'

export default function Home () {
  return (
    <>
      <Layout className="flex justify-between items-center">
				<Fade className='flex-1'>
					<section>
						<Image className="mb-10" src={profile} alt="Gabriel Lamon profile image" width={180} height={180}/>
						<Heading>
							Olá, eu sou
						</Heading>
						<HeadingGradient className="text-5xl">
							{'<lamongabriel/>'}
						</HeadingGradient>
					</section>
				</Fade>
				<Slide className='flex-1' direction='right'>
					<section className="flex flex-col gap-4">
						<Box>
							<HeadingGradient>
								Eu desenvolvo websites
							</HeadingGradient>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pretium, velit nec pulvinar ultricies, ante dui interdum risus, at placerat purus ipsum ac augue. Nullam aliquet placerat lectus non eleifend. Praesent nec pretium nibh, eget euismod justo. Quisque iaculis maximus dolor. Nam rhoncus, ipsum ac tincidunt luctus, diam nisi tempus justo, vel rutrum neque mi vel magna. Sed at dolor consectetur, consectetur mauris eget, placerat metus
							</p>
						</Box>
						<Box>
							<HeadingGradient>
								Eu desenvolvo websites
							</HeadingGradient>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pretium, velit nec pulvinar ultricies, ante dui interdum risus, at placerat purus ipsum ac augue. Nullam aliquet placerat lectus non eleifend. Praesent nec pretium nibh, eget euismod justo. Quisque iaculis maximus dolor. Nam rhoncus, ipsum ac tincidunt luctus, diam nisi tempus justo, vel rutrum neque mi vel magna. Sed at dolor consectetur, consectetur mauris eget, placerat metus
							</p>
						</Box>
						<Box>
							<HeadingGradient>
								Eu desenvolvo websites
							</HeadingGradient>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pretium, velit nec pulvinar ultricies, ante dui interdum risus, at placerat purus ipsum ac augue. Nullam aliquet placerat lectus non eleifend. Praesent nec pretium nibh, eget euismod justo. Quisque iaculis maximus dolor. Nam rhoncus, ipsum ac tincidunt luctus, diam nisi tempus justo, vel rutrum neque mi vel magna. Sed at dolor consectetur, consectetur mauris eget, placerat metus
							</p>
						</Box>
					</section>
				</Slide>
      </Layout>
    </>
  )
}
