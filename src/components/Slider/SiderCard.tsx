import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

// import required modules
import { FreeMode, Pagination } from 'swiper'
import { HomeWareItems } from '@/mock'
import Link from 'next/link'
import Image from 'next/image'

export function SiderCard() {
  return (
    <div className="py-7 md:py-10">
      <div className="container_main">
        <Swiper
          slidesPerView={6}
          spaceBetween={20}
          freeMode={true}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
          breakpoints={{
            '@0.00': {
              slidesPerView: 3,
              spaceBetween: 7,
            },
            '@0.75': {
              slidesPerView: 4,
            },
            '@1.00': {
              slidesPerView: 5,
            },
            '@1.50': {
              slidesPerView: 6,
              spaceBetween: 15,
            },
          }}
        >
          {HomeWareItems.map((item, index) => {
            return (
              <SwiperSlide key={index} className="mb-3">
                <div className="bg-yellow-400 dark:bg-yellow-600">
                  <div className="mb-7 md:mb-14">
                    <Image
                      width={320}
                      height={300}
                      src={item.image}
                      alt={item.name}
                    />
                    <Link href={item.url}>
                      <div className="pt-2 pb-4 px-1 md:p-2">
                        <h1 className="rounded-sm uppercase text-[10px] md:text-[14px] font-bold">
                          {item.name}
                        </h1>
                        <h2 className='text-[9px] sm:text-[12px]'>{"Rs 1000/-"}</h2>
                      </div>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}
