import React from 'react'
import { Remember } from '../Elements/Text/Remember'
import { Forgetme } from '../Elements/Text/Forgetme'

export const ReFor = () => {
  return (
    <div className="flex justify-between mb-8 items-center">
      <Remember Text="Remember me"></Remember>
      <Forgetme Text="Forgot password?"></Forgetme>
    </div>
  )
}
