import React from 'react'
import Image from "next/image";
import { FaTwitter, FaLinkedin, FaInstagram, FaGithub  } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";

const ProfileInfo = () => {
  return (
    <div className="md:fixed h-screen md:h-[662px] w-full md:w-[350px] border-[0.3px] rounded-[36px] md:ml-6 mt-2.5 mb-6 p-7 border-gray-600">
        <div className="flex justify-between mt-3">
          <div className="flex justify-start">
            <span className="text-2xl text-slate-100 font-semibold">Emtech</span>
            <span className="flex items-center justify-center p-1 text-sm ml-1 border-[0.3px] w-4 h-4 border-gray-400 rounded-full text-slate-100 font-normal">e</span>
          </div>
          <div className="flex justify-end">
            <span className="text-md text-slate-100 font-normal w-15 ">Data Analyst <br/> & Web Developer</span>
          </div>
        </div>
        <div className="flex justify-center">
        <Image
          src="/images/avatar.jpg"
          alt="User Image"
          className="md:w-auto mt-6 rounded-3xl"
          width={180}
          height={180}
          priority
        /> 
        </div>
        <div className="mt-4 p-4 md:p-6 space-y-1">
          <p className="flex justify-center text-slate-100 text-xl">
            aguekeomae@gmail.com
          </p>
          <p className="flex items-center justify-center text-slate-100 text-xl">
            <SlLocationPin className="mr-3" /> Ogun, NG
          </p>
        </div>
        <div className="flex gap-3 justify-center mt-10">
            <span className="flex items-center justify-center bg-main-bg text-xl border-[0.3px] w-12 h-12 border-gray-400 rounded-full text-slate-100 font-normal"><FaTwitter /></span>
            <span className="flex items-center justify-center bg-main-bg text-xl border-[0.3px] w-12 h-12 border-gray-400 rounded-full text-slate-100 font-normal"><FaLinkedin /></span>
            <span className="flex items-center justify-center bg-main-bg text-xl border-[0.3px] w-12 h-12 border-gray-400 rounded-full text-slate-100 font-normal"><FaInstagram /></span>
            <span className="flex items-center justify-center bg-main-bg text-xl border-[0.3px] w-12 h-12 border-gray-400 rounded-full text-slate-100 font-normal"><FaGithub /></span>
        </div>
        <div className="flex justify-center items-center rounded-3xl border-[0.3px] border-teal-600 p-1 px-5 h-14 text-slate-300 uppercase text-xs mt-6 bg-teal-600">
            <span className="flex items-center">Open to Work</span>
        </div>
    </div>
  )
}

export default ProfileInfo