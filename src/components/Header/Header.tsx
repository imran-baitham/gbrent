import { HomeWareItems, Navigation } from '@/mock'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { GenrIcon } from '../GenerIcon/GenerIcon'
import { useEffect, useState } from 'react'
import { classNames } from '@/utils'
import { motion } from 'framer-motion'
import { Badge } from '../Generic/Badge'
import { ReactIcon } from '../ReactIcon/ReactIcon'
import { Profile } from '../Generic/Profile'

const variants = {
  open: { opacity: 1, x: 0 },
  close: { opacity: 1, y: '-150rem' },
}

export function Header() {
  const { theme, setTheme } = useTheme()
  let [isScrolled, setIsScrolled] = useState<boolean>(false)
  const [search, setSearch] = useState<boolean>(false)

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 190)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll, {})
    }
  }, [])

  return (
    <>
      <header
        className={classNames(
          'transition-all',
          isScrolled
            ? 'fixed top-0 left-0 right-0 z-20 shadow-lg backdrop-blur dark:[@supports(backdrop-filter:blur(0))]:bg-zinc-900/90 [@supports(backdrop-filter:blur(0))]:bg-white/90'
            : 'shadow-sm',
        )}
      >
        <div className="container_main w-full h-auto flex justify-between items-center p-3 md:p-4">
          <Link href={'/'}>
            <div className="flex leading-0">
              <sup className="text-[10px] translate-y-1 text-yellow-500">
                e2e
              </sup>
              <h1 className="font-bold md:text-2xl">HotelWare</h1>
            </div>
          </Link>
          <div className="hidden md:block">
            <h1 className="text-sm">Free delivery across Pakistan</h1>
          </div>
          <div className="flex items-center">
            <GenrIcon
              icon={theme === 'light' ? 'RiMoonFill' : 'RiSunFill'}
              onPress={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            />
            <GenrIcon icon={'RiSearch2Fill'} onPress={() => setSearch(true)} />
            <Profile />
            <GenrIcon icon={'HiShoppingCart'} />
          </div>
        </div>
      </header>
      <div className="hidden lg:flex w-full justify-center items-center p-3 bg-gray-100 dark:bg-zinc-800">
        <div className="">
          {Navigation.map((link, index) => {
            return (
              <Link
                href={link.url}
                key={index}
                className={'mx-3 font-[450] text-md capitalize'}
              >
                {link.name}
              </Link>
            )
          })}
        </div>
      </div>
      <motion.div
        animate={search ? 'open' : 'close'}
        transition={{ duration: 0.4 }}
        variants={variants}
        className={classNames(
          search ? 'block' : '-translate-y-[50rem]',
          'overflow-y-auto h-screen w-full z-20 fixed left-0 top-0',
        )}
        onClick={() => setSearch(false)}
      >
        <div
          className="w-full h-auto dark:bg-zinc-900 bg-gray-50 shadow"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="container_main py-10">
            <div className="group">
              <ReactIcon
                icon="RiSearch2Fill"
                className="absolute top-[70px] md:top-[55px] w-6 h-6 md:w-8 md:h-8 ml-2 text-zinc-400"
              />
              <input
                type="search"
                className="mt-5 md:mt-0 w-full outline-none text-xl md:text-4xl bg-transparent border-b-2 border-gray-300 dark:border-zinc-700 pl-10 md:pl-14 py-2 md:py-3 mb-7"
                placeholder="Search our catalog"
              />
            </div>
            <h1 className="font-[420] text-md md:text-xl text-yellow-500 dark:text-yellow-600 capitalize">
              Popular Searches
            </h1>
            <div className="flex flex-wrap mt-4">
              {HomeWareItems.slice(0, 15).map((item, index) => {
                return (
                  <Badge
                    size="lg"
                    title={item.name}
                    url={item.url}
                    key={index}
                  />
                )
              })}
            </div>
            <GenrIcon
              icon={'VscClose'}
              onPress={() => setSearch(false)}
              clsx={'absolute top-2 right-2 md:top-5 md:right-5'}
            />
          </div>
        </div>
      </motion.div>
    </>
  )
}
