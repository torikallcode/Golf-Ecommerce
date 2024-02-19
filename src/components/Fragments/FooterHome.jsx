import React from 'react'
import { MyTitle } from '../Elements/Text/MyTitle'
import { MyParagraf } from '../Elements/Text/MyParagraf'
import { Button } from '../Elements/Button/Button'

export const FooterHome = ({ className }) => {
  return (<div className={`${className} flex flex-col justify-center items-center lg:items-start gap-y-4 lg:max-w-sm xl:max-w-lg`}>
    <MyTitle Text='More than just a game. It’s a lifestyle.' className="text-white text-5xl sm:text-7xl lg:text-5xl xl:text-7xl lg:text-start text-center leading-[1.15] font-medium drop-shadow-lg"></MyTitle>
    <MyParagraf Text="Whether you’re just starting out, have played your whole life or you're a Tour pro, your swing is like a fingerprint." className="text-white text-center lg:text-start sm:text-lg"></MyParagraf>
    <Button className="bg-teal-500 text-primary-0 font-semibold w-[210px] p-4 sm:w-[250px] lg:w-[210px]" Text="Shopping now"></Button>
  </div>

  )
}
