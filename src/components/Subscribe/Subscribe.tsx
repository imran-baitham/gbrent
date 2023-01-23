import Image from 'next/image'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Autoplay } from 'swiper'
import { Notfi } from '@/mock'

export function Subscribe() {
  return (
    <div className="py-7 md:py-10 hidden md:block">
      <div className="container_main">
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
          loop={true}
          loopFillGroupWithBlank={true}
        >
          {Notfi.map((item, index) => {
            return (
              <SwiperSlide key={index} className="">
                <div className="mb-7 md:mb-14 relative h-[150px] md:h-[270px] bg-gray-100 dark:bg-zinc-800 rounded-lg">
                  <Image
                    layout="fill"
                    src={item.image}
                    alt={'e2ehotelware latest news'}
                    className={'rounded-lg'}
                  />
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}

// import React from 'react'
// import Image from 'next/image'
// // import image from '../../../public/assets/imranbaitham.png'
// import image from '../../../public/assets/imranbaitham.png'

// export function Subscribe() {
//   return (
//     // <div className="md:h-[430px] w-full bg-[rgb(255,212,76)] my-8 py-8 md:py-10">
//     <div className="md:h-[400px] w-full bg-[rgb(255,212,76)] my-8 py-5 md:py-6">
//       <div className="container_main">
//         <div className="grid md:grid-cols-2 items-center justify-around">
//           <div className="w-full h-[430px] flex items-center justify-center">
//             <div>
//               <Image
//                 width={400}
//                 height={400}
//                 src={image.src}
//                 alt="imranbaitham"
//               />
//             </div>
//           </div>
//           <div className="w-full">
//             <h1 className="text-2xl text-black font-['Nosifer'] pb-3">
//               Give me the latest news!
//             </h1>
//             <p className="font-[] text-gray-800">
//               Want to know which websites saw the most traffic growth in your
//               industry? Not sure why your SEO strategy doesn’t work? Or simply
//               looking for SEO tips? Subscribe to our newsletter to receive
//               updates on the content you care about.
//             </p>
//             <form className="md:w-[400px] pt-5">
//               <input
//                 type="email"
//                 required
//                 className="w-full p-3 border-2 border-blue-300 focus:border-blue-400 rounded-md outline-none bg-white"
//                 placeholder="Enter your email"
//               />
//               <button className="w-full p-3 rounded mt-2 bg-black text-white">
//                 Subscribe
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
