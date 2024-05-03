import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import axiosInstance from "../../../../../src/utils/axiosConfig";
import Swal from "sweetalert2";

const ProfileEducationFormAdd = () => {

    const [title, setTitle] = useState('');
  const [level, setLevel] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [description, setDescription] = useState('');
  

 
  //FOrmtting date
  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split('-');
    return `${month}-${day}-${year}`;
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
  
    
  return (
    <div>
     <div className="flex  gap-2 max-w-[300px] overflow-y-auto">
     <div className=" p-5">
     <h1 className="text-xl font-bold mb-3">Add Education </h1>
            <div className=" p-5 flex justify-between items-center gap-9  border bg-slate-100">
             
           
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
              <div className="w-full p-2 flex gap-5">


               
                  <Button className="w-full" >Submit</Button>
               

               
              </div>
            </form>
            </div>
            </div>
          </div>
    </div>
  )
}

export default ProfileEducationFormAdd
