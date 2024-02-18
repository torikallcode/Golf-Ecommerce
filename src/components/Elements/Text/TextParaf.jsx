import React from 'react'
import { Link } from 'react-router-dom'

export const TextParaf = ({ Ptext, Ctext, to }) => {
  return (
    <p className="font-normal font-utama text-slate-500 sm:text-lg lg:text-sm">
      {Ptext}
      <Link to={to}>
        <span className="text-teal-600 font-medium cursor-pointer">
          {Ctext}
        </span>
      </Link>
    </p>
  )
}
