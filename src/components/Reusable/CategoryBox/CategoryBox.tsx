import Link from 'next/link'
import React from 'react'
import { ReactIcon } from '../../index'

interface CardBoxProps {
  title: string
  url: string
  icon: any
}
export function CategoryBox({ title, url, icon }: CardBoxProps) {
  return (
    <Link href={url}>
      <div className="bg-gray-50 dark:bg-zinc-900 border dark:border-zinc-700 px-2 py-4 text-center flex items-center justify-center group dark:hover:text-zinc-200">
        <div className="pt-3 pb-1">
          <ReactIcon icon={icon} className="m-auto w-9 h-9" />
          <h1 className="font-bold text-sm pt-5 group-hover:underline underline-offset-8">
            {title}
          </h1>
        </div>
      </div>
    </Link>
  )
}
