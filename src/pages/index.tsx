import {
  Budget,
  Features,
  GenericCard,
  Hero,
  SiderCard,
  Slider,
} from '@/components'
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
        {/* <Slider /> */}
        <GenericCard />
        <SiderCard />
        <div className="h-[300px] w-full bg-yellow-200 flex items-center justify-center">
          Facbook Card Sliders 02
        </div>

        <div className="h-[400px] w-full bg-gray-400 flex items-center justify-center">
          Subscribe Our Newsletter
        </div>
        <div className="h-[500px] w-full bg-gray-500 flex items-center justify-center">
          Footer Last Section
        </div>
      </main>
    </>
  )
}
