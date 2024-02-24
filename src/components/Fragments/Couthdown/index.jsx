import React from 'react'

export const Couthdown = ({ classname }) => {
  return (
    <div className={`flex gap-x-4 ${classname}`}>
      <h1 className='bg-slate-100 text-primary-0 p-6 aspect-[1/1] font-utama min-w-16 sm:min-w-20 text-center rounded-sm'>1</h1>
      <h1 className='bg-slate-100 text-primary-0 p-6 aspect-[1/1] font-utama min-w-16 sm:min-w-20 text-center rounded-sm'>2</h1>
      <h1 className='bg-slate-100 text-primary-0 p-6 aspect-[1/1] font-utama min-w-16 sm:min-w-20 text-center rounded-sm'>3</h1>
      <h1 className='bg-slate-100 text-primary-0 p-6 aspect-[1/1] font-utama min-w-16 sm:min-w-20 text-center rounded-sm'>4</h1>
    </div>
  )
}
