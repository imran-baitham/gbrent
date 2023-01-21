import Image from 'next/image'
import { Button } from '../Button/Button'
import { TextField } from '../TextField/TextField'
import HotelImage from '../../../public/assets/hotelware-graphic1.svg'

export function Budget() {
  return (
    <div className="grid md:grid-cols-2">
      <form action="##" className="w-full">
        <h1 className="font-bold text-2xl pb-4 text-yellow-600 dark:text-yellow-500">Budget Sell or Buy</h1>
        <div className="md:flex">
          <TextField
            label="What are you buying?"
            inputType="text"
            placeholder="Enter name of hotelware"
            full
          />
          <TextField
            label="How much do you have?"
            inputType="number"
            placeholder="50,000"
            full
          />
        </div>
        <div className="md:flex">
          <TextField
            label="What are you paying?"
            inputType="text"
            placeholder="total price"
            full
          />
          <TextField
            label="Product category"
            inputType="text"
            placeholder="Select product category"
            full
          />
        </div>
        <Button
          primary
          xl
          className="rounded-[2px] md:rounded-sm mt-3 font-bold"
          type="submit"
        >
          Find your HotelWare
        </Button>
      </form>
      <div className="w-full bg-gray-100 dark:bg-zinc-800 my-6 md:my-0 flex items-center justify-center">
        {/* <h1>budget calculator sell or buy</h1> */}
        <Image
          src={HotelImage}
          alt={'hotelware image'}
          width={400}
          height={400}
        />
      </div>
    </div>
  )
}
