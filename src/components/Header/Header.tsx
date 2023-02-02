import Link from 'next/link'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { ReactIcon, Icon, Badge, Profile, Button, Category } from '../index'
import { classNames } from '@/utils'
import { Navigation, MOCKPRODUCTS } from '@/mock'
import { Search } from '../TextField/Search'
import { useRouter } from 'next/router'

const variants = {
  open: { opacity: 1, x: 0 },
  close: { opacity: 1, y: '-150rem' },
}

export function Header() {
  let [isScrolled, setIsScrolled] = useState<boolean>(false)
  const [search, setSearch] = useState<boolean>(false)
  const [login, setLogin] = useState<boolean>(false)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    let userLogin = localStorage.getItem('user')
    if (userLogin) {
      setLogin(true)
    } else {
      setLogin(false)
    }
  })

  // ===================================
  const { theme, setTheme } = useTheme()
  const router = useRouter()

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

  // =========={ search }=============
  const handleEnter = (data: string) => {
    sessionStorage.setItem('search', JSON.stringify(data) as string)
    router.push('/search-results')
    setSearch(false)
  }

  // =========={ Popular Searches }=============
  const handleClick = (event: any) => {
    sessionStorage.setItem('search', JSON.stringify(event) as string)
    router.push('/search-results')
    setSearch(false)
  }
  // =========={ Rent } =============

  const handleRent = () => {
    if (login) {
      router.push('/account/myuplaods')
    } else {
      router.push('/account/login')
    }
  }

  return (
    <>
      <header
        className={classNames(
          '',
          isScrolled
            ? 'fixed top-0 left-0 right-0 z-20 shadow-lg backdrop-blur dark:[@supports(backdrop-filter:blur(0))]:bg-zinc-900/90 [@supports(backdrop-filter:blur(0))]:bg-white/90'
            : 'shadow-sm',
        )}
      >
        <div className="container_main w-full h-auto flex justify-between items-center p-3 md:p-4">
          <Link href={'/'}>
            <div className="flex leading-0">
              <sup className="text-[10px] translate-y-1 dark:text-yellow-500 text-yellow-700">
                GB
              </sup>
              <h1 className="font-bold md:text-2xl text-lg">RantWare</h1>
            </div>
          </Link>
          <div className="hidden md:block">
            <h1 className="text-sm">GBrent across gilgit baltistan</h1>
          </div>
          <div className="flex items-center">
            <Icon
              icon={theme === 'light' ? 'RiMoonFill' : 'RiSunFill'}
              onPress={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            />
            <Icon icon={'RiSearch2Fill'} onPress={() => setSearch(true)} />
            <Profile />
            <Icon icon={'HiMenuAlt2'} clsx={'block md:hidden'} />
          </div>
        </div>
      </header>
      {/* Navigation List */}
      <div className="bg-gray-100 dark:bg-zinc-800">
        <div className="container_main hidden lg:flex w-full justify-between items-center p-1">
          <div className="flex items-center">
            <Category />
            <div>
              {Navigation.map((link, index) => {
                return (
                  <Link
                    href={link.url}
                    key={index}
                    className={'mx-2 xl:mx-3 font-[450] text-md capitalize'}
                  >
                    {link.name}
                  </Link>
                )
              })}
            </div>
          </div>
          <div>
            <Button
              sm
              onClick={() => handleRent()}
              className={'font-[900] text-[15px] border border-zinc-400'}
            >
              Rent Out
            </Button>
          </div>
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
              <Search onEnter={handleEnter} />
            </div>
            <h1 className="font-[420] text-md md:text-xl text-yellow-500 dark:text-yellow-600 capitalize">
              Popular Searches
            </h1>
            <div className="flex flex-wrap mt-4">
              {MOCKPRODUCTS.slice(0, 15).map((item, index) => {
                return (
                  <Badge
                    size="lg"
                    title={item.productname}
                    key={index}
                    onClick={() => handleClick(item.productname)}
                  />
                )
              })}
            </div>
            <Icon
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
