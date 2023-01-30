// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Pagination } from 'swiper'
import Image from 'next/image'
import { useState } from 'react'
import { ReactIcon } from '../ReactIcon/ReactIcon'
import { Icon } from '../Reusable/Icon/Icon'
import Link from 'next/link'
import { StaticProps } from '@/utils'

interface RatingProps {
  rating: number[]
}

export function ProductCard({ ProductData }: StaticProps) {
  return (
    <div>
      <Swiper
        slidesPerView={5}
        spaceBetween={8}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        loopFillGroupWithBlank={true}
        breakpoints={{
          '@0.00': {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          '@0.75': {
            slidesPerView: 4,
          },
          '@1.00': {
            slidesPerView: 5,
            spaceBetween: 8,
          },
        }}
      >
        {ProductData?.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <Link href={item.slug}>
                <div className="mb-10 rounded-sm bg-gray-100 dark:bg-zinc-800 mt-3">
                  <div className="h-[120px] md:h-[160px] w-full relative">
                    <Image
                      layout="fill"
                      src={item.productIMG}
                      alt={item.productname}
                      className={
                        'border-[1px] border-gray-100 dark:border-zinc-800 rounded-t-sm'
                      }
                    />
                    <button className="font-bold absolute right-1 bottom-1 bg-black text-white overflow-hidden z-10 px-1 text-[12px]">
                      Rs {item.productprice}
                    </button>
                  </div>
                  <div className="p-3 flex justify-between items-center">
                    <div className="w-full">
                      <div className="flex justify-between">
                        <span className="text-black dark:text-white text-[10px]">
                          {item.category}
                        </span>
                        <span className="text-black dark:text-white text-[10px]">
                          {item.availability}
                        </span>
                      </div>
                      <h1 className="rounded-sm uppercase text-[15px] md:text-[16px] font-bold py-1">
                        {item.productname}
                      </h1>
                      <div className="py-1 flex items-center justify-between">
                        <div className="flex items-center w-full">
                          <ReactIcon
                            icon="HiLocationMarker"
                            className="w-3 h-3"
                          />
                          <h3 className="pl-1 text-[13px]">{item.location}</h3>
                        </div>
                        <div className="flex justify-end items-center w-full">
                          <Icon icon="BsHeart" clsx="p-[4px] h-6 w-6" />
                        </div>
                      </div>
                      <h5>
                        <Review rating={[1, 2, 3, 4, 5]} />
                      </h5>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          )
        })}
      </Swiper>
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
