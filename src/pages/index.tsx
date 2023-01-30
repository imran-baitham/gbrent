import Head from 'next/head'
import {
  Budget,
  Notify,
  Features,
  GenericCard,
  CategoryBox,
  Hero,
  SiderCard,
  Subscribe,
  HowWorks,
  ProductCard,
} from '@/components'
import { RentTags } from '@/mock'
import { MOCKPRODUCTS } from '@/mock'

export default function Home() {
  return (
    <>
      <Head>
        <title>GBrent</title>
        <meta name="description" content="Generated by gbrent" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content={
            'gilgitrent, gbrent, gilgit, imran-baitham, gbrentware, rentware'
          }
        />
        <meta name="author" content="gbrant" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full">
        <Hero />
        <div className="md:py-10 container_main">
          <div className="pt-3 md:pt-0 pb-6 md:pb-9 ">
            <h1 className="font-bold text-xl md:text-2xl">HOW IT WORKS</h1>
            <p>Quick brief on how simple yet powerful Rentable is</p>
          </div>
          <HowWorks />
        </div>
        {/* <Features /> */}
        {/* <div className="md:py-10 container_main">
          <h1 className="pt-3 md:pt-0 pb-6 md:pb-9 font-bold text-xl md:text-2xl">
            What are you looking
          </h1> 
          <Budget />
        </div> */}

        <div className="py-7">
          <div className="container_main">
            <h1 className="pb-6 md:pb-9 font-bold text-xl md:text-2xl">
              Best Rentles
            </h1>
            <ProductCard ProductData={MOCKPRODUCTS} />
            <ProductCard ProductData={MOCKPRODUCTS} />
          </div>
        </div>

        {/* <GenericCard /> */}
        <SiderCard />
        {/* <Notify /> */}
        <div className="md:py-10 container_main">
          <h1 className="pt-3 md:pt-0 pb-6 md:pb-9 font-bold text-xl md:text-2xl">
            Rent By Category
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-2">
            {RentTags.map((data, index) => {
              return (
                <CategoryBox
                  icon={data.icon}
                  url={data.url}
                  title={data.name}
                  key={index}
                />
              )
            })}
          </div>
        </div>
        {/* <Subscribe /> */}
      </main>
    </>
  )
}

// import { StaticProps } from '@/utils'
// export async function getServerSideProps() {
//   // fetch the blog posts from the mock API
//   const res = await fetch('http://localhost:3000/api/product')
//   const posts = await res.json()
//   return {
//     props: { posts }, // props will be passed to the page
//   }
// }
