'use client'
import React, { useRef } from 'react'
import { MdOutlineHome } from "react-icons/md";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import Link  from 'next/link'

const ContentArea = () => {

    // const text: any = useRef()
    // // text.innerHTML = text.textContent.replace(/\S/g,"<small>$&</small>")
    
    // // const ele: any = text.querySelectorAll('small')
    // for(var i=1;i<text.length;i++){
    //     text[i].style.transform="rotate("+i*16.5+"deg)";
    // }
  return (
    <div className="w-full md:ml-[430px] md:mr-[56px]">
        <div className="flex justify-between items-center mt-8 md:mt-12 mx-3" id='home'>
            <div className="flex justify-center items-center rounded-3xl border-[0.3px] border-gray-600 p-1 px-5 h-10 text-slate-300 uppercase text-xs">
                <span className="flex items-center"><MdOutlineHome className="text-xl mr-3" /></span>
                <span className="flex items-center" >Introduction</span>
            </div>
            <div className="fixed z-30  md:static top-4 right-4 p-3">
                <span className="flex items-center justify-center bg-main-bg text-xl border-[0.3px] w-12 h-12 border-gray-400 rounded-full text-slate-100 font-normal"><HiOutlineMenuAlt4 /></span>
            </div>
        </div>
        <div className="text-4xl p-2 md:p-0 md:text-6xl mt-10 md:mt-16 text-slate-100 font-medium tracking-wide leading-[50px] md:leading-[80px]">
            Hi, I'm <span className='text-teal-600'>Emmanuel</span>, a Data Analyst & Web Developer
        </div>
        <div className="mt-6 p-2 md:p-0 md:pr-5">
            <p className="text-gray-400 leading-6 tracking-wide md:pr-10">
                A detail oriented Data Analyst & Web developer with strong passion for deriving valuable insights from data, while creating beautiful Web Apps for visualization and communicating analysis results.
            </p>
            <p className="text-gray-400 leading-6 tracking-wide mt-4">
                Your web development needs are met here... I'll turn your design into a sturning Web App.
            </p>
        </div>
        <div className="mt-10 md:mt-14 p-2 md:p-0">
            <p className="text-7xl text-teal-600">
                10+
            </p>
            <small className="text-xs text-gray-400 uppercase mt-3">
                Years of experience
            </small>
        </div>
    </div>
  )
}

export default ContentArea