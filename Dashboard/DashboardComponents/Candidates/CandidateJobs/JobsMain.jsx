import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CandidateApplications from "./CandidateApplications";
import PageTitle from "../../GlobalComponents/PageTitle";
import CandidteWishlist from "./CandidteWishlist"


const Title = {
  title: "My Jobs",
};
const JobsMain = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col">
        <div className="w-full">
          <PageTitle Title={Title} />
        </div>
        <Tabs className=" w-full" defaultValue={"Applied"}>
          <TabsList className="w-full bg-transparent">
            <TabsTrigger value="Applied" className="text-xl">
              Applied
            </TabsTrigger>
            <TabsTrigger value="Wishlist" className="text-xl">
              Wishlist
            </TabsTrigger>
          </TabsList>
          <TabsContent value="Applied" className="">
            <div className=" p-5">
              <h3 className="text-md font-semibold text-gray-500">
                Applied Jobs{" "}
              </h3>
            </div>
            <hr />
            <div className="flex flex-col gap-5 w-full py-5">
              <CandidateApplications />
            </div>
          </TabsContent>
          <TabsContent value="Wishlist" className="w-full">
            <div className=" p-5">
              <h3 className="text-md font-semibold text-gray-500">
                Whislist Jobs{" "}
              </h3>
            </div>
            <hr />
            <div className="flex flex-col gap-5 w-full py-5">
              <CandidteWishlist />
            </div>
          </TabsContent>
      
        </Tabs>
      </div>
    </div>
  );
};
export default JobsMain;
