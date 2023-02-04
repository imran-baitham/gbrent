import { Button, NotFound, ReactIcon, TextArea, TextField } from '@/components'
import { UserStaticPaths } from '@/mock'
import { classNames } from '@/utils'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

function Account() {
  const router = useRouter()
  const { slug } = router.query
  // ============ Login
  const [userLogin, setUserLogin] = useState<any>(null)
  const [login, setTodos] = useState<boolean>(false)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setUserLogin(localStorage.getItem('user'))
    if (userLogin) {
      setTodos(true)
    }
  })

  // ================= Slug

  let UserDatails = UserStaticPaths.find((item) => item.slug == slug)

  if (!UserDatails || !login) {
    return <NotFound />
  }

  return (
    <div className="py-10">
      <div className="container_main">
        <div className="md:flex md:gap-2">
          <div className="md:w-[400px]">
            <div className="dark:bg-zinc-900 bg-gray-50 p-1 border dark:border-zinc-800">
              {UserStaticPaths.map((item, index) => {
                return (
                  <Link
                    key={index}
                    href={item.slug}
                    className={classNames(
                      index === 3
                        ? 'flex items-end md:justify-center md:mt-40'
                        : '',
                      item.slug === slug
                        ? 'bg-yellow-600 border border-yellow-600 text-white'
                        : 'bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-200 border dark:border-zinc-700',
                      'mb-2.5 px-4 py-[12px] text-sm flex items-center',
                    )}
                  >
                    <ReactIcon icon={item.icon} className={'w-4 h-4'} />
                    <h1 className="font-[430] pl-2">{item.name}</h1>
                  </Link>
                )
              })}
            </div>
          </div>
          <div className="w-full p-2 pb-3 dark:bg-zinc-900 bg-gray-50 border dark:border-zinc-800">
            {slug === 'profile' && (
              <div className="w-full">
                <h1 className="font-bold text-xl py-2 border-b-2 dark:border-zinc-700 mb-5">
                  Profile
                </h1>
                <div className="grid lg:grid-cols-3 border dark:border-zinc-700 p-3 mb-5 gap-1">
                  <form action="##" className="lg:col-span-2">
                    <div className="grid sm:grid-cols-2 gap-1 md:gap-0">
                      <TextField
                        label="Enter Your Name"
                        inputType="text"
                        placeholder="Name"
                        sm
                        full
                      />
                      <TextField
                        label="Gender"
                        inputType="text"
                        placeholder="Male"
                        full
                        sm
                      />
                    </div>
                    <h1 className="pt-3 md:text-md font-[420]">
                      Date of birth
                    </h1>
                    <div className="grid grid-cols-3 gap-1 md:gap-0">
                      <TextField inputType="text" placeholder="DD" sm full />
                      <TextField inputType="text" placeholder="MM" full sm />
                      <TextField inputType="text" placeholder="YYYY" full sm />
                    </div>
                    <div className="pt-2">
                      <TextArea
                        label="About Me"
                        placeholder="0/200 (optional)"
                        sm
                      />
                    </div>
                    <div className="w-full text-right py-5 pr-1.5 md:pr-2.5">
                      <Button primary>Save Changes</Button>
                    </div>
                  </form>
                  <div>
                    <div className="border p-3 dark:border-zinc-700">
                      <h1 className="font-bold pb-2 text-yellow-500">
                        Why is it important? 🤔
                      </h1>
                      <p className="text-[12px] dark:text-gray-200 text-gray-600">
                        GBrent is built on trust. Help other people get to know
                        you. Tell them about the things you like. Share your
                        favorite brands, books, movies, shows, music, food. And
                        you will see the results…
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full border dark:border-zinc-700 p-3">
                  <h1 className="font-bold text-2xl py-2 border-b-2 dark:border-zinc-700">
                    Delete this account
                  </h1>
                  <h1 className="py-4 font-[420] text-md">
                    Are you sure you want to delete your account?
                  </h1>
                  <Button primary>Yes, delete my account</Button>
                </div>
              </div>
            )}
            {slug === 'myuplaods' && (
              <div>
                <h1 className="font-bold text-xl py-2 border-b-2 dark:border-zinc-700 mb-5">
                  My Uploads
                </h1>
                <div className="w-full h-full flex items-center justify-center text-center py-20">
                  <div>
                    <h1 className="text-[100px]">📂</h1>
                    <h1 className="my-4 font-[420]">
                      You haven’t added any item yet.
                    </h1>
                    <Button
                      primary
                      sm
                      className="py-[13px] px-[25px]"
                      onClick={() => alert('we are working on it')}
                    >
                      Rent Now
                    </Button>
                  </div>
                </div>
              </div>
            )}
            {slug === 'settings' && (
              <div>
                <h1 className="font-bold text-xl py-2 border-b-2 dark:border-zinc-700 mb-5">
                  Settings
                </h1>
              </div>
            )}
            {slug === 'report-problem' && (
              <div>
                <h1 className="font-bold text-xl py-2 border-b-2 dark:border-zinc-700 mb-5">
                  Report Problem
                </h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account
