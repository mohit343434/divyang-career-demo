import { Button } from '@/components/ui/button';
import React from 'react'
import { Link } from 'react-router-dom';
const GovtSchemes = () => {
  const schemes = [
    { id: 1, date: '17/11/2023', image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', data: 'Embracing Diversity: The Advantages of Hiring People with Disabilities in the Organization' },
    { id: 2, date: '17/11/2023', image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', data: 'Empowering Lives: Unraveling the Umbrella Scheme for Development of Scheduled Castes' },
    { id: 3, date: '17/11/2023', image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', data: 'Empowering Futures: Unraveling the Mukhyamantri Yuva Swavlamban Yojana (MYSY) for Divyang Students' },
  ];
  return (
    <div className='flex flex-col items-center justify-center gap-7 p-8  '>
      <h1 className='text-2xl '>Government Schemes for Divyangjans</h1>
      <p className='text-xl'>Stay updated with the latest schemes for all types of Disabilities</p>
      <div className="flex lg:flex-nowrap flex-wrap gap-8 items-center justify-center">
        {schemes.map((scheme) => (
          <div key={scheme.id} className="flex flex-col  justify-center items-right  w-[350px] ">
            <div className=" h-min w-[350px] overflow-hidden rounded-2xl">
              <img className="hover:scale-125 transition-all duration-500 cursor-pointer" src={scheme.image} alt="" />
            </div>
            <h3 className="text-lg ">{scheme.date}<span className=' text-3xl text-gray-400 px-3'>.</span><span className='text-orange-500 font-medium'>Blog</span></h3>
            <span className="text-lg text-gray-700 hover:text-orange-500">{scheme.data}</span>
          </div>
        ))}
      </div>
      <Link to="/schemes">
      <Button className="border border-orange-500 bg-white text-orange-500 hover:text-white hover:bg-orange-500 rounded-3xl">View All Schemes</Button>
      </Link>
    </div>
  );
}
export default GovtSchemes