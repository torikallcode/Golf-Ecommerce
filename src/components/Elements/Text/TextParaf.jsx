import React from 'react'

export const TextParaf = ({ Ptext, Ctext }) => {
  return (
    <p className="font-normal font-utama text-slate-500 sm:text-lg lg:text-sm">
      {Ptext}
      <span className="text-teal-600 font-medium cursor-pointer">
        {Ctext}
      </span>
    </p>
  )
}
