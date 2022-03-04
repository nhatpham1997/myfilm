import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

export default function MainLayout() {
  return (
    <div className='flex flex-col xl:flex-row bg-black'>
        <div className='sm:hid max-w-[288px]'><Header/></div>
        <div className='w-full bg-red-400 xl:ml-[288px] md:ml-[4rem]'><Outlet/></div>
    </div>

  )
}
