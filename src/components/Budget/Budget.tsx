import Image from 'next/image'
import { Button } from '../Button/Button'
import { TextField } from '../TextField/TextField'
import HotelImage from '../../../public/assets/hotelware-graphic1.svg'

export function Budget() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <form action="##" className="w-full">
        <div className="flex mb-4">
          <Button
            lg
            className="md:rounded-sm font-bold mr-1 px-8 border dark:border-zinc-600 w-full md:w-auto"
            type="submit"
          >
            Buy ware
          </Button>
          <Button
            lg
            className="md:rounded-sm font-bold px-8 border dark:border-zinc-600 w-full md:w-auto"
            type="submit"
            disabled
          >
            Sell ware
          </Button>
        </div>
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
        <div className='md:mr-2'>
          <Button
            primary
            xl
            className="rounded-none mt-3 font-bold"
            type="submit"
            full
          >
            Find your HotelWare
          </Button>
        </div>
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
