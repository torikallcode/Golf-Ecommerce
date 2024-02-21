import React from 'react'
import { Home } from '../organisme/Home'
import { SelectFiture } from '../Fragments/SelectFiture'
import ProductShowcase from '../organisme/ProductFeatured'

export const AuthLayout = () => {
  return (
    <div className='flex flex-col'>
      <Home />
      <ProductShowcase></ProductShowcase>
    </div>
  )
}
