import { classNames } from '@/utils'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  xs?: boolean
  sm?: boolean
  lg?: boolean
  xl?: boolean
  transparent?: boolean
  primary?: boolean
  danger?: boolean
  full?: boolean
}

/**
 * Button Component
 * Implements a basic core button component
 * @param {*} props
 */
export const Button = ({
  children,
  className = '',
  xs = false,
  sm = false,
  lg = false,
  xl = false,
  primary,
  transparent = false,
  danger = false,
  full = false,
  disabled = false,
  ...props
}: ButtonProps): JSX.Element => {
  const isDisabled = disabled && 'cursor-not-allowed opacity-50'
  return (
    <button
      className={classNames(
        'cursor-pointer px-3 py-2',
        'inline-flex items-center',
        'text-sm font-medium shadow-sm rounded-none md:rounded-[1px]',
        'flex justify-center',
        full ? 'w-full' : '',
        xs ? 'px-2.5 py-1.5 text-xs' : '',
        sm ? 'px-3 py-2 leading-4' : '',
        lg ? 'px-4 py-2 text-base' : '',
        xl ? 'px-8 py-4 text-base' : '',
        primary ? 'bg-yellow-500 dark:bg-yellow-600' : '', //'bg-[#ff3b5c] text-white' : '',
        transparent
          ? 'border-gray-300 text-gray-700 bg-white' +
              ' hover:bg-gray-50 ripple-on-surface'
          : '',
        danger ? 'bg-red-500 text-white' : '',
        transparent && danger ? 'bg-white-700 border-red-500 text-red-500' : '',
        isDisabled ? isDisabled : '',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
