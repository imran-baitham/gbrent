import { classNames } from '@/utils'
import { Menu, Transition } from '@headlessui/react'
import Link from 'next/link'
import React, { Fragment, useEffect, useState } from 'react'
import { Icon, ReactIcon, TAppIcons } from '../../index'

interface TypeProps {
  name: string
  href: string
  icon: TAppIcons
}

const Signup: TypeProps[] = [
  { name: 'Profile', href: '#', icon: 'BsPersonFill' },
  { name: 'Shops', href: '#', icon: 'HiShoppingCart' },
  { name: 'Settings', href: '#', icon: 'IoMdSettings' },
  { name: 'Report Problem', href: '#', icon: 'AiFillFlag' },
  { name: 'Sign out', href: '#', icon: 'RiLogoutBoxLine' },
]

const Login: TypeProps[] = [
  { name: 'Sign In', href: '/account/login', icon: 'RiLoginBoxFill' },
  { name: 'Sign Up', href: '/account/signup', icon: 'GoSignIn' },
]

export function Profile() {
  const [userLogin, setUserLogin] = useState<any>(null)
  const [login, setTodos] = useState<boolean>(false)

  useEffect(() => {
    setUserLogin(localStorage.getItem('user'))
    if (userLogin) {
      setTodos(true)
    }
  }, [userLogin])

  const handleClick = (index: number) => {
    if (index === 4) {
      localStorage.removeItem('user')
      setTodos(false)
      console.log(index)
    }
  }

  return (
    <>
      <Menu as="div" className="relative">
        <div>
          <Menu.Button className="">
            <Icon icon={'BsPersonFill'} />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute -right-10 md:right-0 z-10 mt-4 md:mt-5 w-[220px] origin-top-right rounded-md bg-white dark:bg-zinc-900 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {login
              ? Signup.map((item, index) => (
                  <Menu.Item key={index}>
                    {({ active }) => (
                      <Link
                        href={item.href}
                        className={classNames(
                          index === 4
                            ? 'border-t-[2px] mt-4 dark:border-t-zinc-800'
                            : '',
                          active ? 'bg-gray-100 dark:bg-zinc-800' : '',
                          'px-4 py-[10px] text-sm text-gray-700 dark:text-gray-200 flex items-center',
                        )}
                        onClick={() => handleClick(index)}
                      >
                        <ReactIcon icon={item.icon} className={'w-4 h-4'} />
                        <h1 className="font-[430] pl-2">{item.name}</h1>
                      </Link>
                    )}
                  </Menu.Item>
                ))
              : Login.map((item, index) => (
                  <Menu.Item key={index}>
                    {({ active }) => (
                      <Link
                        href={item.href}
                        className={classNames(
                          index === 4
                            ? 'border-t-[2px] mt-4 dark:border-t-zinc-800'
                            : '',
                          active ? 'bg-gray-100 dark:bg-zinc-800' : '',
                          'px-4 py-[10px] text-sm text-gray-700 dark:text-gray-200 flex items-center',
                        )}
                        onClick={() => handleClick(index)}
                      >
                        <ReactIcon icon={item.icon} className={'w-4 h-4'} />
                        <h1 className="font-[430] pl-2">{item.name}</h1>
                      </Link>
                    )}
                  </Menu.Item>
                ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  )
}
