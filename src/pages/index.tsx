import {
  Budget,
  Features,
  GenericCard,
  GridCard,
  Hero,
  SiderCard,
} from '@/components'
import { Blogs } from '@/mock'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>HotelWare</title>
        <meta name="description" content="Generated by imranbaitham" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full">
        <Hero />
        <Features />
        <div className="md:py-10 container_main">
          <h1 className="pt-3 md:pt-0 pb-6 md:pb-9 font-bold text-xl md:text-2xl">
            What are you looking
          </h1>
          <Budget />
        </div>
        <GenericCard />
        {/* <div className="md:py-10 container_main">
          <h1 className="pt-3 md:pt-0 pb-6 md:pb-9 font-bold text-xl md:text-2xl">
            Blogs & Atricles
          </h1>
          <div className="grid md:grid-cols-3 gap-2">
            {Blogs.map((data, index) => {
              return (
                <GridCard
                  key={index}
                  className={index === 1 ? 'md:col-span-2' : ''}
                  url={data.url}
                  image={data.image}
                  title={data.title}
                  subtitle={data.subtitle}
                />
              )
            })}
          </div>
        </div> */}
        <SiderCard />
      </main>
    </>
  )
}
