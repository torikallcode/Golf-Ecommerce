import React from 'react'
import { MyTitle } from '../Elements/Text/MyTitle'
import { MyParagraf } from '../Elements/Text/MyParagraf'

export const SelectFiture = () => {
  return (
    <div className='flex justify-between items-center p-5 w-full bg-sky-500 relative'>
      <MyTitle classname="text-3xl font-semibold" Text='Featured'></MyTitle>
      <MyParagraf classname="text-5xl font-semibold">...</MyParagraf>
    </div>
  )
}
