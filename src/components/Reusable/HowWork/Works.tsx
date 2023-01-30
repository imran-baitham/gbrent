import { ReactIcon } from '@/components/ReactIcon/ReactIcon'
import React from 'react'

export function HowWorks() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {info.map((data: any) => {
          return (
            <div key={data.id}>
              <div className="group border dark:border-zinc-800 border-gray-100 rounded dark:bg-zinc-900 bg-gray-50 flex p-2">
                <div className="w-20 h-20 flex items-center justify-center">
                  <ReactIcon icon={data.icon} className={'w-14 h-14'} />
                </div>
                <div className="flex items-center pl-3">
                  <div>
                    <h1 className="font-bold text-lg">{data.title}</h1>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{data.subTitle}</p>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

let info = [
  {
    id: 1,
    icon: 'BsPersonFill',
    title: 'Create An Account',
    subTitle: 'Start journey by creating account.',
  },
  {
    id: 2,
    icon: 'BsBell',
    title: 'Post An Advert',
    subTitle: 'when you are our member post',
  },
  {
    id: 3,
    icon: 'RiMoneyPoundCircleFill',
    title: 'Start Earning',
    subTitle:
      'Start Earning Is your advert live',
  },
]
