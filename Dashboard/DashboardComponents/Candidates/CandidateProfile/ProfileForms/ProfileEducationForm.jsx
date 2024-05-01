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
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { DialogClose } from "@radix-ui/react-dialog";
import { RxCross2 } from "react-icons/rx";


const ProfileEducationForm = () => {
  //states 
  const [title, setTitle] = useState('');
  const [level, setLevel] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [description, setDescription] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);

  // State for storing education data
  const [education, setEducation] = useState([])
  //FOrmtting date
  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split('-');
    return `${month}-${day}-${year}`;
  };

  const formatDateForInput = (isoDateString) => {
    const date = new Date(isoDateString);
    const year = date.getFullYear();
    const month = `${date.getMonth() + 1}`.padStart(2, '0'); // Months are zero-based
    const day = `${date.getDate()}`.padStart(2, '0');

    // Return the formatted date string in 'YYYY-MM-DD' format
    return `${year}-${month}-${day}`;
  };


  const handleAddEducation = async (event) => {
    event.preventDefault();


    try {
      if (!title || !level || !from || !to || !description) {
        // If any required field is empty, return early without submitting
        // Show an error message or perform any necessary action
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please fill the input field",
        });
        return;
      }
      const formattedFromDate = formatDate(from);
      const formattedToDate = formatDate(to);

      // ######### 👇👇 Add Education API  👇👇 API############################
      const res = await axiosInstance.post(
        '/candidate/profile/education',
        {
          title,
          level,
          from: formattedFromDate,
          to: formattedToDate,
          description
        }
      );
      GetData();
      // console.log(res);
      if (res.data.status === 'success') {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Education added successfully.',
          showConfirmButton: false,
          timer: 1500
        });
        setTitle("")
        setDescription("")
        setFrom("")
        setTo("")
        setLevel("")
        setDialogOpen(false);
      }
    } catch (error) {
      // Handle error
      console.log(error);
    }
  };

  const handleAddEdu = async (event) => {
    event.preventDefault();

  };

  // ######### 👇👇 Get ALL Education 👇👇 API############################
  const GetData = async () => {
    try {
      const response = await axiosInstance.get(`/candidate/profile/education`);
      setEducation(response.data.allEducation);
    } catch (error) {
      console.log(error);
    }
  }
  console.log(education);
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
      if (!updatedEducation.title || !updatedEducation.level || !updatedEducation.from || !updatedEducation.to || !updatedEducation.description) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please fill the input field",
        });
        return;
      }

      // Make API call to update education
      const res = await axiosInstance.put(
        `/candidate/profile/education/${id}`,
        updatedEducation
      );
      console.log(res)
      // Check if update was successful
      if (res.data.status === "sucesss") {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Education updated successfully.",
          showConfirmButton: false,
          timer: 1500,
        });
        // Fetch updated education data after update
        GetData();
      }
    } catch (error) {
      console.log(error);
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
        const res = await axiosInstance.delete(
          `/candidate/profile/education/${id}`
        );
        if (res.data.status === "success") {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Education deleted successfully.",
            showConfirmButton: false,
            timer: 1500,
          });
          // Fetch updated education data after deletion
          GetData();
        }
      } catch (error) {
        console.log(error);
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

      <Dialog open={dialogOpen} close={true}>
        <DialogTrigger>
          <Button className=' bg-divyang rounded-full ' onClick={() => setDialogOpen(true)}>Add Education</Button>
        </DialogTrigger>
        <DialogContent close={true} className="w-full md:w-[350px]">
          <div className="flex justify-center items-center flex-col gap-2 max-w-[300px] overflow-y-auto">
            <div className="flex justify-between items-center gap-9">
              <h1 className="text-xl font-bold ">Add Education </h1>
              {/* <RxCross2 onClick={() => setDialogOpen(false)} /> */}
            </div>
            <form onSubmit={handleAddEducation}>
              <div className="flex w-full lg:flex-nowrap flex-wrap">
                <div className="w-full p-2">
                  <label>
                    Title <span className="text-divyang">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-md border-1 focus:border-none mt-2"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
                <div className="w-full p-2">
                  <label>
                    Level of Education{' '}
                    <span className="text-divyang">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-md border-1 focus:border-none mt-2"
                    placeholder="Level of Education"
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="flex w-full lg:flex-nowrap flex-wrap">
                <div className="w-full p-2">
                  <label>
                    From <span className="text-divyang">*</span>
                  </label>
                  <input
                    type="date"
                    className="w-full rounded-md border-1 focus:border-none mt-2"
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                    required
                  />
                </div>
                <div className="w-full p-2">
                  <label>
                    To <span className="text-divyang">*</span>
                  </label>
                  <input
                    type="date"
                    className="w-full rounded-md border-1 focus:border-none mt-2"
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="flex w-full lg:flex-nowrap flex-wrap">
                <div className="w-full p-2">
                  <label>
                    Description{' '}
                    <span className="text-divyang">*</span>
                  </label>
                  <textarea
                    type="text"
                    className="w-full rounded-md border-1 focus:border-none mt-2"
                    placeholder="description"
                    rows="5"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="w-full p-2 flex justify-center gap-7 items-center">

                <DialogClose onClick={() => setDialogOpen(true)}>
                  <Button >Submit</Button>
                </DialogClose>

                <Button className='' variant="destructive" onClick={() => setDialogOpen(false)}>Cancel</Button>
              </div>
            </form>
          </div>
        </DialogContent>
      </Dialog>
      <div className="flex flex-col w-full" style={{ background: "#fafafa" }}>
        {
          education.map((edu) => {
            return (
              <form onSubmit={handleAddEdu} key={edu.id} className="w-full p-6">
                <div className="flex items-center justify-between">
                  <label className="pt-3 text-2xl">Education info</label>
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
                                name="title"
                                value={edu.title}
                                // onChange={(e) => GetData(e,)} />
                                onChange={(e) => handleInputChange(e, edu.id, "title")}
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
                                name="level"
                                // onChange={(e) => setLevel(e.target.value)}
                                onChange={(e) => handleInputChange(e, edu.id, "level")}
                                value={edu.level}
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
      </div>

    </>
  );
};

export default ProfileEducationForm;
