import { classNames } from '@/utils'
import React, { useState } from 'react'
import { ReactIcon } from '../ReactIcon/ReactIcon'

export function Counter() {
  const [increase, setIncrease] = useState<number>(0)

  return (
    <div className="flex items-center justify-between w-[80px]">
      <button
        className="font-bold text-xl"
        onClick={() => setIncrease(increase - 1)}
      >
        -
      </button>
      <div className="font-bold text-xl">{increase}</div>
      <button
        className="font-bold text-xl"
        onClick={() => setIncrease(increase + 1)}
      >
        +
      </button>
    </div>
  )
}

export function Heart() {
  const [increase, setIncrease] = useState<boolean>(false)

  return (
    <div className="flex items-center justify-between w-full">
      <button
        className="font-bold text-xl"
        onClick={() => setIncrease((c) => !c)}
      >
        <ReactIcon
          icon="BsHeart"
          className={classNames(
            'w-6 h-6',
            increase === true ? 'text-red-400' : 'border-white',
          )}
        />
      </button>
    </div>
  )
}
