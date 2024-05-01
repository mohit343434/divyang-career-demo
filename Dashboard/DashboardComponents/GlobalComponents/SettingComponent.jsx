import { Card } from "@/components/ui/card";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import PageTitle from "./PageTitle";

const Title = {
  title: "Settings",
};

const SettingComponent = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);
  const [showNPassword, setShowNPassword] = useState(false);
  return (
    <div className="w-full overflow-hidden">
      <div className="w-full">
        <PageTitle Title={Title} />
      </div>
      <Card className="shadow-md border-gray-200 p-6 mt-4 max-w-xl">
        <div className="flex flex-col justify-between gap-10">
          <div className="flex flex-col justify-start items-start gap-2">
            <h3 className="text-xl font-semibold text-gray-700 ">
              change password
            </h3>
          </div>

          <form className="flex flex-col justify-start items-start gap-2">
            <div className="flex flex-col gap-4 w-full">
              <div className="w-full">
                <Label htmlFor="password">Current password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter Current password"
                    className="outline-none"
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
              </div>
              <div>
                <Label htmlFor="Npassword">New password</Label>
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
                <Label htmlFor="Cpassword">Confirm new password</Label>
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

      <div>
        <p className="text-divyang mt-5">
          <span className="cursor-pointer hover:text-black">
            {" "}
            Deactive account{" "}
          </span>
        </p>
      </div>
    </div>
  );
};

export default SettingComponent;
