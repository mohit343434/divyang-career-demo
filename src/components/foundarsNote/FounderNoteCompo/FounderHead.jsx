import React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import LayoutWraper from '@/src/layout/LayoutWraper'



const FounderHead = () => {
  return (
    <div className=' bg-slate-100 h-72 '>
     <LayoutWraper>
      <div className=' md:px-20 py-20 flex flex-col justify-center   md:items-start items-center max-w-screen-md px-5 '>
       
          <div className=' '>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/" className="text-lg">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink className="text-lg ">Founder's Note</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className=''>
            <h1 className='md:text-5xl text-3xl font-semibold'>Founder’s Note</h1>
          </div>
       
      </div>

      </LayoutWraper>
    </div>
  )
}

export default FounderHead
