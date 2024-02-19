import React from 'react'

export const MyTitle = ({ Text = "...", className }) => {
  return (
    <h1 className={`font-utama ${className}`}>{Text}</h1>
  )
}
