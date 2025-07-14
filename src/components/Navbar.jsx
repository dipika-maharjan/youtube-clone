import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";
import logo from '../assets/youtube.png';
import profile from '../assets/profile.webp';

const Navbar = () => {
  return (
    <div className='flex justify-between px-6 py-2 fixed top-0 w-[100%] bg-white'>
      <div className='flex space-x-4 items-center'>
        <RxHamburgerMenu className="text-xl cursor-pointer" />
        <img src={logo} alt='youtube logo' className=' w-24 cursor-pointer'/>
      </div>
      <div className='flex w-[40%] h-15 py-2 items-center'>
        <div className='w-[100%] px-3 py-2 border rounded-l-full'><input type="text" placeholder='Search'/></div>
        <button className='px-4 py-2 bg-gray-100 rounded-r-full'>
          <CiSearch size={"24px"}/>
        </button>
        <IoMdMic size={"40px"} className='py-2 ml-3 border rounded-full bg-gray-100 cursor-pointer hover:bg-gray-200 duration-200' />
      </div>
      <div className='flex space-x-6 items-center hover:cursor-pointer'>
        <RiVideoAddLine className='text-2xl'/>
        <AiOutlineBell className='text-2xl'/>
        <img src={profile} alt="profile img" className='h-8 w-8'/>
      </div>
    </div>
  )
}

export default Navbar
