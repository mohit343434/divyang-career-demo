import React from 'react'

const CompanyInformation = () => {
  return (
    <div className='flex flex-col gap-5 '>
      <h1 className='text-3xl'>Information</h1>
      <div>
        <h1>Categories</h1>
        <p className=' text-gray-500'>Hospitality</p>
      </div>
      <div>
        <h1>Company size</h1>
        <p className=' text-gray-500'>10-50</p>
      </div>
      <div>
        <h1>Founded in</h1>
        <p className=' text-gray-500'>2010</p>
      </div>
      <div>
        <h1>Mobile Number</h1>
        <p className=' text-gray-500'>+919226325101</p>
      </div>
      <div>
        <h1>Email</h1>
        <p className=' text-orange-500'>comsaran-bih@nic.in</p>
      </div>
      
    </div>
  )
}

export default CompanyInformation
