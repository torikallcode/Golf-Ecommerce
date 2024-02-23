import React from 'react'
import { MyTitle } from '../Elements/Text/MyTitle'
import { MyParagraf } from '../Elements/Text/MyParagraf'

export const SelectFiture = ({ classname }) => {
  return (
    <div className={`flex justify-between items-center w-full relative ${classname}`}>
      <MyTitle classname="text-3xl font-semibold" Text='Featured'></MyTitle>
      <MyParagraf classname="text-3xl font-semibold" Text='•••'></MyParagraf>
    </div>
  )
}
