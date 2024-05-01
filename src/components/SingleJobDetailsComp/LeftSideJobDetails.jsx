import React, { useState } from 'react'
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { IoLocationOutline } from "react-icons/io5";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { Button } from '@/components/ui/button';
import { useAuth } from '@/src/context/AuthContext';
import axiosInstance from '@/src/utils/axiosConfig';
import Swal from 'sweetalert2';

const LeftSideJobDetails = ({ jobDetails }) => {
    const [auth] = useAuth();
    const applyJob = async () => {
        try {
            if (auth.token) {
                const res = await axiosInstance.post(`/candidate/job/applicant`, {
                    jobId: jobDetails._id,
                    companyId: jobDetails.companyId.id,
                    employerId: jobDetails.companyId.employerId
                });
                // console.log(res)
                if (res.data.status === "success") {
                    Swal.fire({
                        title: "Good job!",
                        text: "You have Apply SuccessFull",
                        icon: "success"
                      });
                }
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Please Login!",
                  });
            }
        } catch (error) {
            if (error.response.data.status === "fail") {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "you have already applied",
                  }); 
            }
          
        }
    }

    return (
        <Card className='shadow-md p-5  flex flex-col w-full '>
            <div>
                <h1 className='text-3xl font-bold hover:text-divyang'>
                    {jobDetails.title}
                </h1>
                <p>by  <span className='text-divyang'>{jobDetails?.companyId?.name}</span></p>
            </div>

            <div className='flex gap-2  border-b-2 p-5 pt[-10px]'>
                <Badge className='bg-[#f5ecff] text-[#8369c7]'>{jobDetails.type}</Badge>
                <Badge className='bg-[#d9eaf5] text-divyang'> {jobDetails?.experience}</Badge>
                <Badge className='bg-[#d9eaf5] text-[#8369c7]'>{jobDetails?.gender}</Badge>
                <Badge className='bg-[#d9eaf5] text-divyang'>{jobDetails?.qualification}</Badge>
            </div>
            <div className='pt-3 flex flex-col gap-5'>
                <h2 className='text-divyang font-bold'>Job role insights</h2>
                <div className='flex gap-5'>
                    <div className='flex items-center gap-3'>
                        <div className='rounded-[50%] bg-[#d9eaf5]  p-2'>
                            <IoLocationOutline className='text-3xl text-divyang ' />
                        </div>
                        <div>
                            <h3 className='font-semibold'>Hiring location</h3>
                            <p>Mumbai</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <div className='rounded-[50%] bg-[#d9eaf5]  p-2'>
                            <LiaRupeeSignSolid className='text-3xl text-divyang ' />
                        </div>
                        <div>
                            <h3 className='font-semibold'>Salary</h3>
                            <p>{jobDetails?.salary}/Month</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pt-7 flex flex-col gap-5'>
                <h2 className='text-xl font-bold'>Description</h2>
                <p> {jobDetails?.description}</p>
                <p> {jobDetails?.companyId?.about}</p>
            </div>
            <div className='w-full mt-10 flex justify-center items-center'>
                <Button className="bg-divyang w-full" onClick={applyJob}  >Apply Now</Button>
            </div>
        </Card>
    )
}

export default LeftSideJobDetails