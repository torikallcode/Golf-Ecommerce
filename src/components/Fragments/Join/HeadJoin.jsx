import React from 'react'

export const HeadJoin = ({ classname }) => {
  return (
    <div className={`${classname} mx-auto mb-8`}>
      <h1 className='font-utama text-2xl font-medium text-slate-100 text-center sm:text-3xl xl:text-4xl'>Join Our Newsletter</h1>
      <p className='font-utama text-sm text-slate-100 text-center sm:text-base xl:text-lg'>Sign up for deals, new products and promotions</p>
    </div>
  )
}
