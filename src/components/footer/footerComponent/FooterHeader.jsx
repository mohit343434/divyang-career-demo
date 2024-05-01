import LayoutWraper from "@/src/layout/LayoutWraper";
import React from "react";
const FooterHeader = () => {
  return (
    <div className="py-10 border-t border-b border-gray-200 ">
<LayoutWraper>
      <div className="md:flex-row lg:flex-row md:px-18 justify-between gap-5 flex flex-col px-5" >
       
        <div className="flex flex-col basis-1/2 items-center md:items-start">
          <h3 className=" text-3xl font-medium ">
            Subscribe to our newsletter
          </h3>
          <p className="text-gray-700">
            We'll keep you updated with the best new jobs.
          </p>
        </div>


        <div className="md:flex-row gap-3 flex flex-col w-full basis-1/2">
          <div className="basis-2/3">
            <input
              type="email"
              name=""
              id=""
              className="p-2 h-12 border border-gray-400 rounded-full w-full  placeholder-gray-400 px-6 "
              placeholder="Enter your email"
            />
          </div>
          <div className="basis-1/3">
            <button
              type="button"
              className="h-12 e text-white items-center lg:w-full justify-center px-8 w-full py-2 rounded-full bg-orange-500 hover:bg-orange-600 focus:outline-none "
              placeholder="Enter your email"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
      </LayoutWraper>
    </div>
  );
};
export default FooterHeader;
