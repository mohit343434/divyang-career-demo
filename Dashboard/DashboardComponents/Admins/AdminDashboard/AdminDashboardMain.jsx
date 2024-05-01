import React, { useEffect, useState } from 'react'
import DashCards from "../../GlobalComponents/DashCards";
import DashChart from "../../GlobalComponents/DashChart";
import { SlNote } from "react-icons/sl";
import { CgNotes } from "react-icons/cg";
import axiosInstance from '@/src/utils/axiosConfig';


const AdminDashboardMain = () => {
  const [job, setJob] = useState()
  const [employer, setEmployer] = useState()
  const [candidate, setCandidate] = useState()

  const JOBS = [
    {
      id: 1,
      title: " Total Employers",
      jobCount: employer,
      icon: <SlNote />,
      link: "/dashboard/candidates/job",
    },
    {
      id: 2,
      title: "Total Candidates",
      jobCount: candidate,
      icon: <CgNotes />,
      link: "/dashboard/candidates/meetings",
    },
    {
      id: 3,
      title: "Total Job",
      jobCount: job,
      icon: <CgNotes />,
      link: "/dashboard/candidates/meetings",
    },
  ];

  const dashboardData = async () => {
    const res = await axiosInstance.get(`/admin/user/dashboard`);
    setCandidate(res.data.data.candidate);
    setEmployer(res.data.data.employer);
    setJob(res.data.data.job);
  }

  useEffect(() => {
    dashboardData()
  }, [])

  return (
    <div className="flex flex-wrap p-10 ">
      <div className="md:flex-row flex flex-col  flex-wrap  gap-5 ">
        {JOBS.map((job) => (
          <DashCards key={job.id} job={job} />
        ))}
      </div>
      <div className="flex w-full  gap-5  py-5 ">
        <div className=" flex-1">
          {" "}
          <DashChart />
        </div>
        <div className='flex-1 hidden md:block'>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboardMain
