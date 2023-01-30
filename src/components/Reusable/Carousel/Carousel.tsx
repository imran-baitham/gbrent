// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper'
import Image from 'next/image'
import { HomeWareItems } from '@/mock'
import { ReactIcon } from '../../index'

export function Carousel() {
  return (
    <div className="bg-[rgba(0,0,0,0.9)] w-full h-screen flex items-center justify-center fixed top-0 left-0 right-0 z-30">
      <div className="md:w-[1400px] w-full">
        <button className="absolute right-2 top-2 bg-white p-2 rounded-full">
          <ReactIcon icon="VscClose" className="w-5 h-5" />
        </button>
        <Swiper
          slidesPerView={1}
          pagination={{
            type: 'fraction',
          }}
          modules={[Pagination, Autoplay, Navigation]}
          className="mySwiper"
          loopFillGroupWithBlank={true}
          navigation={true}
        >
          {HomeWareItems.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="mb-12">
                  <div className="w-full h-[230px] md:w-[800px] md:h-[500px] m-auto relative">
                    <Image layout="fill" src={item.image} alt={item.name} />
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
