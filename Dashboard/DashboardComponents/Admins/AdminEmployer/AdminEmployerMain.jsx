import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Input } from '@/components/ui/input';
import axiosInstance from '@/src/utils/axiosConfig';
import Loader from "../../GlobalComponents/Loader"
const AdminEmployerMain = () => {
  const [Employer, setEmployer] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loadding, setLoadding] = useState(false);
  const limit = 5

  const getAllEmployer = async () => {
    try {
      setLoadding(true)
      const response = await axiosInstance.get(`/admin/user/employer`, {
        params: {
          page: currentPage,
          limit: limit,
        }
      })
      // console.log(response);
      setEmployer(response.data.data);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadding(false)
    }

  }
  useEffect(() => {
    getAllEmployer()
  }, [currentPage])

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-IN', options);
  }

  const handlePageChange = (page) => {
    setCurrentPage(page);
  }


  return (
    <div className=" p-10">
      <h1 className=" text-2xl font-semibold pb-10">Employer Table</h1>
      <div className=" bg-slate-100  p-6 border">
        <div className="flex justify-between flex-wrap gap-3">
          <div className="w-72 md:w-full pb-5">
            <Input
              type="text"
              placeholder="Search by company"
              className="w-full border px-2 py-1 h-10 rounded-md border-gray-300"
            />
          </div>
        </div>
        <Table className="w-full bg-white border">
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold">FIRST NAME</TableHead>
              <TableHead className="font-bold">LAST NAME</TableHead>
              <TableHead className="font-bold">REGISTER DATE</TableHead>
              <TableHead className="font-bold">ACTION</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              Employer.length === 0 ? (<>
                <div className='flex w-full justify-center'>
                  <div>
                    <p className=' my-5 font-medium text-xl'>Please Create <span className='text-divyang'>Job</span> </p>
                  </div>
                </div>
              </>) : (
                <>
                  {
                    Employer.map((emp, i) => {
                      return (
                        <>
                          {
                            loadding && <Loader />
                          }
                          <TableRow key={i}>
                            <TableCell>{emp?.firstName || "Not update Profile"}</TableCell>
                            <TableCell>{emp?.lastName || "Not update Profile"}</TableCell>
                            <TableCell >{formatDate(emp?.createdAt)}</TableCell>
                            <TableCell>
                              <select className="mt-1 border-none rounded-md shadow-sm focus:border-none focus:ring-0 focus:ring-info-50 focus:ring-opacity-0">
                                <option value="unblock" className="bg-gray-100">Unblock</option>
                                <option value="block" className="bg-gray-100">Block</option>
                              </select>
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
        <Pagination>
          <PaginationContent className="flex flex-wrap justify-center">
            <PaginationItem>
              {
                currentPage === 1 ? null :<PaginationPrevious className="cursor-pointer" onClick={() => handlePageChange(currentPage - 1)} />
              }
            </PaginationItem>
            <PaginationItem>
              {currentPage === 1 ? null : (
                <PaginationLink
                  className="cursor-pointer"
                  onClick={() => handlePageChange(1)}
                  isActive={currentPage === 1}
                >
                  1
                </PaginationLink>
              )}
            </PaginationItem>
            {currentPage > 3 && <PaginationItem><PaginationEllipsis /></PaginationItem>}
            {Array.from({ length: totalPages -1 }, (_, i) => {
              if (i >= currentPage - 1 && i <= currentPage + 1) {
                return (
                  <PaginationItem key={i + 1}>
                    <PaginationLink
                      className="cursor-pointer"
                      onClick={() => handlePageChange(i + 1)}
                      isActive={currentPage === i + 1}
                    >
                      {i + 1}
                    </PaginationLink>
                  </PaginationItem>
                );
              }
            })}
            {currentPage < totalPages - 2 && <PaginationItem><PaginationEllipsis /></PaginationItem>}
            <PaginationItem>
              {currentPage === totalPages ? null : (
                <PaginationLink
                  className="cursor-pointer"
                  onClick={() => handlePageChange(totalPages)}
                  isActive={currentPage === totalPages}
                >
                  {totalPages}
                </PaginationLink>
              )}
            </PaginationItem>
            <PaginationItem>
              {
                currentPage  === totalPages  ? null : <PaginationNext className="cursor-pointer" onClick={() => handlePageChange(currentPage + 1)} />
              }
             
            </PaginationItem>
          </PaginationContent>
        </Pagination>

      </div>
    </div>
  );
};

export default AdminEmployerMain;
