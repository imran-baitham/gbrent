import {
  GenericSlider,
  GenericTabs,
  NotFound,
  ProductCard,
  ReactIcon,
  Review,
  SellerInfo,
} from '@/components'
import { MOCKPRODUCTS } from '@/mock'
import { useRouter } from 'next/router'
import React from 'react'
import Head from 'next/head'
import { Disc } from '@/components/Reusable/Disc/Disc'
import Image from 'next/image'

function Index() {
  const router = useRouter()
  const { slug } = router.query

  let Product = MOCKPRODUCTS.find((item) => item.slug === slug)

  if (!Product) {
    return <NotFound />
  }

  return (
    <>
      <Head>
        <title>GBrant | {Product?.productname}</title>
        <meta name="description" content="GBrant offers a seamless online platform for renting a wide range of items, including cars, houses, electronics, party supplies, and more. With competitive rental rates, flexible rental periods, and a simple booking process, we make it easy to get the items you need to make your next adventure a success. Browse our selection of rental items today and start planning your next rental experience!" />
        <meta
          name="keywords"
          content={`
          ${Product?.category},
          GBrant,
          Online rental platform,
          Car rental,
          Rent a car,
          House rental,
          Rent a house,
          Electronics rental,
          Rent electronics,
          Party supplies rental,
          Rent party supplies,
          Convenient rental service,
          Hassle-free rental process,
          Flexible rental periods,
          Affordable rental rates,
          Wide range of rental items,
          Cozy studio rental,
          Spacious family home rental,
          Latest technology for rent,
          Event equipment rental,
          Birthday party rental,
          Corporate event rental,
          Simple rental process,
          Reliable rental service,
          Luxury car rental,
          Economy car rental,
          Tablet rental,
          Smartphone rental,
          Laptop rental,
          Decorations rental,
          Costume rental,
          `}
        />
        <meta name="author" content="gbrent.xyz" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="pt-20">
        <div className="container_main">
          <h1 className="font-bold text-xl pb-3">
            Product - {Product?.productname}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-3">
            <div className="col-span-2">
              <GenericSlider data={Product?.productIMGS} />

              <div className="pt-12">
                <GenericTabs
                  tabs={[
                    {
                      id: '1',
                      name: 'Description',
                      content: (
                        <Disc description={Product.productdescription} />
                      ),
                    },
                    { id: '2', name: 'Reviews', content: <Review /> },
                    {
                      id: '3',
                      name: 'Seller Info',
                      content: <SellerInfo />,
                    },
                  ]}
                />
              </div>
            </div>
            <div className="">
              <div className="mt-5 md:mt-0 py-3 md:px-2 md:bg-gray-50 md:dark:bg-zinc-900 md:border border-gray-100 dark:border-zinc-800">
                {/* profile */}
                <div className="mb-5 p-3 border dark:border-zinc-800 bg-white dark:bg-zinc-800 flex items-center">
                  <div className="rounded-full w-[50px] h-[50px] relative">
                    <Image
                      src={Product?.productIMG}
                      alt={Product.productname}
                      layout="fill"
                      className="rounded-full"
                    />
                  </div>
                  <div className="pl-2">
                    <h1 className="font-[420] text-xl leading-6">
                      {Product?.productname}
                    </h1>
                    <p className="text-[12px]">{Product?.time}</p>
                  </div>
                </div>

                {/* Price and name */}
                <div className="mb-2 p-3 border dark:border-zinc-800 bg-white dark:bg-zinc-800 flex items-center justify-between">
                  <h1 className="font-[450]">{Product.productname}</h1>
                  <div className="flex">
                    <del className="text-[12px]">
                      Rs.{Product?.productprice}
                    </del>
                    <h1 className="pl-2 font-bold text-xl">
                      Rs.{Product?.productprice}
                    </h1>
                  </div>
                </div>
                {/* <div className="mb-5 p-3 border dark:border-zinc-800 bg-white dark:bg-zinc-800">
                <h1 className="font-[450] text-xl pb-2">Description</h1>
                <p>{Product?.productdescription}</p>
                </div> */}

                {/* Product Datails */}
                <div className="p-3 border dark:border-zinc-800 bg-white dark:bg-zinc-800">
                  <div className="flex md:block lg:flex gap-x-6 py-2">
                    <div className="">
                      <h1 className="text-sm md:text-md text-yellow-500 font-bold">
                        AVAILABILITY
                      </h1>
                      <p className="text-[10px] md:text-[13px] pt-[2px]">
                        {Product?.availability}
                      </p>
                    </div>
                    <div className="">
                      <h1 className="text-sm md:text-md text-yellow-500 font-bold">
                        RENT ON
                      </h1>
                      <p className="text-[10px] md:text-[13px] pt-[2px]">
                        3 - 5 Days
                      </p>
                    </div>
                    <div className="">
                      <h1 className="text-sm md:text-md text-yellow-500 font-bold">
                        REVIEWS
                      </h1>
                      <p className="text-[10px] md:text-[13px] pt-[2px]">
                        {Product.like.toString()} review
                      </p>
                    </div>
                  </div>
                </div>

                {/* whatsapp */}
                <div className="mb-2 mt-5 bg-[#49d467] border border-[#1d8169] dark:border-[#c1ebab]">
                  <button
                    className="text-black w-full text-left p-2.5 flex justify-center items-center"
                    onClick={() =>
                      window.open(
                        `https://api.whatsapp.com/send/?phone=${Product?.ownernumber}&text&app_absent=0`,
                        '_blank',
                      )
                    }
                  >
                    <ReactIcon icon="FaWhatsapp" className="w-5 h-5 mr-2" />
                    <span className="font-[420]">WhatsApp</span>
                  </button>
                </div>
                {/* number */}
                <div className="my-2 bg-white dark:bg-zinc-800">
                  <button
                    className="border dark:border-zinc-700 w-full text-left px-2.5 py-3 flex justify-center items-center"
                    onClick={() => alert(`${Product?.ownernumber}`)}
                  >
                    <ReactIcon icon="FiPhoneCall" className="w-5 h-5 mr-2" />
                    <span className="font-[420]">Show Number</span>
                  </button>
                </div>

                <div className="w-full mt-10 mb-1">
                  <iframe
                    src={
                      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d201.9474938410998!2d74.38750562760207!3d35.91858591298853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e6495b80b33d6f%3A0x97e334496a64f9af!2sBaig%20Market!5e0!3m2!1sen!2s!4v1675333675793!5m2!1sen!2s'
                    }
                    width="100%"
                    height="250"
                    loading="lazy"
                    className="myMap"
                  />
                  <button
                    className="bg-white dark:bg-zinc-900 w-full text-left px-2.5 py-3 text-sm flex justify-between items-center border dark:border-zinc-800"
                    onClick={() =>
                      window.open(
                        'https://goo.gl/maps/D8ScqkuXJZpfEMiU8',
                        '_blank',
                      )
                    }
                  >
                    <span>See Location</span>
                    <ReactIcon icon="RiArrowRightSFill" className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Tabs */}

          {/* Slider */}
          <div className="py-10">
            <h1 className="pt-3 md:pt-0 pb-6 md:pb-9 font-bold text-xl md:text-2xl">
              Related Product
            </h1>
            <ProductCard ProductData={MOCKPRODUCTS} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Index

{
  /*

 <h1 className="font-[450] text-[32px]">{Product?.productname}</h1>
              <Rating rating={[1, 2, 3, 4, 5]} />
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
                  <p className="text-[10px] md:text-[13px] pt-[2px]">
                    3-5 Days
                  </p>
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
                <div
                  className="bg-yellow-500 dark:bg-yellow-600 px-10 py-3 mr-2 w-full flex items-center cursor-pointer"
                  onClick={() =>
                    window.open(
                      `https://api.whatsapp.com/send/?phone=${Product?.ownernumber}&text&app_absent=0`,
                      '_blank',
                    )
                  }
                >
                  <button className="font-bold text-md flex">
                    Contact
                    <div className="pl-1 md:hidden xl:block">With Seller</div>
                  </button>
                </div>
              </div>
              <div className="py-3 flex items-center">
                <ReactIcon icon="BsEye" />
                <h1 className="pl-2 text-sm dark:text-gray-300 text-gray-500">
                  <b>{Product?.like}</b> Persons looking for this product
                </h1>
              </div>
              <div className="pt-4 flex items-center">
                <h1 className="text-sm dark:text-gray-300 text-gray-500">
                  <b>Share This</b>
                </h1>
                <ReactIcon icon="FcGoogle" className="ml-2" />
                <ReactIcon icon="FcGoogle" className="ml-1" />
                <ReactIcon icon="FcGoogle" className="ml-1" />
              </div>

*/
}
