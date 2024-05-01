import { Button } from '@/components/ui/button'
import React,{useState} from 'react'
import { IoPersonOutline } from "react-icons/io5";
import { SlBriefcase } from "react-icons/sl";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
const SignUp = () => {
  const [changePassword, setChangePassword] = useState(true);
  return (
    <div className='flex flex-col gap-2'>
      <Tabs className="w-full" defaultValue={"login"}>
            <TabsList className={"w-full bg-transparent flex gap-4"}>
              <TabsTrigger value="login" className="w-full bg-gray-300 text-black focus:bg-orange-500 focus:text-white hover:bg-gray-300 hover:text-black border-none"><IoPersonOutline/> &nbsp;&nbsp;Candidate</TabsTrigger>
              <TabsTrigger value="signup" className="w-full  bg-gray-300 text-black focus:bg-orange-500 focus:text-white hover:bg-gray-300 hover:text-black border-none"> <SlBriefcase/>&nbsp;&nbsp; Employer</TabsTrigger>
            </TabsList>
            <TabsContent value="login" className=" p-5">
            <div className='flex  flex-col gap-4 '>
      <div className='flex gap-7'>
        <div className='w-full'>
        <Label htmlFor="name">First Name</Label>
        <Input id="name" placeholder="First Name" />
        </div>
        <div className='w-full'>
        <Label htmlFor="name">Last Name</Label>
        <Input id="name" placeholder="Last Name" />
        </div>
        </div>
       <div>
       <Label htmlFor="name">Username</Label>
        <Input id="name" placeholder="Enter Username " />
       </div>
       <div>
       <Label htmlFor="name">Email</Label>
        <Input id="name" placeholder="Enter email" />
       </div>
       <div>
       <Label htmlFor="name">Phone</Label>
        <Input id="name" placeholder="Enter Phone" />
       </div>
       <div>
       <Label htmlFor="name">Password</Label>
       <div className="relative">
        <Input type={changePassword ? "password" : "text"} id="name"   placeholder="Enter password" />
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
       <Button className=" w-full border-orange-500 border-2 text-white bg-orange-500 hover:bg-white hover:text-orange-500 rounded-3xl ">Sign In</Button>
      </div>

            </TabsContent>
            <TabsContent value="signup" className=" p-5">
            <div className='flex  flex-col gap-4 '>
      <div className='flex gap-7'>
        <div className='w-full'>
        <Label htmlFor="name">First Name</Label>
        <Input id="name" placeholder="First Name" />
        </div>
        <div className='w-full'>
        <Label htmlFor="name">Last Name</Label>
        <Input id="name" placeholder="Last Name" />
        </div>
        </div>
       <div>
       <Label htmlFor="name">Username</Label>
        <Input id="name" placeholder="Enter Username " />
       </div>
       <div>
       <Label htmlFor="name">Email</Label>
        <Input id="name" placeholder="Enter email" />
       </div>
       <div>
       <Label htmlFor="name">Phone</Label>
        <Input id="name" placeholder="Enter Phone" />
       </div>
       <div>
       <Label htmlFor="name">Password</Label>
        <Input id="name"   placeholder="Enter password" />
       </div>
       <Button className=" w-full border-orange-500 border-2 text-white bg-orange-500 hover:bg-white hover:text-orange-500 rounded-3xl ">Sign In</Button>
      </div>

            </TabsContent>
          </Tabs>
      
    </div>
  )
}

export default SignUp
