/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { ReactIcon } from '../ReactIcon/ReactIcon'

const navigation = {
  solutions: [
    { name: 'Analytics', href: '#' },
    { name: 'Commerce', href: '#' },
    { name: 'Insights', href: '#' },
    { name: 'Marketing', href: '#' },
  ],
  support: [
    { name: 'Documentation', href: '#' },
    { name: 'API Status', href: '#' },
    { name: 'Pricing', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Jobs', href: '/contact' },
    { name: 'Press', href: '#' },
  ],
  legal: [
    { name: 'Privacy', href: '#' },
    { name: 'Claim', href: '#' },
    { name: 'Terms', href: '#' },
  ],
}
let LinkMedia = [
  { name: 'RiFacebookBoxFill', href: '#' },
  { name: 'RiTwitterFill', href: '#' },
  { name: 'RiInstagramFill', href: '#' },
  { name: 'RiLinkedinBoxFill', href: '#' },
  { name: 'RiYoutubeFill', href: '#' },
]

export function Footer() {
  const d = new Date()
  let year = d.getFullYear()

  return (
    <footer>
      <div className="bg-yellow-200 dark:bg-yellow-700 mt-10">
        <div className="container_main md:h-[180px] flex justify-center">
          <div className="md:px-[30px] md:flex h-full">
            <img
              src="https://rentable.pk/assets/graphics/feature2.webp"
              alt=""
              className="h-[180px]"
            />
            <div className="h-full flex items-center pr-10 md:border-r-[1px] border-yellow-900">
              <div>
                <h1 className="font-bold lg:text-4xl md:text-2xl text-xl">
                  TRY THE GBRENT APP
                </h1>
                <p className="font-[420] lg:text-xl text-sm">
                  Turn Your Liabilities into Paying Assets
                </p>
              </div>
            </div>
            <div className="h-full flex items-center md:pl-5 pt-5">
              <div>
                <h1 className="font-bold md:text-xl text-md">
                  TRY THE RENTABLE APP
                </h1>
                <div className="flex items-center mt-2 pb-8 md:pb-0">
                  <img
                    src="https://rentable.pk/assets/graphics/appstore.webp"
                    alt=""
                    className="w-[100px]"
                  />
                  <img
                    src="https://rentable.pk/assets/graphics/playstore.webp"
                    alt=""
                    className="w-[100px] ml-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-[1px] dark:border-zinc-700">
        <div className="mx-auto max-w-7xl py-12 lg:pt-16 container_main">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="grid grid-cols-2 gap-8 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-lg font-semibold dark:text-white">
                    Solutions
                  </h3>
                  <ul role="list" className="mt-4 space-y-1">
                    {navigation.solutions.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-base text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-gray-200"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-lg font-semibold dark:text-white">
                    Support
                  </h3>
                  <ul role="list" className="mt-4 space-y-1">
                    {navigation.support.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-base text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-gray-200"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-lg font-semibold dark:text-white">
                    Company
                  </h3>
                  <ul role="list" className="mt-4 space-y-1">
                    {navigation.company.map((item) => (
                      <li
                        key={item.name}
                        className="text-base text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-gray-200"
                      >
                        <Link href={item.href}>{item.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-lg font-semibold dark:text-white">
                    Legal
                  </h3>
                  <ul role="list" className="mt-4 space-y-1">
                    {navigation.legal.map((item) => (
                      <li key={item.name}>
                        <a
                          key={item.name}
                          href={item.href}
                          className="text-base text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-gray-200"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-8 xl:mt-0">
              <h3 className="text-lg font-semibold dark:text-white">
                Website Name
              </h3>
              <p className="mt-4 w-auto text-base text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-gray-200 md:w-[45%] xl:w-auto">
                The latest news, articles, and resources, Follow Us. Choose your
                book to reading, we offer you the books With Delivery. Follow Us
                on Social Media.
              </p>
              <div className="justify-left mt-7 flex lg:items-end">
                {LinkMedia.map((x: any) => {
                  return (
                    <a
                      key={x.name}
                      href=""
                      className="border-1 mr-2 border border-black p-[6px] dark:border-white dark:text-white"
                    >
                      <ReactIcon icon={x.name} />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-zinc-700 pt-8 md:flex md:items-center md:justify-between">
            <p className="mt-8 text-gray-500 dark:text-gray-400 md:mt-0">
              &copy; {year} BookCler. All rigths reserved.
            </p>
            <div className="flex items-center">
              <a
                href=""
                className="text-sm text-gray-500 dark:text-gray-400 md:mt-0"
              >
                Terms & Agreements
              </a>
              <a
                href=""
                className="ml-4 text-sm text-gray-500 dark:text-gray-400 md:mt-0"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
