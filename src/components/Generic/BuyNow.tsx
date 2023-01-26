import { classNames } from '@/utils'
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

const variants = {
  open: { opacity: 1, x: 0 },
  close: { opacity: 0.7, x: '100rem' },
}

export function BuyNow() {
  const [notfi, setNotfi] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setNotfi(true)
    }, 2000)
  }, [notfi])

  return (
    <>
      <motion.div
        animate={notfi ? 'open' : 'close'}
        transition={{ duration: 0.8 }}
        variants={variants}
        className={classNames(
          notfi ? 'block' : 'translate-x-[50rem]',
          'fixed bottom-5 right-5 w-[300px] bg-gray-100 dark:bg-zinc-800 py-4 px-4 flex items-center justify-between',
        )}
        onClick={() => setNotfi(false)}
      >
        <h1 className="font-bold">Buy Now</h1>
        <div onClick={(e) => e.stopPropagation()}>
          <div
            className="font-bold cursor-pointer text-yellow-600"
            onClick={() =>
              window.open(
                'https://api.whatsapp.com/send/?phone=923554529168&text&app_absent=0',
                '_blank',
              )
            }
          >
            Contact Me
          </div>
        </div>
      </motion.div>
    </>
  )
}
