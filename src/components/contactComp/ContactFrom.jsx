import { Button } from '@/components/ui/button';
import React from 'react';

const ContactFrom = () => {
  const handelSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
    
    <div className='flex flex-col md:p-10 rounded-lg w-full '>
        <p className='font-medium text-xl pb-4'>Send us a message</p>
        <div className=' bg-gray-50 p-4 rounded-3xl'>
          <form className='py-6 flex  flex-col leading-3 p-8 '>
            <label className='text-lg'>Your name</label> <br />
            <input className=' w-full outline-none border-gray-500 rounded-xl focus:border-none  ' type="text" /> <br />
            <label className='text-lg'>Your email</label> <br />
            <input className='w-full outline-none border-gray-500 rounded-xl focus:border-none ' type="email" /> <br />
            <label className='text-lg'>Subject</label> <br />
            <input className='w-full outline-none border-gray-500 rounded-xl focus:border-none ' type="text" /> <br />
            <label className='text-lg '>Your message (optional)</label> <br />
            <textarea className='w-full outline-none border-gray-500 rounded-xl focus:border-none h-28'></textarea> <br />
            <Button className="w-full mt-6 rounded-3xl bg-divyang hover:bg-divyang  text-white " onClick={handelSubmit}>Submit</Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactFrom;
