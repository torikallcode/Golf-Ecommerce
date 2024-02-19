import React from 'react'
import { FooterHome } from '../Fragments/FooterHome'

export const Home = () => {
  return (
    <section className='w-full relative h-[100dvh] bg-primary-0 grid grid-cols-1 lg:grid-cols-2 pb-10 px-8 gap-3 place-content-between lg:content-center'>
      <div className=' lg: flex justify-center'>
        <img src="./public/img/home2png.png" alt="" className='w-80 sm:w-96 md:w-[26rem] xl:w-[40rem]' />
      </div>
      <FooterHome className="z-10 sm:max-w-lg mx-auto lg:order-first flex justify-center items-center"></FooterHome>
    </section>
  )
}
