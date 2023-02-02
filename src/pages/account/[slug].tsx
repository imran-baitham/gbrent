import { NotFound, ReactIcon } from '@/components'
import { UserStaticPaths } from '@/mock'
import { classNames } from '@/utils'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

function Account() {
  const [userLogin, setUserLogin] = useState<any>(null)
  const [login, setTodos] = useState<boolean>(false)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setUserLogin(localStorage.getItem('user'))
    if (userLogin) {
      setTodos(true)
    }
  })

  // const handlerClick = (index: number) => {
  //   if (index === 4) {
  //     localStorage.removeItem('user')
  //     setTodos(false)
  //   }
  // }

  // ===========================
  const router = useRouter()
  const { slug } = router.query

  let UserDatails = UserStaticPaths.find((item) => item.slug == slug)

  if (!UserDatails || !login) {
    return <NotFound />
  }

  return (
    <div className="py-10">
      <div className="container_main">
        <div className="md:flex md:gap-2">
          <div className="md:w-[400px] md:h-[500px] dark:bg-zinc-900 bg-gray-50 p-1 border dark:border-zinc-800">
            {UserStaticPaths.map((item, index) => {
              console.log(slug, item.slug)
              return (
                <Link
                  key={index}
                  href={item.slug}
                  className={classNames(
                    item.slug === slug
                      ? 'bg-yellow-600 border border-yellow-600 text-white'
                      : 'bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-200 border dark:border-zinc-700',
                    'mb-2.5 px-4 py-[12px] text-sm flex items-center',
                  )}
                  // onClick={() => handlerClick(index)}
                >
                  <ReactIcon icon={item.icon} className={'w-4 h-4'} />
                  <h1 className="font-[430] pl-2">{item.name}</h1>
                </Link>
              )
            })}
          </div>
          <div className="w-full p-2 dark:bg-zinc-900 bg-gray-50 h-[710px] border dark:border-zinc-800">
            <h1 className="font-bold text-xl pb-3">Page - {slug}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account
