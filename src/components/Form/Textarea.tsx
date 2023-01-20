import { TextareaHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export default function Textarea ({ title, name, className, ...rest }: TextareaProps) {
  const classes = twMerge(`bg-lg-gray-800 w-full px-4 py-2 rounded mt-4 ${className ?? ''}`)

  return (
		<label htmlFor={name} className='w-full flex-1 mt-4 block'>
			<p className='text-xl'>
				{title}
			</p>
			<textarea
				rows={8}
				className={classes}
				{...rest}
			/>
		</label>
  )
}
