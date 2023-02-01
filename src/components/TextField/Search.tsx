import React, { useState } from 'react'

interface Props {
  onEnter: (data: string) => void
}

export const Search: React.FC<Props> = ({ onEnter }) => {
  const [value, setValue] = useState('')

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onEnter(value)
      setValue('')
    }
  }

  return (
    <input
      value={value}
      onKeyPress={handleKeyPress}
      onChange={(e) => setValue(e.target.value)}
      type="search"
      className="mt-5 md:mt-0 w-full outline-none text-xl md:text-4xl bg-transparent border-b-2 border-gray-300 dark:border-zinc-700 pl-10 md:pl-14 py-2 md:py-3 mb-7"
      placeholder="Search our catalog"
    />
  )
}
