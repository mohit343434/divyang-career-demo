import React from 'react'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { GrFormView } from "react-icons/gr";
import { FaRegFilePdf } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { FaRegSquarePlus } from "react-icons/fa6";
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { IoLocationOutline } from "react-icons/io5";
import { LuDot } from "react-icons/lu";
const Info = () => {
  return (
    <div className='md:p-7'>
      <div className='flex gap-4 text-lg'>
        <div >
          <Avatar >
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div >
          <h1 className='text-3xl'>Pradeep kadam</h1>
          <div className='md:flex-row flex flex-col md:gap-3 '>
            <span className='text-orange-500'>Locomotor Disability</span>
            <LuDot  className='mt-1 text-gray-400 text-xl hidden md:block'/>
            <div className='flex'>
            <IoLocationOutline className='mt-1 ' /> 
            <span> Mumbai</span>
            </div>
           
          </div>
          
        </div>
        
      </div>
      <div className=' md:flex-row gap-3 md:py-5 flex flex-col '>
            <div className='flex gap-3'>
            <Button className=" w-32 h-10 rounded-full bg-white text-orange-500 border border-orange-500 hover:text-white hover:bg-orange-500 "><FaRegFilePdf />&nbsp;Save to PDF</Button>
            <Button className=" w-32 h-10 rounded-full bg-white text-orange-500 border border-orange-500 hover:text-white hover:bg-orange-500 "><GrFormView  className='text-xl'/>&nbsp;View CV</Button>
            </div>
            <div className='flex gap-3 pb-2'>
            <Button className=" w-32 h-10 rounded-full bg-white text-orange-500 border border-orange-500 hover:text-white hover:bg-orange-500 "><FaRegSquarePlus />&nbsp;Invite</Button>
            <Button className=" w-32 h-10 rounded-full bg-orange-500 text-white border border-orange-500 hover:bg-orange-600 "><FaRegMessage /> &nbsp;Message</Button>
            </div>
          </div>
      <Separator/>
      <h1 className='text-2xl py-4'>About me</h1>
      <p className=' text-justify leading-7 text-base text-gray-500'>5+ years of professional experience, including 1+ year of DevOps expertise. Increased application deployment efficiency by 30% by Dockerizing an application and utilizing a multi-stage image for production on Docker Hub. Streamlined application deployments on Kubernetes clusters by 33% through the creation and implementation of customized Helm charts. Improved code quality by 15% by integrating Jenkins for CI/CD pipelines and SonarQube for static code analysis.</p>
            
    </div>
  )
}

export default Info
