import { classNames } from '@/utils'

export interface TextFieldProps {
  id?: number
  label?: string
  inputType: string
  placeholder: string
  onPress?: () => void
  full?: boolean
  disabled?: boolean
  className?: string
  lg?: boolean
}

export function TextField({
  id,
  label,
  inputType,
  placeholder,
  onPress,
  full = false,
  disabled = false,
  lg = false,
  className = '',
}: TextFieldProps) {
  /**
   * TextField Component
   * Implements a basic core button component
   * @param {*} props
   */

  const isDisabled =
    disabled && 'cursor-not-allowed opacity-50 focus:border-yellow-500'

  return (
    <div
      className={classNames(
        'py-2 md:mr-2 w-auto h-auto',
        full ? 'w-full' : '',
        isDisabled ? isDisabled : '',
      )}
    >
      {label && (
        <label
          htmlFor={`${id}`}
          className="block md:text-lg font-[400] pb-[2px]"
        >
          {label}
        </label>
      )}
      <input
        type={inputType ? inputType : 'text'}
        placeholder={placeholder}
        onChange={() => onPress}
        className={classNames(
          `${className}`,
          full ? 'w-full' : '',
          isDisabled ? isDisabled : '',
          lg ? 'px-5 py-4' : '',
          'px-4 py-3 outline-none border-[2px] border-yellow-500 focus:border-yellow-600 font-[400] text-lg bg-white dark:bg-zinc-800',
        )}
      />
    </div>
  )
}
