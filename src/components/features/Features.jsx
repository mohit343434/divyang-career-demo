import React from 'react'
import divyangtv from '../../assets/divyangTV.webp'
import LayoutWraper from '@/src/layout/LayoutWraper';
import { motion } from "framer-motion"
import { fadeIn } from './variants';
const Features = () => {
    const features = [
        { id: 1, data: 'Registration / Login. ', },
        { id: 2, data: 'Profile creation / update.', },
        { id: 3, data: 'Online interview Search / Filter / Sort jobs, Application / Tracking Jobs', },
        { id: 4, data: 'Job Listing by disability / Sector / Type.', },
        { id: 5, data: 'View Government schemes. ', },
        {
            id: 5, data: 'Accessible Tools (Increase / Decrease Text , Grayscale, High Contrast, Negative Contrast, Light Background, Links Underline, Readable Font, Screen reader.',
        },
    ];

    return (
        <LayoutWraper>
        <div className='flex-wrap   lg:flex-nowrap  flex  justify-center  items-center gap-5 p-10 md: py-24'>
            <div className=''>
            <motion.div
            variants={fadeIn("down",0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false,amount:0.7}}
            >
                <h1 className='text-3xl text-divyang font-medium'>Features for Diyangjan Candidate</h1>
                <p className='mt-3 text-current text-lg'>Our job portal is equipped with a seamless online meeting and interview feature designed to streamline the hiring process for both employers and candidates. </p>
                </motion.div>
                <motion.div
            variants={fadeIn("down",0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false,amount:0.7}}
            >
                <ul className="flex  flex-col items-start p-6 list-disc justify-center text-lg">
                    {features.map((item) => (
                        <li key={item.id} className="text-input-icn-rt p-1">
                            {item.data}
                        </li>
                    ))}
                </ul>
               </motion.div>
            </div>
            <motion.div
            variants={fadeIn("right",0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false,amount:0.7}}
            >
                <img src={divyangtv} alt='divyang-tv' />
            </motion.div>
        </div>
        </LayoutWraper>
    )
}

export default Features