import React from 'react'
import { CarouselDy } from '../../Fragments/Carousel/CarouselDy'

export const CarouselFeatured = ({ products, classname }) => {
  return (
    <div className={`carousel ${classname}`}>
      <div className="carousel-item gap-x-5 grid grid-cols-7">
        {products.map((item) => (
          <div key={item.id}>
            <CarouselDy image={item.Image} rating={item.rating} title={item.title} price={item.price}></CarouselDy>
          </div>
        ))}
      </div>
    </div>
  )
}
