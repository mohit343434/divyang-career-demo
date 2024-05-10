import React, { useEffect, useState } from 'react'
import ShemesBlogProps from './ShemesBlogProps'
import SearchBlogAndSchemsCompo from './SearhBlogAndSchemsCompo'
import axiosInstance from '@/src/utils/axiosConfig'
import Loader from "@/Dashboard/DashboardComponents/GlobalComponents/Loader"
import { convertHtmlToText } from '@/src/utils/HtmlToText'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
const ShemesBlogsMain = () => {
  const [allBlogs, setAllBlogs] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loadding, setLoadding] = useState(false);
  const limit = 4;
  const getAllBlogs = async () => {
    try {
      setLoadding(true)
      const respons = await axiosInstance.get(`homepage/article?type=blog`, {
        params: {
          page: currentPage,
          limit: limit,
        }
      })
      setAllBlogs(respons.data.data);
      setTotalPages(respons.data.totalPages);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadding(false)
    }
  }
  // console.log(allBlogs);
  useEffect(() => {
    getAllBlogs();
  }, [currentPage]);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  }
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-IN', options);
  }
  return (
    <>
      <div className='flex justify-between flex-wrap lg:flex-nowrap md:py-12'>
        <div className='flex flex-wrap justify-center gap-6 px-5' >
          {
            allBlogs.length === 0 ? (<>
              <div>
                {loadding && <Loader />}
                <p>No blogs found</p>
              </div>
            </>) : (<>
              {
                allBlogs.map((item, i) => {
                  return (
                    <ShemesBlogProps
                      key={i}
                      img={item?.image}
                      blog={item?.type}
                      date={formatDate(item?.createdAt)}
                      hadding={convertHtmlToText(item?.title)}
                      subhadding={convertHtmlToText(item?.description)}
                      linkToNavigation={item?._id}
                    />
                  )
                })
              }
            </>)
          }
          <Pagination>
            <PaginationContent className="flex flex-wrap justify-center">
              <PaginationItem>
                {currentPage === 1 ? null : <PaginationPrevious className="cursor-pointer" onClick={() => handlePageChange(currentPage - 1)} />}
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

export default ShemesBlogsMain