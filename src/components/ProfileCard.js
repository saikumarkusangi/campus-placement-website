import React from 'react'
import {BsPersonCircle} from 'react-icons/bs';

function ProfileCard() {
  return (
    <div className='w-full bg-blue-300 mt-5 rounded-md px-2 py-5'>
      <div className='flex items-center gap-2'>
       <BsPersonCircle size={24}/>
        <div>
        <p>Sai kumar kusangi</p>
        <div className='flex gap-2'>
          <p>EEE</p>
            |
          <p>20211a0241</p>
        </div>
        </div>
      </div>
      


    </div>
  )
}

export default ProfileCard
