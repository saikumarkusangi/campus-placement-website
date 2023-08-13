import React, { useState } from 'react'
import {VscBell} from 'react-icons/vsc';
import {TbMessageDots} from 'react-icons/tb';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import Logo from '../../assets/logo.png';
import ProfileCard from '../ProfileCard';
import { HiOutlineDocumentText, HiViewGrid } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { PiVideo } from 'react-icons/pi';
import { IoMdLogOut } from 'react-icons/io';

function Header() {
  const [isOpen,setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen)
  return (
    <div>
    <div className='items-center flex justify-between  bg-white absolute z-50 top-0 w-full  md:ml-[20%] py-5 px-5 shadow-md'>
      <div className='md:hidden flex gap-3 items-center'>
        <AiOutlineMenu size={28} onClick={toggle}/>
        <img className='h-10' src={Logo} alt='logo'/>
      </div>
      <h1 className='hidden md:flex md:text-2xl font-roboto font-semibold'>Hello,Sai kumar kusangi</h1>
      <div className='flex gap-5 md:mr-[20%]'>
        <TbMessageDots className='border-2 rounded-full px-2 py-2' size={42}/>
        <VscBell className='border-2 rounded-full px-2 py-2' size={42}/>
      </div>
    </div>

    <div className={`absolute z-50 w-[70%] md:left-0 ${isOpen ? 'left-0' : '-left-[100%]'} bg-side-bg  md:w-[20%] h-full items-center flex flex-col py-4 px-4 md:fixed duration-500`}>
    
     <span className='border-b-[#ffffff65] border-b-[1px] py-2 flex justify-between items-center'>
       <img className='w-[70%]' src={Logo} alt='BVRIT'/>
       <AiOutlineClose size={28} className='text-white' onClick={toggle}/>
     </span>
     <ProfileCard/>
     <div className='text-xl text-white mt-12 flex flex-col justify-between h-[40%]'>
       <span className='flex gap-2 items-center cursor-pointer  w-[100%]'>
        <HiViewGrid size={28}/>
        <Link to='/' onClick={toggle} className='font-roboto hover:text-green-200'>Dashboard</Link>
       </span>
       <span className='flex gap-2 items-center cursor-pointer w-[100%]'>
       <HiOutlineDocumentText size={28}/>
       <Link to='' className='font-roboto hover:text-green-200'>Documents</Link>
      </span>
      <span className='flex gap-2 items-center cursor-pointer w-[100%]'>
      <PiVideo size={28}/>
      <Link to='/learning' onClick={toggle} className='font-roboto hover:text-green-200'>Learning</Link>
     </span>
     <span className='flex gap-2 items-center cursor-pointer  w-[100%]'>
     <IoMdLogOut size={28}/>
     <Link to='' className='font-roboto hover:text-green-200'>Logout</Link>
    </span>
     </div>
    </div>
  </div>
  )
}

export default Header
