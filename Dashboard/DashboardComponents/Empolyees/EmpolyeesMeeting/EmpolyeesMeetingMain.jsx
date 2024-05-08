
import React, { useEffect, useState } from 'react'
import MeetingsCard from '../../GlobalComponents/MeetingsCard'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PageTitle from '../../GlobalComponents/PageTitle';
import axiosInstance from '@/src/utils/axiosConfig';

const EmpolyeesMeetingMain = () => {
  const [allMeeting, setAllMeeting] = useState([])
  const [allPassMeeting, setAllpassMeeting] = useState([])
  const getAllUpcomingMeeting = async () => {
    const res = await axiosInstance.get(`/employer/meeting/status`)
    setAllMeeting(res.data.data.upcomingMeeting);
    setAllpassMeeting(res.data.data.pastMeeting);
    console.log(res.data);
  }
  useEffect(() => {
    getAllUpcomingMeeting()
  }, [])
  console.log(allMeeting);
 
  const data2 = [
    {
      date: "10/01/2024",
      email: "mjGmail.com",
      phone: "Coming",
      jobheading: "React Js ",
      name: "Mohit Jaiswal",
      desc: "Hello sir! I am React Js Devloper  ",
      meetingTime: "10 Minutes"
    },
    {
      date: "10/01/2024",
      email: "mjGmail.com",
      phone: "Coming",
      jobheading: "React Js ",
      name: "Mohit Jaiswal",
      desc: "Hello sir! I am React Js Devloper  ",
      meetingTime: "10 Minutes"
    },
    {
      date: "10/01/2024",
      email: "mjGmail.com",
      phone: "Coming",
      jobheading: "React Js ",
      name: "Mohit Jaiswal",
      desc: "Hello sir! I am React Js Devloper  ",
      meetingTime: "30 Minutes"
    },
    {
      date: "10/01/2024",
      email: "mjGmail.com",
      phone: "Coming",
      jobheading: "React Js ",
      name: "Mohit Jaiswal",
      desc: "Hello sir! I am React Js Devloper  ",
      meetingTime: "11 Minutes"
    },
    {
      date: "10/01/2024",
      email: "mjGmail.com",
      phone: "Coming",
      jobheading: "React Js ",
      name: "Mohit Jaiswal",
      desc: "Hello sir! I am React Js Devloper  ",
      meetingTime: "10 Minutes"
    },
    {
      date: "10/01/2024",
      email: "mjGmail.com",
      phone: "phone",
      jobheading: "React Js ",
      name: "Mohit Jaiswal",
      desc: "Hello sir! I am React Js Devloper  ",
      meetingTime: "10 Minutes"
    },
  ]
  const Title = {
    title: "Meeting",
  };
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1; 
    const year = date.getFullYear();
    return `${day < 10 ? '0' + day : day}-${month < 10 ? '0' + month : month}-${year}`;
  };
  return (
    <div className='p-5'>
      <div className='flex flex-col w-full'  >
        <div className="w-full">
          <PageTitle Title={Title} />
        </div>
      </div>
      <Tabs className=" w-full" defaultValue={"Upcoming"}  >
        <TabsList className="w-full bg-transparent">
          <TabsTrigger value="Upcoming" className="text-xl">
            Upcoming
          </TabsTrigger>
          <TabsTrigger value="Completed" className="text-xl">
            Completed
          </TabsTrigger>
        </TabsList>
        <TabsContent value="Upcoming" className="">
          <div className='flex flex-row gap-5 justify-center flex-wrap'>
            {
              allMeeting.length === 0 ? (<>
              <div>
              <p>No Meeting <span className="text-divyang"> Scheduled Yet</span> </p>
              </div>
              </>):(
                <>
                  {
              allMeeting.map((e, i) => {
                return(
                  <MeetingsCard
                  key={i}
                  date={formatDate(e.date)}
                  email={e?.candidateId?.jobEmail}
                  phone={e?.candidateId?.jobPhone}
                  expired={e?.isActive==true ?"Upcoming":"Expired"}
                  name={e?.meetingLink}
                  desc={e?.isActive==false ? e.cancellationReason :null}
                  starttime={e?.startTime}
                  endTime={e?.endTime}
                   />
                )
              }
              
             )
            }
                </>
              )
            }
          
          </div>
        </TabsContent>
        <TabsContent value="Completed" className="w-full">
        <div className='flex flex-row gap-5 justify-center flex-wrap'>
            {
              allMeeting.length === 0 ? (<>
              <div>
              <p>No Meeting <span className="text-divyang"> Scheduled Yet</span> </p>
              </div>
              </>):(
                <>
                  {
              allPassMeeting.map((e, i) => {
                return(
                  <MeetingsCard
                  key={i}
                  date={formatDate(e.date)}
                  email={e?.candidateId?.jobEmail}
                  phone={e?.candidateId?.jobPhone}
                  expired={e?.isActive==true ?"Upcoming":"Expired"}
                  name={e?.meetingLink}
                  desc={e?.isActive==false ? e.cancellationReason :null}
                  starttime={e?.startTime}
                  endTime={e?.endTime}
                   />
                )
              }
              
             )
            }
                </>
              )
            }
          
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default EmpolyeesMeetingMain