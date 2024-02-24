import React from 'react'
import { Image } from '../../Elements/Gambar/Image'

export const CarouselDy = ({ image, price, rating, title }) => {
  return (<div className='w-[231px] xl:w-[262px]'>
    <div className='w-full'>
      <Image src={image} alt="Burger" classname="mb-3 aspect-[4/4] object-cover w-full" />
    </div>
    <div className='flex flex-col gap-y-2'>
      <Image src={rating} classname="w-24"></Image>
      <h1 className='font-utama font-semibold'>{title}</h1>
      <h2 className='text-base font-bold'>{price}</h2>
    </div>
  </div>
  )
}
