import Image from 'next/image'
import Link from 'next/link'
import { MOCKPRODUCTS } from '@/mock'

export function Features() {
  return (
    <div className="py-7 md:py-10">
      <div className="container_main">
        <h1 className="pb-6 md:pb-9 font-bold text-xl md:text-2xl">
          Featured Categories
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
          {MOCKPRODUCTS.map((item, index) => {
            return (
              <div key={index}>
                <div className="h-[140px] w-full relative">
                  <Image
                    layout="fill"
                    src={item.productIMG}
                    alt={item.productname}
                  />
                </div>
                <Link href={item.slug}>
                  <div className="p-3 bg-zinc-800 border-[1px] border-black dark:border-zinc-800">
                    <h1 className="text-white rounded-sm uppercase text-[12px] md:text-[14px] font-bold">
                      {item.productname}
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
