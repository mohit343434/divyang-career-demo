import React, { useState } from "react";
import vdo from "../../assets/videoplayback.mp4";
import { IoIosSearch } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { BiTargetLock } from "react-icons/bi";
import { SlPeople } from "react-icons/sl";
import { PiFilesThin } from "react-icons/pi";
import { Link } from "react-router-dom";

const SearchSection = () => {
  const [search, setSearch] = useState("")

  return (
    <div className="relative overflow-hidden w-full h-[500px] ">
      <video
        src={vdo}
        autoPlay
        loop
        muted
        className="w-full h-auto object-cover hidden md:block"
      />
      <div className="absolute top-0 left-0 w-full h-[500px] bg-opacity-50 bg-[#FE6200] backdrop-brightness-75 flex flex-col items-center justify-center gap-6">
        <h1 className="md:text-4xl text-2xl text-center font-bold text-white ">
          Private, Government and NGO Jobs for you!
        </h1>
        <div className="md:w-[500px] w-[80%]  p-3 bg-white md:rounded-full rounded-2xl gap-3     md:flex-row flex flex-col items-center justify-center">
          <div className="flex">
            <IoIosSearch className="text-2xl mt-2" />
            <input
              type="text"
              className=" h-10 font-medium border-none focus:ring-0"
              placeholder="Jobs title or Keywords"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <Link to={`/jobs?search=${search}`}>
            <Button className="bg-orange-500 w-[80%] md:w-36 rounded-3xl text-md hover:bg-orange-600">
              Search
            </Button>
          </Link>
        </div>
        <div className="flex md:flex-row justify-center items-center gap-10 mt-6">
          <div className="md:flex-row flex flex-col items-center text-white">
            <BiTargetLock className="text-[50px]" />
            <div className="ml-2 flex justify-center flex-col ">
              <h3 className="text-center md:text-left">1000+</h3>
              <h3 className="text-center md:text-left">
                jobs to empower <br /> divyangjans
              </h3>
            </div>
          </div>
          <div className="md:flex-row  flex flex-col items-center text-white">
            <SlPeople className="text-[50px]" />
            <div className="ml-2 flex justify-center flex-col">
              <h3 className="text-center md:text-left">150+</h3>
              <h3 className="text-center md:text-left">
                Equal Opportunity <br />
                Employers
              </h3>
            </div>
          </div>
          <div className="md:flex-row  flex flex-col items-center text-white">
            <PiFilesThin className="text-[50px]" />
            <div className="ml-2 flex justify-center flex-col">
              <h3 className="text-center md:text-left">500+</h3>
              <h3 className="text-center md:text-left">
                Divyangjans Candidate <br />
                Profiles
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
