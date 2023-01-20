import { forwardRef, ForwardRefRenderFunction, TextareaHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'

import { twMerge } from 'tailwind-merge'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  errors?: FieldError
}

const TextareaBase: ForwardRefRenderFunction<HTMLTextAreaElement, TextareaProps> = (
  { label, name, className, errors, ...rest }, ref
) => {
  const classes = twMerge(`bg-lg-gray-800 w-full px-4 py-2 rounded mt-4 ${className ?? ''}`)

  return (
		<label htmlFor={name} className='w-full flex-1 mt-4 block'>
			<p className='text-xl'>
				{label}
			</p>
			<textarea
				ref={ref}
				id={name}
				name={name}
				rows={8}
				className={classes}
				{...rest}
			/>
			{!!errors && <span className='text-red-500 mt-2 block'>{errors.message}</span>}
		</label>
  )
}

export const Textarea = forwardRef(TextareaBase)
