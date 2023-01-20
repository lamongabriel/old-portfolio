import Head from 'next/head'
import { useRef } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { FaGithub, FaWhatsapp, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa'

import { Zoom } from 'react-awesome-reveal'
import { Box } from '../components/design/Box'
import { Heading } from '../components/design/Heading'
import { HeadingGradient } from '../components/design/HeadingGradient'
import { Layout } from '../components/design/Layout'
import { Text } from '../components/design/Text'
import { Input } from '../components/Form/Input'
import { Textarea } from '../components/Form/Textarea'
import Button from '../components/design/Button'

import { sendContactForm } from '../lib/api'
import { ContactFormData } from '../@types/form'

const contactMeFormSchema = yup.object().shape({
  name: yup.string().required('Campo obrigatório.'),
  email: yup.string().required('Campo obrigatório.').email('E-mail inválido.'),
  subject: yup.string().required('Campo obrigatório.'),
  body: yup.string().required('Campo obrigatório.')
})

export default function Contact () {
  const reRef = useRef<ReCAPTCHA>(null)
  const { register, handleSubmit, formState, reset } = useForm<ContactFormData>({
    resolver: yupResolver(contactMeFormSchema)
  })
  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    try {
      const token = await reRef.current?.executeAsync()
      reRef.current?.reset()

      if (!token) {
        throw new Error('No token was provided.')
      }

      await sendContactForm({ ...data, token })
    } catch (error) {
      console.log(error)
    } finally {
      reset()
    }
  }

  return (
		<>
			<Head>
				<title>Contato | lamongabriel</title>

					<meta
						name="description"
						content="Entre em contato comigo, aqui estão todas as minhas redes sociais."
					/>

					<meta property="og:title" content="Contato | lamongabriel" />
					<meta
						property="og:description"
						content="Entre em contato comigo, aqui estão todas as minhas redes sociais."
					/>
					<meta property="og:image" content="/images/profile.png" />
			</Head>
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
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className='lg:flex lg:gap-4'>
								<Input
									label='Nome'
									id='name'
									type='text'
									autoComplete='name'
									className='flex-1'
									errors={formState.errors.name}
									{...register('name')}
								/>
								<Input
									label='E-mail'
									id='email'
									type='email'
									autoComplete='email'
									className='flex-1'
									errors={formState.errors.email}
									{...register('email')}
								/>
							</div>
							<Input
								label='Assunto'
								id='subject'
								type='text'
								autoComplete='off'
								errors={formState.errors.subject}
								{...register('subject')}
							/>
							<Textarea
								label='Mensagem'
								id='body'
								autoComplete='off'
								errors={formState.errors.body}
								{...register('body')}
							/>
							<ReCAPTCHA
								sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE as string}
								size="invisible"
								ref={reRef}
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
		</>
  )
}
