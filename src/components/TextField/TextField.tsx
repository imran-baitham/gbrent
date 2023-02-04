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
  sm?: boolean
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
  sm = false,
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
          className={classNames(
            sm ? 'md:text-md font-[420]' : '',
            'block pb-[2px]',
          )}
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
          lg ? 'px-5 py-4 text-lg' : '',
          sm ? 'px-2 md:px-3 py-2 md:py-3' : '',
          'px-2 md:px-3 py-2 md:py-3 outline-none border-[1px] border-yellow-500 focus:border-yellow-600 font-[400] bg-white dark:bg-zinc-800',
        )}
      />
    </div>
  )
}

interface TextAreaProps {
  id?: number
  label?: string
  placeholder: string
  onPress?: () => void
  full?: boolean
  className?: string
  lg?: boolean
  sm?: boolean
}

export function TextArea({
  id,
  sm,
  label,
  placeholder,
  className,
}: TextAreaProps) {
  return (
    <>
      {label && (
        <label
          htmlFor={`${id}`}
          className={classNames(
            sm ? 'md:text-md font-[420]' : '',
            'block pb-[2px]',
          )}
        >
          {label}
        </label>
      )}
      <textarea
        rows={10}
        style={{
          resize: 'none',
          width: '98.5%',
        }}
        className={classNames(
          `${className}`,
          'px-2 md:px-3 py-2 md:py-3 outline-none border-[1px] border-yellow-500 focus:border-yellow-600 font-[400] bg-white dark:bg-zinc-800',
        )}
        placeholder={placeholder}
      />
    </>
  )
}
