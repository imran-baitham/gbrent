import { classNames } from '@/utils'
import { Menu, Transition } from '@headlessui/react'
import Link from 'next/link'
import React, { Fragment } from 'react'
import { Icon, ReactIcon, TAppIcons } from '../../index'

interface TypeProps {
  name: string
  href: string
  icon: TAppIcons
}

const Signup: TypeProps[] = [
  { name: 'Comming Soon', href: '/', icon: 'BsPersonFill' },
]

export function Category() {
  return (
    <>
      <Menu as="div" className="relative">
        <div>
          <Menu.Button className="flex items-center justify-center bg-yellow-600 py-[7px] px-3 mr-2">
            <ReactIcon icon="HiMenuAlt2" className="w-6 h-6 mr-2 text-white" />
            <h1 className="font-bold text-white">CATEGORIES</h1>
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
          <Menu.Items className="absolute -right-100 z-10 mt-2 w-[420px] rounded-md bg-white dark:bg-zinc-900 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {Signup.map((item, index) => (
              <Menu.Item key={index}>
                {({ active }) => (
                  <Link
                    href={item.href}
                    className={classNames(
                      active ? 'bg-gray-100 dark:bg-zinc-800' : '',
                      'px-4 py-[10px] text-sm text-gray-700 dark:text-gray-200 flex items-center',
                    )}
                  >
                    {/* <ReactIcon icon={item.icon} className={'w-4 h-4'} />
                    <h1 className="font-[430] pl-2">{item.name}</h1> */}
                    <h1 className="text-xl">😍</h1>
                    <h1 className="font-bold text-lg pl-2">{item.name}</h1>
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
