// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

// import required modules
import { FreeMode, Pagination } from 'swiper'
import { MOCKPRODUCTS } from '@/mock'
import Link from 'next/link'
import Image from 'next/image'

export function SiderCard() {
  return (
    <div className="py-7">
      <div className="container_main">
        <div>
          <h1 className="pb-6 md:pb-9 font-bold text-xl md:text-2xl">
            New Arrivals
          </h1>
          <Swiper
            slidesPerView={6}
            spaceBetween={10}
            freeMode={true}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
            breakpoints={{
              '@0.00': {
                slidesPerView: 2,
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
              },
            }}
          >
            {MOCKPRODUCTS.map((item, index) => {
              return (
                <SwiperSlide key={index} className="mb-3">
                  <div className="bg-yellow-400 dark:bg-yellow-600">
                    <div className="mb-7 md:mb-12">
                      <div className="relative h-[160px] w-full">
                        <Image
                          layout="fill"
                          src={item.productIMG}
                          alt={item.productname}
                        />
                      </div>
                      <Link href={item.slug}>
                        <div className="pt-2 pb-4 px-1 md:p-2">
                          <h1 className="rounded-sm uppercase text-[14px] font-bold">
                            {item.productname}
                          </h1>
                          <div className='flex items-center'>
                            <del className="text-[10px] pr-2">
                              {`Rs ${item.productprice}`}
                            </del>
                            <h2 className="text-[10px] md:text-[14px]">
                              {`Rs ${item.productprice}`}
                            </h2>
                          </div>
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
    </div>
  )
}
