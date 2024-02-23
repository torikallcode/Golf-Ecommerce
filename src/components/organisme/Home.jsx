import React from 'react'
import { FooterHome } from '../Fragments/FooterHome'

export const Home = ({ classname }) => {
  return (
    <section className={`min-w-full min-h-screen overflow-hidden bg-primary-0 grid grid-cols-1 lg:grid-cols-2 pb-10 px-8 gap-3 place-content-between lg:content-center ${classname}`}>
      <div className=' lg: flex justify-center'>
        <img src="/img/home2.png" alt="" className='w-80 sm:w-96 md:w-[26rem] xl:w-[30rem]' />
      </div>
      <FooterHome className="z-10 sm:max-w-lg mx-auto lg:order-first flex justify-center items-center"></FooterHome>
    </section>
  )
}
