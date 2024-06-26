import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import axiosInstance from "../../../../../src/utils/axiosConfig";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import Loader from "@/Dashboard/DashboardComponents/GlobalComponents/Loader"

const ProfileExperienceFormAdd = () => {
  const navigate = useNavigate();
  const [jobtitle, setJobtitle] = useState('');
  const [company, setCompany] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoadiing] = useState(false);

  //FOrmtting date
  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split('-');
    return `${month}-${day}-${year}`;
  };
  const handleAddExperience = async (event) => {
    event.preventDefault();
    try {
      if (!jobtitle || !company || !from || !to || !description) {
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
      setLoadiing(true)
      const res = await axiosInstance.post(
        '/candidate/profile/experience',
        {
          jobtitle,
          company,
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
          title: 'Experience added successfully.',
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
    } finally {
      setLoadiing(false)
    }
  };



  return (
    <div>
      <div className=" gap-2 max-w-[300px] overflow-y-auto">
        <div className=" p-5">
          <h1 className="text-xl font-bold mb-4">Add Experience </h1>
          <div className="flex flex-col justify-between p-5 border bg-white">
            <form onSubmit={handleAddExperience}>
            {loading && <Loader />}
              <div className="flex w-full lg:flex-nowrap flex-wrap">
                <div className="w-full p-2">
                  <label>
                    Title <span className="text-divyang">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-md border-1 focus:border-none mt-2"
                    placeholder="Title"
                    value={jobtitle}
                    onChange={(e) => setJobtitle(e.target.value)}
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
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
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

export default ProfileExperienceFormAdd
