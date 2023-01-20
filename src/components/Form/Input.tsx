import { forwardRef, ForwardRefRenderFunction, InputHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  errors?: FieldError
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, className, label, errors, ...rest },
  ref
) => {
  const classes = twMerge(`bg-lg-gray-800 w-full px-4 py-2 rounded mt-4 ${className ?? ''}`)

  return (
		<label htmlFor={name} className='w-full flex-1 mt-4 block'>
			<p className='text-xl'>
				{label}
			</p>
			<input
				id={name}
				name={name}
				ref={ref}
				className={classes}
				{...rest}
			/>
			{!!errors && <span className='text-red-500 mt-2 block'>{errors.message}</span>}
		</label>
  )
}

export const Input = forwardRef(InputBase)
