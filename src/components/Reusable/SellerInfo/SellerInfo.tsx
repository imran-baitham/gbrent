import { classNames } from '@/utils'
import { useState } from 'react'

export const SellerInfo = () => {
  let [categories] = useState({
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
    <div>
      <h1 className="font-bold text-xl pb-2"> SellerInfo </h1>
      {Object.values(categories).map((posts, idx) => (
        <div key={idx} className={classNames('', '')}>
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

                <a href="#" className={classNames('absolute inset-0', '')} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
