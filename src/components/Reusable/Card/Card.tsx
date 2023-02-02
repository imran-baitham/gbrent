import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import { Heart, ReactIcon } from '@/components'

interface RatingProps {
  rating: number[]
}

interface ProductProps {
  id?: number
  productIMG: any
  productname: string
  productprice: number
  category: string
  availability: string
  location: string
  onClick?: () => void
}

export function Card({
  productIMG,
  productname,
  productprice,
  category,
  availability,
  location,
  onClick,
}: ProductProps) {
  return (
    <div
      className="rounded-sm bg-gray-100 dark:bg-zinc-800 mt-3 cursor-pointer"
      onClick={onClick}
    >
      <div className="h-[120px] md:h-[160px] w-full relative">
        <Image
          layout="fill"
          src={productIMG}
          alt={productname}
          className={
            'border-[1px] border-gray-100 dark:border-zinc-800 rounded-t-sm'
          }
        />
        <button className="font-bold absolute right-1 bottom-1 bg-black text-white overflow-hidden z-10 px-1 text-[12px]">
          Rs {productprice}
        </button>
      </div>
      <div className="p-3 flex justify-between items-center">
        <div className="w-full">
          <div className="flex justify-between">
            <span className="text-black dark:text-white text-[10px]">
              {category}
            </span>
            <span className="text-black dark:text-white text-[10px]">
              {availability}
            </span>
          </div>
          <h1 className="rounded-sm uppercase text-[15px] md:text-[16px] font-bold py-1">
            {productname}
          </h1>
          <div className="py-1 flex items-center justify-between">
            <div className="flex items-center w-full">
              <ReactIcon icon="HiLocationMarker" className="w-3 h-3" />
              <h3 className="pl-1 text-[13px]">{location}</h3>
            </div>
            <div className="flex justify-end items-center w-full">
              <button onClick={(e) => e.stopPropagation()}>
                <Heart />
              </button>
            </div>
          </div>
          <h5>
            <Review rating={[1, 2, 3, 4, 5]} />
          </h5>
        </div>
      </div>
    </div>
  )
}

function Review({ rating }: RatingProps) {
  const [reviews, setReviews] = useState<number>(5)

  return (
    <div className="flex items-center">
      {rating.map((rating, index) => {
        return (
          <svg
            key={index}
            width="13"
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
      <span className="text-[11px] pl-2 pt-1">{reviews} Reviews</span>
    </div>
  )
}
