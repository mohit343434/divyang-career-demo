import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { IoLocationOutline } from "react-icons/io5";
import { CiCamera } from "react-icons/ci";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BsPeople } from "react-icons/bs";
import { Badge } from '@/components/ui/badge';
import { CiFolderOn } from "react-icons/ci";
const CompaniesCard = ({ job }) => {
  const [Following, setFollowing] = useState(false);

  const handleInviteClick = () => {

    if (Following) {
      showToastAlreadyInvited();
      return;
    }

    setFollowing(true);
    showToastInvitationSent();
  };

  const showToastInvitationSent = () => {
    alert('Invitation sent!');
  };

  const showToastAlreadyInvited = () => {
    alert('Already Following!');
  };

  return (
    <div>
      <div>
        <Card className='p-7 rounded-3xl flex flex-col w-full shadow-md'>
          <div>
            <div className='flex justify-between'>
              <div className='md:flex-row flex-wrap flex flex-col'>
                <div className='p-2'>
                  <Avatar className="h-14 w-14">
                    <AvatarImage src={job.image} />
                    <AvatarFallback><CiCamera className='text-xl' /></AvatarFallback>
                  </Avatar>
                </div>
                <div className='flex flex-col'>
                  <div className='flex'>
                    <Link to='/companies/:id'>
                      <h3 className="text-lg hover:text-divyang p-1">{job.companyName}</h3>
                    </Link>
                  </div>
                  <div className='flex gap-3 p-1 text-gray-600 font-medium'>
                    <div className='flex'>
                      <BsPeople className='text-xl' />
                      <span className=' pl-2'>{job.companySize}</span>
                    </div>
                    <div className='flex'>
                      <IoLocationOutline className='text-xl' />
                      <span className='hover:underline'>{job.location}</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Conditionally rendering button text based on invited state */}
              <Button className={`bg-white text-${Following ? 'gray-500' : 'orange-500'} hover:text-${Following? 'gray-500' : 'white'} hover:bg-${Following ? 'gray-500' : 'orange-500'} border border-${Following ? 'gray-500' : 'orange-500'} rounded-full text-base`} onClick={handleInviteClick}>
                {Following ? 'Following' : '+ Follow'}
              </Button>
            </div>
          </div>
          <div className='flex justify-between pt-6'>
                <div className='flex gap-4'>
                   
                    <Badge className='bg-gray-100 text-divyang  p-2 text-sm rounded-xl font-normal hover:bg-gray-200'><CiFolderOn  className='text-xl'/>&nbsp;&nbsp;{job.categories}</Badge>
                </div>
                <div >
                   
                    <p className=" flex "><span className='text-orange-500'>{job.jobs} &nbsp;</span> Jobs available</p>
                </div>
                </div>
        </Card>
      </div>
    </div>
  )
}

export default CompaniesCard
