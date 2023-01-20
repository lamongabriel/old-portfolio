import { InputHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function Input ({ title, name, className, ...rest }: InputProps) {
  const classes = twMerge(`bg-lg-gray-800 w-full px-4 py-2 rounded mt-4 ${className ?? ''}`)

  return (
		<label htmlFor={name} className='w-full flex-1 mt-4 block'>
			<p className='text-xl'>
				{title}
			</p>
			<input
				className={classes}
				{...rest}
			/>
		</label>
  )
}
