import { classNames } from '@/utils'
import { useState } from 'react'

/** A set of shared, optional props for the StickyPanel child
 * components. */
interface StickyPanelProps {
  /** Content tabs with label and content */
  tabs: {
    /** A unique id for the tab */
    id: string | number
    /** The label for the tab */
    name: string
    /** The content to render for the tab, as a render prop component
     * allowing the child component to know if its content is currently
     * visible. */
    content: React.ReactNode
  }[]
}

export function GenericTabs({ tabs }: StickyPanelProps) {
  const [openTab, setOpenTab] = useState<string>('Description')

  return (
    <div>
      <div className="">
        <ul className="flex space-x-2">
          {tabs.map((tab, index) => (
            <li
              key={index}
              onClick={() => setOpenTab(tab.name)}
              className={classNames(
                'w-full md:w-auto inline-block px-4 py-2 text-gray-600 bg-white dark:bg-zinc-800 dark:text-white rounded shadow cursor-pointer text-sm md:text-[16px]',
              )}
            >
              {tab.name}
            </li>
          ))}
        </ul>
        <div className="p-3 mt-4 bg-white dark:bg-zinc-900 border dark:border-zinc-800">
          {tabs.map((tab) => (
            <div
              key={tab.name}
              className={tab.name === openTab ? 'block' : 'hidden'}
            >
              {tab.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
