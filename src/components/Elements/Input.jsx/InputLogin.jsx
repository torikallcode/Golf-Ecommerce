import React from 'react'

export const InputLogin = ({ type, placeholder, className, value, onChange }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`py-[14px] font-utama sm:text-lg lg:text-sm border-b border-slate-400 bg-transparent outline-none ${className}`}
    />
  )
}
