import React, { useEffect, useState } from "react";
import DashCards from "../../GlobalComponents/DashCards";
import DashChart from "../../GlobalComponents/DashChart";
import DashWelcome from "../../GlobalComponents/DashWelcome";
import DashRecentJobs from "../../GlobalComponents/DashRecentJobs";
import { SlNote } from "react-icons/sl";
import { CgNotes } from "react-icons/cg";
import axiosInstance from "@/src/utils/axiosConfig";

const DashMain = () => {
  const [dashboard , setDashboard] = useState({
    appliedJob:0,
    meetings:0
  })
  const JOBS = [
    {
      id: 1,
      title: " APPLIED JOBS",
      jobCount: dashboard.appliedJob,
      icon: <SlNote />,
      link: "/dashboard/candidates/job",
    },
    {
      id: 2,
      title: "MEETINGS",
      jobCount: dashboard.meetings,
      icon: <CgNotes />,
      link: "/dashboard/candidates/meetings",
    },
  ];
  const getDashBoardData = async ()=>{
    try {
      const res = await axiosInstance.get(`/candidate/dashboard`);
      setDashboard(res.data.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    getDashBoardData()
  },[])
  // console.log(dashboard);

  return (
    <div className="flex flex-col p-5 w-[100%]">
      <div className="flex justify-between items-center flex-wrap lg:flex-nowrap gap-5 w-full py-5">
        <DashWelcome />
      </div>
      <div className="flex flex-wrap lg:flex-nowrap gap-5 w-full">
        {JOBS.map((job) => (
          <DashCards key={job.id} job={job} />
        ))}
      </div>
      <div className="flex justify-between items-start flex-wrap lg:flex-nowrap gap-5 w-full py-5">
        <div className="w-full md:w-1/3">
          {" "}
          <DashChart />
        </div>
        <div className="w-full md:w-1/2">
          <DashRecentJobs />
        </div>
      </div>
    </div>
  );
};
export default DashMain;
