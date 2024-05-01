import React from "react";
import PageTitle from "../../GlobalComponents/PageTitle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Title = {
  title: "Messages",
};

const CandidateMessage = () => {
  return (
    <div className="w-full overflow-hidden">
      <PageTitle Title={Title} />
      <div className="w-full mx-auto" />

      <div className="h-screen mt-3" style={{ background: "#ffffff" }}>
        <div className="flex border border-grey rounded shadow-lg h-full">
          {/* Left */}
          <div className="w-1/2 border flex flex-col">
            {/* Header */}
            <Tabs className=" w-full" defaultValue="All">
              <TabsList className="w-full">
                <TabsTrigger value="All" className="text-xl">
                  All
                </TabsTrigger>
                <TabsTrigger value="Unread" className="text-xl">
                  Unread
                </TabsTrigger>
              </TabsList>

              <TabsContent value="All" className="">
                {/* Contacts */}
                <div className="bg-grey-lighter flex-1 overflow-auto">
                  <div className="border-b border-grey-lighter px-3 py-3 rounded-md flex items-center cursor-pointer bg-grey-lighter">
                    <div>
                      <img
                        className="h-12 w-12 rounded-full"
                        src="https://darrenjameseeley.files.wordpress.com/2014/09/expendables3.jpeg"
                      />
                    </div>
                    <div className=" ml-2 flex-1">
                      <div className="flex  items-bottom justify-between">
                        <p className="text-grey-darkest">User 1</p>
                      </div>
                    </div>
                  </div>
                  <div className="border-b border-grey-lighter px-3 py-3 rounded-md flex items-center cursor-pointer bg-grey-lighter">
                    <div>
                      <img
                        className="h-12 w-12 rounded-full"
                        src="https://www.famousbirthdays.com/headshots/russell-crowe-6.jpg"
                      />
                    </div>
                    <div className=" ml-2 flex-1">
                      <div className="flex  items-bottom justify-between">
                        <p className="text-grey-darkest">User 2</p>
                      </div>
                    </div>
                  </div>
                  <div className="border-b border-grey-lighter px-3 py-3 rounded-md flex items-center cursor-pointer bg-grey-lighter">
                    <div>
                      <img
                        className="h-12 w-12 rounded-full"
                        src="https://darrenjameseeley.files.wordpress.com/2014/09/expendables3.jpeg"
                      />
                    </div>
                    <div className=" ml-2 flex-1">
                      <div className="flex  items-bottom justify-between">
                        <p className="text-grey-darkest">User 3</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="Unread" className="">
                {/* Contacts */}
                <div className="bg-grey-lighter flex-1 overflow-auto">
                  <div className="border-b border-grey-lighter px-3 py-3 rounded-md flex items-center cursor-pointer bg-grey-lighter">
                    <div>
                      <img
                        className="h-12 w-12 rounded-full"
                        src="https://www.famousbirthdays.com/headshots/russell-crowe-6.jpg"
                      />
                    </div>
                    <div className=" ml-2 flex-1">
                      <div className="flex  items-bottom justify-between">
                        <p className="text-grey-darkest">User 2</p>
                      </div>
                    </div>
                  </div>
                  <div className="border-b border-grey-lighter px-3 py-3 rounded-md flex items-center cursor-pointer bg-grey-lighter">
                    <div>
                      <img
                        className="h-12 w-12 rounded-full"
                        src="https://darrenjameseeley.files.wordpress.com/2014/09/expendables3.jpeg"
                      />
                    </div>
                    <div className=" ml-2 flex-1">
                      <div className="flex  items-bottom justify-between">
                        <p className="text-grey-darkest">User 4</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          {/* Right */}
          <div className="w-full border flex flex-col">
            {/* Header */}
            <div className="py-2 px-3 bg-grey-lighter flex flex-row justify-between items-center">
              <div className="flex items-center">
                <div>
                  <img
                    className="w-10 h-10 rounded-full"
                    src="https://darrenjameseeley.files.wordpress.com/2014/09/expendables3.jpeg"
                  />
                </div>
                <div className="ml-4">
                  <p className="text-grey-darkest">User 1</p>
                  <hr />
                </div>
              </div>
            </div>
            {/* Messages */}
            <div className="flex-1 overflow-auto">
              <div className="py-2 px-3">
                <div className="flex mb-2">
                  <div
                    className="rounded py-2 px-3"
                    style={{ backgroundColor: "#F2F2F2" }}
                  >
                    <p className="text-sm text-teal">Sylverter Stallone</p>
                    <p className="text-sm mt-1">
                      Hi everyone! Glad you could join! I am making a new movie.
                    </p>
                    <p className="text-right text-xs text-grey-dark mt-1">
                      12:45 pm
                    </p>
                  </div>
                </div>
                <div className="flex mb-2">
                  <div
                    className="rounded py-2 px-3"
                    style={{ backgroundColor: "#F2F2F2" }}
                  >
                    <p className="text-sm text-purple">Tom Cruise</p>
                    <p className="text-sm mt-1">
                      Hi all! I have one question for the movie
                    </p>
                    <p className="text-right text-xs text-grey-dark mt-1">
                      12:45 pm
                    </p>
                  </div>
                </div>
                <div className="flex mb-2">
                  <div
                    className="rounded py-2 px-3"
                    style={{ backgroundColor: "#F2F2F2" }}
                  >
                    <p className="text-sm text-orange">Harrison Ford</p>
                    <p className="text-sm mt-1">Again?</p>
                    <p className="text-right text-xs text-grey-dark mt-1">
                      12:45 pm
                    </p>
                  </div>
                </div>
                <div className="flex mb-2">
                  <div
                    className="rounded py-2 px-3"
                    style={{ backgroundColor: "#F2F2F2" }}
                  >
                    <p className="text-sm text-orange">Russell Crowe</p>
                    <p className="text-sm mt-1">
                      Is Andrés coming for this one?
                    </p>
                    <p className="text-right text-xs text-grey-dark mt-1">
                      12:45 pm
                    </p>
                  </div>
                </div>
                <div className="flex mb-2">
                  <div
                    className="rounded py-2 px-3"
                    style={{ backgroundColor: "#F2F2F2" }}
                  >
                    <p className="text-sm text-teal">Sylverter Stallone</p>
                    <p className="text-sm mt-1">
                      He is. Just invited him to join.
                    </p>
                    <p className="text-right text-xs text-grey-dark mt-1">
                      12:45 pm
                    </p>
                  </div>
                </div>
                <div className="flex justify-end mb-2">
                  <div
                    className="rounded py-2 px-3"
                    style={{ backgroundColor: "#E2F7CB" }}
                  >
                    <p className="text-sm mt-1">Hi guys.</p>
                    <p className="text-right text-xs text-grey-dark mt-1">
                      12:45 pm
                    </p>
                  </div>
                </div>
                <div className="flex justify-end mb-2">
                  <div
                    className="rounded py-2 px-3"
                    style={{ backgroundColor: "#E2F7CB" }}
                  >
                    <p className="text-sm mt-1">Count me in</p>
                    <p className="text-right text-xs text-grey-dark mt-1">
                      12:45 pm
                    </p>
                  </div>
                </div>
                <div className="flex mb-2">
                  <div
                    className="rounded py-2 px-3"
                    style={{ backgroundColor: "#F2F2F2" }}
                  >
                    <p className="text-sm text-purple">Tom Cruise</p>
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
                <input
                  className="w-full border focus:ring-0 rounded-xl  focus:border-gray-200  px-2 py-2"
                  type="text"
                />
              </div>
              <div>
                <button className="p-3 w-24 rounded-3xl text-white bg-divyang">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateMessage;
