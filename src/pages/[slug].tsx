import { Counter, GenericSlider, Heart, ReactIcon, Slider } from '@/components'
import { MOCKPRODUCTS } from '@/mock'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

function Index() {
  const router = useRouter()
  const { slug } = router.query

  let Product = MOCKPRODUCTS.find((item) => item.slug === slug)

  return (
    <div className="py-20">
      <div className="container_main">
        <h1 className="font-bold text-xl pb-3">
          Product - {Product?.productname}
        </h1>
        <div className="grid md:grid-cols-2">
          <div className="">
            <GenericSlider data={Product?.productIMGS} />
          </div>
          <div className="md:px-4">
            <h1 className="font-[450] text-[32px]">{Product?.productname}</h1>
            <hr className="border dark:border-zinc-700 my-3" />
            <div className="flex py-6">
              <del className="text-[12px]">Rs.{Product?.productprice}</del>
              <h1 className="pl-2 font-bold text-2xl">
                Rs.{Product?.productprice}
              </h1>
            </div>
            <div className="flex">
              <div className="pr-4">
                <h1 className="text-sm md:text-md text-yellow-500 font-[420]">
                  AVAILABILITY
                </h1>
                <p className="text-[10px] md:text-[13px] pt-[2px]">
                  {Product?.availability}
                </p>
              </div>
              <div className="pr-4">
                <h1 className="text-sm md:text-md text-yellow-500 font-[420]">
                  DELIVERY
                </h1>
                <p className="text-[10px] md:text-[13px] pt-[2px]">3-5 Days</p>
              </div>
              <div className="pr-4">
                <h1 className="text-sm md:text-md text-yellow-500 font-[420]">
                  REVIEWS
                </h1>
                <p className="text-[10px] md:text-[13px] pt-[2px]">
                  review ware
                </p>
              </div>
            </div>
            <hr className="border dark:border-zinc-700 my-4" />
            <p className="text-sm pb-3">SKU: DY800 12-18-106</p>
            <div className="md:flex w-full py-2">
              <div className="flex mb-2 md:mb-0">
                <div className="bg-gray-100 dark:bg-zinc-700 px-6 py-3 mr-2 w-full md:w-auto flex items-center">
                  <Counter />
                </div>
                <div className="bg-gray-100 dark:bg-zinc-700 py-3 px-5 md:mr-2 flex items-center justify-center">
                  <Heart />
                </div>
              </div>
              <div className="bg-yellow-500 dark:bg-yellow-600 px-10 py-3 mr-2 w-full flex items-center">
                <button className="font-bold text-md flex">
                  Contact
                  <div className="pl-1 md:hidden xl:block">With Seller</div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr className="border dark:border-zinc-700 my-9" />
        <div>Feature Tabs</div>
        <div className="py-10">
          <Slider />{' '}
        </div>
      </div>
    </div>
  )
}

export default Index
