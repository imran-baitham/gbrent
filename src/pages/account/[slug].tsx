import { NotFound, ReactIcon } from '@/components'
import { classNames } from '@/utils'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

let data = [
  {
    id: 1,
    slug: 'profile',
    name: 'Profile',
  },
  {
    id: 2,
    slug: '/account/myuplaods',
    name: 'myuplaods',
  },
  {
    id: 3,
    slug: '/account/settings',
    name: 'settings',
  },
  {
    id: 4,
    slug: '/account/report-problem',
    name: 'report-problem',
  },
]

function Account() {
  const router = useRouter()
  const { slug } = router.query
  let user = data.find((x) => x.slug === slug)

  if (!user) {
    return <NotFound />
  }

  return (
    <div className="py-10">
      <div className="container_main">
        <div className="flex gap-2">
          <div className="w-[400px] h-[500px] dark:bg-zinc-900 bg-gray-50 p-1 border dark:border-zinc-800">
            {/* <h1 className="font-[420] text-xl">{user.name}</h1> */}
            <Link
              href={'profile'}
              className={classNames(
                'bg-gray-100 dark:bg-zinc-800 px-4 py-[12px] text-sm text-gray-700 dark:text-gray-200 flex items-center',
              )}
            >
              <ReactIcon icon="BsPersonFill" className={'w-4 h-4'} />
              <h1 className="font-[430] pl-2">{user.name}</h1>
            </Link>
          </div>
          <div className="w-full p-2 dark:bg-zinc-900 bg-gray-50 h-[710px] border dark:border-zinc-800">
            <h1 className="font-bold text-xl pb-3">Page - {user.name}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account
