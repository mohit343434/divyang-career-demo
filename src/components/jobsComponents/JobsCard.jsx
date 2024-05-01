import React, { useEffect, useState } from 'react';
import { FaRegHeart } from "react-icons/fa6";
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import axiosInstance from '@/src/utils/axiosConfig';
import { Link, useNavigate } from 'react-router-dom';
import { RxCross1 } from "react-icons/rx";
import Swal from 'sweetalert2';
import JobsFilter from './JobsFilter'; // Import the JobsFilter component

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from '@/components/ui/button';
import { useAuth } from '@/src/context/AuthContext';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

import { CiFilter } from 'react-icons/ci';
const JOBTYPES = ['Government', 'NGO', 'Private',]

const JobsCard = () => {
    const [jobs, setJobs] = useState([]);
    const [auth] = useAuth();
    const [categories, setCategories] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState({});
    const history = useNavigate(); // Initialize useHistory

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    // const [loadding, setLoadding] = useState(false);
    const limit = 8;

    const getAllJobs = async () => {
        try {
            const res = await axiosInstance.get("/homepage/job", {

                params: {
                    page: currentPage,
                    limit: limit,
                }
            })

            setJobs(res.data.job);
            setTotalPages(res.data.totalPages);

            // Extract categories from jobs and remove duplicates
            const allCategories = Array.from(new Set(res.data.job.map(job => job?.category?.name)));
            setCategories(allCategories);
        } catch (error) {
            console.log(error);
        }
    };

    const AddWishList = async (id) => {
        try {
            if (auth.token) {
                const res = await axiosInstance.post(`/candidate/job/wishlist`, {
                    jobId: id
                })
                if (res.data.status === "success") {
                    Swal.fire({
                        position: "top-end",
                        title: "Added to wishlist",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Sorry",
                    text: "Please Login",
                });
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Already Added",
                text: "Please check My Jobs section!",
            });
        }
    };

    useEffect(() => {
        getAllJobs();
    }, [currentPage]);

    const handleFilterChange = (category, checked) => {
        setSelectedCategories(prevState => ({
            ...prevState,
            [category]: checked
        }));
    };
    const handlePageChange = (page) => {
        setCurrentPage(page);
    }

    const clearFilters = () => {
        setSelectedCategories({});
    };

    const filteredJobs = jobs.filter(job => {
        // If no categories are selected, return true for all jobs
        if (Object.values(selectedCategories).every(value => !value)) {
            return true;
        }

        // Filter jobs based on selected categories
        return Object.entries(selectedCategories).some(([cat, isSelected]) =>
            isSelected && job.category?.name === cat
        );
    });
    const headings = "JOBS CATEGORIES"
    const filterTitle = "Filters"
    const clear = `Clear All `
    const jbtype = "JOBS TYPE"
    const jobsCareer = "JOBS CAREER"
    const jobsQualification = "JOBS QUALIFICATION"
    const jobsExp = "JOBS EXPERIENCE"
    const jobsGender = "JOBS GENDER"

    return (
        <div className='flex lg:items-start flex-wrap'>
            <div className="flex items-center justify-between mr-5 ml-5 ">
                <div className=' mr-5 ml-5  flex items-center lg:hidden'>
                    {/* <h1 className=' flex items-center gap-1'><CiFilter className='' />Filter </h1> */}
                    <Sheet className=''>
                        <div className='flex justify-between gap-36'>
                            <SheetTrigger className='flex items-center'>Filte <CiFilter className='text-xl' /></SheetTrigger>
                            <span className='flex items-center gap-1' onClick={clearFilters}>Clear All <RxCross1 /></span>
                        </div>
                        <SheetContent className="w-[300px] sm:w-[400px] overflow-scroll ">
                            <SheetHeader>
                                <SheetTitle>Choose your Job Filter</SheetTitle>
                                <SheetDescription>

                                </SheetDescription>
                                <div className=''>
                                    <JobsFilter
                                        filterTitle={filterTitle}
                                        clear={clear}
                                    />

                                    <JobsFilter
                                        categories={categories}
                                        selectedFilters={selectedCategories}
                                        onFilterChange={handleFilterChange}
                                        onClearFilters={clearFilters}
                                        heading={headings}
                                    // clear="Clear Filters"
                                    // filterTitle="Filter Jobs"
                                    />
                                </div>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
                {/* Use the JobsFilter component */}
                <div className=" pr-6  flex-col lg:flex   bg-white h-fit  rounded-xl border border-orange-500 hidden">
                    <JobsFilter
                        filterTitle={filterTitle}
                        clear={clear} />

                    <JobsFilter
                        categories={categories}
                        selectedFilters={selectedCategories}
                        onFilterChange={handleFilterChange}
                        onClearFilters={clearFilters}
                        // heading="Categories"
                        // clear="Clear Filters"
                        filterTitle={headings}
                    />
                    <JobsFilter
                        categories={JOBTYPES}
                        selectedFilters={selectedCategories}
                        onFilterChange={handleFilterChange}
                        onClearFilters={clearFilters}
                        // heading="Categories"
                        // clear="Clear Filters"
                        filterTitle={jbtype}
                    />
                </div>

            </div>
            <div className='flex flex-col gap-5'>
                {filteredJobs.length === 0 ? (
                    <div className='pb-5'>
                        <Card className='border-orange-500 p-5  flex flex-col gap-3  items-center  md:w-[700px] w-full'>

                            <h3 className='text-lg font-bold hover:text-divyang'>Filtered job is not available now</h3>
                            <Button className='max-w-80 bg-divyang' >Explore Other jobs</Button>
                        </Card>
                    </div>
                ) : (
                    <>
                        {filteredJobs.map((job, index) => (
                            <Card key={index} className='border-orange-500 p-5  flex flex-col md:w-[700px] w-full '>
                                <div>
                                    <div className='flex justify-between items-center'>
                                        <Link to={`/jobs/${job?._id}`}>
                                            <h3 className="text-lg font-bold hover:text-divyang">{job?.title}</h3>
                                        </Link>
                                        <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <div className='outline-none bg-white border-none hover:bg-white ' onClick={() => AddWishList(job?._id)} >
                                                        <Button variant="outline" >
                                                            <FaRegHeart className='hover:text-orange-500 text-xl cursor-pointer' />
                                                        </Button>
                                                    </div>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Add to WishList</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </div>
                                    <p className="font-medium text-divyang">{job?.companyId?.name}</p>
                                </div>
                                <div className='flex gap-2 pt-3 flex-wrap'>
                                    <Badge className='bg-[#f5ecff] text-[#8369c7] '>{job?.type}</Badge>
                                    <Badge className='bg-[#f5ecff] text-[#8369c7] '>{job?.category?.name || "All Categories"}</Badge>
                                    <Badge className='bg-[#d9eaf5] text-divyang'>{job?.qualification || "Education Necessary"}</Badge>
                                    <Badge className='bg-[#d9eaf5] text-divyang'>{`${job?.salary} ₹/Month` || "Based on Experience"}</Badge>
                                </div>
                                <div className='flex justify-between pt-5 items-center'>
                                    {/* <p className="text-sm text-gray-700 text-divyang">{job?.description}</p> */}
                                    <p className="text-sm text-[#8369c7]">{job?.timeline || "Job expiring soon, Apply now"}</p>
                                    <Link to={`/jobs/${job?._id}`}>
                                        <Button className="bg-divyang">Apply Now</Button>
                                    </Link>
                                </div>
                            </Card>
                        ))}
                    </>
                )}

                {/* // Pagination */}

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
                        {Array.from({ length: totalPages }, (_, i) => {
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
        </div>
    );
};

export default JobsCard;


// import React, { useEffect, useState } from 'react';
// import { FaRegHeart } from "react-icons/fa6";
// import { Card } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';
// import axiosInstance from '@/src/utils/axiosConfig';
// import { Link, useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';

// import {
//     Tooltip,
//     TooltipContent,
//     TooltipProvider,
//     TooltipTrigger,
// } from "@/components/ui/tooltip"
// import { Button } from '@/components/ui/button';
// import { useAuth } from '@/src/context/AuthContext';

// const JobsCard = () => {
//     const [jobs, setJobs] = useState([]);
//     const [auth] = useAuth();
//     const [categories, setCategories] = useState([]);
//     const [selectedCategories, setSelectedCategories] = useState({});
//     const history = useNavigate(); // Initialize useHistory

//     const getAllJobs = async () => {
//         try {
//             const res = await axiosInstance.get("/homepage/job");
//             setJobs(res.data.job);
//             // Extract categories from jobs and remove duplicates
//             const allCategories = Array.from(new Set(res.data.job.map(job => job?.category?.name)));
//             setCategories(allCategories);
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     const AddWishList = async (id) => {
//         try {
//             if (auth.token) {
//                 const res = await axiosInstance.post(`/candidate/job/wishlist`, {
//                     jobId: id
//                 })
//                 if (res.data.status === "success") {
//                     Swal.fire({
//                         position: "top-end",
//                         title: "Added to wishlist",
//                         icon: "success",
//                         showConfirmButton: false,
//                         timer: 1500
//                     });
//                 }
//             } else {
//                 Swal.fire({
//                     icon: "error",
//                     title: "Sorry",
//                     text: "Please Login",
//                 });
//             }
//         } catch (error) {
//             Swal.fire({
//                 icon: "error",
//                 title: "Already Added",
//                 text: "Please check My Jobs section!",
//             });
//         }
//     };

//     useEffect(() => {
//         getAllJobs();
//     }, []);

//     const handleCategoryChange = (category) => {
//         setSelectedCategories(prevState => ({
//             ...prevState,
//             [category]: !prevState[category] // Toggle the checkbox state
//         }));
//     };

//     const isCategorySelected = (category) => selectedCategories[category];

//     const filteredJobs = jobs.filter(job => {
//         // If no categories are selected, return true for all jobs
//         if (Object.values(selectedCategories).every(value => !value)) {
//             return true;
//         }

//         // Filter jobs based on selected categories
//         return Object.entries(selectedCategories).some(([cat, isSelected]) =>
//             isSelected && job.category?.name === cat
//         );
//     });

//     return (
//         <div className='flex justify-center gap-10 min-w-80'>
//             <div className="">
//                 {categories.map((category, index) => (
//                     <label key={index} className="flex items-center">
//                         <input
//                             type="checkbox"
//                             checked={isCategorySelected(category)}
//                             onChange={() => handleCategoryChange(category)}
//                         />

//                         <span className="ml-2">{category}</span>
//                     </label>
//                 ))}
//             </div>
//             <div className='flex flex-col gap-5'>
//                 {filteredJobs.length === 0 ? (
//                     <div>
//                         <h1 className='text-3xl font-bold text-center'>No Jobs Found</h1>
//                     </div>
//                 ) : (
//                     <>
//                         {filteredJobs.map((job, index) => (
//                             <Card key={index} className='border-orange-500 p-5  flex flex-col w-full '>
//                                 <div>
//                                     <div className='flex justify-between items-center'>
//                                         <Link to={`/jobs/${job?._id}`}>
//                                             <h3 className="text-lg font-bold hover:text-divyang">{job?.title}</h3>
//                                         </Link>
//                                         <TooltipProvider>
//                                             <Tooltip>
//                                                 <TooltipTrigger asChild>
//                                                     <div className='outline-none bg-white border-none hover:bg-white ' onClick={() => AddWishList(job?._id)} >
//                                                         <Button variant="outline" >
//                                                             <FaRegHeart className='hover:text-orange-500 text-xl cursor-pointer' />
//                                                         </Button>
//                                                     </div>
//                                                 </TooltipTrigger>
//                                                 <TooltipContent>
//                                                     <p>Add to WishList</p>
//                                                 </TooltipContent>
//                                             </Tooltip>
//                                         </TooltipProvider>
//                                     </div>
//                                     <p className="font-medium text-divyang">{job?.companyId?.name}</p>
//                                 </div>
//                                 <div className='flex gap-2 pt-3'>
//                                     <Badge className='bg-[#f5ecff] text-[#8369c7] '>{job?.type}</Badge>
//                                     <Badge className='bg-[#f5ecff] text-[#8369c7] '>{job?.category?.name || "All Categories"}</Badge>
//                                     <Badge className='bg-[#d9eaf5] text-divyang'>{job?.qualification || "Education Necessary"}</Badge>
//                                     <Badge className='bg-[#d9eaf5] text-divyang'>{`${job?.salary} ₹/Month` || "Based on Experience"}</Badge>
//                                 </div>
//                                 <div className='flex justify-between pt-5 items-center'>
//                                     {/* <p className="text-sm text-gray-700 text-divyang">{job?.description}</p> */}
//                                     <p className="text-sm text-[#8369c7]">{job?.timeline || "Job expiring soon, Apply now"}</p>
//                                     <Link to={`/jobs/${job?._id}`}>
//                                         <Button className="bg-divyang">Apply Now</Button>
//                                     </Link>
//                                 </div>
//                             </Card>
//                         ))}
//                     </>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default JobsCard;