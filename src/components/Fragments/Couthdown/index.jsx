import React from 'react'

export const Couthdown = ({ classname }) => {
  return (
    <div className={`flex gap-x-4 ${classname}`}>
      <h1 className='bg-slate-100 text-primary-0 p-2 flex font-medium items-center justify-center text-3xl sm:text-4xl aspect-[1/1] font-utama min-w-16 sm:min-w-20 text-center rounded-sm'>01</h1>
      <h1 className='bg-slate-100 text-primary-0 p-2 flex font-medium items-center justify-center text-3xl sm:text-4xl aspect-[1/1] font-utama min-w-16 sm:min-w-20 text-center rounded-sm'>02</h1>
      <h1 className='bg-slate-100 text-primary-0 p-2 flex font-medium items-center justify-center text-3xl sm:text-4xl aspect-[1/1] font-utama min-w-16 sm:min-w-20 text-center rounded-sm'>03</h1>
      <h1 className='bg-slate-100 text-primary-0 p-2 flex font-medium items-center justify-center text-3xl sm:text-4xl aspect-[1/1] font-utama min-w-16 sm:min-w-20 text-center rounded-sm'>04</h1>
    </div>
  )
}
