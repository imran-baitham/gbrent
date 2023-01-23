import React from 'react'
import css from '../../../public/assets/Hero/e2ehomeware-slider1.png'
import cpp from '../../../public/assets/Hero/e2ehomeware-slider2.jpg'
import git from '../../../public/assets/Hero/e2ehomeware-slider3.jpg'
import javascript from '../../../public/assets/Hero/e2ehomeware-slider4.jpg'
import html from '../../../public/assets/Hero/e2ehomeware-slider5.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Autoplay, Pagination } from 'swiper'
import { useTheme } from 'next-themes'

let data = [
  { id: 1, name: 'Html5', image: html },
  { id: 2, name: 'Css3', image: css },
  { id: 3, name: 'JavaScript', image: javascript },
  { id: 11, name: 'Git', image: git },
  { id: 12, name: 'C++', image: cpp },
]

export function Hero() {
  const { theme } = useTheme()

  return (
    <div className="w-full">
      <Swiper
        slidesPerView={6}
        spaceBetween={10}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        loop={true}
        loopFillGroupWithBlank={true}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 0,
          },
        }}
      >
        {data.map((item, index) => {
          return (
            <SwiperSlide key={index} className="w-full dots">
              <div
                className="h-[300px] sm:h-[500px] lg:h-[500px] xl:h-[700px]"
                style={{
                  backgroundImage: `url(${item.image.src})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  backgroundBlendMode: 'darken',
                  backgroundColor:
                    theme === 'dark' ? 'rgba(0,0,0,0.7)' : 'rgba(0,0,0,0.4)', //'rgba(255,25,25,0.9)',
                }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <h1 className="text-xl md:text-4xl text-white font-bold">
                    E2E - HotelWare
                  </h1>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
