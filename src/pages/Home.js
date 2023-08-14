import React, { useState } from 'react'
import Calendar from '../components/ Calendar'
import Upcoming from '../components/Upcoming'


function Home() {
  const [currentDate,setCurrentDate] = useState(new Date());
  return (
    <div className='w-full flex flex-col gap-4 md:flex-row md:gap-0 md:flex px-2 pt-1 mt-2'>
       <div className='hidden md:flex'> <Calendar value={currentDate} onChange={setCurrentDate} /></div>
        <Upcoming/>
       <div className='md:hidden flex'> <Calendar value={currentDate} onChange={setCurrentDate}/></div>
    </div>
  )
}

export default Home
