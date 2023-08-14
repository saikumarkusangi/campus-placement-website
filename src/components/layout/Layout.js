import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Upcoming from '../Upcoming'

function Layout() {
  return (
    <div className='bg-body-bg'>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default Layout
