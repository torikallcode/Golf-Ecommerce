import React from 'react'

export const TextTitle = ({ text, classname }) => {
  return (
    <h2 className={`${classname} font-bold font-utama`}>{text}</h2>
  )
}
