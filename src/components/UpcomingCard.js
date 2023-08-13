import React from 'react'

function UpcomingCard({title,image,date,time}) {
  return (
    <div className='bg-green-200 border-l-green-700 border-l-[8px] rounded-md px-2 py-2  mt-4'>
      <div className='flex justify-between items-center'>
        <img className='h-8 object-contain w-20' src={image} alt='img'/>
        <p className='text-xs'>{date}</p>
      </div>
      <p className='font-medium font-roboto text-[14px] mt-2'>{title}</p>
      <p className='text-xs pt-1'>10:00 am - 01:00 am</p>
    </div>
  )
}

export default UpcomingCard
