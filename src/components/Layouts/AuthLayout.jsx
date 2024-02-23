import React from 'react'
import { Home } from '../organisme/Home'
import { CarouselFeatured } from '../organisme/CarouselFeatured'
import { SelectFiture } from '../Fragments/SelectFiture'
import { CarouselFooter } from '../organisme/CarouselFooter'
import { Featured } from '../organisme/Featured'

export const AuthLayout = () => {

  const TheProducts = [
    {
      id: 1,
      nama: "tes1",
      price: "$32.00"
    },
    {
      id: 2,
      nama: "tes2",
      price: "$57.00"
    },
    {
      id: 3,
      nama: "tes3",
      price: "$57.00"
    },
    {
      id: 4,
      nama: "tes4",
      price: "$57.00"
    },
    {
      id: 5,
      nama: "tes5",
      price: "$57.00"
    },
  ]

  const products = [
    { id: 1, Image: "/img/Product1.png", price: "$24.99", title: "Greg Norman - Men's Shark Logo Golf Polo Shirt", rating: "https://cdn.builder.io/api/v1/image/assets/TEMP/ac91ee13fa60a089929cfb3c84d88c4c7e44993d53054e7d2e3c0f8ca3250815" },
    { id: 2, Image: "/img/Product1.png", price: "$24.99", title: "G/FORE - Mens Left Glove Snow 2023", rating: "https://cdn.builder.io/api/v1/image/assets/TEMP/ac91ee13fa60a089929cfb3c84d88c4c7e44993d53054e7d2e3c0f8ca3250815" },
    { id: 3, Image: "/img/Product1.png", price: "$24.99", title: "Utility Rover-R Double Strap Bag All Black - 2023", rating: "https://cdn.builder.io/api/v1/image/assets/TEMP/ac91ee13fa60a089929cfb3c84d88c4c7e44993d53054e7d2e3c0f8ca3250815" },
    { id: 4, Image: "/img/Product1.png", price: "$24.99", title: "Air Jordan 1 Low G Black/Black/Iron Grey - SS23", rating: "https://cdn.builder.io/api/v1/image/assets/TEMP/ac91ee13fa60a089929cfb3c84d88c4c7e44993d53054e7d2e3c0f8ca3250815" },
    { id: 5, Image: "/img/Product1.png", price: "$24.99", title: "Greg Norman - Men's Shark Logo Golf Polo Shirt", rating: "https://cdn.builder.io/api/v1/image/assets/TEMP/ac91ee13fa60a089929cfb3c84d88c4c7e44993d53054e7d2e3c0f8ca3250815" },
    { id: 6, Image: "/img/Product1.png", price: "$24.99", title: "Greg Norman - Men's Shark Logo Golf Polo Shirt", rating: "https://cdn.builder.io/api/v1/image/assets/TEMP/ac91ee13fa60a089929cfb3c84d88c4c7e44993d53054e7d2e3c0f8ca3250815" },
    { id: 7, Image: "/img/Product1.png", price: "$24.99", title: "Greg Norman - Men's Shark Logo Golf Polo Shirt", rating: "https://cdn.builder.io/api/v1/image/assets/TEMP/ac91ee13fa60a089929cfb3c84d88c4c7e44993d53054e7d2e3c0f8ca3250815" },
  ]

  return (
    <div className='flex flex-col'>
      <Home />
      <div className='px-8 pt-8'>
        <Featured items={products}></Featured>
      </div>
    </div>
  )
}
