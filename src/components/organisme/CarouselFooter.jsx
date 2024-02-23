import React from 'react'
import { Image } from '../Elements/Gambar/Image'

export const CarouselFooter = ({ rating, title, price }) => {
  return (
    <div className="carousel rounded-box">
      <div className="carousel-item w-1/2 flex flex-col">
        <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="w-full" />
        <h1>hallo</h1>
      </div>
      <div className="carousel-item w-1/2">
        <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" className="w-full" />
      </div>
      <div className="carousel-item w-1/2">
        <img src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" className="w-full" />
      </div>
      <div className="carousel-item w-1/2">
        <img src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" className="w-full" />
      </div>
      <div className="carousel-item w-1/2">
        <img src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" className="w-full" />
      </div>
      <div className="carousel-item w-1/2">
        <img src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" className="w-full" />
      </div>
      <div className="carousel-item w-1/2">
        <img src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" className="w-full" />
      </div>
    </div>
  )
}
