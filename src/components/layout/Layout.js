import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import SideNav from './SideNav'
import Footer from './Footer'
import Upcoming from '../Upcoming'

function Layout() {
  return (
    <div className='overflow-hidden  flex bg-body-bg'>
    <SideNav/>
    <div className='w-full '>
      <Header/>
      <div className='flex'>
        <Outlet/>
       
      </div>
    </div>
   
    </div>
  )
}

export default Layout
