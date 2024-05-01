import React from 'react'
import { LuDot } from "react-icons/lu";
import './Candidate.json'
const Education = () => {
  return (
    <div>
       <h1 className='text-2xl'>Education</h1>
   
    <div className=' flex flex-col item-center justify-center '>
    <section className='w-full'>
      <div className=' sticky top-0 bg-white py-3 z-10'>
        <div className='border-l-2 border-dashed border-orange-500 ml-3 mt-3 pb-2 '>
          <div className='relative'>
            <div className=' absolute top-0 -left-1.5 bg-white h-3 w-3 rounded-full border-2 border-orange-500'></div>
            <div className=' pl-10'>
              <div className='flex flex-col gap-3 '>

                <h1 className='text-lg' >Bachelor's of Computer Application</h1>
                <div className='md:flex-row flex flex-col '>
                  <span className='text-orange-500'>Bachelor's of Computer Application  </span><LuDot className='mt-1 text-gray-400 text-xl hidden md:block' /><span className='text-gray-500'>06/06/2006 - 06/06/2009</span>
                </div>
                <h1 className='text-gray-500'>Bachelor's of Computer Application, From sinhgad college of commerce, Pune University</h1>

              </div>
            </div>
          </div>
        </div>

      </div>

    </section>
  </div>
  </div>
  )
}

export default Education
