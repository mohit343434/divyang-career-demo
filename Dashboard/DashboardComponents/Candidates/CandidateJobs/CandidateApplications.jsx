import React, { useEffect, useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import axiosInstance from "@/src/utils/axiosConfig";
import { Link } from "react-router-dom";
import Loader from "../../GlobalComponents/Loader"
const CandidateApplications = () => {
  const [allApply, setAllApply] = useState([])
  const [loading, setLoading] = useState(false)
  const getAllApply = async () => {
    try {
      setLoading(true)
      const res = await axiosInstance.get(`/candidate/job/applicant`);
      setAllApply(res.data.data);
    } catch (error) {
      console.log(error);
    }finally{
      setLoading(false)
    }
 
  }
  useEffect(() => {
    getAllApply()
  }, [])
  return (
    <>
      <div className="p-5 " style={{ background: "#fafafa" }}>
        <Table className="border" style={{ background: "#ffffff" }}>
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold text-black">JOB TITLE</TableHead>
              <TableHead className="font-bold text-black">SALARY </TableHead>
              <TableHead className="font-bold text-black">STATUS</TableHead>
              <TableHead className="font-bold text-black">TYPE</TableHead>
              <TableHead className="font-bold text-black">EMAIL & PHONE</TableHead>
              <TableHead className="font-bold text-black">ACTION</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              allApply.length === 0 ? (<>
                {loading && <Loader/> }
                <div className='flex justify-center'>
                  <Link to={"/jobs"} className='text-xl'> Apply <span className='text-divyang'>Job</span>  </Link>
                </div>
              </>) : (<>
                {
                  allApply.map((e) => {
                    return (
                      <>
                        <TableRow>
                         
                          <TableCell className="font-bold text-black ">
                            <div className="w-28 whitespace-nowrap overflow-hidden text-ellipsis">
                              {e?.jobId?.title}
                            </div>
                          </TableCell>
                          <TableCell className="hover:text-divyang">
                            {e?.jobId?.salary}
                          </TableCell>
                          <TableCell>
                            {e?.status === "sent" ? <span className="border px-3 bg-yellow-500 rounded-xl text-white p-1">Padding</span> : null}
                            {e?.status === "shortlisted" ? <span className="border px-3 bg-green-500  rounded-xl text-white p-1" >Shortlisted</span> : null}
                            {e?.status === "rejected" ? <span className="border px-3 bg-divyang rounded-xl text-white p-1" >Rejected</span> : null}
                            {e?.status === "" ? <span>Error</span> : null}
                          </TableCell>
                          <TableCell className="hover:text-divyang">
                            {e?.jobId?.type}
                          </TableCell>
                          <TableCell className="hover:text-divyang">
                            <span>{e?.companyId?.email} </span> <br />
                            <span>{e?.companyId?.phone} </span>
                          </TableCell>
                          <TableCell className="hover:text-divyang">
                            <Link to={`/jobs/${e?.jobId?._id}`} className="text-blue-600 ">view</Link>
                          </TableCell>
                        </TableRow>
                      </>
                    )
                  })
                }
              </>)
            }


          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default CandidateApplications;
