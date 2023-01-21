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

export function Slider() {
  return (
    <div className="py-7 md:py-10">
      <div className="container_main">
        <Swiper
          slidesPerView={6}
          spaceBetween={7}
          autoplay={{
            delay: 4000,
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
              slidesPerView: 3,
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
              <SwiperSlide key={index}>
                <div>
                  <div className="mb-7 md:mb-14 rounded-sm">
                    <Image
                      width={220}
                      height={200}
                      src={item.image}
                      alt={item.name}
                      className={'border-2 border-gray-100 dark:border-black'}
                    />
                    <Link href={item.url}>
                      <div className="py-2">
                        <h1 className="rounded-sm uppercase text-[12px] md:text-[14px] font-bold">
                          {item.name}
                        </h1>
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
