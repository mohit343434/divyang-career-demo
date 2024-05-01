import { Card } from "@/components/ui/card";
import React from "react";
import { Link } from "react-router-dom";

const DashCards = ({ job }) => {
  return (
    <Card className="shadow-md border-gray-200 p-8 w-72">
      <Link to={`${job.link}`}>
        <div className="flex justify-between items-center gap-10">
          <div className="flex flex-col justify-start items-start gap-2">
            <h3 className="text-sm text-gray-500 font-bold hover:text-divyang ">
              {job.title}
            </h3>
            <h3 className="text-3xl font-bold text-gray-700 hover:text-divyang ">
              {job.jobCount}
            </h3>
          </div>
          <div className="rounded-[50%] bg-[#D9EAF5] h-12 w-12 p-4 flex items-center justify-center">
            <span
              className={`text-3xl font-bold ${job.id == 1 && "bg-green-500"} ${
                job.id == 2 && "bg-divyang"
              } ${job.id == 3 && "bg-green-500"} ${
                job.id == 4 && "bg-divyang"
              } rounded-[50%] p-4 text-white`}
            >
              {job.icon}
            </span>
          </div>
        </div>
      </Link>
    </Card>
  );
};
export default DashCards;
