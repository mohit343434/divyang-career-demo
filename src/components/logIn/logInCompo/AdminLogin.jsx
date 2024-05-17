
import { useAuth } from '@/src/context/AuthContext'
import axiosInstance from '@/src/utils/axiosConfig'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const AdminLogin = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [auth, setAuth] = useAuth();
  const Navigate =  useNavigate()
  // console.log(email,password);
  const handelAdminLogin = async (e) => {
   e.preventDefault();
    try {
      const res = await axiosInstance.post(`/admin/auth/login`,{
        email :email,
        password :password
      })
      // console.log(auth);
      if (res.status === 200) {
        setAuth({
          ...auth,
          user: res.data.admin,
          token: res.data.accessToken,
        });
        Navigate("/dashboard/admin")
        localStorage.setItem("auth", JSON.stringify(res.data.accessToken));
        localStorage.setItem("user", JSON.stringify(res.data.admin));
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Login Successfully",
        });
      }

    } catch (error) {
      // console.log(error);
      if (error.response.data.message === "Admin doesn't exist") {
        // alert(error.response.data.message)
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.message,
        });
      }
      if (error.response.data.message === "Incorrect password") {
        // alert(error.response.data.message)
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.message,
        });
      }
    } finally {

    }
  }
  return (
    <>
      <div className="min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
        <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 min-w-[30%]">
          <h1 className="text-2xl font-bold text-center mb-4 dark:text-gray-200">Welcome Admin! {/**Back! */} </h1>
          <form >
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
              <input type="email" id="email" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="your@email.com" required onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label>
              <input type="password" id="password" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your password" required onChange={(e)=>setPassword(e.target.value)} />
            </div>
            <button onClick={handelAdminLogin} className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-divyang hover:bg-divyang focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Login</button>
          </form>
        </div>
      </div>

    </>
  )
}

export default AdminLogin