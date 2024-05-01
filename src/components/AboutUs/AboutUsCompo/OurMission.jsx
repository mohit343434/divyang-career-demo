import { Separator } from '@/components/ui/separator'
import React from 'react'
import CountUp from 'react-countup';
const OurMission = () => {
    return (
        <div className='md:px-16 px-5 py-10'>
            <div className='flex flex-col gap-5 items-center justify-center'>
                <h1 className='font-semibold text-xl '>OUR MISSION</h1>
                <p className='text-lg'>At Divyang Career, we believe in the power of inclusivity. We're not just a job portal; we are a passionate community-driven initiative dedicated to creating a world where every individual, regardless of their abilities, has equal access to employment opportunities.
                    Our mission is simple: to bridge the gap between talent and opportunity by connecting employers with a diverse pool of exceptional candidates.</p>
                <div className='hidden md:block' >
                    <Separator />
                    <div className='flex gap-14 '>
                        <Separator orientation="vertical" className=" h-40 bg-white" />
                        <div className='flex flex-col justify-center items-center'>
                            <span className='text-orange-500 text-6xl font-semibold'><CountUp start={0} end={1000} />+</span>
                            <span className='text-xl'>Jobs to Empower Divyangjans</span>
                        </div>
                        <Separator orientation="vertical" className=" h-40" />
                        <div className='flex flex-col justify-center items-center'>
                            <span className='text-orange-500 text-6xl font-semibold'><CountUp start={0} end={150} />+</span>
                            <span className='text-xl'>Jobs to Empower Divyangjans</span>
                        </div>
                        <Separator orientation="vertical" className=" h-40" />
                        <div className='flex flex-col justify-center items-center'>
                            <span className='text-orange-500 text-6xl font-semibold'><CountUp start={0} end={500} />+</span>
                            <span className='text-xl'>Jobs to Empower Divyangjans</span>
                        </div>
                        <Separator orientation="vertical" className=" h-40" />
                    </div>
                </div>

                <div className=' md:hidden'>

                    <div className='flex flex-col gap-14 '>
                       <Separator/>
                        <div className='flex flex-col justify-center items-center'>
                            <span className='text-orange-500 text-6xl font-semibold'><CountUp start={0} end={1000} />+</span>
                            <span className='text-xl'>Jobs to Empower Divyangjans</span>
                        </div>
                        <Separator/>
                        <div className='flex flex-col justify-center items-center'>
                            <span className='text-orange-500 text-6xl font-semibold'><CountUp start={0} end={150} />+</span>
                            <span className='text-xl'>Jobs to Empower Divyangjans</span>
                        </div>
                        <Separator/>
                        <div className='flex flex-col justify-center items-center'>
                            <span className='text-orange-500 text-6xl font-semibold'><CountUp start={0} end={500} />+</span>
                            <span className='text-xl'>Jobs to Empower Divyangjans</span>
                        </div>
                        <Separator/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurMission
