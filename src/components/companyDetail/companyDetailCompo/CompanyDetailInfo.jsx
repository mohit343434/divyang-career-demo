import React from 'react'
import { GrFormView } from "react-icons/gr";
import { FaRegFilePdf } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { FaRegSquarePlus } from "react-icons/fa6";
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { IoLocationOutline } from "react-icons/io5";
import { LuDot } from "react-icons/lu";
const CompanyDetailInfo = () => {
  return (
    <div className='md:p-7'>
      <div className='text-lg'>
        
        <div >
          <h1 className='text-3xl'>Commissioner Office,Saran Division,Chapra</h1>
          <div className='md:flex-row flex flex-col md:gap-3 '>
            
            <div className='flex'>
            <IoLocationOutline className='mt-1 ' /> 
            <span> Mumbai</span>
            </div>
           
          </div>
          
        </div>
        
      </div>
      <div className=' md:flex-row gap-3 md:py-5 flex flex-col '>
           
            <div className='flex gap-3 pb-2'>
            <Button className=" w-32 h-10 rounded-full bg-white text-orange-500 border border-orange-500 hover:text-white hover:bg-orange-500 "><FaRegSquarePlus />&nbsp;Follow</Button>
            <Button className=" w-32 h-10 rounded-full bg-orange-500 text-white border border-orange-500 hover:bg-orange-600 "><FaRegMessage /> &nbsp;Message</Button>
            </div>
          </div>
      <Separator/>
      <h1 className='text-2xl py-4'>Overview</h1>
      <p className=' text-justify leading-7 text-base text-gray-500'>Government Organization of Bihar</p>
            
    </div>
  )
}

export default CompanyDetailInfo
