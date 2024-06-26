import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AiOutlineDelete } from "react-icons/ai";
import { Button } from "@/components/ui/button";
import axiosInstance from "../../../../../src/utils/axiosConfig";
import Swal from "sweetalert2";
import { Link} from "react-router-dom";
import Loader from "@/Dashboard/DashboardComponents/GlobalComponents/Loader"
const ProfileExperienceForm = () => {
  const [education, setEducation] = useState([])
  const [loading, setLoading] = useState(false)
  // const formatDate = (dateString) => {
  //   const [year, month, day] = dateString.split('-');
  //   return `${month}-${day}-${year}`;
  // };

  const formatDateForInput = (isoDateString) => {
    const date = new Date(isoDateString);
    const year = date.getFullYear();
    const month = `${date.getMonth() + 1}`.padStart(2, '0');
    const day = `${date.getDate()}`.padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const handleAddEdu = async (event) => {
    event.preventDefault();

  };

  // ######### 👇👇 Get ALL Education 👇👇 API############################
  const GetData = async () => {
    try {
      setLoading(true)
      const response = await axiosInstance.get(`/candidate/profile/experience`);
      setEducation(response.data.allExperience);
      console.log(response)
    } catch (error) {
      console.log(error);
    }finally{
      setLoading(false)
    }
  }
  // console.log(education);
  useEffect(() => {
    GetData()
  }, [])

  //##################### 👆👆 Get ALL Education👆👆 #########################
  // @@@@@@
  //##################### 👇👇  Update education  👇👇  #########################

  const handleUpdate = async (id) => {
    try {
      // id.preventDefault();
      // Find the education item to be updated
      const updatedEducation = education.find((item) => item.id === id);

      // Make sure all fields are filled
      if (!updatedEducation.jobtitle || !updatedEducation.company || !updatedEducation.from || !updatedEducation.to || !updatedEducation.description) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please fill the input field",
        });
        return;
      }
      setLoading(true)
      const res = await axiosInstance.put(
        `/candidate/profile/experience/${id}`,
        updatedEducation
      );
      // console.log(res)
      // Check if update was successful
      if (res.data.status === "sucesss") {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Experience updated successfully.",
          showConfirmButton: false,
          timer: 1500,
        });
        // Fetch updated education data after update
        GetData();
      }
    } catch (error) {
      console.log(error);
    }
    finally{
      setLoading(false)
    }
  };
  //##################### 👆👆  Update education 👆👆 #########################
  // @@@@@@@@@@@@
  //##################### 👇👇  Delete education 👇👇  #########################
  const handleDelete = async (id) => {
    // Show confirmation dialog
    const confirmed = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    // If user confirmed the deletion
    if (confirmed.isConfirmed) {
      try {
        setLoading(true)
        const res = await axiosInstance.delete(
          `/candidate/profile/experience/${id}`
        );
        if (res.data.status === "success") {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Experience deleted successfully.",
            showConfirmButton: false,
            timer: 1500,
          });
          // Fetch updated education data after deletion
          GetData();
        }
      } catch (error) {
        console.log(error);
      }finally{
        setLoading(false)
      }
    }
  };
  //##################### 👆👆 Delete education 👆👆 #########################
  //Handeling update form field
  const handleInputChange = (e, id, field) => {
    const updatedEducation = education.map((edu) => {
      if (edu.id === id) {
        return { ...edu, [field]: e.target.value };
      }
      return edu;
    });
    setEducation(updatedEducation);
  };

  return (
    <>
<div className="mb-5">
     <Link to="/dashboard/candidates/addExperience">
          <Button className=' bg-divyang rounded-full ' onClick={() => setDialogOpen(true)}>Add Experience </Button>
          </Link>
          </div>    
      <div className="flex flex-col w-full" style={{ background: "#fafafa" }}>
    {
      education.length === 0 ?(<>
      {loading && <Loader/>}
      <p>Update Profile </p>
      </>):(<>
        {
          education?.map((edu) => {
            return (
              <form onSubmit={handleAddEdu} key={edu.id} className="w-full p-6">
                {loading && <Loader/>}
                <div className="flex items-center justify-between">
                  <label className="pt-3 text-2xl">Experience info</label>
                  <div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-center items-center">
                    <Accordion
                      type="single"
                      collapsible
                      className="flex flex-col p-3 w-full"
                    >
                      <AccordionItem value={`kk`} className="w-full">
                        <div className="flex justify-between">
                          <div>
                            <AccordionTrigger className="">
                              Education
                            </AccordionTrigger>
                          </div>
                          <div className="flex justify-between gap-5  items-center">
                            <div className="">
                              <AiOutlineDelete
                                onClick={() => handleDelete(edu.id)}
                                icon={"ic:round-clear"}
                                className="text-3xl text-light-rt bg-main-rt rounded-full cursor-pointer text-red-700 "
                              />
                            </div>
                          </div>
                        </div>
                        <AccordionContent className="">
                          <div className="flex w-full lg:flex-nowrap flex-wrap ">
                            <div className="w-full p-2">
                              <label>
                                Title <span className="text-divyang">*</span>
                              </label>
                              <input
                                type="text"
                                className="w-full rounded-md border-1 focus:border-none mt-2"
                                placeholder="Title"
                                name="jobtitle"
                                value={edu.jobtitle}
                                // onChange={(e) => GetData(e,)} />
                                onChange={(e) => handleInputChange(e, edu.id, "jobtitle")}
                              />
                            </div>
                            <div className="w-full p-2">
                              <label>
                                {" "}
                                Level of Education{" "}
                                <span className="text-divyang">*</span>
                              </label>
                              <input
                                type="text"
                                className="w-full rounded-md border-1 focus:border-none mt-2"
                                placeholder="Level of Education"
                                name="company"
                                // onChange={(e) => setCompany(e.target.value)}
                                onChange={(e) => handleInputChange(e, edu.id, "company")}
                                value={edu.company}
                              />
                            </div>
                          </div>
                          <div className="flex w-full lg:flex-nowrap flex-wrap ">
                            <div className="w-full p-2">
                              <label>
                                From <span className="text-divyang">*</span>
                              </label>
                              <input
                                type="date"
                                className="w-full rounded-md border-1 focus:border-none mt-2"
                                placeholder="D/M/Y"
                                name="from"
                                value={formatDateForInput(edu.from)}
                                // onChange={(e) => setFrom(e.target.value)}
                                onChange={(e) => handleInputChange(e, edu.id, "from")}
                              />
                            </div>
                            <div className="w-full p-2">
                              <label>
                                {" "}
                                To <span className="text-divyang">*</span>
                              </label>
                              <input
                                type="date"
                                className="w-full rounded-md border-1 focus:border-none mt-2"
                                placeholder="D/M/Y"
                                name="to"
                                value={formatDateForInput(edu.to)}
                                // onChange={(e) => setTo(e.target.value)}
                                onChange={(e) => handleInputChange(e, edu.id, "to")}
                              />
                            </div>
                          </div>
                          <div className="flex w-full lg:flex-nowrap flex-wrap ">
                            <div className="w-full p-2">
                              <label>
                                Description <span className="text-divyang">*</span>
                              </label>
                              <textarea
                                type="text"
                                className="w-full rounded-md border-1 focus:border-none mt-2"
                                placeholder="description"
                                rows="5"
                                name="description"
                                value={edu.description}
                                // onChange={(e) => setDescription(e.target.value)}
                                onChange={(e) => handleInputChange(e, edu.id, "description")}
                                />
                                {loading && <Loader/>}
                            </div>
                          </div>
                          <Button onClick={() => handleUpdate(edu.id)}>update</Button>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </form>
            )
          })
        }
      </>)
    }

       
      </div>

    </>
  );
};

export default ProfileExperienceForm;
