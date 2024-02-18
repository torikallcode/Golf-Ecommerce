import React from 'react'

export const InputLogin = ({ type, placeholder, className }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`py-[14px] font-utama sm:text-lg lg:text-sm border-b border-slate-400 bg-transparent outline-none ${className}`}
    />
  )
}
