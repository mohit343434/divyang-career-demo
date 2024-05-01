import axiosInstance from '@/src/utils/axiosConfig';
import fileAxiosInstance from '@/src/utils/fileConfig';
import React, { useEffect, useState } from 'react'
import { AiOutlineDelete } from 'react-icons/ai';
import { MdOutlineFileUpload } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const EmployeesPostCampany = () => {
  const navigate = useNavigate()
  const [allSector, setAllSector] = useState([])
  const [file, setFile] = useState(null);
  const [file1, setFile1] = useState(null);
  const [companyName, setCompanyName] = useState('')
  const [sector, setSector] = useState('')
  const [website, setWebsite] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [video, setVideo] = useState('')
  const [about, setAbout] = useState('')
  const [address, setAddress] = useState('')
  const [gallery, setGallery] = useState([])
  const [loading, setLoading] = useState(false);
  const getSector = async () => {
    const res = await axiosInstance.get("/admin/sector");
    setAllSector(res.data.data);
  }
  useEffect(() => {
    getSector()
  }, [])

    // console.log(sectorUpdate);
    const handleSubmit = async (e) => {
      e.preventDefault()
      setLoading(true);
      const formData = new FormData();
      formData.append('name', companyName);
      formData.append('phone', phone);
      formData.append('email', email);
      formData.append('website', website);
      formData.append('address', address);
      formData.append('videoURL', video);
      formData.append('about', about);
      formData.append('sector', sector);
      formData.append('logo', file1);
      formData.append('coverImage', file);
      gallery.forEach((file) => {
        formData.append(`gallery`, file);
        // console.log(file);
      });
      try {
        const res = await fileAxiosInstance.post("/employer/profile/company", formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
        )
        // console.log(res);

        if (res.status === 200) {
          navigate("/dashboard/employers/company")
          Swal.fire({
            title: "Good job!",
            icon: "success"
          });
        }
      } catch (error) {
        if (error) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        }
      }finally {
        setLoading(false); 
      }
    }
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const handleFileChange1 = (e) => {
    setFile1(e.target.files[0]);
  };
  // Convert FileList object to an array of files
  const handleGalleryChange = (e) => {
    const filesArray = Array.from(e.target.files);
    setGallery(filesArray);
  };
  return (
    <div className='flex flex-row flex-wrap lg:flex-nowrap'>
      <div className='flex flex-col  w-full md:w-1/5 ' >

        {/* {loading && <span className='text-divyang'>Loading...</span>} */}

        <form className='w-full p-6' onSubmit={handleSubmit} >
          <div className='flex flex-col rounded-md p-3 justify-evenly border m-80' style={{ background: "#ffffff" }} >
            <div>
              <label className='pt-3 text-2xl'>Basic info</label>
            </div>
            <div className='flex w-full mt-2  gap-3 flex-wrap lg:flex-nowrap'>
              <div className='w-full'>
                <label className='font-light'>Company name <span className='text-divyang'>*</span> </label>
                <input type="text" placeholder='Company name' className='w-full h-10 rounded-lg ' required onChange={(e) => setCompanyName(e.target.value)} />
              </div>
              <div className='w-full'>
                <label className='font-light'>Website <span className='text-divyang'>*</span> </label>
                <input type="text" placeholder='Website' className='w-full h-10 rounded-lg ' required onChange={(e) => setWebsite(e.target.value)} />
              </div>
            </div>
            <div className='flex w-full mt-2  gap-3 flex-wrap lg:flex-nowrap'>
              <div className='w-full'>
                <label className='font-light'>Phone no <span className='text-divyang'>*</span> </label>
                <input type="number" placeholder='Phone no' className='w-full h-10 rounded-lg ' required onChange={(e) => setPhone(e.target.value)} />
              </div>
              <div className='w-full'>
                <label className='font-light'>Video URL <span className='text-divyang'>*</span> </label>
                <input type="text" placeholder='Video URL' className='w-full h-10 rounded-lg ' required onChange={(e) => setVideo(e.target.value)} />
              </div>
            </div>
            <div className='flex w-full mt-2 gap-3 flex-wrap lg:flex-nowrap' >
              <div className='w-full'>
                <label className='font-light'>Email <span className='text-divyang'>*</span> </label>
                <input type="email" placeholder='Email' className='w-full h-10 rounded-lg ' required onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className='flex flex-col w-full '>
                <label className='font-light'>Sector <span className='text-divyang'>*</span> </label>
                <select
                  className="mx-w-full h-32  rounded-md border-1 focus:border-none focus:ring-0 border-1  border-black"
                  onChange={(e) => setSector(e.target.value)}
                  required
                >
                  <option value="" selected disabled hidden >--select--</option>
                  {allSector.map((val) => <option key={val.id} value={val.id}>{val.name}</option>)}
                </select>
              </div>

            </div>
            <div className="flex w-full mt-2 gap-3 lg:flex-nowrap flex-wrap ">
              <div className="rounded-2xl w-full  h-40 object-fit overflow-hidden relative border-dotted border-[0.5px] border-[#8E98A8]">
                {!file1 && (
                  <label
                    className={
                      "flex justify-center w-full h-full items-center cursor-pointer text-center flex-col"
                    }
                  >
                    <MdOutlineFileUpload className="w-6 h-6" />
                    <p className="text-[8px] text-divyang">Upload Logo</p>
                    <input
                      type="file"
                      onChange={handleFileChange1}
                      className="hidden"
                    />
                  </label>
                )}
                {file1 && (
                  <>
                    <AiOutlineDelete
                      icon={"ic:round-clear"}
                      className="text-3xl text-light-rt bg-main-rt rounded-full absolute top-[-10px] right-[-8px] drop-shadow-lg cursor-pointer text-red-700 hover:scale-2"
                      onClick={() => setFile1(null)}
                    />
                    <img
                      src={URL.createObjectURL(file1)}
                      className="w-full  object-fill"
                      alt="UDID Card"
                    />
                  </>
                )}
              </div>
              <div className="rounded-2xl w-full h-40 object-fit overflow-hidden relative border-dotted border-[0.5px] border-[#8E98A8]">
                {!file && (
                  <label
                    className={
                      "flex justify-center w-full h-full items-center cursor-pointer text-center flex-col"
                    }
                  >
                    <MdOutlineFileUpload className="w-6 h-6" />
                    <p className="text-[8px] text-divyang">Upload Corver Img</p>
                    <input
                      type="file"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                )}
                {file && (
                  <>
                    <AiOutlineDelete
                      icon={"ic:round-clear"}
                      className="text-3xl text-light-rt bg-main-rt rounded-full absolute top-[-10px] right-[-8px] drop-shadow-lg cursor-pointer text-red-700 hover:scale-2"
                      onClick={() => setFile(null)}
                    />
                    <img
                      src={URL.createObjectURL(file)}
                      className="w-full object-cover"
                      alt="UDID Card"
                    />
                  </>
                )}
              </div>
            </div>
            <div className='flex w-full mt-2  gap-3 flex-wrap lg:flex-nowrap'>
              <div className='w-full'>
                <label className='font-light'>About <span className='text-divyang'>*</span> </label>
                <textarea className='rounded-lg w-full focus:right-0 focus:border-none' placeholder='About' required onChange={(e) => setAbout(e.target.value)} />
              </div>
              <div className='w-full'>
                <label className='font-light'>Address <span className='text-divyang'>*</span> </label>
                <textarea className='rounded-lg w-full focus:right-0 focus:border-none' placeholder=' Address' required onChange={(e) => setAddress(e.target.value)} />
              </div>
            </div>
            <div className='flex w-full mt-2  gap-3 flex-wrap lg:flex-nowrap'>
              <div className='w-full'>
                <label className='font-light'>Gallery <span className='text-divyang'>*</span> </label>
                <input type="file" className='w-full h-10 rounded-lg' multiple="multiple" onChange={handleGalleryChange} />
              </div>
            </div>
          </div>
          <button className='w-32 mt-3 h-10 bg-divyang text-white rounded-2xl border'>Post Job  </button>
        </form>
      </div>
      <div className=' w-full md:w-1/2 ' >
        <div className='h-80 py-24 ' style={{ position: "sticky", top: "100px" }}>
          <span className='text-2xl'> About this Company</span>
          <div className='  flex flex-col p-5'>
            <div className='border rounded-lg p-3' style={{ background: "#ffff" }}>
              <p className='text-2xl'>Title of Company</p>
              <p className=''>by Company Name in <span className='text-divyang'>Category</span> </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmployeesPostCampany