
import React, { useEffect, useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { FaEdit } from 'react-icons/fa'
import axiosInstance from '@/src/utils/axiosConfig'
import fileAxiosInstance from '@/src/utils/fileConfig'
import Loader from "../../GlobalComponents/Loader"
import Swal from 'sweetalert2'

const PostJobForm = () => {
  const [photo, setPhoto] = useState(null)
  const [Img, setImg] = useState("")
  const [Dateis, setDate] = useState()
  const [ loading , setLoading ] = useState(false)

  const user = JSON.parse(localStorage.getItem("user"))
  // console.log(user);
  const getProfile = async () => {
    const res = await axiosInstance.get(`/employer/profile`);
    setImg(res.data.data.image);
    setDate(res.data.data.createdAt);
  }
  useEffect(() => {
    getProfile()
  }, [])
  // console.log(photo);/
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-IN', options);
  }
  const handUpdate = async (e) => {
    e.preventDefault();
    try {
      if (!photo) {
        return
      }
      if (photo.type !== "image/jpeg" && photo.type !== "image/png" ) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Image type png and jpeg",
        });
        return;
      }
      setLoading(true);
      const res = await fileAxiosInstance.put(`/employer/profile`, {
        image: photo
      }, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      if (res.status === 200) {
        getProfile();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  
  return (
    <>
      <div className='flex flex-row flex-wrap lg:flex-nowrap'>
        <div className='flex flex-col  w-full md:w-1/5 ' >
          <div className='flex justify-between mt-6 flex-wrap' >
            <span className='text-3xl ml-4'>Empolye<span className='text-divyang'> Profile</span></span>
          </div>
          <div className='w-full  p-6 ' >
            <div className='flex flex-col rounded-md p-3 justify-evenly border m-80' style={{ background: "#ffffff" }} >
              <div className='flex justify-between gap-3'>
                <label className='pt-3 text-2xl'>Basic info</label>
                <Dialog>
                  <DialogTrigger asChild>
                    <FaEdit className='text-blue-600 text-2xl cursor-pointer ' />
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Update Profile</DialogTitle>
                    </DialogHeader>
                    <div>
                      {loading && <Loader/>}
                      <form onSubmit={handUpdate} className='flex flex-col'>
                        <input type="file" className='text-divyang rounded-lg' onChange={(e) => setPhoto(e.target.files[0])} />
                        <button className=' w-28 mt-5 h-9 rounded-md bg-divyang text-white' >Submit </button>
                      </form>
                    </div>
                  </DialogContent>
                </Dialog>


              </div>

              <div className='w-full flex gap-4'>
                <div className='w-full  rounded-lg flex'>
                  <img
                    className="w-32 h-32 mx-auto border rounded-full"
                    src={Img === "" ? "https://tse4.mm.bing.net/th?id=OIP.2ZXXKN7zakCiYeNrq5-b_gHaHa&pid=Api&P=0&h=180" : `https://divyangcareer.s3.ap-south-1.amazonaws.com/assets/images/user/profile/${Img}`}
                    alt="Profile"
                  />
                </div>
                <div className='w-full'>
                  <p className='text-gray-500'>Update Your photo manually , if the photo is not set the default Avater will be the same as your login email account.
                  </p>
                </div>
              </div>
              <div className='flex w-full gap-4 mt-4'>
                <div className='flex flex-col w-full'>
                  <p>Register Date</p>
                  <div className='border mt-1 h-9 rounded-md w-full text-gray-500 p-1'>
                    <span>{formatDate(Dateis)}</span>
                  </div>
                </div>
              </div>
              <div className='flex w-full gap-4 mt-4'>
                <div className='flex flex-col w-full'>
                  <p>Email</p>
                  <div className='border h-9 mt-1 rounded-md w-full text-gray-500 p-1'>
                    <span>{user.email}</span>
                  </div>
                </div>
                <div className='flex flex-col w-full'>
                  <p>Phone No.</p>
                  <div className='border mt-1 h-9 rounded-md w-full text-gray-500 p-1'>
                    <span>{user.phone}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className=' w-full md:w-1/2 ' >
          <div className='h-80 py-24 ' style={{ position: "sticky", top: "100px" }}>
            <span className='text-2xl'> About this job</span>
            <div className=' mt-2 flex flex-col p-5'>
              <div className='border rounded-lg p-3' style={{ background: "#ffff" }}>
                <p className='text-2xl'>Title of job</p>
                <p className='mt-3'>by Company Name in <span className='text-divyang'>Category</span> </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PostJobForm