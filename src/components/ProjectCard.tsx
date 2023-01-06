import { ReactNode } from 'react'
import Image, { StaticImageData } from 'next/image'
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
		<div className='md:max-w-md flex flex-col rounded-lg overflow-hidden mx-auto'>
			<Image src={image} alt={title} />
			<div className='bg-lg-gray-500 p-10 flex-1 flex flex-col'>
				<Heading>
					{title}
				</Heading>
				<Text className='flex-1'>
					{ children }
				</Text>
				<div className='flex mt-4 gap-4'>
					{link && (
						<a href={link}>
							<FaLink color='#fff' size={32} title='Link' />
						</a>
					)}
					{github && (
						<a href={github}>
							<FaGithub color='#fff' size={32} title='Github' />
						</a>
					)}
				</div>
			</div>
	</div>
  )
}
