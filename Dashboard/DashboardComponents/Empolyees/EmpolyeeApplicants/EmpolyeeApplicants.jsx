import React, { useEffect, useState } from 'react'
// import { TbMessageCircle2Filled } from "react-icons/tb";
import { BiLogoZoom } from "react-icons/bi";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import PageTitle from '../../GlobalComponents/PageTitle';
import { Link, useLocation  } from 'react-router-dom';
import axiosInstance from '@/src/utils/axiosConfig';
import { SlRefresh } from "react-icons/sl";
import Swal from 'sweetalert2';
import Loader from "../../GlobalComponents/Loader"
const EmpolyeeApplicants = () => {
  const [allApplicants, setAllApplicants] = useState([])
  const location = useLocation();
  const [refaresh, setReafresh] = useState(1)
  const [id] = useState(new URLSearchParams(location.search).get("id"));
  const [loading, setLoading] = useState(false)
  const [loading2, setLoading2] = useState(false)
  // const navigate = useNavigate()
  const Title = {
    title: "All applicants",
  };

  // console.log(loading);
  const Applicants = async () => {
    try {
      setLoading2(true)
      const res = await axiosInstance.get(`employer/job/${id}/applicant`);
      setAllApplicants(res.data.data);
      // console.log(res, "ff");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading2(false)
    }

  }

  useEffect(() => {
    Applicants()
  }, [refaresh])
  const handleUpdate = async (applicantNo, status) => {
    // console.log('Applicant No:', applicantNo, 'Status:', status);
    try {
      setLoading(true)
      const res = await axiosInstance.put(`/employer/job/applicant`, {
        applicantNo: applicantNo,
        status: status
      });
      if (res.status === 200) {
        Swal.fire({
          title: "Good job!",
          // text: "You clicked the button!",
          icon: "success"
        });
        // navigate("/dashboard/employers/meetings")
      }

    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className='flex flex-col border w-full' >
        <div className='mt-5 ml-5'>
          <div className="w-full">
            <PageTitle Title={Title} />
          </div>
        </div>
        <div className='mt-3'>
          <div className='p-5 flex flex-col '>
            <div className='justify-end flex text-xl text-divyang' >
              <button className='flex items-center gap-2' onClick={() => setReafresh(refaresh + 1)}> Refresh <SlRefresh /></button>
            </div>
            <Table className="border" style={{ background: "#ffffff" }} >
              <TableHeader>
                <TableRow>
                  <TableHead className="font-bold text-black">NAME</TableHead>
                  <TableHead className="font-bold text-black">STATUS</TableHead>
                  <TableHead className="font-bold text-black">INFORMATION </TableHead>
                  <TableHead className="font-bold text-black">CV </TableHead>
                  <TableHead className="font-bold text-black">ACTIONS</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {
                  allApplicants.length === 0 ? (
                    <>
                      <div className='flex w-full justify-center '>
                        <div>
                        {loading2 && <Loader />}
                          <p className=' my-5 font-medium text-xl'>No Applicants have <span className='text-divyang'> Come yet</span> </p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {
                        allApplicants.map((app, i) => {
                          return (
                            <>
                              <TableRow key={i}>
                                <TableCell > <span className="font-bold text-black"> Mohit Jaiswal</span> <br />
                                  
                                  <span>{app.totalyears === "" ? app.totalyears : " Not updated profile"} </span>
                                  {loading && <Loader />}
                                </TableCell>
                                <TableCell>
                                  <select className="mt-1 border-none rounded-md shadow-sm focus:border-none focus:ring-0 focus:ring-info-50 focus:ring-opacity-0"
                                    onChange={(e) => handleUpdate(app.applicantNo, e.target.value)}
                                    defaultValue={app.status}>
                                    <option className="bg-gray-100" value={"sent"} >Padding</option>
                                    <option className="bg-gray-100" value={"shortlisted"} >Shortlisted</option>
                                    <option className="bg-gray-100" value={"rejected"} >Rejected</option>
                                  </select>
                                </TableCell>
                                <TableCell>
                                  <span>{app.jobEmail === "" ? app?.jobEmail : "Not updated profile"}</span> <br />
                                  <span>{app.jobPhone}</span>
                                </TableCell>
                                <TableCell >
                                  <Link className='text-blue-600' target="_blank" to={`https://divyangcareer.s3.ap-south-1.amazonaws.com/assets/file/${app?.candidateId?.cvAttachment}`} rel="noopener noreferrer">view cv
                                  </Link>
                                </TableCell>
                                <TableCell >
                                  <div className='flex text-2xl'>
                                    {/* <div>
                                      <TbMessageCircle2Filled className=' text-blue-600 cursor-pointer' />
                                    </div> */}
                                    {" "}
                                    <div>
                                      <Link to={`/dashboard/employers/post-meeting?id=${app?.candidateId?._id}`}>
                                        <BiLogoZoom className=' ml-5 text-3xl text-blue-600 cursor-pointer' />
                                      </Link>
                                    </div>
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
  )
}

export default EmpolyeeApplicants