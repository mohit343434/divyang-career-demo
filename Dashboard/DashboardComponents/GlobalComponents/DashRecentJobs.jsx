import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import React from 'react'

const DashRecentJobs = () => {
  return (
    <Card className="shadow-md border-gray-200 p-6 w-full ">
    <div className="flex flex-col justify-between gap-10">
      <div className="flex flex-col justify-start items-start gap-2">
        <h3 className="text-2xl font-semibold text-gray-700   ">
        Recently Applied jobs
        </h3>
        <h3 className="text-sm text-gray-400 ">
        No item found
        </h3>
      </div>
      <div className="p-4 flex items-center justify-center">
      <Button className="flex justify-center items-center bg-white border-2 text-black text-xl border-black hover:bg-orange-500 hover:text-white p-5 w-full">All Applied</Button>
      </div>
    </div>
  </Card>
  )
}

export default DashRecentJobs