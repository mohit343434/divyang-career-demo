import React, { useEffect, useState } from 'react'
import PostJobhtitel from '../PostJob/PostJobComp/PostJobhtitel'
import axiosInstance from '@/src/utils/axiosConfig'
import Swal from 'sweetalert2'
import Loader from "../../GlobalComponents/Loader"
import { useNavigate } from 'react-router-dom'
const EmpolyesJobPost = () => {
  const navigate = useNavigate()
  const [CompanyName, setCompanyName] = useState([])
  const [allCategories, setAllCategories] = useState([])
  const [allSecter, setAllSecter] = useState([])
  const [title, setTitle] = useState('')
  const [salary, setSalary] = useState('')
  const [Company, setCompany] = useState('')
  const [type, setType] = useState('')
  const [experience, setExperience] = useState('')
  const [qualifications, setQualifications] = useState('')
  const [isjobType, setIsJobType] = useState(false)
  const [gender, setGender] = useState('')
  const [endDate, setEndDate] = useState('')
  const [description, setDescription] = useState('')
  const [Categories, setCategories] = useState('')
  const [sector, setSector] = useState('')
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getCategories()
    getSecter()
    getallCompny()
  }, [])
  const getSecter = async () => {
    const res = await axiosInstance.get(`/admin/sector`);
    setAllSecter(res.data.data);
  }
  //  get all company 
  const getallCompny = async () => {
    const res = await axiosInstance.get("/employer/profile/company");
    setCompanyName(res.data.message);
    console.log(res);
  }
  //  get all Categories form admin side  
  const getCategories = async () => {
    const res = await axiosInstance.get(`/admin/category`);
    setAllCategories(res.data.data);
  }
  //  send time change date 
  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split('-');
    setEndDate(`${month}-${day}-${year}`);
  };
  //  post a job 
  const postJob = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axiosInstance.post(`/employer/company/${Company}/job`, {
        title: title,
        type: type,
        sector: sector,
        category: Categories,
        gender: gender,
        isActive: isjobType,
        description: description,
        salary: salary,
        experience: experience,
        qualification: qualifications,
        endDate: endDate
      });
      // console.log(res);

      if (res.status === 200) {
        navigate("/dashboard/employers/job")
        Swal.fire({
          title: "Success!",
          text: "Job updated successfully.",
          icon: "success"
        });

      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Oops...",
        text: "Something went wrong!",
        icon: "error"
      });
    } finally {
      setLoading(false);
    }
  }


  return (
    <>
      <div className='flex flex-row flex-wrap lg:flex-nowrap'>
        <div className='flex flex-col  w-full md:w-1/5 ' >
          <PostJobhtitel />
          {loading && <Loader />}
          {
            CompanyName.length === 0 ? (<div className='flex w-full justify-center'>
              <div>
                <p className=' mt-5 font-medium text-xl'>Please Create <span className='text-divyang'>Campany</span> </p>
              </div>
            </div>) : (
              <form className='w-full p-6' onSubmit={postJob} >
                <div className='flex flex-col rounded-md p-3 justify-evenly border m-80' style={{ background: "#ffffff" }} >
                  <div>
                    <label className='pt-3 text-2xl'>Basic info</label>
                  </div>
                  <div className='flex w-full mt-2  gap-3 flex-wrap lg:flex-nowrap'>
                    <div className='w-full'>
                      <label className='font-light'>Job title <span className='text-divyang'>*</span> </label>
                      <input type="text" placeholder='Name' className='w-full h-10 rounded-lg ' required onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className='w-full'>
                      <label className='font-light'>Salary <span className='text-divyang'>*</span> </label>
                      <input type="number" placeholder='Salary' className='w-full h-10 rounded-lg ' required onChange={(e) => setSalary(e.target.value)} />
                    </div>
                  </div>
                  <div className='flex w-full mt-2 gap-3 flex-wrap lg:flex-nowrap' >
                    <div className='flex flex-col w-full '>
                      <label className='font-light'>Company <span className='text-divyang'>*</span> </label>
                      <select
                        className="mx-w-full h-32  rounded-md border-1 focus:border-none focus:ring-0 border-1  border-black"
                        onChange={(e) => setCompany(e.target.value)}
                        required
                      >
                        <option value="" selected disabled hidden >--select--</option>
                        {CompanyName.map((val) => <option key={val.id} value={val.id}>{val.name}</option>)}
                      </select>
                    </div>
                    <div className='flex flex-col w-full '>
                      <label className='font-light'>Categories <span className='text-divyang'>*</span> </label>
                      <select
                        className="mx-w-full h-32 rounded-md border-1 focus:border-none focus:ring-0 border-1 border-black"
                        onChange={(e) => setCategories(e.target.value)}
                        required
                      >
                        <option value="" selected disabled hidden >--select--</option>
                        {allCategories.map((val) => <option key={val.id} value={val.id}>{val.name}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className='flex w-full mt-2 gap-3 flex-wrap lg:flex-nowrap' >
                    <div className='flex flex-col w-full '>
                      <label className='font-light'>Gender <span className='text-divyang'>*</span> </label>
                      <select
                        className="mx-w-full h-32  rounded-md border-1 focus:border-none focus:ring-0 border-1 border-black"
                        required
                        onChange={(e) => setGender(e.target.value)}
                      >
                        <option value="" selected disabled hidden >--select--</option>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                        <option value="both">Both</option>
                      </select>
                    </div>
                    <div className='flex flex-col w-full '>
                      <label className='font-light'>allSecter <span className='text-divyang'>*</span> </label>
                      <select
                        className="mx-w-full h-32 rounded-md border-1 focus:border-none focus:ring-0 border-1 border-black"
                        onChange={(e) => setSector(e.target.value)}
                        required
                      >
                        <option value="" selected disabled hidden >--select--</option>
                        {allSecter.map((val) => <option key={val.id} value={val.id}>{val.name}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className='flex w-full mt-2 gap-3 flex-wrap lg:flex-nowrap' >
                    <div className='flex flex-col w-full '>
                      <label className='font-light'>Type <span className='text-divyang'>*</span> </label>
                      <select
                        className="mx-w-full h-32  rounded-md border-1 focus:border-none focus:ring-0 border-1 border-black"
                        onChange={(e) => setType(e.target.value)}
                        required
                      >
                        <option value="" selected disabled hidden >--select--</option>
                        <option value="Government">Government</option>
                        <option value="Private">Private</option>
                        <option value="NGO">NGO</option>
                      </select>
                    </div>
                    <div className='flex flex-col w-full '>
                      <label className='font-light'>Experience <span className='text-divyang'>*</span> </label>
                      <select
                        className="mx-w-full h-32  rounded-md border-1 focus:border-none focus:ring-0 border-1 border-black"
                        onChange={(e) => setExperience(e.target.value)}
                        required
                      >
                        <option value="" selected disabled hidden >--select--</option>
                        <option value="0-1 years">0-1 years</option>
                        <option value="1-2 years">1-2 years</option>
                        <option value="3-5 years">3-5 years</option>
                        <option value="6-9 years">6-9 years</option>
                        <option value="10+ years">10+ years</option>
                      </select>
                    </div>
                  </div>
                  <div className='flex w-full mt-2 gap-3 flex-wrap lg:flex-nowrap' >
                    <div className='flex flex-col w-full '>
                      <label className='font-light'>Qualifications <span className='text-divyang'>*</span> </label>
                      <select
                        className="mx-w-full h-32  rounded-md border-1 focus:border-none focus:ring-0 border-1 border-black"
                        onChange={(e) => setQualifications(e.target.value)}
                        required
                      >
                        <option value="" selected disabled hidden >--select--</option>
                        <option value="10th pass">10th pass</option>
                        <option value="12th pass">12th pass</option>
                        <option value="Below 10th">Below 10th</option>
                        <option value="certificate">Certificate</option>
                        <option value="Diploma">Diploma</option>
                        <option value="Doctorate">Doctorate</option>
                        <option value="Graduate">Graduate</option>
                        <option value="Under Graduate">Under Graduate</option>
                        <option value="Post Graduate">Post Graduate</option>
                      </select>
                    </div>
                    <div className='flex flex-col w-full '>
                      <label className='font-light'>Job Type <span className='text-divyang'>*</span> </label>
                      <select
                        className="mx-w-full h-32  rounded-md border-1 focus:border-none focus:ring-0 border-1 border-black"
                        onChange={(e) => setIsJobType(e.target.value)}
                        required
                      >
                        <option selected disabled hidden >--select--</option>
                        <option value={true}>Opning</option>
                        <option value={false}>Close</option>
                      </select>
                    </div>
                  </div>
                  <div className='flex gap-3 mt-2 flex-wrap lg:flex-nowrap'>
                    <div className='flex flex-col w-full '>
                      <div className='flex flex-col'>
                        <label className='font-light'>End Date <span className='text-divyang'>*</span> </label>
                        <input className='rounded-lg focus:right-0 focus:border-none' type="date" required placeholder='Enter your Company name' onChange={(e) => formatDate(e.target.value)} />
                      </div>
                    </div>
                    <div className='flex w-full flex-col '>
                      <label>Description <span className='text-divyang'>*</span></label>
                      <textarea className='rounded-lg focus:right-0 focus:border-none' placeholder='Enter your Address' required onChange={(e) => setDescription(e.target.value)} />
                    </div>
                  </div>
                </div>
                <button className='w-32 mt-3 h-10 bg-divyang text-white rounded-2xl border'>Post Job  </button>
              </form>
            )
          }



        </div>
        <div className=' w-full md:w-1/2 ' >
          <div className='h-80 py-24 ' style={{ position: "sticky", top: "100px" }}>
            <span className='text-2xl'> About this job</span>
            <div className='  flex flex-col p-5'>
              <div className='border rounded-lg p-3' style={{ background: "#ffff" }}>
                <p className='text-2xl'>Title of job</p>
                <p className=''>by Company Name in <span className='text-divyang'>Category</span> </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>

  )
}

export default EmpolyesJobPost