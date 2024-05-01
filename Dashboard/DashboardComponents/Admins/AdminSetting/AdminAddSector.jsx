import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import React from 'react'

const AdminAddSector = () => {
  return (
    <div >
       <Card  className=" flex flex-col gap-5 shadow-md border-gray-200 p-6 mt-4 max-w-xl">
       <h3 className="text-xl font-semibold text-gray-700 ">
              Add Sector
            </h3>
        <input className='h-11 border rounded-xl px-3'
        placeholder="Enter Sector"
        />
        <Button className=" bg-orange-500 hover:bg-orange-500 rounded-3xl"> Add +</Button>
       </Card>
    </div>
  )
}

export default AdminAddSector
