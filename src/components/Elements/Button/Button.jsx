import React from 'react'

export const Button = ({ onClick, Text, className }) => {
  return (
    <button onClick={onClick} className={`bg-primary-0 text-white p-2 rounded-md font-normal ${className}`}>{Text}</button>
  )
}
