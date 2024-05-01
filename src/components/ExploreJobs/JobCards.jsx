import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import LayoutWraper from "@/src/layout/LayoutWraper"
import { Link } from "react-router-dom"
import { Badge } from "@/components/ui/badge"
import { FaRegHeart } from "react-icons/fa6"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CiCamera } from "react-icons/ci";

const jobs = [
    {
        id: 1,
        title: 'Customer Support Executive For Specially Abled',
        category: 'Blood Disorder',
        type: 'NGO',
        location: 'Mumbai',
        salary: '12,500  ₹',
        timeline: '14 ',
        description: 'This job is for Blood Disorder Candidate.'
    },
    {
        id: 2,
        title: 'MERN Developer',
        category: 'Blood Disorder',
        type: 'NGO',
        location: 'Mumbai',
        salary: '11,000  ₹',
        timeline: '14 ',
        description: 'This job is for Blood Disorder Candidate.'
    },
    {
        id: 3,
        title: 'Flutter Developer',
        category: 'Blood Disorder',
        type: 'NGO',
        location: 'Mumbai',
        salary: '10,000  ₹',
        timeline: '14 ',
        description: 'This job is for Blood Disorder Candidate.'
    },
    {
        id: 4,
        title: 'Telecaller',
        category: 'Blood Disorder',
        type: 'NGO',
        location: 'Mumbai',
        salary: '17,000  ₹',
        timeline: '14 ',
        description: 'This job is for Blood Disorder Candidate.'
    },
    {
        id: 5,
        title: 'BPO',
        category: 'Blood Disorder',
        type: 'NGO',
        location: 'Mumbai',
        salary: '7,000  ₹',
        timeline: '14 ',
        description: 'This job is for Blood Disorder Candidate.'
    },
    {
        id: 6,
        title: 'Human Resource',
        category: 'Blood Disorder',
        type: 'NGO',
        location: 'Mumbai',
        salary: '19,0000  ₹',
        timeline: '14 ',
        description: 'This job is for Blood Disorder Candidate.'
    },]



const JobCards = () => {
  return (
<LayoutWraper>

       <Carousel className="md:m-12 m-3">
       <h1 className="text-3xl text-center">Explore Featured Jobs</h1>
        <CarouselContent className="flex items-center">
        {/* {Array.from({ length: 5 }).map((_, index) => ( */}
        {jobs.map(job => (
          <CarouselItem key={job.id} className="p-6 sm:basis-1 md:basis-1/2 lg:basis-1/3 ">
               <Link to='/jobs/:ID'>
             <div className="h-[365px]  md:h-[365px] w-full lg:w-[375px]  border-[1px] border-orange-400 rounded-2xl overflow-auto flex flex-col  gap-4 md:p-8 p-4">
                <div className="flex justify-between">
                <div className=''>
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={job.image} />
                    <AvatarFallback><CiCamera className='text-xl' /></AvatarFallback>
                  </Avatar>
                </div >
                 <div className=" mt-3">
                    <FaRegHeart className=' hover:text-orange-500 text-xl cursor-pointer ' />
                    </div>  

                </div>
                
                <div className=' '>
                
                        
                            <p className="text-lg font-medium hover:text-divyang ">{job.title}</p>
                        
                            <p className="font-medium text-divyang">{job.category}</p>
                </div>
                <div className=''>
                    <Badge className='bg-[#f5ecff] text-[#8369c7] hover:bg-[#deccf4] px-5 py-1 font-normal rounded-2xl m-1 text-sm'>{job.type}</Badge>
                    <Badge className='bg-[#d9eaf5] text-divyang px-5 py-1 hover:bg-[#cae4f5] font-normal rounded-2xl m-1 text-sm'>{job.location}</Badge>
                    <br />
                    <Badge className='bg-[#d9eaf5] text-divyang px-5 hover:bg-[#cae4f5] py-1 font-normal rounded-2xl m-1 text-sm'>{job.salary}</Badge>
                </div>
                <div className='flex justify-between'>
            
                    <p className=" "><span className="text-divyang" >{job.timeline}</span> days left to apply</p>
                </div>
             </div>
             </Link>
           
          </CarouselItem>
        ))}
        
        {/* ))} */}
      </CarouselContent>
      <CarouselPrevious className="md:w-12 md:h-12 bg-gray-200 hidden md:block rounded-full "/>
      <CarouselNext  className="md:w-12 md:h-12 bg-gray-200 hidden md:block  rounded-full"/>
      <Link to="/postJob">
      <p className="text-center">
       
      <Button className="border w-40 border-orange-500 bg-orange-500 text-white hover:bg-orange-700 rounded-3xl">Post Jobs Free </Button>
      </p>
      </Link>
     
    </Carousel>
    </LayoutWraper>
 
  )
}


{/* <Card>
<CardContent className="flex aspect-square items-center justify-center p-6">
  <span className="text-2xl font-semibold"></span>
</CardContent>
</Card> */}

export default JobCards;
