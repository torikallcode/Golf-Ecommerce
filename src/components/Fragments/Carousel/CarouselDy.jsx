import React from 'react'
import { Image } from '../../Elements/Gambar/Image'

export const CarouselDy = ({ image }) => {
  return (
    <div className="carousel-item flex flex-col bg-sky-500 max-w-[231px]">
      <Image src={image} alt="Burger" classname="mb-3 object-cover w-full h-full" />
      <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi eum rerum illo culpa voluptate velit voluptas, dolore debitis vel recusandae?</h1>
    </div>
  )
}
