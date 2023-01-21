// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Autoplay, Pagination } from 'swiper'
import Image from 'next/image'
import Link from 'next/link'
import { HomeWareItems } from '@/mock'

export function GenericCard() {
  return (
    <div className="py-7 md:py-10">
      <div className="container_main">
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
          loop={true}
          loopFillGroupWithBlank={true}
          breakpoints={{
            '@0.00': {
              slidesPerView: 1,
            },
            '@0.75': {
              slidesPerView: 2,
            },
            '@1.00': {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
        >
          {HomeWareItems.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="mb-10 md:mb-14 rounded-sm bg-gray-100 dark:bg-zinc-800">
                  <Image
                    width={600}
                    height={300}
                    src={item.image}
                    alt={item.name}
                    className={'border-2 border-gray-100 dark:border-black'}
                  />
                  <div className="p-3 flex justify-between items-center">
                    <h1 className="rounded-sm uppercase text-[15px] md:text-[16px] font-bold">
                      {item.name}
                    </h1>
                    <button className="border border-gray-400 py-1 px-4 rounded text-sm">
                      WhatsApp
                    </button>
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
