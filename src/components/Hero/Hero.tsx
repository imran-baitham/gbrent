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
import { Button } from '../Button/Button'

export let data = [
  {
    id: 1,
    para:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quidem quasi similique nobis deleniti, ex delectus laboriosam quis ad sunt!',
    name: 'Seasons by Porcelite',
    image: html,
  },
  {
    id: 2,
    para:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quidem quasi similique nobis deleniti, ex delectus laboriosam quis ad sunt!',
    name: 'Free Survey',
    image: css,
  },
  {
    id: 3,
    para:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quidem quasi similique nobis deleniti, ex delectus laboriosam quis ad sunt!',
    name: 'Zanolli Pizza Ovens',
    image: javascript,
  },
  {
    id: 11,
    para:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quidem quasi similique nobis deleniti, ex delectus laboriosam quis ad sunt!',
    name: 'Seasons Free Survey',
    image: git,
  },
  {
    id: 12,
    para:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quidem quasi similique nobis deleniti, ex delectus laboriosam quis ad sunt!',
    name: 'Extensive Rate Glasses',
    image: cpp,
  },
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
                className="h-[500px] sm:h-[500px] lg:h-[500px] xl:h-[700px]"
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
                <div className="w-full h-full flex items-center container_main">
                  <div className="md:w-4/5">
                    <h1 className="text-md md:text-xl text-white font-bold pb-2 md:pb-4">
                      E2E - HotelWare
                    </h1>
                    <h1 className="text-[30px] md:text-[65px] text-white font-samibold leading-[40px] md:leading-[85px] pb-3 font-[Nosifer]">
                      {item.name}
                    </h1>
                    <p className="text-[12px] md:text-xl text-gray-200 font-[450] md:pb-4 md:w-2/3">
                      {item.para}
                    </p>
                    <Button
                      primary
                      xl
                      className="px-5 md:px-10 mt-5 md:mt-3 rounded"
                    >
                      Explore More
                    </Button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
