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

export function Features() {
  return (
    <div className="py-7 md:py-10">
      <div className="container_main">
        <h1 className="pb-6 md:pb-9 font-bold text-xl md:text-2xl">Featured Categories</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
          {HomeWareItems.splice(0, 12).map((item, index) => {
            return (
              <div key={index}>
                <Image
                  width={620}
                  height={200}
                  src={item.image}
                  alt={item.name}
                />
                <Link href={item.url}>
                  <div className="p-3 bg-zinc-800 border-[1px] border-black dark:border-zinc-700">
                    <h1 className="text-white rounded-sm uppercase text-[12px] md:text-[14px] font-bold">
                      {item.name}
                    </h1>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
