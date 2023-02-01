import React from 'react'

// Import Swiper React components
import sliderone from '../../../public/assets/GBrentBanners/banner1.webp'
// import slidertwo from '../../../public/assets/GBrentBanners/banner2.webp'
import sliderthree from '../../../public/assets/GBrentBanners/banner3.webp'
import sliderfore from '../../../public/assets/GBrentBanners/banner4.webp'
import sliderfive from '../../../public/assets/GBrentBanners/banner5.webp'
import slidersix from '../../../public/assets/GBrentBanners/banner6.webp'
import sliderseven from '../../../public/assets/GBrentBanners/banner7.webp'
import slidereight from '../../../public/assets/GBrentBanners/banner8.webp'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper'
import Image from 'next/image'

export function Hero() {
  return (
    <div className="w-full">
      <Swiper
        slidesPerView={1}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        effect={'fade'}
        modules={[EffectFade, Pagination, Autoplay, Navigation]}
        navigation={false}
        className="mySwiper"
        loop={true}
        loopFillGroupWithBlank={true}
      >
        {data.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="relative pb-10 md:pb-0">
                <Image src={item.image} alt={'silders'} />
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export let data = [
  {
    id: 1,
    image: sliderone,
  },
  // {
  //   id: 2,
  //   image: slidertwo,
  // },
  {
    id: 3,
    image: sliderthree,
  },
  {
    id: 4,
    image: sliderfore,
  },
  {
    id: 5,
    image: sliderfive,
  },
  {
    id: 6,
    image: slidersix,
  },
  {
    id: 7,
    image: sliderseven,
  },
  {
    id: 8,
    image: slidereight,
  },
]

// ======================{  Old Hero Section  }=======================

// import React from 'react'
// import css from '../../../public/assets/Hero/e2ehomeware-slider1.png'
// import cpp from '../../../public/assets/Hero/e2ehomeware-slider2.jpg'
// import git from '../../../public/assets/Hero/e2ehomeware-slider3.jpg'
// import javascript from '../../../public/assets/Hero/e2ehomeware-slider4.jpg'
// import html from '../../../public/assets/Hero/e2ehomeware-slider5.jpg'

// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react'

// // Import Swiper styles
// import 'swiper/css'
// import 'swiper/css/pagination'

// // import required modules
// import { Autoplay, Pagination } from 'swiper'
// import { useTheme } from 'next-themes'
// import { Button } from '../Button/Button'

// export let data = [
//   {
//     id: 1,
//     para:
//       'Create an online store and match the way your customers want to buy or rent.',
//     name: 'Rent products',
//     image: html,
//   },
//   {
//     id: 2,
//     para:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quidem quasi similique nobis deleniti, ex delectus laboriosam quis ad sunt!',
//     name: 'Sell online',
//     image: css,
//   },
//   {
//     id: 3,
//     para:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quidem quasi similique nobis deleniti, ex delectus laboriosam quis ad sunt!',
//     name: 'Easy Connect Sellers',
//     image: javascript,
//   },
//   {
//     id: 11,
//     para:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quidem quasi similique nobis deleniti, ex delectus laboriosam quis ad sunt!',
//     name: 'Free Lounch Products',
//     image: git,
//   },
//   {
//     id: 12,
//     para:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quidem quasi similique nobis deleniti, ex delectus laboriosam quis ad sunt!',
//     name: 'Extensive Rate Glasses',
//     image: cpp,
//   },
// ]

// export function Hero() {
//   const { theme } = useTheme()

//   return (
//     <div className="w-full">
//       <Swiper
//         slidesPerView={6}
//         spaceBetween={10}
//         autoplay={{
//           delay: 4000,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[Pagination, Autoplay]}
//         className="mySwiper"
//         loop={true}
//         loopFillGroupWithBlank={true}
//         breakpoints={{
//           '@0.00': {
//             slidesPerView: 1,
//             spaceBetween: 0,
//           },
//         }}
//       >
//         {data.map((item, index) => {
//           return (
//             <SwiperSlide
//               key={index}
//               className="w-full bg-gray-100 dark:bg-zinc-800"
//             >
//               <div
//                 className="py-[80px] md:py-[100px]"
//                 style={{
//                   backgroundImage: `url(${item.image.src})`,
//                   backgroundBlendMode: 'darken',
//                   backgroundSize: 'cover',
//                   backgroundPosition: 'center',
//                   backgroundRepeat: 'no-repeat',
//                   backgroundColor:
//                     theme === 'dark' ? 'rgba(0,0,0,0.7)' : 'rgba(0,0,0,0.4)',
//                 }}
//               >
//                 <div className="container_main w-full md:h-[300px] h-[333px]">
//                   <div className="pb-10">
//                     <hr className="border-[3px] border-yellow-600 mt-3 w-16 rounded" />
//                     <hr className="border-[0.5px] p-0 border-yellow-600 w-60 -translate-y-[3.5px]" />
//                   </div>
//                   <div className="md:w-1/2">
//                     <h1 className="font-bold text-3xl md:text-4xl text-gray-100 font-['Nosifer']">
//                       {item.name}
//                     </h1>
//                     <p className="md:w-5/6 py-4 text-gray-200 text-sm md:text-[16px]">
//                       {item.para}
//                     </p>
//                     <Button
//                       primary
//                       xl
//                       className="px-[16px] md:px-8 mt-5 md:mt-4 py-[11px] rounded-[2px]"
//                     >
//                       Explore More
//                     </Button>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           )
//         })}
//       </Swiper>
//     </div>
//   )
// }
