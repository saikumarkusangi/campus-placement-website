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
 
  return (
    <div>
    <div className='sticky w-full items-center flex justify-between  bg-white  z-50 top-0  py-5 px-5 shadow-md'>
      <img className='w-[24%] md:w-[12%]' src={Logo} alt='BVRIT'/>
      <h1 className='flex text-xl md:text-3xl font-roboto font-semibold'>Fortnight Calender</h1>
      <VscBell className='border-2 rounded-full px-2 py-2 h-10 w-10 '/>
    </div>


  </div>
  )
}

export default Header
