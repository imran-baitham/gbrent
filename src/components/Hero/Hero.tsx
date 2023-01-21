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
                <div>future text</div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

let para = `dicta enim corporis. Minima totam placeat sed doloribus nam, molestias dicta asperiores mollitia officiis. Optio maxime laboriosam accusamus eligendi. Sed, magni ipsam nam, quae omnis incidunt voluptas laudantium vitae fugiat eveniet magnam corporis eum rerum a culpa! Illum tempora unde accusantium, blanditiis consequatur laboriosam deleniti corrupti molestias nobis perferendis odit aspernatur veniam vel ab illo? Quas nisi neque porro veritatis blanditiis at est aliquam tempora corporis. Explicabo rerum doloribus consequatur consequuntur? Facere at qui placeat a doloremque voluptatem fugiat iure veniam! Sed dolorum temporibus dicta alias consectetur. Debitis neque eveniet maiores. Porro distinctio dolores dicta tempore, culpa molestias sit nemo nihil voluptas. Eveniet dolor aliquid sunt molestiae perferendis deleniti tempora assumenda ipsam quae quam ullam molestias eaque consequuntur, quo, soluta omnis sed aliquam eos officia sint saepe odit? Atque reiciendis vel fugit excepturi sapiente recusandae dolores laborum sint optio sit dolorem nostrum eum, inventore voluptate iste quisquam et expedita pariatur odit consequuntur numquam ab aliquid fuga velit! Nemo repellendus facilis accusamus dolorem velit, repellat tempore, ratione labore praesentium dolore, magni inventore modi explicabo nobis perferendis? Aperiam laboriosam tempora sapiente libero tempore expedita, non ut unde saepe adipisci similique enim velit dolores vero ad placeat deserunt ullam atque laborum voluptatem? Minus deserunt eos iusto, maiores perspiciatis cumque possimus laudantium, deleniti facilis cupiditate et, aut nihil excepturi quia modi? Qui, blanditiis enim similique maxime ea necessitatibus adipisci autem, eveniet temporibus quidem fugiat asperiores illum laborum quos itaque distinctio placeat sit. Quibusdam consectetur culpa atque vero totam rerum doloremque velit, eos cum. Dolorum temporibus, quos minus accusamus a suscipit facilis repellat perspiciatis deserunt ad libero tenetur explicabo quisquam cumque pariatur similique consequuntur, voluptatem sit exercitationem illum earum. Eligendi adipisci odit provident ratione voluptas animi praesentium cupiditate ipsa error nulla saepe culpa laudantium molestias necessitatibus ullam quam rem fuga numquam quasi quas quae assumenda, ipsam tempora alias. Perspiciatis laborum officia ea. Porro, totam aliquam. Nam dolor tempora blanditiis repellat optio labore aliquam minima quis soluta, explicabo quidem qui quam doloribus molestiae! Veniam sapiente repellat libero molestias incidunt fuga nemo a exercitationem aliquid quam eligendi sit commodi tempora officiis architecto velit illum sequi expedita, accusamus dolore reiciendis mollitia ad. Itaque porro deserunt labore dignissimos dolore odio illo! Officia modi labore nihil distinctio at, hic aut. Corrupti omnis aliquid perspiciatis, dolor cumque aliquam minus consequuntur et autem suscipit culpa voluptas tenetur adipisci ullam molestias, quisquam, pariatur assumenda dolore sunt rem? Veritatis dolorem blanditiis consequuntur ratione esse alias illum tenetur aut hic minus repellat ab quisquam fuga harum, culpa, recusandae repudiandae nostrum illo consequatur aliquid iste exercitationem! Facilis libero atque accusamus voluptatibus suscipit. Voluptatem ea corporis a culpa laboriosam nam, non necessitatibus quae itaque alias nobis, temporibus inventore dignissimos quasi. Aperiam, non molestiae. Dolores sed nesciunt placeat quia iste fugiat laboriosam commodi asperiores praesentium quisquam. Mollitia expedita nisi, doloribus, quis reprehenderit itaque ducimus ipsum optio quidem est recusandae incidunt, quod iste neque voluptatem quas delectus minus. Explicabo, corporis, et quisquam laboriosam incidunt omnis optio vero ipsum illum est consectetur laborum ab, similique deleniti hic veniam quae distinctio fuga! Iste dignissimos neque qui sapiente ex ab laudantium dolorem! Deleniti facilis incidunt blanditiis culpa saepe deserunt, fuga pariatur et, id corrupti sapiente. Quae totam dicta molestiae ipsa nobis sunt, illum maiores quod, doloremque dolore similique nesciunt veritatis at earum repellat rerum soluta aut eaque. Iusto facilis facere necessitatibus accusamus quod nam nulla, saepe minima ullam similique ex illum.`
