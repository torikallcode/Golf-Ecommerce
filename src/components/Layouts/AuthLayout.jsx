import React from 'react'
import { Home } from '../organisme/Home'
import { SelectFiture } from '../Fragments/SelectFiture'

export const AuthLayout = () => {
  return (
    <div className='flex flex-col'>
      <Home></Home>
      <SelectFiture></SelectFiture>
    </div>
  )
}
