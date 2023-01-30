// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// ===={ Import Swiper styles }====
import 'swiper/css'
import 'swiper/css/pagination'

// ===={ import required modules }====
import { Autoplay, Pagination } from 'swiper'
import Image from 'next/image'
import { MOCKPRODUCTS } from '@/mock'
import { ReactIcon } from '../index'

export function GenericCard() {
  return (
    <div className="py-7">
      <div className="container_main">
        <h1 className="pb-6 md:pb-9 font-bold text-xl md:text-2xl">
          Best Selling
        </h1>
        <div>
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
            {MOCKPRODUCTS.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="mb-10 md:mb-14 rounded-sm bg-gray-100 dark:bg-zinc-800">
                    <div className="h-[220px] w-full relative">
                      <Image
                        layout="fill"
                        src={item.productIMG}
                        alt={item.productname}
                        className={
                          'border-[1px] border-gray-100 dark:border-zinc-800 rounded-t-sm'
                        }
                      />
                    </div>
                    <div className="p-3 flex justify-between items-center">
                      <h1 className="rounded-sm uppercase text-[15px] md:text-[16px] font-bold pt-1">
                        {item.productname}
                      </h1>
                      <button
                        className="flex items-center justify-between border border-gray-400 py-1 px-2 rounded-sm text-sm"
                        onClick={() =>
                          window.open(
                            `https://api.whatsapp.com/send/?phone=${item.ownernumber}&text&app_absent=0`,
                            '_blank',
                          )
                        }
                      >
                        <ReactIcon icon="FaWhatsapp" className="mr-2" />
                        <div>WhatsApp</div>
                      </button>
                      <button className="font-bold absolute right-1 bottom-[100px] md:bottom-[115px] bg-yellow-600 text-white overflow-hidden z-10 rounded px-1 text-sm">
                        Rs {item.productprice}
                      </button>
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
