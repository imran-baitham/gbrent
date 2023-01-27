import { classNames } from '@/utils'
import { Menu, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import { Icon } from '../index'

const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

const userLogin = [
  { name: 'Sign In', href: '#' },
  { name: 'Sign Up', href: '#' },
]

export function Profile() {
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
            {userLogin.map((item) => (
              <Menu.Item key={item.name}>
                {({ active }) => (
                  <a
                    href={item.href}
                    className={classNames(
                      active ? 'bg-gray-100 dark:bg-zinc-800' : '',
                      'block px-4 py-2 text-sm text-gray-700 dark:text-gray-200',
                    )}
                  >
                    <h1 className="font-[430]">{item.name}</h1>
                  </a>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  )
}
