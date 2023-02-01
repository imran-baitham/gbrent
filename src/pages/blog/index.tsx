import { GridCard } from '@/components'
import { Blogs } from '@/mock'
import React from 'react'

function Index() {
  return (
    <div className="container_main">
      <div className="md:py-10 container_main">
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
        <h1 className="py-6 font-bold text-xl md:text-2xl">Blogs & Atricles</h1>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="w-full md:col-span-2">
            {Blogs.map((data, index) => {
              return (
                <GridCard
                  key={index}
                  url={data.url}
                  image={data.image}
                  title={data.title}
                  subtitle={data.subtitle}
                  className="my-2"
                />
              )
            })}
          </div>
          <div className='border dark:border-zinc-800 p-3 my-3'>
            <h1 className='text-center'>Ads or Feature divs</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
