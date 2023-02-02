import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useForm, SubmitHandler } from 'react-hook-form'
import Link from 'next/link'
import { Button, ReactIcon } from '@/components'

interface FormData {
  email: string
  password: string
}

const Index = () => {
  const [login, setLogin] = useState<boolean>(true)

  let router = useRouter()
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>()
  // ===============  Fetch user  ==================
  const [user, setUsers] = useState([])
  const getData = () => fetch('/api/users').then((res) => res.json())

  useEffect(() => {
    getData().then((people) => setUsers(people))
  })

  const onSubmit: SubmitHandler<FormData> = (data) => {
    let check = user.filter((user: any) => {
      return user.email === data.email && user.password === data.password
    })[0]
    console.log(check, 'ckeck filter')
    if (check) {
      localStorage.setItem('user', JSON.stringify(user))
      router.push('/')
    } else {
      alert('user not found')
    }
  }

  return (
    <div>
      <div className="flex items-center justify-center mx-auto container_main py-12">
        <div className="w-full bg-gray-50 dark:bg-zinc-900 shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:border-zinc-800">
          <div className="md:p-6 space-y-4 md:space-y-6 sm:p-8">
            <div className="flex justify-center my-14">
              <Link href={'/'}>
                <div className="flex leading-0">
                  <sup className="text-[10px] translate-y-1 dark:text-yellow-500 text-yellow-700">
                    GB
                  </sup>
                  <h1 className="font-bold md:text-2xl text-lg">RantWare</h1>
                </div>
              </Link>
            </div>
            <form
              className="p-4 md:p-6 space-y-4 md:space-y-6 sm:p-8"
              onSubmit={handleSubmit(onSubmit)}
            >
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <div className="space-y-4 md:space-y-6">
                <div>
                  <label
                    htmlFor=""
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    {...register('email', {
                      required: true,
                      minLength: 3,
                      maxLength: 35,
                      pattern: /@/i,
                    })}
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-4 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    placeholder="demo@gmail.com"
                    //placeholder="name@gmail.com"
                  />
                  <div className="block mb-2 text-[13px] text-red-900 dark:text-red-400 pt-1">
                    {errors?.email?.type === 'required' && (
                      <div className="flex items-center">
                        <ReactIcon
                          icon="MdErrorOutline"
                          className="w-4 h-4 mr-1"
                        />
                        <p>Email is required</p>
                      </div>
                    )}
                    {errors?.email?.type === 'pattern' && (
                      <p>Couldn’t find your Google Account</p>
                    )}
                    {errors?.email?.type === 'minLength' && (
                      <p>Email more than 6 characters</p>
                    )}
                    {errors?.email?.type === 'maxLength' && (
                      <p>Email less than 15 characters</p>
                    )}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    {...register('password', {
                      required: true,
                      minLength: 6,
                      maxLength: 15,
                    })}
                    type="password"
                    id="password"
                    //placeholder="••••••••"
                    placeholder="123456"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  focus:ring-primary-600 focus:border-primary-600 block w-full p-4 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  />
                  <div className="block mb-2 text-[13px] text-red-900 dark:text-red-400 pt-1">
                    {errors?.password?.type === 'required' && (
                      <div className="flex items-center">
                        <ReactIcon
                          icon="MdErrorOutline"
                          className="w-4 h-4 mr-1"
                        />
                        <p>Password is required</p>
                      </div>
                    )}
                    {errors?.password?.type === 'minLength' && (
                      <p>Password more than 6 characters</p>
                    )}
                    {errors?.password?.type === 'maxLength' && (
                      <p>Password less than 15 characters</p>
                    )}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        name="remember"
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-transparent dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label className="text-gray-500 dark:text-gray-300">
                        Remember me
                      </label>
                    </div>
                  </div>
                </div>
                <Button type="submit" primary full className="py-[12px]" lg>
                  Sign in
                </Button>
                <div className="text-sm underline text-right flex justify-end font-medium hover:underline dark:text-gray-300 text-gray-500 cursor-pointer">
                  Forgot password?
                </div>
                <p className="py-5 md:py-0 text-sm font-light flex items-center justify-center text-gray-500 dark:text-gray-400">
                  Don’t have an account?
                  <div className="font-bold text-1xl text-[#0047FF] ml-2">
                    <Link href={'/account/signup'}>Sign Up</Link>
                  </div>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
