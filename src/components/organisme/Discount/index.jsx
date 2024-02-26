import React from 'react'
import { DiscountCard } from '../../Fragments/Card/DiscountCard'
import { Couthdown } from '../../Fragments/Couthdown'
import { Image } from '../../Elements/Gambar/Image'
import { Link } from 'react-router-dom'

export const Discount = ({ classname }) => {
  return (
    <div className={`w-full bg-primary-0 grid grid-cols-1 lg:grid-cols-2 content-center ${classname}`}>
      <div className='px-8 py-7 flex flex-col justify-center xl:px-20 lg:aspect-[4/3]'>
        <DiscountCard></DiscountCard>
        <h2 className='text-slate-100 mb-3 sm:mb-5 font-utama sm:text-lg'>Offer expires in:</h2>
        <Couthdown classname="mb-11"></Couthdown>
        <Link>
          <button className="btn bg-teal-500 hover:bg-teal-600 outline-none border-none px-11 sm:px-16 font-utama">Shop now</button>
        </Link>
      </div>
      <div className='lg:aspect-[4/3] lg:order-first'>
        <Image src="/img/golf4.jpg" classname="w-full h-full object-cover bg-center"></Image>
      </div>
    </div>
  )
}
