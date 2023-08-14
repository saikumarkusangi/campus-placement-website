import React, { useEffect } from 'react'
import UpcomingCard from './UpcomingCard'
import { useDispatch } from 'react-redux';
import { getAllCompanies } from '../redux/actions';

function Upcoming() {
 

  return (
    <div className=' bg-white md:w-[30%] py-4 md:ml-2  rounded-md px-3'>
      <h1 className='text-2xl font-roboto font-semibold text-black border-b-[#706d6d90] border-b-[1px] pb-4'>Upcoming</h1>
      <div className='py-3'>
         <p className='text-xl text-black font-roboto'>Today</p>
         <UpcomingCard  title="Accenture Physical Drive" date="11-08-2003" image="https://1000logos.net/wp-content/uploads/2021/04/Accenture-logo.png"/>
         
      </div>
    </div>
  )
}

export default Upcoming
