import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import LogIn from './LogIn'
import SignUp from './SignUp'
import { Card } from '@/components/ui/card'

const PostAjobForm = () => {
  return (
    <div className='flex flex-col items-center gap-6 p-5'>
    <h1 className='text-4xl font-semibold text-white'>Are you a recruiter?</h1>
    <h1 className='text-4xl font-semibold text-white'>Become a member now</h1>
    
    <Card className="h-fit p-5 md:w-[550px] ">
    <div >
      
            <Tabs className="w-full" defaultValue={"login"}>
            <TabsList className={"w-full bg-transparent"}>
              <TabsTrigger value="login" className="text-lg border-none">Login</TabsTrigger>
              <TabsTrigger value="signup" className="text-lg border-none">SignUp</TabsTrigger>
            </TabsList>
            <TabsContent value="login" className=" p-5">
            <LogIn/>
            </TabsContent>
            <TabsContent value="signup" className=" p-5">
            <SignUp/>
            </TabsContent>
          </Tabs>
      
    </div>
    </Card>
    </div>
  )
}

export default PostAjobForm
