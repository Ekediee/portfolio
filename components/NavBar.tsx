import React from 'react'
import { MdOutlineHome } from "react-icons/md";
import Link  from 'next/link'

const NavBar = () => {
  return (
    <div className="fixed hidden md:block right-[80px] top-44 h-96 w-12 bg-main-bg border-[0.3px] border-gray-600 rounded-3xl py-5 z-[1000px]">
        <Link href='#home'>
            <span className="flex justify-center"><MdOutlineHome className='text-2xl text-slate-300' /></span>
        </Link>
    </div>
  )
}

export default NavBar