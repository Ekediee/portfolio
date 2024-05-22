import React from 'react'
import { MdOutlineHome } from "react-icons/md";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

const ContentArea = () => {
  return (
    <div className="w-full md:ml-[430px] md:mr-[80px]">
        <div className="flex justify-between items-center md:mt-12 mx-3">
            <div className="flex justify-center items-center rounded-3xl border-[0.3px] border-gray-600 p-1 px-5 h-10 text-slate-300 uppercase text-xs">
                <span className="flex items-center"><MdOutlineHome className="text-xl mr-3" /></span>
                <span className="flex items-center">Introduction</span>
            </div>
            <div className="fixed z-30  md:static top-4 right-4 p-3">
                <span className="flex items-center justify-center bg-main-bg text-xl border-[0.3px] w-12 h-12 border-gray-400 rounded-full text-slate-100 font-normal"><HiOutlineMenuAlt4 /></span>
            </div>
        </div>
        <div className="text-4xl p-2 md:p-0 md:text-6xl mt-10 md:mt-16 text-slate-100 font-medium tracking-wide leading-[50px] md:leading-[80px]">
            Hi, I'm <span className='text-teal-600'>Emmanuel</span>, a Data Analyst & Web Developer
        </div>
    </div>
  )
}

export default ContentArea