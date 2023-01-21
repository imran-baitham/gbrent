import { motion } from 'framer-motion'
import { ReactIcon, TAppIcons } from '../ReactIcon/ReactIcon'

interface IconProps {
  onPress?: () => void
  icon: TAppIcons
  clsx?: string
  design?: string
}

export function Icon({ icon, onPress, clsx }: IconProps) {
  return (
    <motion.button
      whileHover={{ scale: 1 }}
      whileTap={{ scale: 0.9 }}
      className={`w-[42px] h-[42px] xl:w-[56px] xl:h-[56px] flex justify-center items-center ml-1 border border-gray-300 dark:border-slate-700 p-[8px] hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full ${clsx}`}
      onClick={onPress}
    >
      <ReactIcon icon={icon} className="h-7 w-7" />
    </motion.button>
  )
}
