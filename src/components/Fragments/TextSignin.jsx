import React from 'react'
import { TextTitle } from '../Elements/Text/TextTitle'
import { TextParaf } from '../Elements/Text/TextParaf'

export const TextSignin = () => {
  return (
    <div className="flex flex-col mb-8">
      <TextTitle text="Sign in"></TextTitle>
      <TextParaf Ptext="Don’t have an accout yet? " Ctext="Sign up" ></TextParaf>
    </div>
  )
}
