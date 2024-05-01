import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import ResetPassword from './ResetPassword';
import { AiFillGoogleCircle } from "react-icons/ai";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from "../../../context/AuthContext";
import Swal from 'sweetalert2'
import axiosInstance from '../../../utils/axiosConfig';

import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post("/auth/login", {
        email,
        password,
      });
      console.log(res);
      if (res.data.status === "success") {
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Sign Up sucessfully, Welcome to the Divyang Career",
          showConfirmButton: false,
          timer: 1500
        });
        localStorage.setItem("auth", JSON.stringify(res.data.accessToken));
        localStorage.setItem("user", JSON.stringify(res.data.user));//Saving token

        // return
      }
      if (res.data.user.role === 'candidate') {
        navigate('/dashboard/candidates');
        return
      }
      if (res.data.user.role === 'employer') {
        navigate('/dashboard/employers');
        return
      }
      console.log(res.data.user.role)
    } catch (error) {
      console.log(error);
      if (error.response.status === 401) {
        Swal.fire({
          position: "top-end",
          icon: "error",
          text: "Invalid user Name or Email",
          showConfirmButton: false,
          timer: 2500
        });
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
          <div>
            <Label htmlFor="name">Email</Label>
            <Input
              id="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "password" : "text"}
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            >
              {showPassword ? <IoMdEyeOff /> : <IoEye />}
            </span>
          </div>

          <div className='flex gap-1'>
            <span>Forgot your password ?</span>
            <Dialog>
              <DialogTrigger>
                <span className='text-orange-500 font-semibold'>Reset Password</span>
              </DialogTrigger>
              <DialogContent className="w-[440px]">
                <ResetPassword />
              </DialogContent>
            </Dialog>
          </div>
          <Button className="w-full border-orange-500 border-2 text-white bg-orange-500 hover:bg-white hover:text-orange-500 rounded-3xl">Sign In</Button>
          <div className='flex flex-col items-center'>
            <span className='text-center'>Or continue with</span>
            <span className='text-center text-red-700 text-4xl'><AiFillGoogleCircle /></span>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login;
