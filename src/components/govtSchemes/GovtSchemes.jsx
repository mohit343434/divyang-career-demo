import { Button } from '@/components/ui/button';
import axiosInstance from '@/src/utils/axiosConfig';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { convertHtmlToText } from '@/src/utils/HtmlToText';
const GovtSchemes = () => {
  const [allBlog, setBolg] = useState([])

  const getAllBlog = async () => {
    try {

      const res = await axiosInstance.get(`/homepage/article?type=blog&page=1&limit=3`);
      setBolg(res.data.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getAllBlog()
  }, [])

  function getIndianDate(createdAt) {
    // Create a new Date object from the provided UTC date string
    var date = new Date(createdAt);
  
    // Define the Indian Standard Time (IST) offset in milliseconds
    var istOffset = 5.5 * 60 * 60 * 1000; // IST is UTC+5:30
    
    // Calculate the IST time by adding the IST offset to the UTC time
    var istTime = new Date(date.getTime() + istOffset);
    
    // Get the day, month, and year in IST
    var dayInIST = istTime.getDate();
    var monthInIST = istTime.getMonth() + 1; // Adding 1 because months are zero-indexed
    var yearInIST = istTime.getFullYear();
    
    // Concatenate the day, month, and year into a single string
    var indianDate = dayInIST + "/" + monthInIST + "/" + yearInIST;
    
    return indianDate;
  }



  const schemes = [
    { id: 1, date: '17/11/2023', image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', data: 'Embracing Diversity: The Advantages of Hiring People with Disabilities in the Organization' },
    { id: 2, date: '17/11/2023', image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', data: 'Empowering Lives: Unraveling the Umbrella Scheme bdcbj uas lk bujd  iibub c jbiuc lk iiinkz ckl b k i;ibl liubon kc  iun k xc  iu dk i;nuod nklk nib l ui sdk k oljfor Development of Scheduled Castes' },
    { id: 3, date: '17/11/2023', image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', data: 'Empowering Futures: Unraveling the Mukhyamantri Yuva Swavlamban Yojana (MYSY) for Divyang Students' },
  ];
  return (
    <div className='flex flex-col items-center justify-center gap-7 p-8  '>
      <h1 className='text-2xl '>Government Schemes for Divyangjans</h1>
      <p className='text-xl'>Stay updated with the latest schemes for all types of Disabilities</p>
      <div className="flex lg:flex-nowrap flex-wrap gap-8 items-center justify-center">
        {allBlog.map((scheme) => (
          <div key={scheme?._id} className="flex flex-col  justify-center items-right  w-[350px] ">
            <div className=" h-72 bg-cover w-[350px] overflow-hidden rounded-2xl">
              <img className="hover:scale-125 transition-all duration-500 cursor-pointer" src={`https://divyangcareer.s3.ap-south-1.amazonaws.com/assets/images/banner/${scheme?.image}`} alt="" />
            </div>
            <h3 className="text-lg ">{getIndianDate(scheme?.createdAt)}<span className=' text-3xl text-gray-400 px-3'>.</span><span className='text-orange-500 font-medium'>Schemes</span></h3>
            <div className='w-full h-20 overflow-hidden'>
              <span className="text-lg text-gray-700 hover:text-orange-500"> {convertHtmlToText(scheme?.description)}</span>
            </div>
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