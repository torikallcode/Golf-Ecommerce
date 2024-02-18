import React from 'react'
import { TextTitle } from '../Elements/Text/TextTitle'
import { TextParaf } from '../Elements/Text/TextParaf'

export const TextSignin = ({ text, Ptext, Ctext, to }) => {
  return (
    <div className="flex flex-col mb-8">
      <TextTitle text={text}></TextTitle>
      <TextParaf Ptext={Ptext} to={to} Ctext={Ctext}></TextParaf>
    </div>
  )
}
