import { classNames } from '@/utils'
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { ReactIcon, Button } from '../../index'

const variants = {
  open: { opacity: 1, x: 0 },
  close: { opacity: 0.7, x: '100rem' },
}

export function Notify() {
  const [notfi, setNotfi] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setNotfi(true)
    }, 2000)
  }, [notfi])

  return (
    <motion.div
      animate={notfi ? 'open' : 'close'}
      transition={{ duration: 0.8 }}
      variants={variants}
      className={classNames(
        notfi ? 'block' : 'translate-x-[50rem]',
        'fixed bottom-2 ml-3 right-3 md:bottom-5 md:right-5 md:w-[300px] h-auto bg-gray-100 dark:bg-zinc-800 py-4 px-4 z-10',
      )}
    >
      <div className="pb-2 flex justify-between">
        <h1>
          <b className="font-bold">gbrent.xyz</b>
          <span className="font-[420]"> is Coming Soon</span>
        </h1>
        <button
          className="absolute top-2 right-2"
          onClick={() => setNotfi(false)}
        >
          <ReactIcon icon="VscClose" className="w-5 h-5" />
        </button>
      </div>
      <p className="text-sm pb-3">
        {"We're"} working hard to finish the development of this site. Sign up
        below to receive updates and to be notified when we launch!
      </p>
      <Button
        primary
        full
        className="uppercase"
        onClick={() =>
          window.open(
            'https://api.whatsapp.com/send/?phone=923118923911&text&app_absent=0',
            '_blank',
          )
        }
      >
        Notify me!
      </Button>
      {/* <h1 className="font-bold">Buy Now</h1>
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
        </div> */}
    </motion.div>
  )
}
