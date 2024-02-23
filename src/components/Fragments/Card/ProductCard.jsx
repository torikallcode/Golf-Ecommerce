import React from 'react'
import { Image } from '../../Elements/Gambar/Image'
import { Button } from '../../Elements/Button/Button'

export const ProductCard = ({ title, price, classname, image, rating }) => {
  return (
    <div className={`${classname} flex flex-col w-52 gap-y-2 bg-sky-500 aspect-[3/4]`}>
      <Image src={image} classname="aspect-[8/9] object-cover bg-center size-full"></Image>
      <Image classname="w-24" src={rating}></Image>
      <h1 className='font-utama font-medium'>{title}</h1>
      <h2 className='text-xl font-utama'>{price}</h2>
    </div>
  )
}
