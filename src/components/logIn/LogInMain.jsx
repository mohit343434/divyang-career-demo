import React from 'react'
import Login from './logInCompo/Login'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SignUp from './logInCompo/SignUp'
const LogInMain = () => {
  return (
    <div>
            <Tabs className="w-full" defaultValue={"login"}>
            <TabsList className={"w-full bg-transparent"}>
              <TabsTrigger value="login" className="text-lg">Login</TabsTrigger>
              <TabsTrigger value="signup" className="text-lg">SignUp</TabsTrigger>
            </TabsList>
            <TabsContent value="login" className=" p-5">
            <Login/>
            </TabsContent>
            <TabsContent value="signup" className=" p-5">
            <SignUp/>
            </TabsContent>
          </Tabs>
      
    </div>
  )
}

export default LogInMain
