import React from 'react'
import Calendar from '../components/ Calendar'
import Upcoming from '../components/Upcoming'


function Home() {
  return (
    <div className='w-full flex flex-col gap-4 md:flex-row md:gap-0 md:flex px-2 pt-1 md:ml-[20%] mt-[27%] md:mt-[6%]'>
        <Calendar/>
        <Upcoming/>
    </div>
  )
}

export default Home
