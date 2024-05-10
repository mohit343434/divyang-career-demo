import React, { useEffect, useState } from 'react'
import LeftSideJobDetails from './LeftSideJobDetails'
import { useParams } from 'react-router-dom';
import axiosInstance from '@/src/utils/axiosConfig';

const SingleJobMain = () => {
    let { id } = useParams();
    const [SinglJob, setSingleJob] = useState({})
    const getSingalJobs = async () => {
        try {
            const res = await axiosInstance.get(`/homepage/job/${id}`);
            setSingleJob(res.data.data);
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getSingalJobs();
    }, [id])
    return (
        <div className='flex justify-center  p-5 gap-5 flex-wrap lg:flex-nowrap '>
            <div className='w-[70%]'>
                <LeftSideJobDetails jobDetails={SinglJob} />
            </div>
        </div>
    )
}

export default SingleJobMain