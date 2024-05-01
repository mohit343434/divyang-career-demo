import React from 'react'

const CompanyLocation = () => {
  return (
    <div>
         <div className='flex gap-20'>
        <h1 className='text-2xl'>Location</h1>
        <u className='text-orange-500'>Get Diarection</u>
        
    </div>
    <div className='w-full h-56 border mt-6'>
       
        <iframe className='w-full h-full' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15068.702981685348!2d72.860734!3d19.231171!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b16828f59939%3A0xc0d365e39e071ace!2sGirish%20Ghanshyam%20Dube!5e0!3m2!1sen!2sus!4v1711003511708!5m2!1sen!2sus" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      </div>
  )
}

export default CompanyLocation
