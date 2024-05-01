import React from 'react'
import DashCards from '../../GlobalComponents/DashCards'
import DashChart from '../../GlobalComponents/DashChart'
import DashWelcome from '../../GlobalComponents/DashWelcome';
import DashRecentJobs from '../../GlobalComponents/DashRecentJobs';
import { SlNote } from "react-icons/sl";
import { CgNotes } from "react-icons/cg";
import { BiMessageRounded } from "react-icons/bi";
import { SlUserFollowing } from "react-icons/sl";
const JOBS = [
    {
        id: 1,
        title: 'Applied Jobs',
        jobCount: '15',
        icon: <SlNote/>
    },
    {
        id: 2,
        title: 'Applied Jobs',
        jobCount: '50',
        icon: <CgNotes/>
    },
    {
        id: 3,
        title: 'Applied Jobs',
        jobCount: '70',
        icon: <BiMessageRounded/>
    },
    {
        id: 4,
        title: 'Applied Jobs',
        jobCount: '10',
        icon: <SlUserFollowing/>
    },
];


const DashMain = () => {
    return (
        <div className='flex flex-col p-5 w-[100%]' >
            <div className='flex justify-between items-center flex-wrap lg:flex-nowrap gap-5 w-full py-5'>
               <DashWelcome/>
            </div>
             <div className="flex justify-center items-center flex-wrap lg:flex-nowrap gap-5 w-full">
                    {JOBS.map(job => (
                        <DashCards key={job.id} job={job} />
                    ))}
            </div>
            <div className='flex justify-between items-start flex-wrap lg:flex-nowrap gap-5 w-full py-5'>
                <DashChart />
                <DashRecentJobs/>
            </div>
        </div>
    )
}
export default DashMain







