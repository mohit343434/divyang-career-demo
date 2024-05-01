import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react'
import { IoMdEyeOff } from 'react-icons/io';
import { IoEye } from 'react-icons/io5';

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);
  const [showNPassword, setShowNPassword] = useState(false);
  return (
    <div className="w-full flex justify-center my-8 overflow-hidden">
      <Card className="shadow-md w-full  border-gray-200 p-6 mt-4 max-w-xl">
        <div className="flex flex-col justify-between gap-10">
          <div className="flex flex-col justify-start items-start gap-2">
            <h3 className="text-xl font-semibold text-gray-700 ">
              change password
            </h3>
          </div>

          <form className="flex flex-col justify-start items-start gap-2">
            <div className="flex flex-col gap-4 w-full">
             
              <div>
                <label htmlFor="Npassword">New password</label>
                <div className="relative">
                  <Input
                    id="Npassword"
                    type={showPassword ? "text" : "Npassword"}
                    placeholder="Enter New password"
                  />
                  <span
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
                    onClick={() => {
                      setShowNPassword(!showNPassword);
                    }}
                  >
                    {showNPassword ? <IoMdEyeOff /> : <IoEye />}
                  </span>
                </div>
              </div>
              <div>
                <label htmlFor="Cpassword">Confirm new password</label>
                <div className="relative">
                  <Input
                    id="Cpassword"
                    type={showCPassword ? "text" : "Cpassword"}
                    placeholder="Enter Confirm new password"
                  />
                  <span
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
                    onClick={() => {
                      setShowCPassword(!showCPassword);
                    }}
                  >
                    {showCPassword ? <IoMdEyeOff /> : <IoEye />}
                  </span>
                </div>
              </div>

              <Button className=" border-orange-500 border-2 text-white bg-orange-500 hover:bg-white hover:bg-divyangbg rounded-3xl">
                Save Changes
              </Button>
            </div>
          </form>
        </div>
      </Card>

     
    </div>
  )
}

export default ResetPassword