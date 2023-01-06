import { ReactNode } from 'react'
import Image, { StaticImageData } from 'next/image'
import { Box } from './design/Box'
import { Heading } from './design/Heading'
import { Text } from './design/Text'
import { FaGithub, FaLink } from 'react-icons/fa'

interface ProjectCardProps {
  title: string
  image: StaticImageData
  children: ReactNode
  github?: string
  link?: string
}

export function ProjectCard ({ title, image, children, github, link }: ProjectCardProps) {
  return (
		<div className='md:max-w-md flex flex-col'>
			<Heading className='text-2xl mb-4 text-center'>
				{title}
			</Heading>
			<Box className='flex-1'>
				<Image src={image} alt={title} className='' />
				<Text>
					{ children }
				</Text>
				<div className='flex mt-4 gap-4'>
					{github && (
						<a href={link}>
							<FaLink color='#fff' size={32} title='Link' />
						</a>
					)}
					{link && (
						<a href={github}>
							<FaGithub color='#fff' size={32} title='Github' />
						</a>
					)}
				</div>
			</Box>
	</div>
  )
}
