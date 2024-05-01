import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const Information = () => {
  return (
    <div className='flex flex-col gap-5 '>
      <h1 className='text-3xl'>Information</h1>
      <div>
        <h1>Gender</h1>
        <p className=' text-gray-500'>Male</p>
      </div>
      <div>
        <h1>Qualification</h1>
        <p className=' text-gray-500'>Bachelor Degree</p>
      </div>
      <div>
        <h1>Age</h1>
        <p className=' text-gray-500'>35</p>
      </div>
      <div>
        <h1>Mobile Number</h1>
        <p className=' text-gray-500'>+919226325101</p>
      </div>
      <div>
        <h1>Email</h1>
        <p className=' text-orange-500'>pradeeptraje@gmail.com</p>
      </div>
      <div className='flex gap-4 text-gray-500 text-xl py-6'>
      <FaFacebookF />
      <FaTwitter />
      <FaLinkedin />
      <FaYoutube />
      </div>
    </div>
  )
}

export default Information
