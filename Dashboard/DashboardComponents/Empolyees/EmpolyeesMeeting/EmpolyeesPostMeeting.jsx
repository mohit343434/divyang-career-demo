import axiosInstance from '@/src/utils/axiosConfig'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Loader from "../../GlobalComponents/Loader"
import Swal from 'sweetalert2'

const EmpolyeesPostMeeting = () => {
  const location = useLocation()
  const [selectedDate, setSelectedDate] = useState("")
  const [startTime, setStartTime] = useState("")
  const [endTime, setEndTime] = useState("")
  const [meetingLink, setMeetingLink] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const [id] = useState(new URLSearchParams(location.search).get("id"))
  
  // Function to format date
  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split('-');
    setSelectedDate(`${month}-${day}-${year}`);
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      setLoading(true)
      const res = await axiosInstance.post(`/employer/meeting`, {
        candidateId: id,
        startTime: startTime,
        endTime: endTime,
        date: selectedDate,
        meetingLink: meetingLink,
      })
      if (res.status === 200) {
        Swal.fire({
          title: "Good job!",
          text: "Meeting Created",
          icon: "success"
        });
      }
      navigate(`/dashboard/employers/meetings`)
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  }

  const user = JSON.parse(localStorage.getItem("user"));

  // Get today's date
  const today = new Date().toISOString().split('T')[0];

  return (
    <div>
      <div className='flex flex-row flex-wrap lg:flex-nowrap'>
        <div className='flex flex-col  w-full md:w-1/5 ' >
          <div className='flex justify-between mt-6 flex-wrap' >
            <span className='text-3xl ml-4'>Create  <span className='text-divyang'> Meeting</span></span>
          </div>
          <form className='w-full p-6' onSubmit={handleSubmit}  >
            <div className='flex flex-col rounded-md p-3 justify-evenly border m-80' style={{ background: "#ffffff" }} >
              {loading && <Loader />}
              <div>
                <label className='pt-3 text-2xl'>Meeting info</label>
              </div>
              <div className='flex w-full mt-2  gap-3 flex-wrap lg:flex-nowrap'>
                <div className='w-full'>
                  <label className='font-light'>Meeting Link <span className='text-divyang'>*</span> </label>
                  <input type="text" placeholder='Meeting Link' className='w-full h-10 rounded-lg ' required onChange={(e) => setMeetingLink(e.target.value)} />
                </div>
                <div className='w-full'>
                  <label className='font-light'>Date <span className='text-divyang'>*</span> </label>
                  <input type="date" placeholder='Salary' className='w-full h-10 rounded-lg ' required min={today} onChange={(e) => formatDate(e.target.value)} />
                </div>
              </div>
              <div className='flex w-full mt-2  gap-3 flex-wrap lg:flex-nowrap'>
                <div className='w-full'>
                  <label className='font-light'>Start Time <span className='text-divyang'>*</span> </label>
                  <input type="time" placeholder='Name' className='w-full h-10 rounded-lg ' required onChange={(e) => setStartTime(e.target.value)} />
                </div>
                <div className='w-full'>
                  <label className='font-light'>End Time <span className='text-divyang'>*</span> </label>
                  <input type="time" placeholder='Salary' className='w-full h-10 rounded-lg ' required onChange={(e) => setEndTime(e.target.value)} />
                </div>
              </div>
            </div>
            <button className='w-32 mt-3 h-10 bg-divyang text-white rounded-2xl border'>Post Job  </button>
          </form>
        </div>
        <div className='w-full md:w-1/2'>
          <div className='h-80 py-24' style={{ position: "sticky", top: "100px" }}>
            <span className='text-2xl'>About this meeting</span>
            <div className='flex flex-col p-5'>
              <div className='border rounded-lg p-3' style={{ background: "#ffff" }}>
                <p className='text-2xl'>Title of meeting</p>
                <p>by Organizer Name {user.username} </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmpolyeesPostMeeting
