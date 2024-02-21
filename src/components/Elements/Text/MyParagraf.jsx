import React from 'react'

export const MyParagraf = ({ classname, Text = "..." }) => {
  return (
    <p className={` ${classname}`}>{Text}</p>
  )
}
