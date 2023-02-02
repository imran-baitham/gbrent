import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
import { Card } from '@/components'
import { MOCKPRODUCTS } from '@/mock'

let FilterPrice = [
  { min: '0', high: '300' },
  { min: '300', high: '500' },
  { min: '500', high: '700' },
  { min: '700', high: '1000' },
  { min: '1000', high: '1500' },
  { min: '1500', high: '1700' },
  { min: '1700', high: '2000' },
  { min: '2000', high: '1200' },
  { min: '1500', high: '1700' },
  { min: '1700', high: '2000' },
]

let Popularfilters = [
  { tagname: 'Rich', url: '' },
  { tagname: 'School', url: '' },
  { tagname: 'Quotes', url: '' },
  { tagname: 'Finical', url: '' },
  { tagname: 'Collage', url: '' },
  { tagname: 'Bussiness', url: '' },
]

function Index() {
  return (
    <div>
      <div className="container_main py-6">
        <div className="md:flex md:gap-2">
          <div className="py-3 md:w-96 border px-3 dark:border-zinc-700 mb-5 md:mb-0">
            <h1 className="font-bold text-2xl pt-1">Filter by</h1>
            <hr className="border dark:border-zinc-700 my-3" />
            {/* Calculations */}
            <div>
              <h1 className="py-4 font-[410]">Calculations</h1>
              <hr className="border dark:border-zinc-700" />
              <div className="pt-2">
                {FilterPrice.map((catg, index) => {
                  return (
                    <Link href={'/collections/shop'} key={index}>
                      <div className="py-[6px] text-md dark:text-gray-300 text-gray-600 flex">
                        <input type="checkbox" className="mr-2" />
                        <h1>Rs.{catg.min}</h1>
                        <h1 className="pl-3">Rs.{catg.high}</h1>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
            {/* Popular filters */}
            <div>
              <h1 className="py-4 font-[410]">Popular filters</h1>
              <hr className="border dark:border-zinc-700" />
              <div className="pt-2">
                {Popularfilters.map((catg, index) => {
                  return (
                    <Link href={'/collections/shop'} key={index}>
                      <div className="py-[6px] text-md dark:text-gray-300 text-gray-600 flex">
                        <input type="checkbox" className="mr-2" />
                        <h1>{catg.tagname}</h1>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
            {/* Categories */}
            <div>
              <h1 className="py-4 font-[410]">Categories</h1>
              <hr className="border dark:border-zinc-700" />
              <div className="pt-2">
                {MOCKPRODUCTS.map((catg, index) => {
                  return (
                    <Link href={'/collections/shop'} key={index}>
                      <h1 className="py-[6px] text-md dark:text-gray-300 text-gray-600">
                        {catg.category}
                      </h1>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
          <div className="w-full border dark:border-zinc-700 px-3 py-3">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
              {MOCKPRODUCTS.map((data, index) => {
                return (
                  <Card
                    key={index}
                    productIMG={data.productIMG}
                    productname={data.productname}
                    productprice={data.productprice}
                    category={data.category}
                    availability={data.availability}
                    location={data.location}
                    onClick={() => Router.push(data.slug)}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
