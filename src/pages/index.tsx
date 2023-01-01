import { Box } from '../components/design/Box'
import { Heading } from '../components/design/Heading'
import { HeadingGradient } from '../components/design/HeadingGradient'
import { Layout } from '../components/design/Layout'
import { Text } from '../components/design/Text'

import Image from 'next/image'
import profile from '../assets/profile.png'

import { Fade, Slide } from 'react-awesome-reveal'

import { FaReact, FaJsSquare, FaNodeJs } from 'react-icons/fa'

export default function Home () {
  return (
    <>
      <Layout className='flex flex-col gap-10 my-10 lg:flex-row lg:justify-between lg:items-center lg:my-0'>

				<Fade className='lg:flex-1 lg:max-w-[480px]'>
					<section>

						<Image className="mb-10 rounded-full" src={profile} alt="Gabriel Lamon profile image" width={180} height={180}/>

						<Heading className='text-lg'>Olá, eu sou</Heading>
						<HeadingGradient >{'<lamongabriel/>'}</HeadingGradient>

						<Text className='mt-10 leading-relaxed'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pretium, velit nec pulvinar ultricies, ante dui interdum risus, at placerat purus ipsum ac augue.
						</Text>

						<svg width="0" height="0">
							<linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
								<stop stopColor="#00b37e" offset="0%" />
								<stop stopColor="#6a6aff" offset="100%" />
							</linearGradient>
						</svg>

						<div className='flex mt-10 gap-4'>
							<FaReact style={{ fill: 'url(#blue-gradient)' }} size={42}/>
							<FaNodeJs style={{ fill: 'url(#blue-gradient)' }} size={42}/>
							<FaJsSquare style={{ fill: 'url(#blue-gradient)' }} size={42}/>
						</div>

					</section>
				</Fade>

				<Slide className='lg:flex-1 lg:max-w-[620px]' direction='right'>
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
					</section>
				</Slide>
      </Layout>
    </>
  )
}
