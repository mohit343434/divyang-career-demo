import React from 'react'
import Reg1 from '../../assets/Reg1.avif'
import Reg2 from '../../assets/Reg2.jpeg'
import { Button } from '@/components/ui/button'
import { FaRegCheckCircle } from "react-icons/fa";
const RegisterBanner = () => {
    return (
        <div className='flex w-[100%]'>
            <div className='flex lg:flex-nowrap flex-wrap w-[100%]'>
                <div className="relative overflow-hidden w-full ">
                    <img src={Reg1} className='w-[100%] h-96 object-cover' />
                    <div className="absolute flex justify-around items-center top-0 left-0 w-full h-full bg-opacity-50 max-h-96 bg-yellow-500 backdrop-brightness-30 ">
                        <div className=' flex flex-col gap-4 '>
                            <h1 className=' font-bold text-white text-center text-3xl'>Register as an Employer</h1>
                            <span className='text-white flex gap-2'><FaRegCheckCircle  className='mt-1'/>Access a Diverse Talent Pool</span>
                            <span className='text-white flex gap-2'><FaRegCheckCircle className='mt-1'/>Targeted Job Listings</span>
                            <span className='text-white flex gap-2'><FaRegCheckCircle className='mt-1'/>Build Your Brand</span>
                            <Button className="border w-40 border-orange-500 bg-orange-500 text-white hover:bg-orange-700 rounded-3xl">Post Jobs Free </Button>
                        </div>
                    </div>
                </div>
                <div className="relative overflow-hidden w-full">
                    <img src={Reg2} className='w-[100%] h-96' />
                    <div className="absolute flex justify-around items-center top-0 left-0 w-full h-full bg-opacity-50 max-h-96 bg-yellow-500 backdrop-brightness-30 ">
                        <div className=' flex flex-col gap-4'>
                            <h1 className=' font-bold text-white text-center text-3xl '>Register as a Candidate</h1>
                            <span className='text-white flex gap-2'><FaRegCheckCircle className='mt-1'/>Access Exclusive Opportunities</span>
                            <span className='text-white flex gap-2'><FaRegCheckCircle className='mt-1'/>Connect with Top Employers</span>
                            <span className='text-white flex gap-2'><FaRegCheckCircle className='mt-1'/>Government, Private and NGO Jobs</span>
                            <Button className="border w-40 border-orange-500 bg-orange-500 text-white hover:bg-orange-700 rounded-3xl">Register Now</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RegisterBanner;