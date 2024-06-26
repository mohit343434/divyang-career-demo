import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import axiosInstance from "../../../../../src/utils/axiosConfig";
import Swal from "sweetalert2";

const ProfileEducationFormAdd = () => {
  const navigate = useNavigate();
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
      // console.log(res);
      if (res.data.status === 'success') {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Education added successfully.',
          showConfirmButton: false,
          timer: 1500
        });
        navigate('/dashboard/candidates/profile');
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.response.data.message,
      })
    }
  };


  return (
    <div>
      <div className=" max-w-[300px] overflow-y-auto">
        <div className=" p-5">
          <h1 className="text-xl font-bold mb-3">Add Education </h1>
          <div className=" p-5  justify-between items-center gap-9  border bg-slate-100">


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
              <div className="  w-full p-2 ">
                <Button className=" bg-orange-500 hover:bg-orange-500">Submit</Button>
              </div>
            </form>
            <div className="p-2 ">
              <Link to="/dashboard/candidates/profile" className=" underline" style={{ color: "#0000FF" }}>
                Cancel
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileEducationFormAdd
