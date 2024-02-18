import React from 'react'

export const ButtonLogin = ({ onClick, className, text = "..." }) => {
  return (
    <button onClick={onClick} className={`bg-primary-0 p-3 sm:p-4 text-white w-full rounded-lg font-utama sm:text-lg lg:text-sm lg:p-3 ${className}`}>
      {text}
    </button>
  )
}
