import { Navigation } from '@/mock'
import Image from 'next/image'
import logo from '../../../public/assets/hotalware-logo.png'
import Link from 'next/link'
import { Icon } from '../Icon/Icon'
import { useTheme } from 'next-themes'
import { GenrIcon } from '../GenerIcon/GenerIcon'

export function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <>
      <div className="container_main w-full h-auto border-b-2 border-black flex justify-between items-center p-4">
        <Image src={logo} alt={'e2ehomeware'} width={200} height={50} />
        <div>
          <h1>E2E - HotalWare</h1>
        </div>
        <div>asdf</div>
      </div>
      <div className="container_main w-full h-[60px] flex justify-between items-center bg-gray-100 border border-red-700 p-5">
        <div className="hidden md:block">
          {Navigation.map((link, index) => {
            return (
              <Link
                href={link.url}
                key={index}
                className={'mx-2 font-bold text-lg capitalize'}
              >
                {link.name}
              </Link>
            )
          })}
        </div>
        <div className="translate-x-[0.9rem]">
          <div className="flex">
            <GenrIcon
              icon={theme === 'light' ? 'RiMoonFill' : 'RiSunFill'}
              onPress={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            />
            <GenrIcon icon="RiShareForwardLine" />
          </div>
        </div>
      </div>
    </>
  )
}
