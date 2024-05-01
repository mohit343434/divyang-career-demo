import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import linkedin from '../../../assets/linkedin.png';
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import ResetPassword from './ResetPassword';

const LogIn = () => {
  const [changePassword, setChangePassword] = useState(true);

  return (
    <div className=''>
      <form>
        <div className="flex flex-col gap-8">
          <div>
            <Label htmlFor="name">Account or Email</Label>
            <Input id="name" placeholder="Enter Account Or Email" />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input type={changePassword ? "password" : "text"} id="password" placeholder="Enter password" required />
              <span
                className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer"
                onClick={() => {
                  setChangePassword(!changePassword);
                }}
              >
                {changePassword ? <IoEye /> : <IoMdEyeOff />}
              </span>
            </div>
          </div>
          <div className='flex gap-1'>
            <span>Forgot your password ?</span>
            <div>
              <Dialog>
                <DialogTrigger>
                  <span className='text-orange-500 font-semibold'>Reset Password</span>
                </DialogTrigger>
                <DialogContent className="w-[440px]">
                  <ResetPassword />
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <Button className="w-full border-orange-500 border-2 text-white bg-orange-500 hover:bg-white hover:text-orange-500 rounded-3xl">Sign In</Button>
          <div className='flex flex-col gap-3 justify-center items-center'>
            <span className='text-center'>Or continue with</span>
            <div className='flex gap-3'>
              <span className='text-blue-600 text-3xl'><FaFacebook /></span>
              <span className='text-red-700 text-3xl'><AiFillGoogleCircle /></span>
              <img src={linkedin} alt="LinkedIn" />
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default LogIn;
