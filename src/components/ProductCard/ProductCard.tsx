// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Pagination } from 'swiper'
import { StaticProps } from '@/utils'
import { useRouter } from 'next/router'
import { Card } from '../Reusable/Card/Card'

export function ProductCard({ ProductData }: StaticProps) {
  const router = useRouter()

  return (
    <div>
      <Swiper
        slidesPerView={5}
        spaceBetween={8}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        loopFillGroupWithBlank={true}
        breakpoints={{
          '@0.00': {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          '@0.75': {
            slidesPerView: 4,
          },
          '@1.00': {
            slidesPerView: 5,
            spaceBetween: 8,
          },
        }}
      >
        {ProductData?.map((item, index) => {
          return (
            <SwiperSlide key={index} className={'mb-10'}>
              <Card
                productIMG={item.productIMG}
                productname={item.productname}
                productprice={item.productprice}
                category={item.category}
                availability={item.availability}
                location={item.location}
                onClick={() => router.push(`${item.slug}`)}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
