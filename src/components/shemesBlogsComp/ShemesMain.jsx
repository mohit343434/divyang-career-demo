import React, { useEffect, useState } from 'react'
import ShemesBlogProps from './ShemesBlogProps'
import SearchBlogAndSchemsCompo from './SearhBlogAndSchemsCompo'
import axiosInstance from '@/src/utils/axiosConfig'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Loader from "@/Dashboard/DashboardComponents/GlobalComponents/Loader";
import { convertHtmlToText } from '@/src/utils/HtmlToText';
const ShemesMain = () => {
  const [schems, setSchems] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loadding, setLoadding] = useState(false);
  const limit = 4;
  const handlePageChange = (page) => {
    setCurrentPage(page);
  }
  const getAllShemes = async () => {
    try {
      setLoadding(true)
      const response = await axiosInstance.get(`/homepage/article?type=scheme`, {
        params: {
          page: currentPage,
          limit: limit,
        }
      });
      // Assuming the data you need is in response.data
      setSchems(response.data.data);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error('Error fetching schems:', error);
    } finally {
      setLoadding(false)
    }
  }

  useEffect(() => {
    getAllShemes();
  }, [currentPage]);

  // console.log(schems);
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-IN', options);
  }
  return (
    <>
      <div className='flex justify-between flex-wrap lg:flex-nowrap md:py-12'>
        <div className='flex flex-wrap justify-center gap-6 px-5' >

          {
            schems.length === 0 ? (<>
              {loadding && <Loader />}
            </>) : (
              <>
                {
                  schems.map((item, index) => (
                    <ShemesBlogProps
                      key={index}
                      img={item?.image}
                      blog={item?.type}
                      date={formatDate(item?.createdAt)}
                      hadding={convertHtmlToText(item?.title)}
                      subhadding={convertHtmlToText(item?.description)}
                      linkToNavigation={item?._id}
                    />
                  ))
                }
              </>
            )
          }


          <Pagination>
            <PaginationContent className="flex flex-wrap justify-center">
              <PaginationItem>
                {
                  currentPage === 1 ? null : <PaginationPrevious className="cursor-pointer" onClick={() => handlePageChange(currentPage - 1)} />
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
              {Array.from({ length: totalPages - 1 }, (_, i) => {
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
                  currentPage === totalPages ? null : <PaginationNext className="cursor-pointer" onClick={() => handlePageChange(currentPage + 1)} />
                }

              </PaginationItem>
            </PaginationContent>
          </Pagination>


        </div>
        <div>
          <SearchBlogAndSchemsCompo />
        </div>
      </div>
    </>
  )
}

export default ShemesMain
