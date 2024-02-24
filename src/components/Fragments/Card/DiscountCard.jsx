import React from 'react'

export const DiscountCard = () => {
  return (
    <div className='flex flex-col gap-y-4 mb-6 sm:gap-y-7'>
      <h2 className='text-teal-500 text-base font-utama sm:text-xl'>Limited edition</h2>
      <h1 className='text-slate-100 text-4xl font-utama sm:text-5xl'>Hurry up! 30% OFF</h1>
      <p className='text-red-100 text-sm font-utama sm:text-lg'>Find clubs that are right for your game</p>
    </div>
  )
}
