import React from 'react'
import Reg1 from '../../../assets/Reg1.avif'
const AboutUsBanner = () => {
  return (
    <div className='md:px-16 px-5 py-10'>
      <div className="relative overflow-hidden w-full h-[450px] rounded-3xl">
                <img src={Reg1} className=' w-[100%] h-[450px] rounded-3xl object-cover' />
                <div className="absolute flex flex-col items-center justify-center top-0 left-0 w-full h-[450px] bg-opacity-50  bg-orange-500 backdrop-brightness-30  rounded-3xl">
                    <div className=' flex flex-col items-center justify-center gap-3 text-center '>
                        <h1 className='  font-medium text-white  text-3xl text-center'>ABOUT US</h1>
                        <h1 className=' font-medium text-white  text-3xl'>Bridging Opportunities for Person with Disabilities</h1>
                    </div>.
                </div>
            </div>
    </div>
  )
}

export default AboutUsBanner
