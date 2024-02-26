import React from 'react'
import { CollectionCard } from '../../Fragments/Card/CollectionCard'

export const ShopCollection = ({ classname }) => {
  return (
    <div className={`${classname} w-full grid grid-cols-1 lg:grid-cols-2 grid-rows-3 lg:grid-rows-2 gap-y-4 sm:gap-y-6 lg:gap-x-6`}>
      <div className='w-full h-full aspect-[5/3] row-span-2'>
        <CollectionCard backgroundImage="/img/collection1.svg" title="Juniors Set" description="Collection"></CollectionCard>
      </div>
      <div className='w-full h-full aspect-[5/3]'>
        <CollectionCard backgroundImage="/img/collection2.svg" title="Men's Set" description="Collection"></CollectionCard>
      </div>
      <div className='w-full h-full aspect-[5/3]'>
        <CollectionCard backgroundImage="/img/collection3.svg" title="Women's Set" description="Collection"></CollectionCard>
      </div>
    </div>
  )
}
