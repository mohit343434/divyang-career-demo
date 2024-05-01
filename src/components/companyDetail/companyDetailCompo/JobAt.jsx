import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import React from 'react'
import { FaRegHeart } from "react-icons/fa6";
const JobAt = () => {
  return (
    <div className=' flex flex-col p-5 gap-6'>
      <h1 className="text-2xl">Job at Commissioner Office,Saran Division,Chapra</h1>
      <Card className='border-orange-500 p-5  flex flex-col w-full '>
                <div>
                    <div className='flex justify-between items-center'>
                        <div className='flex flex-col'>
                            <h3 className="text-lg  hover:text-divyang">Recruitment of Executive Trainees 2024 through GATE   </h3>
                            <h3>by Nuclear Power Corporation of India Ltd </h3>
                            </div>
                        <FaRegHeart className=' hover:text-orange-500  text-xl cursor-pointer' />
                    </div>
                    <p className="font-medium text-divyang"></p>

                </div>
                <div className='flex gap-2 pt-3'>
                    <Badge className='bg-[#f5ecff] text-[#8369c7] px-4 text-sm font-normal py-1'>Government</Badge>
                    <Badge className='bg-[#d9eaf5] text-divyang px-4 text-sm font-normal py-2'>All India</Badge>
                   
                </div>
                <div className='flex justify-between pt-3'>
                    <p className="text-sm text-gray-700 text-divyang"></p>
                    <p className=""><span className='text-orange-500'>236</span> days left to apply</p>
                </div>


            </Card>
    </div>
  )
}

export default JobAt
