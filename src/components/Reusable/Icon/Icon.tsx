import { motion } from 'framer-motion'
import React from 'react'
import { ReactIcon, TAppIcons } from '../../index'

interface IconProps {
  onPress?: (event: any) => void
  icon: TAppIcons
  clsx?: string
}

export function Icon({ icon, onPress, clsx }: IconProps) {
  return (
    <motion.button
      whileHover={{ scale: 1 }}
      whileTap={{ scale: 0.9 }}
      className={`flex justify-center items-center border border-gray-300 dark:border-slate-700 p-[8px] rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 ml-1 ${clsx}`}
      onClick={onPress}
    >
      <ReactIcon icon={icon} className="h-5 w-5 md:h-6 md:w-6" />
    </motion.button>
  )
}
