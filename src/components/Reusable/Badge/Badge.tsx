import { classNames } from '@/utils'
import React from 'react'

interface BadgeProps {
  title: string
  size?: 'sm' | 'lg' | 'xl'
  radius?: 'sm' | 'lg' | 'full'
  variant?: 'success' | 'warning' | 'error' | 'info' | 'primary'
  className?: string
  onClick?: () => void
}

export function Badge(props: BadgeProps) {
  const { title, onClick, size, radius, variant, className } = props

  const bgClasses = classNames(
    variant === 'info' ? 'bg-blue-50' : '',
    variant === 'success' ? 'bg-green-50' : '',
    variant === 'warning' ? 'bg-yellow-50' : '',
    variant === 'error' ? 'bg-red-50' : '',
    variant === 'primary' ? 'dark:bg-yellow-600 bg-yellow-500' : '',
  )

  const radiusClasses = classNames(
    radius === 'sm' ? 'rounded-[2px]' : '',
    radius === 'lg' ? 'rounded-lg' : '',
    radius === 'full' ? 'rounded-full' : '',
  )

  const sizeClasses = classNames(
    size === 'sm' ? 'text-[11px] md:text-sm' : '',
    size === 'lg' ? 'text-sm md:text-lg' : '',
    size === 'xl' ? 'text-sm md:text-xl' : '',
  )

  return (
    <>
      <div
        className={classNames(
          bgClasses,
          radiusClasses,
          sizeClasses,
          className ||
            'cursor-pointer text-gray-800 dark:text-zinc-100 border-[2px] border-gray-200 dark:border-zinc-700 md:px-5 px-2 py-1 md:mr-2 mr-1 md:my-2 my-1',
        )}
        onClick={onClick}
      >
        <h1 className={'textClasses'}>{title}</h1>
      </div>
    </>
  )
}
