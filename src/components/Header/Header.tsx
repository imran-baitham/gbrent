import { Navigation } from '@/mock'
import Image from 'next/image'
import logo from '../../../public/assets/hotalware-logo.png'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { GenrIcon } from '../GenerIcon/GenerIcon'
import { useEffect, useState } from 'react'
import { classNames } from '@/utils'

export function Header() {
  const { theme, setTheme } = useTheme()
  let [isScrolled, setIsScrolled] = useState<boolean>(false)

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
            ? 'fixed top-0 left-0 right-0 z-20 shadow-lg backdrop-blur dark:[@supports(backdrop-filter:blur(0))]:bg-zinc-800/75 [@supports(backdrop-filter:blur(0))]:bg-white/80'
            : 'shadow-sm',
        )}
      >
        <div className="container_main w-full h-auto flex justify-between items-center p-3">
          {/* <Image src={logo} alt={'e2ehomeware'} width={200} height={50} /> */}
          <div className="flex leading-0">
            <sup className="text-[10px] translate-y-1 text-yellow-500">e2e</sup>
            <h1 className="font-bold md:text-2xl">HotelWare</h1>
          </div>
          <div className="hidden md:block">
            <h1 className="text-sm">Free delivery across Pakistan</h1>
          </div>
          <div className="flex items-center">
            <GenrIcon
              icon={theme === 'light' ? 'RiMoonFill' : 'RiSunFill'}
              onPress={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            />
            <GenrIcon icon={'RiSearch2Fill'} />
            <GenrIcon icon={'BsPersonFill'} />
            <GenrIcon icon={'HiShoppingCart'} />
          </div>
        </div>
      </header>
      <div className="hidden md:flex w-full justify-center items-center p-3 bg-gray-100 dark:bg-zinc-800">
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
    </>
  )
}
