import React from 'react'
import { TextTitle } from '../Elements/Text/TextTitle'
import { TextParaf } from '../Elements/Text/TextParaf'

export const TextSignin = ({ text, Ptext, Ctext }) => {
  return (
    <div className="flex flex-col mb-8">
      <TextTitle text={text}></TextTitle>
      <TextParaf Ptext={Ptext} Ctext={Ctext} ></TextParaf>
    </div>
  )
}
