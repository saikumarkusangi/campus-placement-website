import React from 'react'
import UpcomingCard from './UpcomingCard'

function Upcoming() {
  return (
    <div className=' bg-white md:w-[30%] py-4 md:ml-2  rounded-md px-3'>
      <h1 className='text-2xl font-roboto font-semibold text-black border-b-[#706d6d90] border-b-[1px] pb-4'>Upcoming</h1>
      <div className='py-3'>
         <p className='text-xl text-black font-roboto'>Today</p>
         <UpcomingCard  title="Accenture Physical Drive" date="11-08-2003" image="https://1000logos.net/wp-content/uploads/2021/04/Accenture-logo.png"/>
         <UpcomingCard  title="TCS Presentation" image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/2560px-Tata_Consultancy_Services_Logo.svg.png" date="14-08-2003" />
         <UpcomingCard title="Oracle" image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/2560px-Oracle_logo.svg.png" date="16-08-2023"/>
      </div>
    </div>
  )
}

export default Upcoming
