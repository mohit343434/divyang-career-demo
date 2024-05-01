import React from 'react'
import Disability from './candidateProfileCompo/Disability'
import Education from './candidateProfileCompo/Education'
import Info from './candidateProfileCompo/Info'
import WorkExperience from './candidateProfileCompo/WorkExperience'
import Information from './candidateProfileCompo/Information'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
const CandidateProfileMain = () => {
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
        <BreadcrumbLink className="text-lg ">Pradeep Kadam</BreadcrumbLink>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
  </div>
    <div className=' md:flex-row  md:gap-5 w-full  flex flex-col '>
       
        
       
      <div className='flex flex-col md:gap-5 gap-5 md:w-[70%] w-full h-fit'>
        <div className='bg-white rounded-2xl p-5 shadow-md'>
          <Info />
        </div>
        <div className='bg-white rounded-2xl p-5 shadow-md'>
          <WorkExperience />
        </div>
        <div className='bg-white rounded-2xl p-5 shadow-md' >
          <Education />
        </div>
       
        <div className='bg-white rounded-2xl p-5 shadow-md'>
          <Disability />
        </div>
      </div>
      <div className='pt-5 md:pt-0 md:w-[30%]'>
      <div className='bg-white rounded-2xl p-5  w-full h-fit shadow-md'>
        <Information />
      </div>
      </div>
    </div>
    </div>
  )
}

export default CandidateProfileMain
