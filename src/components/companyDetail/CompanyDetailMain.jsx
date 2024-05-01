import React from 'react'
import CompanyLocation from './companyDetailCompo/CompanyLocation'
import CompanyInformation from './companyDetailCompo/CompanyInformation'
import CompanyDetailInfo from './companyDetailCompo/CompanyDetailInfo'
import JobAt from './companyDetailCompo/JobAt'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

const CompanyDetailMain = () => {
  return (
    <div className=' bg-gray-100 md:px-32 px-5 md:py-5 '>
       
      <div className='md:py-8'>
      <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink href="/" className="text-lg">Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbLink className="text-lg ">Commissioner Office,Saran Division,Chapra</BreadcrumbLink>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
  </div>
    <div className=' md:flex-row  md:gap-5 w-full  flex flex-col '>
       
        
       
      <div className='flex flex-col md:gap-5 gap-5 md:w-[70%] w-full h-fit'>
        <div className='bg-white rounded-2xl p-5 shadow-md'>
          <CompanyDetailInfo/>
        </div>
        <div className='bg-white rounded-2xl p-5 shadow-md'>
        <JobAt/>
        </div>
        
      </div>

      <div className='flex flex-col md:gap-5 gap-5 pt-5 md:pt-0 md:w-[30%]'>
      <div className='bg-white rounded-2xl p-5  w-full h-fit shadow-md'>
       <CompanyInformation/>
      </div>
      <div className='bg-white rounded-2xl p-5  w-full h-fit shadow-md'>
       <CompanyLocation/>
      </div>
      </div>
    </div>
    </div>
  )
}

export default CompanyDetailMain
