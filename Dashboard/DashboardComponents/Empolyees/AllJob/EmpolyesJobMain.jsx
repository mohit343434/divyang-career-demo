import React, { useEffect, useState } from 'react';
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

import axiosInstance from '@/src/utils/axiosConfig';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import Loder from "../../GlobalComponents/Loader"
const EmpolyesJobMain = () => {
  const [JobName, setJobName] = useState([])
  const [filter, setFilter] = useState('')
  const [loading, setLoading] = useState(false);
  const Title = {
    title: "Jobs",
  };
  //  get all job
  const getAllJob = async () => {
    const res = await axiosInstance.get(`/employer/profile/job${filter}`);
    setJobName(res.data.data);
  }
  useEffect(() => {
    getAllJob()
  }, [filter])




  //  creacted job date change in india forment  
  function convertToIndianDateFormat(dateString) {
    const date = new Date(dateString);
    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1;
    const year = date.getUTCFullYear();
    const formattedDay = day < 10 ? '0' + day : day;
    const formattedMonth = month < 10 ? '0' + month : month;
    const indianDateFormat = `${formattedDay}/${formattedMonth}/${year}`;
    return indianDateFormat;
  }

  //  delete job 
  const handleDelete = async (companyId, jobId) => {

    try {
      const confirmed = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!",
      });
      if (confirmed.isConfirmed) {
        setLoading(true);
        const res = await axiosInstance.delete(`/employer/company/${companyId}/job/${jobId}`);
        // console.log(res);
        getAllJob()
        if (res.data.status === "success") {
          Swal.fire({
            title: "Success!",
            text: "Job Delete successfully.",
            icon: "success"
          });
        }
      }
    } catch (error) {
      Swal.fire({
        title: "Oops...",
        text: "Something went wrong!",
        icon: "error"
      });
    } finally {
      setLoading(false)
    }
  }


  //  update job 
  const updateJob = async (companyId, jobId, isActive) => {
    try {
      setLoading(true)
      const res = await axiosInstance.put(`/employer/company/${companyId}/job/${jobId}`,
        {
          isActive: isActive
        }
      );
      if (res.data.status === "success") {
        Swal.fire({
          title: "Success!",
          text: "Job updated successfully.",
          icon: "success"
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Oops...",
        text: "Something went wrong!",
        icon: "error"
      });
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className='flex flex-col  w-full' >
        <div className="w-full ">
          <PageTitle Title={Title} />
          <div className='ms-3'>
            <Link to={`/dashboard/employers/post-job`}>
              <Button variant="outline" className="bg-divyang text-white rounded-2xl hover:bg-divyang hover:text-white ">+ Add new Job</Button>
            </Link>
          </div>
        </div>
        <div className='flex justify-between px-4 mt-4 flex-wrap gap-3' >
          <div className='w-72 md:w-full' >
            <select
              className="mx-w-full h-32 mt-0 rounded-md border-1 focus:border-none focus:ring-0 border-1 border-black"
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="?">All Job</option>
              <option value="?isActive=true">Opening</option>
              <option value="?isActive=false">Paused</option>
            </select>
          </div>
        </div>
        <div className='mt-3 '  >
          <div className='p-5 ' >

            <Table className="border bg-white"  >
              <TableHeader>
                <TableRow>
                  <TableHead className="font-bold text-black">TITLE</TableHead>
                  <TableHead className="font-bold text-black">APPLICANTS</TableHead>
                  <TableHead className="font-bold text-black">STATUS</TableHead>
                  <TableHead className="font-bold text-black">POSTED</TableHead>
                  <TableHead className="font-bold text-black">EXPIRED</TableHead>
                  <TableHead className="font-bold text-black">ACTIONS</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {
                  JobName.length === 0 ? <>
                    <div className='flex w-full justify-center'>
                      <div>
                        <p className=' my-5 font-medium text-xl'>Please Create <span className='text-divyang'>Job</span> </p>
                      </div>
                    </div>
                  </> : <>
                    {
                      JobName.map((e, i) => {
                        return (
                          <>
                            {loading && <Loder />}
                            <TableRow key={i}>
                              <TableCell className="font-bold text-black">
                                <div className='w-28 whitespace-nowrap overflow-hidden text-ellipsis'>{e.title}
                                </div></TableCell>
                              <TableCell className="hover:text-divyang">
                                <Link className='text-blue-600' to={`/dashboard/employers/applicants?id=${e._id}`}>view applicants</Link>
                              </TableCell>
                              <TableCell >
                                <select className="mt-1 border-none rounded-md shadow-sm focus:border-none focus:ring-0 focus:ring-info-50 focus:ring-opacity-0"
                                  defaultValue={e.isActive ? true : false}
                                  onChange={(event) => {
                                    const updatedValue = event.target.value === 'true';
                                    // setjobUpdate(updatedValue)
                                    updateJob(e.companyId._id, e._id, updatedValue)
                                  }}
                                >
                                  <option value={true} className="bg-gray-100">Opening</option>
                                  <option value={false} className="bg-gray-100">Pause</option>
                                </select>
                              </TableCell>
                              <TableCell >{convertToIndianDateFormat(e.createdAt)}</TableCell>
                              <TableCell > <span className="text-divyang">{convertToIndianDateFormat(e.endDate)}</span></TableCell>
                              <TableCell >
                                <div className='flex text-2xl'>
                                  <MdDelete className='ml-5 text-red-700 cursor-pointer' onClick={() => handleDelete(e.companyId._id, e._id)} />
                                </div>  </TableCell>
                            </TableRow>
                          </>
                        )
                      }
                      )
                    }
                  </>
                }



              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmpolyesJobMain;
