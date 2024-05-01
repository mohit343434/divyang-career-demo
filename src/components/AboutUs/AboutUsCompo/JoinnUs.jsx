import React from 'react'
import Reg1 from '../../../assets/Reg1.avif'
import LayoutWraper from '@/src/layout/LayoutWraper'
const JoinnUs = () => {
  return (
    <div className='  py-20'>
      <div className="relative overflow-hidden w-full h-[450px] ">
        <img src={Reg1} className=' w-[100%] h-[450px] object-cover' />
        <div className="absolute flex flex-col items-center justify-center top-0 left-0 w-full h-[450px] bg-opacity-90  bg-orange-500 backdrop-brightness-30  ">
          <LayoutWraper>
            <div className=' flex flex-col justify-center items-center  gap-5 md:px-28 '>
              <h1 className='  font-semibold text-white  text-2xl md:text-3xl text-center'>Join Us in Our Mission</h1>
              <h1 className=' font-medium text-white  text-lg text-center'>At Divyang Career, we invite you to join us in our mission to create a more inclusive world. Whether you are a job seeker looking for your
                next opportunity or an employer seeking exceptional talent, we are here to support you every step of the way.</h1>
              <h1 className='  font-semibold text-white  text-2xl md:text-3xl text-center'>Together, we can build a world where abilities shine, and opportunities abound.
                Welcome to Divyang Career.</h1>

            </div>.
          </LayoutWraper>
        </div>
      </div>
    </div>
  )
}

export default JoinnUs
