import React from 'react'

export const MyTitle = ({ Text = "...", classname }) => {
  return (
    <h1 className={`font-utama ${classname}`}>{Text}</h1>
  )
}
