import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
const ResetPassword = () => {
  return (
    <div>
     <form>
         
         <div className="flex flex-col gap-4  items-center">
            <h1 className='font-semibold'>Reset Password</h1>
           <Input id="name" placeholder="Enter Your Username Or Email" />
           <Button className=" w-56 border-orange-500 border-2 text-white bg-orange-500 hover:bg-white hover:text-orange-500 rounded-3xl ">Get New Password</Button>
           
           
       </div>
     </form>
   
    </div>
  )
}

export default ResetPassword
