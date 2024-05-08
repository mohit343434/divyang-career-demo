import React, { useEffect, useState } from 'react';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import PageTitle from '../../GlobalComponents/PageTitle';
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import fileAxiosInstance from '@/src/utils/fileConfig';
import { DialogClose } from '@radix-ui/react-dialog';
import axiosInstance from '@/src/utils/axiosConfig';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import Loder from "../../GlobalComponents/Loader"
const CompanyTable = () => {

  const [allSector, setAllSector] = useState([])
  const [allCompany, setAllCompany] = useState([])
  const [loading, setLoading] = useState(false);
  //  Update states
  const [companyNameUpdate, setCompanyNameUpdate] = useState('')
  const [sectorUpdate, setSectorUpdate] = useState('')
  const [websiteUpdate, setWebsiteUpdate] = useState('')
  const [phoneUpdate, setPhoneUpdate] = useState('')
  const [emailUpdate, setEmailUpdate] = useState('')
  const [videoUpdate, setVideoUpdate] = useState('')
  const [aboutUpdate, setAboutUpdate] = useState('')
  const [addressUpdate, setAddressUpdate] = useState('')
  const [logoUpdate, setLogoUpdate] = useState(null)
  const [coverImageUpdate, setCoverImageUpdate] = useState(null)
  const [galleryUpdate, setGalleryUpdate] = useState([])
  const Title = {
    title: "Companies",
  };


  const handleGalleryChangeUpdate = (e) => {
    const filesArray = Array.from(e.target.files);
    setGalleryUpdate(filesArray);
  }
  //  getSector form admin sid  
  const getSector = async () => {
    const res = await axiosInstance.get("/admin/sector");
    setAllSector(res.data.data);
  }
  useEffect(() => {
    getSector()
    getAllCompany()
  }, [])

  //  Get all company 
  const getAllCompany = async () => {
    try {
      setLoading(true)
      const res = await axiosInstance.get("/employer/profile/company");
      setAllCompany(res.data.message);
    } catch (error) {
      console.log(error);
    }finally{
      setLoading(false)
    }
   

  }
  // Delete comppant usi id 
  const HandelDelete = async (id) => {
    const confirmed = await Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });
    if (confirmed.isConfirmed) {
      setLoading(true)
      await axiosInstance.delete(`/employer/profile/company/${id}`)
      // console.log(res);
      setLoading(false)
      getAllCompany()
      return
    }
  }
  // get one company data  
  const getOneCompny = async (id) => {
    const res = await axiosInstance.get(`/employer/profile/company/${id}`);
    setCompanyNameUpdate(res.data.data.name);
    // setSectorUpdate(res.data.data.sector.name);
    setWebsiteUpdate(res.data.data.website);
    setPhoneUpdate(res.data.data.phone);
    setEmailUpdate(res.data.data.email);
    setVideoUpdate(res.data.data.videoURL);
    setAboutUpdate(res.data.data.about);
    setAddressUpdate(res.data.data.address);
    setLogoUpdate(res.data.data.logo);
    setCoverImageUpdate(res.data.data.coverImage);
    setGalleryUpdate(res.data.data.gallery);
  }



  // update one data
  const handelUpdateCompny = async (id) => {
    const formData = new FormData();
    formData.append('name', companyNameUpdate);
    formData.append('phone', phoneUpdate);
    formData.append('email', emailUpdate);
    formData.append('website', websiteUpdate);
    formData.append('address', addressUpdate);
    formData.append('videoURL', videoUpdate);
    formData.append('about', aboutUpdate);
    {
      sectorUpdate === "" ? null : formData.append('sector', sectorUpdate);
    }
    formData.append('logo', logoUpdate);
    formData.append('coverImage', coverImageUpdate);

    // Append gallery files to formData
    galleryUpdate.forEach((file) => {
      formData.append('gallery', file);
    });

    try {
      // console.log(...formData);
      setLoading(true)
      const res = await fileAxiosInstance.put(`/employer/profile/company/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      if (res.status === 200) {
        getAllCompany();
        Swal.fire({
          title: "Success!",
          text: "Company updated successfully.",
          icon: "success"
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Oops...",
        text: "Something went wrong!",
        icon: "error"
      });
    }finally{
      setLoading(false)
    }
  };



  return (
    <>
      <div className='flex flex-col  w-full '  >
        <div className='mt-5 ml-5'>
          <div className="w-full">
            <PageTitle Title={Title} />
          </div>
          <div>
            <Link to={"/dashboard/employers/post-company"}>
            <Button variant="outline" className="bg-divyang text-white rounded-2xl hover:bg-divyang hover:text-white ">+ Add new Company</Button>
            </Link>

          </div>
        </div>
        <div className='mt-3'  >
          <div className='p-5' >
            <Table className="border" style={{ background: "#ffffff" }} >
              <TableHeader>
                <TableRow>
                  <TableHead className="font-bold text-black">NAME</TableHead>
                  <TableHead className="font-bold text-black">SECTOR</TableHead>
                  <TableHead className="font-bold text-black">EMAIL</TableHead>
                  <TableHead className="font-bold text-black">ACTIONS</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>

                {allCompany.length === 0 ? (
                  <div className='flex w-full justify-center'>
                    <div>
                      <p className=' my-5 font-medium text-xl'>Please Create <span className='text-divyang'>Campany</span> </p>
                    </div>
                  </div>
                ) : (
                  <>
                    {
                      allCompany.map((e) => {
                        return (<>
                          <TableRow key={e?.id} >
                        {loading && <Loder/>}
                            <TableCell className="font-bold text-black">{e?.name} </TableCell>
                            <TableCell> <span className="text-divyang">{e?.sector?.name}</span></TableCell>
                            <TableCell>{e?.email}</TableCell>
                            <TableCell>
                              <div className='flex text-2xl'>
                                <Dialog>
                                  <DialogTrigger asChild>
                                    <FaEdit className='text-blue-600 cursor-pointer ' onClick={() => getOneCompny(e.id)} />
                                  </DialogTrigger>
                                  <DialogContent>
                                    <DialogHeader>
                                      <DialogTitle>Add new Company</DialogTitle>
                                    </DialogHeader>
                                    <div className='max-h-[500px] overflow-y-auto px-2 '>
                                      <form>
                                        <div className='flex flex-col gap-3'>
                                          <div className='flex flex-col'>
                                            <label className='font-light'>Company name</label>
                                            <input className='rounded-lg focus:right-0 focus:border-none' type="text" placeholder='Enter your Company name' onChange={(e) => setCompanyNameUpdate(e.target.value)}
                                              value={companyNameUpdate}
                                            />
                                          </div>
                                        </div>
                                        <div className='flex gap-3 flex-wrap lg:flex-nowrap md:flex-nowrap  mt-2'>
                                          <div className='flex w-full overflow-hidden flex-col'>
                                            <label>Website</label>
                                            <input className='rounded-lg focus:right-0 focus:border-none ' type="text" placeholder='www.website-url.com ' onChange={(e) => setWebsiteUpdate(e.target.value)}
                                              value={websiteUpdate}
                                            />
                                          </div>
                                        </div>
                                        <div className='flex gap-3 flex-wrap lg:flex-nowrap md:flex-nowrap  mt-2'>
                                          <div className=' w-full flex  flex-col'>
                                            <label className='font-light'>Phone no </label>
                                            <input className=' rounded-lg focus:right-0 focus:border-none ' type="number" placeholder='Enter your Phone no. ' onChange={(e) => setPhoneUpdate(e.target.value)}
                                              value={phoneUpdate} />
                                          </div>
                                          <div className='flex w-full overflow-hidden flex-col'>
                                            <label>Email</label>
                                            <input className='rounded-lg focus:right-0 focus:border-none ' type="email" placeholder='Enter your Email' onChange={(e) => setEmailUpdate(e.target.value)}
                                              value={emailUpdate} />
                                          </div>
                                        </div>
                                        <div className='flex flex-col'>
                                          <label className='font-light'>Sector</label>
                                          <select
                                            className="mx-w-full h-32 mt-0 rounded-md border-1 focus:border-none focus:ring-0 border-1 border-black"
                                            onChange={(e) => setSectorUpdate(e.target.value)}
                                          >
                                            {allSector.map((val) => <option key={val.id} value={val.id}>{val.name}</option>)}
                                          </select>

                                        </div>
                                        <div className='flex gap-3 flex-wrap lg:flex-nowrap md:flex-nowrap  mt-2'>
                                          <div className=' w-full flex flex-col'>
                                            <label className='font-light'>Video URL</label>
                                            <input className=' rounded-lg focus:right-0 focus:border-none ' type="text" placeholder='www.youtube.com'
                                              onChange={(e) => setVideoUpdate(e.target.value)}
                                              value={videoUpdate}
                                            />
                                          </div>
                                          <div className='flex w-full overflow-hidden flex-col'>
                                            <label>About</label>
                                            <input className='rounded-lg focus:right-0 focus:border-none ' type="text" placeholder='Enter your About'
                                              onChange={(e) => setAboutUpdate(e.target.value)}
                                              value={aboutUpdate}
                                            />
                                          </div>
                                        </div>
                                        <div className='flex w-full flex-col'>
                                          <label>Address</label>
                                          <textarea className='rounded-lg focus:right-0 focus:border-none ' placeholder='Enter your Address'
                                            onChange={(e) => setAddressUpdate(e.target.value)}
                                            value={addressUpdate}
                                          />
                                        </div>
                                        <div className="flex flex-col w-full mt-5 lg:flex-nowrap flex-wrap rounded-full ">
                                          <label>Logo</label>
                                          <input
                                            type="file"
                                            className="rounded-full border"
                                            // value={logoUpdate}
                                            onChange={(e) => setLogoUpdate(e.target.files[0])}
                                          />
                                        </div>
                                        <div className="flex flex-col w-full mt-5 lg:flex-nowrap flex-wrap rounded-full ">
                                          <label>Cover Image</label>
                                          <input
                                            type="file"
                                            className="rounded-full border"
                                            onChange={(e) => setCoverImageUpdate(e.target.files[0])}
                                          />
                                        </div>
                                        <div className="flex flex-col w-full mt-5 lg:flex-nowrap flex-wrap rounded-full ">
                                          <label>Gallery</label>
                                          <input
                                            type="file"
                                            className="rounded-full border"
                                            multiple="multiple"
                                            onChange={handleGalleryChangeUpdate}
                                          />
                                        </div>
                                        <DialogClose asChild>
                                          <Button
                                            className="bg-divyang mt-4 text-white rounded-2xl hover:bg-divyang"
                                            onClick={(event) => {
                                              // event.preventDefault(); // Prevent default form submission behavior
                                              handelUpdateCompny(e.id); // Call the update function with the company ID
                                            }}
                                          >
                                            Update
                                          </Button>
                                        </DialogClose>
                                      </form>
                                    </div>
                                  </DialogContent>
                                </Dialog>
                                <MdDelete className='ml-5 text-red-700 cursor-pointer' onClick={() => HandelDelete(e.id)} />
                              </div>
                            </TableCell>
                          </TableRow>
                        </>
                        )
                      })
                    }
                  </>
                )

                }

              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyTable;
