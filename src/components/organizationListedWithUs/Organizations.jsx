import React from "react";
import img from "../../assets/organizationListedwithUs.png";
import LayoutWraper from "@/src/layout/LayoutWraper";
const Organizations = () => {
  return (
    <LayoutWraper>
      <div className=" flex flex-col justify-center items-center px-16">
        <div className="py-10">
          <img src={img} className="w-[100%]" />
        </div>
      </div>
    </LayoutWraper>
  );
};
export default Organizations;
