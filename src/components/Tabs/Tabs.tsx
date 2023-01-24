import { useState } from 'react'
import { Tab } from '@headlessui/react'
import { classNames } from '@/utils'

export function Tabs() {
  let [categories] = useState({
    Description: [
      {
        id: 1,
        title: `Introduction  ===  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the on leap into electronic typesetting, remaining essentially unchanged. It wasn’t popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, andei more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum to make a type specimen book.`,
        date: '5h ago',
        commentCount: 5,
        shareCount: 2,
      },
    ],
    Reviews: [
      {
        id: 1,
        title: 'Is tech making coffee better or worse?',
        date: 'Jan 7',
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: 'The most innovative things happening in coffee',
        date: 'Mar 19',
        commentCount: 24,
        shareCount: 12,
      },
      {
        id: 2,
        title: 'The most innovative things happening in coffee',
        date: 'Mar 19',
        commentCount: 24,
        shareCount: 12,
      },
      {
        id: 2,
        title: 'The most innovative things happening in coffee',
        date: 'Mar 19',
        commentCount: 24,
        shareCount: 12,
      },
      {
        id: 2,
        title: 'The most innovative things happening in coffee',
        date: 'Mar 19',
        commentCount: 24,
        shareCount: 12,
      },
      {
        id: 2,
        title: 'The most innovative things happening in coffee',
        date: 'Mar 19',
        commentCount: 24,
        shareCount: 12,
      },
    ],
    'Seller Info': [
      {
        id: 1,
        title: 'Ask Me Anything: 10 answers to your questions about coffee',
        date: '2d ago',
        commentCount: 9,
        shareCount: 5,
      },
    ],
  })

  return (
    <div className="">
      <Tab.Group>
        <Tab.List className="flex bg-gray-100 dark:bg-zinc-700">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'mx-2 md:mx-5 py-4',
                  'focus:outline-none text-sm md:text-md',
                  selected ? 'dark:text-yellow-500 text-yellow-600' : '',
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel key={idx} className={classNames('py-3', '')}>
              <ul>
                {posts.map((post) => (
                  <li key={post.id} className="relative py-3">
                    <h3 className="">{post.title}</h3>

                    <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                      <li>{post.date}</li>
                      <li>&middot;</li>
                      <li>{post.commentCount} comments</li>
                      <li>&middot;</li>
                      <li>{post.shareCount} shares</li>
                    </ul>

                    <a
                      href="#"
                      className={classNames('absolute inset-0', '')}
                    />
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
