import { useTheme } from 'next-themes'
import { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'

interface GridCardProps {
  className?: string
  image?: StaticImageData
  title?: string
  subtitle?: string
  url: string
}

export function GridCard({
  title,
  subtitle,
  image,
  url,
  className,
}: GridCardProps) {
  const { theme } = useTheme()

  return (
    <div
      className={`w-full h-[200px] border dark:border-zinc-800 group rounded ${className}`}
      style={{
        backgroundImage: `url(${image?.src})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top',
        backgroundBlendMode: 'darken',
        backgroundColor:
          theme === 'dark' ? 'rgba(0,0,0,0.6)' : 'rgba(0,0,0,0.4)',
      }}
    >
      <div className="flex items-end h-full relative">
        <div className="absolute bg-black w-full h-[85px] md:h-[50px] z-0 [@supports(backdrop-filter:blur(0))]:bg-black/30" />
        <div className="w-full z-10 p-2">
          <Link href={url}>
            <h1 className="text-2xl font-bold text-zinc-100">{title}</h1>
            <p className="text-[12px] md:w-5/6 text-zinc-200">
              {subtitle?.slice(0, 92) + '...'}
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}
