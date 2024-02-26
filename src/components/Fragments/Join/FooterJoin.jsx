import React from 'react'
import SvgIcon from '../../Elements/SvgIcon/SvgIcon'

export const FooterJoin = ({ classname }) => {
  return (
    <div className={`flex justify-between items-center border-b border-slate-100 py-6 ${classname}`} >
      <div className='flex justify-center gap-x-3'>
        <SvgIcon></SvgIcon>
        <h2 className='text-slate-100 font-utama text-base sm:text-lg xl:text-xl'>Email address</h2>
      </div>
      <h2 className='text-slate-100 font-utama text-base sm:text-lg xl:text-xl'>Signup</h2>
    </div >
  )
}
