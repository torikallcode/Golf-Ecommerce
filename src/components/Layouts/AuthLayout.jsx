import React from 'react'
import { Home } from '../organisme/Home'
import { CarouselFeatured } from '../organisme/CarouselFeatured'
import { SelectFiture } from '../Fragments/SelectFiture'
import { Categories } from '../organisme/Categories'
import { Navbar } from '../organisme/Navbar/Navbar'
import { Discount } from '../organisme/Discount'

export const AuthLayout = () => {

  const products = [
    { id: 1, Image: "/img/Product1.png", price: "$24.99", title: "Greg Norman - Men's Shark Logo Golf Polo Shirt", rating: "https://cdn.builder.io/api/v1/image/assets/TEMP/ac91ee13fa60a089929cfb3c84d88c4c7e44993d53054e7d2e3c0f8ca3250815" },
    { id: 2, Image: "/img/Product1.png", price: "$24.99", title: "G/FORE - Mens Left Glove Snow 2023", rating: "https://cdn.builder.io/api/v1/image/assets/TEMP/ac91ee13fa60a089929cfb3c84d88c4c7e44993d53054e7d2e3c0f8ca3250815" },
    { id: 3, Image: "/img/Product1.png", price: "$24.99", title: "Utility Rover-R Double Strap Bag All Black - 2023", rating: "https://cdn.builder.io/api/v1/image/assets/TEMP/ac91ee13fa60a089929cfb3c84d88c4c7e44993d53054e7d2e3c0f8ca3250815" },
    { id: 4, Image: "/img/Product1.png", price: "$24.99", title: "Air Jordan 1 Low G Black/Black/Iron Grey - SS23", rating: "https://cdn.builder.io/api/v1/image/assets/TEMP/ac91ee13fa60a089929cfb3c84d88c4c7e44993d53054e7d2e3c0f8ca3250815" },
    { id: 5, Image: "/img/Product1.png", price: "$24.99", title: "Greg Norman - Men's Shark Logo Golf Polo Shirt", rating: "https://cdn.builder.io/api/v1/image/assets/TEMP/ac91ee13fa60a089929cfb3c84d88c4c7e44993d53054e7d2e3c0f8ca3250815" },
    { id: 6, Image: "/img/Product1.png", price: "$24.99", title: "Greg Norman - Men's Shark Logo Golf Polo Shirt", rating: "https://cdn.builder.io/api/v1/image/assets/TEMP/ac91ee13fa60a089929cfb3c84d88c4c7e44993d53054e7d2e3c0f8ca3250815" },
    { id: 7, Image: "/img/Product1.png", price: "$24.99", title: "Greg Norman - Men's Shark Logo Golf Polo Shirt", rating: "https://cdn.builder.io/api/v1/image/assets/TEMP/ac91ee13fa60a089929cfb3c84d88c4c7e44993d53054e7d2e3c0f8ca3250815" },
  ]

  const kategori = [
    { id: 1, image: "/img/Product1.png", Text: "Golf Clubs" },
    { id: 2, image: "/img/Product1.png", Text: "Golf Clubs" },
    { id: 3, image: "/img/Product1.png", Text: "Golf Clubs" },
    { id: 4, image: "/img/Product1.png", Text: "Golf Clubs" },
    { id: 5, image: "/img/Product1.png", Text: "Golf Clubs" },
    { id: 6, image: "/img/Product1.png", Text: "Golf Clubs" },
  ]

  return (
    <div className='flex flex-col'>
      <Navbar></Navbar>
      <Home />
      <div className='px-8 pt-8 xl:px-20 flex flex-col xl:max-w-[130rem] mx-auto'>
        <SelectFiture classname="mb-8"></SelectFiture>
        <CarouselFeatured products={products} classname="mb-[72px] lg:mb-32"></CarouselFeatured>
        <Categories kategori={kategori}></Categories>
      </div>
      <Discount></Discount>
    </div>
  )
}
