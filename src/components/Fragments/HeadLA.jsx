import React from 'react'
import { MyTitle } from '../Elements/Text/MyTitle'
import { MyParagraf } from '../Elements/Text/MyParagraf'

export const HeadLA = ({ classname, }) => {
  return (
    <div className={`flex justify-between items-end w-full relative ${classname}`}>
      <MyTitle classname="text-4xl max-w-10 lg:max-w-72 font-semibold" Text='Latest Articles'></MyTitle>
      <MyParagraf classname="text-base font-semibold pb-2 border-b border-black" Text='View More'></MyParagraf>
    </div>
  )
}
