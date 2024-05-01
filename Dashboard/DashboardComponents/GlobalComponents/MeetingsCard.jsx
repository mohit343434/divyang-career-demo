import React from 'react'
import { MdOutlineCalendarMonth } from "react-icons/md";
import { SiGooglemeet } from "react-icons/si";
import { LuClock } from "react-icons/lu";
import { Link } from 'react-router-dom';
const MeetingsCard = ({ date, expired, phone, email , name, desc, starttime ,endTime }) => {
  return (
    <>
      <div className='w-72 px-2 border flex flex-col gap-5 mt-4 rounded-lg' style={{ background: "#ffffff" }} >
        <div className='flex mt-4 lg:flex-nowrap flex-wrap justify-between'>
          <div className=' flex gap-3'>
            <MdOutlineCalendarMonth className='ml-4 text-gray-500 text-2xl'/> <span>{date }</span>
          </div>
          <div>
            <span className='mr-4 bg-gray-200 text-gray-500 px-5 py-1 rounded-3xl' >{expired}</span>
          </div>
        </div>
        <div>
          <p className='font-medium ml-4 '>{phone} </p>
          <p className='font-medium ml-4 text-gray-500 '>{email}</p>
        </div>
        <div className='w-full  h-28 overflow-hidden'>
          <p className='text-gray-500 ml-4' >Meeting Link :- <Link target="_blank"  rel="noopener noreferrer" to={name} className='text-blue-600'>{name} </Link> </p>
        </div>
        <div className='max-w-28 p-3 h-28 overflow-hidden'>
          <p className='text-gray-500 h-24 overflow-hidden'>{desc}</p>
        </div>
        <div className='flex mt-4 flex-wrap lg:flex-nowrap justify-between mb-5'>
          <div className='flex '>
            <SiGooglemeet className='ml-4 mt-1' /> <span className='text-gray-500 ml-4'>Start :-{starttime}</span>
          </div>
          <div className='flex justify-between'>
            <LuClock className='mt-1' /> <span className='text-gray-500 ml-4 mr-4'> End :-{endTime}</span>
          </div>
        </div>

      </div>
    </>
  )
}

export default MeetingsCard