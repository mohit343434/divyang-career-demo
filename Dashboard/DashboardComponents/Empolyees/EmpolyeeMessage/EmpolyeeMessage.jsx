import React from 'react'
import PageTitle from '../../GlobalComponents/PageTitle';

const EmpolyeeMessage = () => {
  const Title = {
    title: "Messages",
  };
  return (
    // <!-- component -->
    
    <>
    <div className='flex flex-col border w-full ' >
        <div className='mt-5 ml-5'>
        <div className="w-full">
        <PageTitle Title={Title} />
      </div>
        </div>


      <div className="w-full h-32"  />
      <div className="container mx-auto"   >
        <div className=" mt-5 h-screen" style={{ background: "#ffffff" }} >
          <div className="flex border border-grey rounded shadow-lg h-full">
            {/* Left */}
            <div className="w-1/2 border flex flex-col">
              {/* Header */}
              <div className="py-2 px-3 bg-grey-lighter flex flex-row justify-between items-center">
                <div>
                  <span>All </span>
                </div>
              </div>
              {/* Contacts */}
              <div className="bg-grey-lighter flex-1 overflow-auto">
                <div className="px-3 py-3 flex items-center bg-grey-light cursor-pointer">
                  <div>
                    <img className="h-12 w-12 rounded-full" src="https://darrenjameseeley.files.wordpress.com/2014/09/expendables3.jpeg" />
                  </div>
                  <div className=" ml-2 flex-1 border-b border-grey-lighter ">
                    <div className="flex  items-bottom justify-between">
                      <p className="text-grey-darkest">
                        New Movie! Expendables 4
                      </p>
                    </div>
                  </div>
                </div>
                <div className="px-3 py-3 flex items-center bg-grey-light cursor-pointer">
                  <div>
                  <img className="h-12 w-12 rounded-full" src="https://www.famousbirthdays.com/headshots/russell-crowe-6.jpg" />
                  </div>
                  <div className=" ml-2 flex-1 border-b border-grey-lighter ">
                    <div className="flex  items-bottom justify-between">
                      <p className="text-grey-darkest">
                        New Movie! Expendables 4
                      </p>
                    </div>
                  </div>
                </div>
               <div className="px-3 py-3 flex items-center bg-grey-light cursor-pointer">
                  <div>
                    <img className="h-12 w-12 rounded-full" src="https://darrenjameseeley.files.wordpress.com/2014/09/expendables3.jpeg" />
                  </div>
                  <div className=" ml-2 flex-1 border-b border-grey-lighter ">
                    <div className="flex  items-bottom justify-between">
                      <p className="text-grey-darkest">
                        New Movie! Expendables 4
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Right */}
            <div className="w-full border flex flex-col">
              {/* Header */}
              <div className="py-2 px-3 bg-grey-lighter flex flex-row justify-between items-center">
                <div className="flex items-center">
                  <div>
                    <img className="w-10 h-10 rounded-full" src="https://darrenjameseeley.files.wordpress.com/2014/09/expendables3.jpeg" />
                  </div>
                  <div className="ml-4">
                    <p className="text-grey-darkest">
                      New Movie! Expendables 4
                    </p>
                    <hr />
                  </div>
                </div>
              </div>
              {/* Messages */}
              <div className="flex-1 overflow-auto" >
                <div className="py-2 px-3">
                  <div className="flex mb-2">
                    <div className="rounded py-2 px-3" style={{ backgroundColor: '#F2F2F2' }}>
                      <p className="text-sm text-teal">
                        Sylverter Stallone
                      </p>
                      <p className="text-sm mt-1">
                        Hi everyone! Glad you could join! I am making a new movie.
                      </p>
                      <p className="text-right text-xs text-grey-dark mt-1">
                        12:45 pm
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-2">
                    <div className="rounded py-2 px-3" style={{ backgroundColor: '#F2F2F2' }}>
                      <p className="text-sm text-purple">
                        Tom Cruise
                      </p>
                      <p className="text-sm mt-1">
                        Hi all! I have one question for the movie
                      </p>
                      <p className="text-right text-xs text-grey-dark mt-1">
                        12:45 pm
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-2">
                    <div className="rounded py-2 px-3" style={{ backgroundColor: '#F2F2F2' }}>
                      <p className="text-sm text-orange">
                        Harrison Ford
                      </p>
                      <p className="text-sm mt-1">
                        Again?
                      </p>
                      <p className="text-right text-xs text-grey-dark mt-1">
                        12:45 pm
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-2">
                    <div className="rounded py-2 px-3" style={{ backgroundColor: '#F2F2F2' }}>
                      <p className="text-sm text-orange">
                        Russell Crowe
                      </p>
                      <p className="text-sm mt-1">
                        Is Andrés coming for this one?
                      </p>
                      <p className="text-right text-xs text-grey-dark mt-1">
                        12:45 pm
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-2">
                    <div className="rounded py-2 px-3" style={{ backgroundColor: '#F2F2F2' }}>
                      <p className="text-sm text-teal">
                        Sylverter Stallone
                      </p>
                      <p className="text-sm mt-1">
                        He is. Just invited him to join.
                      </p>
                      <p className="text-right text-xs text-grey-dark mt-1">
                        12:45 pm
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-end mb-2">
                    <div className="rounded py-2 px-3" style={{ backgroundColor: '#E2F7CB' }}>
                      <p className="text-sm mt-1">
                        Hi guys.
                      </p>
                      <p className="text-right text-xs text-grey-dark mt-1">
                        12:45 pm
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-end mb-2">
                    <div className="rounded py-2 px-3" style={{ backgroundColor: '#E2F7CB' }}>
                      <p className="text-sm mt-1">
                        Count me in
                      </p>
                      <p className="text-right text-xs text-grey-dark mt-1">
                        12:45 pm
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-2">
                    <div className="rounded py-2 px-3" style={{ backgroundColor: '#F2F2F2' }}>
                      <p className="text-sm text-purple">
                        Tom Cruise
                      </p>
                      <p className="text-sm mt-1">
                        Get Andrés on this movie ASAP!
                      </p>
                      <p className="text-right text-xs text-grey-dark mt-1">
                        12:45 pm
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Input */}
              <div className="bg-grey-lighter px-4 py-4 gap-2 flex items-center">
                <div className="flex-1 mx-4">
                  <input className="w-full border focus:ring-0 rounded-xl  focus:border-gray-200  px-2 py-2" type="text" />
                </div>
                <div>
                  <button className='p-3 w-24 rounded-3xl text-white bg-divyang' >Send</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>


    </>


  )
}

export default EmpolyeeMessage