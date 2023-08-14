import React from 'react'
import {FiLink} from 'react-icons/fi';
import {SiGooglesheets} from 'react-icons/si';


function UpcomingCard({title,image,date,time}) {
  return (
    <div className='bg-purple-200 border-l-purple-700 border-l-[8px] rounded-md px-2 py-2  mt-4 gap-2 flex flex-col'>
      <div className='flex justify-between items-center'>
        <img className=' object-contain w-20' src={image} alt='img'/>
        <p className=''>{date}</p>
      </div>
      <p className='font-medium text-lg md:text-xl '>{title}</p>
      <p className=' pt-1'>10:00 am - 01:00 am</p>
        <p>CSE,EEE,ECE,CSM,CSD,IT,</p>
        <p>Active Backlogs : 0</p>
      <span className='flex gap-2 items-center'>
       <SiGooglesheets size={24} className='text-green-600'/>
       <p>Eligible Students List</p>
      </span>
      <span className='flex gap-3'>
      <FiLink className='' size={20}/>
      <p>Registration Link</p>
      </span>
    </div>
  )
}

export default UpcomingCard
