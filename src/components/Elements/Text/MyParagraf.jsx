import React from 'react'

export const MyParagraf = ({ className, Text = "..." }) => {
  return (
    <p className={`font-utama text-base font-normal ${className}`}>{Text}</p>
  )
}
