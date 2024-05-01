
import { Button } from '@/components/ui/button'
import React from 'react'

const AdminNotificatinCenterMain = () => {
  return (
    <div className=''>
      
     <section className='flex flex-wrap p-10'>
      <div className='flex flex-col gap-2'>
     <input
      type="text"
      placeholder="Full Name "
      required
      className='border-orange-500 '
      />

      <input
      type="text"
      placeholder="Email"
      required
      className='border-orange-500'
      />
     
      <input
      type="email"
      placeholder="Subject"
      required
      className='border-orange-500'
      />

      <textarea
      cols="70"
      rows="10"
      className='border-orange-500'
      />

      <Button className=" bg-orange-500 hover:bg-orange-600">
        Send Message
      </Button>
      </div>

     </section>
    </div>
  )
}

export default AdminNotificatinCenterMain
