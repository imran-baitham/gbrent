import { Card } from '@/components/Reusable/Card/Card'
import React, { useEffect, useState } from 'react'
import { MOCKPRODUCTS } from '@/mock'
import { useRouter } from 'next/router'

function Index() {
  const router = useRouter()
  const [searchValue, setSearchValue] = useState<string>()
  const [filter] = useState(MOCKPRODUCTS)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const items = JSON.parse(sessionStorage.getItem('search') as string)
    if (items) {
      setSearchValue(items)
    } else {
      setSearchValue('Error')
    }
  })

  return (
    <div>
      <div className="container_main py-10">
        <div className="pb-5">
          <h1 className="font-bold text-4xl">
            Search Results {searchValue !== 'Error' ? 'Found' : 'Not Found'}
          </h1>
          <h1 className="font-[420] uppercase">
            HOMESEARCH RESULTS FOR {searchValue}
          </h1>
        </div>
        <hr className="border-2 border-yellow-500 mb-5" />
        <div className="grid grid-cols-5 gap-3">
          {filter
            .filter((name) =>
              name.productname
                .toLowerCase()
                .includes(searchValue?.toLowerCase() as string),
            )
            .map((item, index) => {
              return (
                <Card
                  key={index}
                  productIMG={item.productIMG}
                  productname={item.productname}
                  productprice={item.productprice}
                  category={item.category}
                  availability={item.availability}
                  location={item.location}
                  onClick={() => router.push(item.slug)}
                />
              )
            })}
        </div>
      </div>
    </div>
  )
}

export default Index
