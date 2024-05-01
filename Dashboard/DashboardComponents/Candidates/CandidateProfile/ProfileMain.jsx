import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProfileBasicForm from "./ProfileForms/ProfileBasicForm";
import ProfileEducationForm from "./ProfileForms/ProfileEducationForm";
import ProfileExperienceForm from "./ProfileForms/ProfileExperienceForm";
import ProfileDisabilityForm from "./ProfileForms/ProfileDisabilityForm";
import PageTitle from "../../GlobalComponents/PageTitle";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import axiosInstance from "@/src/utils/axiosConfig";

// const percentage = 40;


const Title = {
  title: "Profile Settings",
};

const ProfileMain = () => {
  const [percentage, setPercentage] = useState(10)


  const profileStrength = async () => {
    const res = await axiosInstance.get("/candidate/profile")
    setPercentage(res.data.profileStrength)
    console.log(res.data.profileStrength)

  }
  console.log(percentage);
  useEffect(() => {
    profileStrength();
  }, []);


  return (
    <div className="w-full p-5 overflow-hidden">
      <div className="w-full">
        <PageTitle Title={Title} />
      </div>

      <div className="flex justify-between items-start flex-wrap lg:flex-nowrap w-full">
        <Tabs className="w-full md:w-1/5 " defaultValue={"Basic"}>
          <TabsList className="w-full overflow-auto bg-transparent">
            <TabsTrigger value="Basic" className="text-lg active:text-divyang">
              Basic Info
            </TabsTrigger>
            <TabsTrigger
              value="Education"
              className="text-lg active:text-divyang"
            >
              Education
            </TabsTrigger>
            <TabsTrigger
              value="Experience"
              className="text-lg active:text-divyang"
            >
              Experience
            </TabsTrigger>
            <TabsTrigger
              value="Disability"
              className="text-lg active:text-divyang"
            >
              Disability Info
            </TabsTrigger>
          </TabsList>
          <TabsContent value="Basic" className="">
            <ProfileBasicForm />
          </TabsContent>
          <TabsContent value="Education" className="">
            <ProfileEducationForm />
          </TabsContent>
          <TabsContent value="Experience" className="">
            <ProfileExperienceForm />
          </TabsContent>
          <TabsContent value="Disability" className="">
            <ProfileDisabilityForm />
          </TabsContent>
        </Tabs>
        <div className="w-full md:w-1/2">
          <div className="w-full flex justify-center p-5">
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              strokeWidth="3"
              className="w-64 text-sm py-20"
              styles={buildStyles({
                rotation: 1,
                strokeLinecap: "butt",
                stroke: "gray",
                textSize: "14px",
                pathTransitionDuration: 0.5,
                pathColor: `#f88, ${percentage / 100})`,
                textColor: "black",
                // trailColor: "#f88",
                backgroundColor: "#f88",
              })}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileMain;
