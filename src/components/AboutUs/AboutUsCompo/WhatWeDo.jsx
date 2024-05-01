import React from 'react'
import wwd from '../../../assets/wwd.webp'

const WhatWeDo = () => {
    return (
        <div className='md:px-16 px-5 py-10'>
            <div className='flex flex-col md:flex-row gap-10 justify-center items-center'>
                <div className='w-full md:w-1/2'>
                    <div className='flex flex-col justify-center items-start gap-4'>
                        <p className='text-green-800'>WHAT WE DO</p>
                        <h1 className='text-3xl'>Your Gateway to Opportunity</h1>
                        <p className='text-xl text-justify'>Divyang Career serves as the bridge between job seekers with disabilities and employers who recognize the value of a diverse workforce. We provide a user-friendly, accessible platform where individuals can explore job listings, connect with employers, and access resources and support to help them succeed in the workplace.</p>
                    </div>
                </div>
                <div className='w-full md:w-1/2'>
                    <img src={wwd} className='w-full h-auto' alt='Image'/>
                </div>
            </div>
        </div>
    )
}

export default WhatWeDo
