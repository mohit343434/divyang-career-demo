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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CiCamera } from "react-icons/ci";
import axiosInstance from "@/src/utils/axiosConfig"


const JobCards = () => {
  const [allJob, setAllJob] = React.useState([])
  const getAllJob = async () => {
    try {   
      const res = await axiosInstance.get(`/homepage/job`, {
        params: {
          limit: 6
        }
      })
      setAllJob(res.data.job);
    } catch (error) {
    console.log(error);
    }
  }

  React.useEffect(() => {
    getAllJob()
  }, [])


  function convertToIndianTime(utcDate) {
    let date = new Date(utcDate);
    let istOffset = 5.5 * 60 * 60 * 1000;
    let istTime = new Date(date.getTime() + istOffset);
    let dayInIST = istTime.getDate();
    return dayInIST;
  }

  return (
    <LayoutWraper>
      <Carousel className="md:m-12 m-3">
        <h1 className="text-3xl text-center">Explore Featured Jobs</h1>
        <CarouselContent className="flex items-center">
          {allJob.map(job => (
            <CarouselItem key={job.id} className="p-6 sm:basis-1 md:basis-1/2 lg:basis-1/3 ">
              <Link to={`/jobs/${job._id}`}>
                <div className="h-[365px]  md:h-[365px] w-full lg:w-[375px]  border-[1px] border-orange-400 rounded-2xl overflow-auto flex flex-col  gap-4 md:p-8 p-4">
                  <div className="flex justify-between">
                    <div className=''>
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={"job.image"} />
                        <AvatarFallback><CiCamera className='text-xl' /></AvatarFallback>
                      </Avatar>
                    </div >
                    <div className=" mt-3">
                      <FaRegHeart className=' hover:text-orange-500 text-xl cursor-pointer ' />
                    </div>
                  </div>
                  <div className=' '>
                    <p className="text-lg font-medium hover:text-divyang ">{job?.title}</p>
                    <p className="font-medium text-divyang">{job?.companyId?.name}</p>
                  </div>

                  <div className=''>
                    <Badge className='bg-[#f5ecff] text-[#8369c7] hover:bg-[#deccf4] px-5 py-1 font-normal rounded-2xl m-1 text-sm'>{job?.type}</Badge>
                    <Badge className='bg-[#d9eaf5] text-divyang px-5 py-1 hover:bg-[#cae4f5] font-normal rounded-2xl m-1 text-sm'>{job?.gender}</Badge>
                    <br />
                    <Badge className='bg-[#d9eaf5] text-divyang px-5 hover:bg-[#cae4f5] py-1 font-normal rounded-2xl m-1 text-sm'>{job?.qualification}</Badge>
                  </div>
                  <div className='flex justify-between'>
                    <p className=" "><span className="text-divyang" >{convertToIndianTime(job.endDate)}</span> days left to apply</p>
                  </div>
                </div>
              </Link>
            </CarouselItem>
          ))}

          {/* ))} */}
        </CarouselContent>
        <CarouselPrevious className="md:w-12 md:h-12 bg-gray-200 hidden md:block rounded-full " />
        <CarouselNext className="md:w-12 md:h-12 bg-gray-200 hidden md:block  rounded-full" />
        {/* <Link to="/login">
          <p className="text-center">
            <Button className="border w-40 border-orange-500 bg-orange-500 text-white hover:bg-orange-700 rounded-3xl">Post Jobs Free </Button>
          </p>
        </Link> */}

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
