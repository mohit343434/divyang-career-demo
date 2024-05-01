import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { IoLocationOutline } from "react-icons/io5";
import { CiCamera } from "react-icons/ci";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const CandidtesCards = ({ job }) => {
  const [invited, setInvited] = useState(false);

  const handleInviteClick = () => {
  
    if (invited) {
      showToastAlreadyInvited();
      return;
    }

    setInvited(true);
    showToastInvitationSent();
  };

  const showToastInvitationSent = () => {
    alert('Invitation sent!');
  };

  const showToastAlreadyInvited = () => {
    alert('Already invited!');
  };

  return (
    <div>
      <div>
        <Card className='p-7 rounded-3xl flex flex-col w-full'>
          <div>
            <div className='flex justify-between'>
              <div className='md:flex-row flex-wrap flex flex-col'>
                <div className='p-2'>
                  <Avatar className="h-14 w-14">
                    <AvatarImage src={job.image} />
                    <AvatarFallback><CiCamera className='text-xl'/></AvatarFallback>
                  </Avatar>
                </div>
                <div className='flex flex-col'>
                  <div className='flex'>
                    <Link to='/candidates/:ID'>
                      <h3 className="text-lg font-semibold hover:text-divyang ml-2">{job.name}</h3>
                    </Link>
                  </div>
                  <div className='flex gap-1'>
                    <span className='text-orange-500 font-semibold pl-2'>{job.category}</span>
                    <IoLocationOutline className='text-xl' />
                    <span className='hover:underline'>{job.location}</span>
                  </div>
                </div>
              </div>
              {/* Conditionally rendering button text based on invited state */}
              <Button className={`bg-white text-${invited ? 'gray-500' : 'orange-500'} hover:text-${invited ? 'gray-500' : 'white'} hover:bg-${invited ? 'gray-500' : 'orange-500'} border border-${invited ? 'gray-500' : 'orange-500'} rounded-full text-base`} onClick={handleInviteClick}>
                {invited ? 'Invited' : '+ Invite'}
              </Button>
            </div>
          </div>
          <span className='text-start text-lg py-3 text-gray-500'>{job.description}</span>
        </Card>
      </div>
    </div>
  );
};

export default CandidtesCards;
