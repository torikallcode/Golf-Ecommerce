import React from 'react'
import { CarouselDy } from '../../Fragments/Carousel/CarouselDy'
import { CarouselFooter } from '../CarouselFooter'

export const CarouselFeatured = ({ products }) => {
  return (
    <div className="carousel gap-x-5 max-w-screen">
      {products.map((item) => (
        <div key={item.id}>
          <CarouselDy image={item.Image} rating={item.rating} title={item.title} price={item.price}></CarouselDy>
        </div>
      ))}
    </div>
  )
}
