import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { classNames } from '@/utils'
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
    <motion.button whileHover={{ scale: 1 }} whileTap={{ scale: 0.9 }}>
      <div className="flex items-center justify-between w-full">
        <button
          className="font-bold text-xl"
          onClick={() => setIncrease((c) => !c)}
        >
          <ReactIcon
            icon={increase === true ? 'BsFillHeartFill' : 'BsHeart'}
            className={classNames(
              'w-5 h-5 md:w-6 md:h-6',
              increase === true ? 'text-red-500' : '',
            )}
          />
        </button>
      </div>
    </motion.button>
  )
}

interface RatingProps {
  rating: number[]
}

export function Rating({ rating }: RatingProps) {
  const [reviews, setReviews] = useState<number>(5)

  return (
    <div className="flex items-center">
      {rating.map((rating, index) => {
        return (
          <svg
            key={index}
            width="18"
            height="17"
            viewBox="0 0 18 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z"
              fill="#FFA800"
            ></path>
          </svg>
        )
      })}
      <span className="text-sm pl-2 pt-1">{reviews} Reviews</span>
    </div>
  )
}
