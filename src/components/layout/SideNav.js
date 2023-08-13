import React, { useState } from 'react'
import Logo from '../../assets/logo.png';
import {HiViewGrid,HiOutlineDocumentText} from 'react-icons/hi';
import {PiVideo} from 'react-icons/pi';
import {IoMdLogOut} from 'react-icons/io';
import ProfileCard from '../ProfileCard';
import { Link } from 'react-router-dom';



function SideNav() {


  return (
    <div className={`absolute z-50 w-[70%] md:left-0  bg-side-bg hidden md:flex md:w-[20%] h-full items-center  flex-col py-4 px-4 md:fixed `}>
     <span className='border-b-[#ffffff65] border-b-[1px] py-2'>
       <img className='w-[90%]' src={Logo} alt='BVRIT'/>
     </span>
     <ProfileCard/>
     <div className='text-xl text-white mt-12 flex flex-col justify-between h-[40%]'>
       <span className='flex gap-2 items-center cursor-pointer  w-[100%]'>
        <HiViewGrid size={28}/>
        <Link to='/' className='font-roboto hover:text-green-200'>Dashboard</Link>
       </span>
       <span className='flex gap-2 items-center cursor-pointer w-[100%]'>
       <HiOutlineDocumentText size={28}/>
       <Link to='' className='font-roboto hover:text-green-200'>Documents</Link>
      </span>
      <span className='flex gap-2 items-center cursor-pointer w-[100%]'>
      <PiVideo size={28}/>
      <Link to='/learning' className='font-roboto hover:text-green-200'>Learning</Link>
     </span>
     <span className='flex gap-2 items-center cursor-pointer  w-[100%]'>
     <IoMdLogOut size={28}/>
     <Link to='' className='font-roboto hover:text-green-200'>Logout</Link>
    </span>
     </div>
    </div>
  )
}

export default SideNav
