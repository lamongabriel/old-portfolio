import { Zoom } from 'react-awesome-reveal'
import { Box } from '../components/design/Box'
import { Heading } from '../components/design/Heading'
import { HeadingGradient } from '../components/design/HeadingGradient'
import { Layout } from '../components/design/Layout'
import { Text } from '../components/design/Text'
import Input from '../components/Form/Input'
import Textarea from '../components/Form/Textarea'

import { FaGithub, FaWhatsapp, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa'
import Button from '../components/design/Button'

export default function Contact () {
  return (
		<Layout>
			<HeadingGradient>
				Contato
			</HeadingGradient>
			<Text>
				Me mande uma mensagem, responderei o mais rápido que puder.
			</Text>
			<Box className='my-10'>
				<section>
					<div className='mt-4 flex gap-4 items-center justify-center'>
						<Zoom delay={300}>
							<a href='https://wa.me/5524999457654?text=Ol%C3%A1%2C+gostaria+de+fazer+um+or%C3%A7amento.' title='WhatsApp'>
								<FaWhatsapp style={{ fill: 'url(#blue-gradient)' }} size={42} color='white' />
							</a>
						</Zoom>
						<Zoom delay={600}>
							<a href='https://www.linkedin.com/in/lamongabriel/' title='Linkedin'>
								<FaLinkedin style={{ fill: 'url(#blue-gradient)' }} size={42} color='white' />
							</a>
						</Zoom>
						<Zoom delay={900}>
							<a href='https://www.instagram.com/lamongabriel/' title='Instagram'>
								<FaInstagram style={{ fill: 'url(#blue-gradient)' }} size={42} color='white' />
							</a>
						</Zoom>
						<Zoom delay={1200}>
							<a href="https://github.com/lamongabriel" title='Github'>
								<FaGithub style={{ fill: 'url(#blue-gradient)' }} size={42} color='white' />
							</a>
						</Zoom>
					</div>
				</section>
				<section className='mt-10'>
					<Heading className='mt-0 text-xl lg:text-2xl'>
						<div className='flex items-center gap-4 justify-center lg:justify-start'>
							<FaEnvelope />
							ou, me mande um e-mail.
						</div>
					</Heading>
					<form>
						<div className='lg:flex lg:gap-4'>
							<Input
								title='Nome'
								id='name'
								type='text'
								name='name'
								autoComplete='name'
								className='flex-1'
							/>
							<Input
								title='E-mail'
								id='email'
								type='email'
								name='email'
								autoComplete='email'
								className='flex-1'
							/>
						</div>
						<Input
							title='Assunto'
							id='subject'
							type='text'
							name='subject'
							autoComplete='off'
						/>
						<Textarea
							title='Mensagem'
							id='body'
							name='body'
							autoComplete='off'
						/>
						<Button
							type='submit'
							className='flex w-full justify-center mt-8'
						>
							Enviar
						</Button>
					</form>
				</section>
			</Box>
			<svg width="0" height="0">
				<linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
					<stop stopColor="#00b37e" offset="0%" />
					<stop stopColor="#6a6aff" offset="100%" />
				</linearGradient>
			</svg>
		</Layout>
  )
}
