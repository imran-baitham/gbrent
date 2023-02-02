// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper'
import Image from 'next/image'
import { ReactIcon } from '../../index'

interface dataProps {
  image: any
  alt: String
}

interface CarouselProps {
  data?: dataProps[]
  view?: boolean
  serView: (e: boolean) => void
}

export function Carousel({ view, serView, data }: CarouselProps) {
  return (
    <div className="bg-[rgba(0,0,0,0.8)] w-full h-screen flex items-center justify-center fixed top-0 left-0 right-0 z-30">
      <div className="md:w-[1400px] w-full">
        <button className="absolute right-2 top-2 bg-white p-1 rounded-full">
          <ReactIcon
            icon="VscClose"
            className="w-5 h-5 text-black"
            onClick={() => serView(false)}
          />
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
          {data?.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className=""> {/*  For Pagination 1/5  */}
                  <div className="w-full h-[230px] lg:w-[800px] lg:h-[500px] xl:w-[1000px] xl:h-[700px] m-auto relative">
                    <Image layout="fill" src={item.image} alt={`${item.alt}`} />
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
