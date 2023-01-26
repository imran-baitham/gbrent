/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import images from '../../../public/assets/Hero/e2ehomeware-slider5.jpg'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper'
import Image from 'next/image'

let MockData = [
  { image: images, alt: 'images' },
  { image: images, alt: 'images' },
  { image: images, alt: 'images' },
  { image: images, alt: 'images' },
  { image: images, alt: 'images' },
]

interface dataProps {
  image: any
  alt: String
}
interface GenericSliderProps {
  data?: dataProps[]
}

export function GenericSlider({ data }: GenericSliderProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any | null>(null)

  let sliders = data ? data : MockData

  return (
    <div>
      <div className="border dark:border-zinc-700">
        <Swiper
          spaceBetween={10}
          navigation={true}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          {sliders.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="p-[22px]">
                  <div className="relative h-[220px] md:h-[350px] md:w-full">
                    <Image
                      src={item?.image}
                      alt={`${item.alt}`}
                      layout="fill"
                    />
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {sliders.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="border dark:border-zinc-700 md:p-2 p-1 mt-3">
                <div className="relative md:h-[80px] h-[50px] w-full">
                  <Image src={item.image} alt={`${item.alt}`} layout="fill" />
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
