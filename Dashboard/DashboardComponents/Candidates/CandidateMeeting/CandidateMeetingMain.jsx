import React, { useEffect, useState } from "react";
import MeetingsCard from "../../GlobalComponents/MeetingsCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PageTitle from "../../GlobalComponents/PageTitle";
import axiosInstance from "@/src/utils/axiosConfig";
import { Link } from "react-router-dom";
import { SiGooglemeet } from "react-icons/si";
import { LuClock } from "react-icons/lu";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { MdOutlineSystemUpdateAlt } from "react-icons/md";
import Loader from "@/Dashboard/DashboardComponents/GlobalComponents/Loader"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
const Title = {
  title: "Meeting",
};

const CandidateMeetingMain = () => {
  const [allMeering, setAllMeeting] = useState([])
  const [pastMeeting, setPastMeeting] = useState([])
  const [loading, setLoading] = useState(false);
  const [cancellationReason, setCancellationReason] = useState("")
  const getAllMeeting = async () => {
    try {
      setLoading(true)
      const res = await axiosInstance.get(`/candidate/meeting/status`);
      setAllMeeting(res.data.data.upcomingMeeting);
      setPastMeeting(res.data.data.pastMeeting);
    } catch (error) {
      console.log();
    }finally{
      setLoading(false)
    }
  
  }
  useEffect(() => {
    getAllMeeting()
  }, [])

  const updateMeeting = async (meetingId) => {
    try {
      setLoading(true)
       await axiosInstance.put(`/candidate/meeting/${meetingId}`, { cancellationReason });
      getAllMeeting();
    } catch (error) {
      console.error("Error updating meeting:", error);
    }finally{
      setLoading(false)
    }
  };



  console.log(allMeering);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Month is zero-based
    const year = date.getFullYear();
    return `${day < 10 ? '0' + day : day}-${month < 10 ? '0' + month : month}-${year}`;
  };


  return (
    <div className="w-full overflow-hidden">
      <div className="w-full">
        <PageTitle Title={Title} />
      </div>
      <Tabs className=" w-full" defaultValue={"Upcoming"}>
        <TabsList className="w-full">
          <TabsTrigger value="Upcoming" className="text-xl">
            Upcoming
          </TabsTrigger>
          <TabsTrigger value="Completed" className="text-xl">
          Past Meeting
          </TabsTrigger>
        </TabsList>
        <TabsContent value="Upcoming" className="">
          <div className="flex flex-row gap-5 justify-center flex-wrap">
            <hr />
            {
              allMeering.length === 0 ? (<>
              <div>
                {
                  loading && <Loader />
                }
                <p>No Meeting <span className="text-divyang"> Scheduled Yet</span> </p>
              </div>
              </>) : (
                <>
                  {allMeering.map((e, i) => {
                    return (
                      <div key={i} className='w-72 px-2 border flex flex-col gap-5 mt-4 rounded-lg' style={{ background: "#ffffff" }} >
                        <div className='flex mt-4 lg:flex-nowrap flex-wrap justify-between'>
                          <div className=' flex gap-3'>
                            <MdOutlineCalendarMonth className='ml-4 text-gray-500 text-2xl' /> <span>{formatDate(e?.date)}</span>
                          </div>
                          <Dialog>
                            <DialogTrigger asChild>
                              <MdOutlineSystemUpdateAlt className='ml-4 text-gray-500 cursor-pointer text-2xl' />
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[600px] ">
                              <DialogHeader>
                                <DialogTitle>Edit profile</DialogTitle>
                              </DialogHeader>
                              <div className="max-h-[500px] overflow-y-auto ">
                                <form  >
                                  <div className="flex flex-col w-full gap-2 rounded-lg">
                                    <label>Cancellation Reason</label>
                                    {loading && <Loader /> }
                                    <textarea className="w-full focus:outline-none focus:ring-0 border-gray-300 rounded-lg focus:border-black" onChange={(event) => setCancellationReason(event.target.value)} ></textarea>
                                  </div>
                                  <DialogFooter className="sm:justify-start">
                                    <button onClick={(event) => { event.preventDefault(), updateMeeting(e._id) }} className="bg-divyang p-2 rounded-lg mt-3 px-4 text-white" variant="secondary">
                                      Cancel Meeting
                                    </button>
                                  </DialogFooter>
                                </form>
                              </div>
                            </DialogContent>
                          </Dialog>
                        </div>
                        <div>
                          <span className='ml-4 bg-gray-200 text-gray-500 px-5 py-1 rounded-3xl' >{e?.isActive == true ? "Upcoming" : "Expired"}</span>
                        </div>
                        <div className='w-full  h-28 overflow-hidden'>
                          <p className='text-gray-500 ml-4' >Meeting Link :- <Link target="_blank" rel="noopener noreferrer" to={e?.meetingLink} className='text-blue-600'>{e?.meetingLink} </Link> </p>
                        </div>
                        <div className='max-w-28 p-3 h-28 overflow-hidden'>
                          <p className='text-gray-500 h-24 overflow-hidden'>{e?.isActive == false ? e.cancellationReason : null}</p>
                        </div>
                        <div className='flex mt-4 flex-wrap lg:flex-nowrap justify-between mb-5'>
                          <div className='flex '>
                            <SiGooglemeet className='ml-4 mt-1' /> <span className='text-gray-500 ml-4'>Start :-{e?.startTime}</span>
                          </div>
                          <div className='flex justify-between'>
                            <LuClock className='mt-1' /> <span className='text-gray-500 ml-4 mr-4'> End :-{e?.endTime}</span>
                          </div>
                        </div>

                      </div>
                    )
                  })}
                </>
              )
            }

          </div>
        </TabsContent>
        <TabsContent value="Completed" className="w-full">
        <div className="flex flex-row gap-5 justify-center flex-wrap">
            <hr />
            {
              pastMeeting.length === 0 ? (<>
              <div>
                {loading && <Loader />}
                <p>No Meeting <span className="text-divyang"> Scheduled Yet</span> </p>
              </div>
              </>) : (
                <>
                  {pastMeeting.map((e, i) => {
                    return (
                      <div key={i} className='w-72 px-2 border flex flex-col gap-5 mt-4 rounded-lg' style={{ background: "#ffffff" }} >
                        <div className='flex mt-4 lg:flex-nowrap flex-wrap justify-between'>
                          <div className=' flex gap-3'>
                            <MdOutlineCalendarMonth className='ml-4 text-gray-500 text-2xl' /> <span>{formatDate(e?.date)}</span>
                          </div>
                        </div>
                        <div>
                          <span className='ml-4 bg-gray-200 text-gray-500 px-5 py-1 rounded-3xl' >{e?.isActive == true ? "Upcoming" : "Expired"}</span>
                        </div>
                        <div className='w-full  h-28 overflow-hidden'>
                          <p className='text-gray-500 ml-4' >Meeting Link :- <Link target="_blank" rel="noopener noreferrer" to={e?.meetingLink} className='text-blue-600'>{e?.meetingLink} </Link> </p>
                        </div>
                        <div className='max-w-28 p-3 h-28 overflow-hidden'>
                          <p className='text-gray-500 h-24 overflow-hidden'>{e?.isActive == false ? e.cancellationReason : null}</p>
                        </div>
                        <div className='flex mt-4 flex-wrap lg:flex-nowrap justify-between mb-5'>
                          <div className='flex '>
                            <SiGooglemeet className='ml-4 mt-1' /> <span className='text-gray-500 ml-4'>Start :-{e?.startTime}</span>
                          </div>
                          <div className='flex justify-between'>
                            <LuClock className='mt-1' /> <span className='text-gray-500 ml-4 mr-4'> End :-{e?.endTime}</span>
                          </div>
                        </div>

                      </div>
                    )
                  })}
                </>
              )
            }

          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CandidateMeetingMain;
