import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import PageTitle from "./PageTitle";
import axiosInstance from "@/src/utils/axiosConfig";
import Swal from "sweetalert2";
import Loader from "@/Dashboard/DashboardComponents/GlobalComponents/Loader"

const Title = {
  title: "Settings",
};

const SettingComponent = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);
  const [showNPassword, setShowNPassword] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMismatchError, setPasswordMismatchError] = useState("");
  const [loading , setLoading] = useState(false)

  const handleConfirmPasswordChange = (e) => {
    const { value } = e.target;
    setConfirmPassword(value);
    if (value !== newPassword) {
      setPasswordMismatchError("Passwords do not match");
    } else {
      setPasswordMismatchError("");
    }
  };

  const setting = async (e) => {
    e.preventDefault()
    try {
      if (oldPassword === "" || newPassword === "" || confirmPassword === "") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please fill all the fields",
        });
        return
        }
        setLoading(true)
        const res = await axiosInstance.post(`/candidate/profile/setting`,{
          oldpassword: oldPassword,
          newPassword: newPassword,
        });
        if (res.status === 200) {
          Swal.fire({
            title: "Good job!",
            text: "Change Password",
            icon: "success"
          });
        }
        return
    } catch (error) {
      if (error.response.data.status === "fail") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.message,
        });
      }
      
    }finally{
      setLoading(false)
    }
  
  };

  return (
    <div className="w-full overflow-hidden">
      <div className="w-full">
        <PageTitle Title={Title} />
      </div>
      <Card className="shadow-md border-gray-200 p-6 mt-4 max-w-xl">
        <div className="flex flex-col justify-between gap-10">
          <div className="flex flex-col justify-start items-start gap-2">
            <h3 className="text-xl font-semibold text-gray-700 ">
              Change Password
            </h3>
          </div>

          <form className="flex flex-col justify-start items-start gap-2">
            <div className="flex flex-col gap-4 w-full">
              <div className="w-full">
                <Label htmlFor="password">Current Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter Current Password"
                    onChange={(e) => setOldPassword(e.target.value)} />
                  <span
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  >
                    {showPassword ? <IoMdEyeOff /> : <IoEye />}
                  </span>
                </div>
              </div>
              <div>
                <Label htmlFor="newPassword">New Password</Label>
                <div className="relative">
                  <Input
                    id="newPassword"
                    type={showNPassword ? "text" : "password"}
                    placeholder="Enter New Password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                  {loading && <Loader/>}
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
                <Label htmlFor="confirmPassword">Confirm New Password</Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showCPassword ? "text" : "password"}
                    placeholder="Confirm New Password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
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
              {passwordMismatchError && (
                <p className="text-red-500">{passwordMismatchError}</p>
              )}
              <Button
                className="border-orange-500 border-2 text-white bg-orange-500  hover:bg-divyang rounded-3xl"
                onClick={setting}
                disabled={passwordMismatchError !== ""}
              >
                Save Changes
              </Button>
            </div>
          </form>
        </div>
      </Card>

      <div>
        <p className="text-divyang mt-5">
         
        </p>
      </div>
    </div>
  );
};

export default SettingComponent;
