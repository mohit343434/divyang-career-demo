import React, { useEffect, useState } from 'react';
import { FaRegHeart } from "react-icons/fa6";
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import axiosInstance from '@/src/utils/axiosConfig';
import { Link, useLocation } from 'react-router-dom';
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
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Loading from "@/Dashboard/DashboardComponents/GlobalComponents/Loader"
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
import qs from 'qs'
const JOBTYPES = ['Government', 'NGO', 'Private',]

const JobsCard = () => {
    const [jobs, setJobs] = useState([]);
    const [auth] = useAuth();
    const location = useLocation();
    const [search] = useState(new URLSearchParams(location.search).get("search"));
    // console.log(search);
    const [categories, setCategories] = useState([]);
    const [Sector, setSector] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [filtercount, setfiltercount] = useState(1);
    const [loadding, setLoadding] = useState(false);
    const qualifications = ["10th pass", "12th pass", "Below 10th", "certificate", "Diploma", "Doctorate", "Graduate", "Under Graduate", "Post Graduate"];
    const experience = ["0-1 years", "1-2 years", "3-5 years", "6-9 years", "10+ years"]
    const gender = ["Female", "Male"]
    const getAllJobs = async () => {
        try {
            const queryparams = [
                { category: selectedCategories1.join(',') },
                { type: selectedCategories2.join(',') },
                { sector: selectedCategories3.join(',') },
                { qualification: selectedCategories4.join(',') },
                { experience: selectedCategories5.join(',') },
                { gender: selectedCategories6.join(',') },
            ]
            const filteredQuery = Object.assign({}, ...queryparams.filter((value) => Object.values(value) != ''))
            // console.log(filteredQuery)
            setLoadding(true)
            const limit = 7;
            const res = await axiosInstance.get("/homepage/job", {
                params: {
                    page: currentPage,
                    limit: limit,
                    title: search ,
                    ...filteredQuery

                },
                paramsSerializer: {
                    serialize: (params) => {
                        return qs.stringify(params)
                    }
                }
            });
            setJobs(res.data.job);
            setTotalPages(res.data.totalPages);
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })
            // console.log(error);/
        } finally {
            setLoadding(false);
        }
    };
    const getAllCategories = async () => {
        try {
            const res = await axiosInstance.get('/homepage/category')
            setCategories(res.data.data.map((category) => category.name))
        }
        catch (err) {
            console.log(err)
        }
        finally {
            setLoadding(false)
        }
    }
    const getAllSector = async () => {
        try {
            setLoadding(true)
            const res = await axiosInstance.get('/homepage/sector')
            setSector(res.data.data.map((category) => category.name));
        }
        catch (err) {
            console.log(err)
        }
        finally {
            setLoadding(false)
        }
    }
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
        getAllCategories()
        getAllSector()
    }, [])

    useEffect(() => {
        getAllJobs();
    }, [currentPage, filtercount]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    }
    const filterTitle = "Filters"
    const clear = `Clear All`

    const [selectedCategories1, setSelectedCategories1] = useState([]);
    const [selectedCategories2, setSelectedCategories2] = useState([]);
    const [selectedCategories3, setSelectedCategories3] = useState([]);
    const [selectedCategories4, setSelectedCategories4] = useState([]);
    const [selectedCategories5, setSelectedCategories5] = useState([]);
    const [selectedCategories6, setSelectedCategories6] = useState([]);

    const handleFilterChange1 = (category, checked) => {
        if (checked) {
            setSelectedCategories1(prevState => [...prevState, category]);
        } else {
            setSelectedCategories1(prevState => prevState.filter(item => item !== category));
        }
    };
    const handleFilterChange2 = (category, checked) => {
        if (checked) {
            setSelectedCategories2(prevState => [...prevState, category]);
        } else {
            setSelectedCategories2(prevState => prevState.filter(item => item !== category));
        }
    };
    const handleFilterChange3 = (category, checked) => {
        if (checked) {
            setSelectedCategories3(prevState => [...prevState, category]);
        } else {
            setSelectedCategories3(prevState => prevState.filter(item => item !== category));
        }
    };
    const handleFilterChange4 = (category, checked) => {
        if (checked) {
            setSelectedCategories4(prevState => [...prevState, category]);
        } else {
            setSelectedCategories4(prevState => prevState.filter(item => item !== category));
        }
    };
    const handleFilterChange5 = (category, checked) => {
        if (checked) {
            setSelectedCategories5(prevState => [...prevState, category]);
        } else {
            setSelectedCategories5(prevState => prevState.filter(item => item !== category));
        }
    };
    const handleFilterChange6 = (category, checked) => {
        if (checked) {
            setSelectedCategories6(prevState => [...prevState, category]);
        } else {
            setSelectedCategories6(prevState => prevState.filter(item => item !== category));
        }
    };
    const clearFilter = () => {
        setSelectedCategories1([]);
        setSelectedCategories2([]);
        setSelectedCategories3([]);
        setSelectedCategories4([]);
        setSelectedCategories5([]);
        setSelectedCategories6([]);
        console.log("selectedCategories1");
    };
    console.log(selectedCategories1);
    return (
        <div className='flex lg:items-start flex-wrap'>
            <div className="flex items-center justify-between mr-5 ml-5">
                <div className=' mr-5 ml-5  flex items-center lg:hidden'>
                    {/* <h1 className=' flex items-center gap-1'><CiFilter className='' />Filter </h1> */}
                    <Sheet className=''>
                        <div className='flex justify-between gap-36'>
                            <SheetTrigger className='flex items-center'>Filte <CiFilter className='text-xl' /></SheetTrigger>
                            {/* <span className='flex items-center gap-1' onClick={clearFilters}>Clear All <RxCross1 /></span> */}
                        </div>
                        <SheetContent className="w-[300px] sm:w-[400px] overflow-scroll ">
                            <SheetHeader>
                                <SheetTitle>Choose your Job Filter</SheetTitle>
                                <SheetDescription>
                                </SheetDescription>
                                <div className=''>
                                    <JobsFilter
                                        filterTitle={filterTitle}
                                        clear={clear} />

                                    <JobsFilter
                                        categories={categories}
                                        selectedFilters={selectedCategories1}
                                        onFilterChange={handleFilterChange1}
                                        onClearFilters={clearFilter}
                                        filterTitle={"JOBS CATEGORIES"}
                                    />
                                    <JobsFilter
                                        categories={JOBTYPES}
                                        selectedFilters={selectedCategories2}
                                        onFilterChange={handleFilterChange2}
                                        onClearFilters={clearFilter}
                                        filterTitle={"JOBS TYPE"}
                                    />
                                    <JobsFilter
                                        categories={Sector}
                                        selectedFilters={selectedCategories3}
                                        onFilterChange={handleFilterChange3}
                                        onClearFilters={clearFilter}
                                        filterTitle={"SECTOR"}
                                    />
                                    <JobsFilter
                                        categories={qualifications}
                                        selectedFilters={selectedCategories4}
                                        onFilterChange={handleFilterChange4}
                                        onClearFilters={clearFilter}
                                        filterTitle={"JOBS QUALIFICATION"}
                                    />
                                    <JobsFilter
                                        categories={experience}
                                        selectedFilters={selectedCategories5}
                                        onFilterChange={handleFilterChange5}
                                        onClearFilters={clearFilter}
                                        filterTitle={"JOBS EXPERIENCE"}
                                    />
                                    <JobsFilter
                                        categories={gender}
                                        selectedFilters={selectedCategories6}
                                        onFilterChange={handleFilterChange6}
                                        onClearFilters={clearFilter}
                                        filterTitle={"JOBS gender"}
                                    />
                                </div>

                            </SheetHeader>
                            <button className='p-2 px-2 text-white bg-divyang mx-auto my-5 rounded-md' onClick={() => { getAllJobs, setfiltercount(filtercount + 1) }}  >Apply Now</button>
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
                        selectedFilters={selectedCategories1}
                        onFilterChange={handleFilterChange1}
                        onClearFilters={clearFilter}
                        filterTitle={"JOBS CATEGORIES"}
                    />
                    <JobsFilter
                        categories={JOBTYPES}
                        selectedFilters={selectedCategories2}
                        onFilterChange={handleFilterChange2}
                        onClearFilters={clearFilter}
                        filterTitle={"JOBS TYPE"}
                    />
                    <JobsFilter
                        categories={Sector}
                        selectedFilters={selectedCategories3}
                        onFilterChange={handleFilterChange3}
                        onClearFilters={clearFilter}
                        filterTitle={"SECTOR"}
                    />
                    <JobsFilter
                        categories={qualifications}
                        selectedFilters={selectedCategories4}
                        onFilterChange={handleFilterChange4}
                        onClearFilters={clearFilter}
                        filterTitle={"JOBS QUALIFICATION"}
                    />
                    <JobsFilter
                        categories={experience}
                        selectedFilters={selectedCategories5}
                        onFilterChange={handleFilterChange5}
                        onClearFilters={clearFilter}
                        filterTitle={"JOBS EXPERIENCE"}
                    />
                    <JobsFilter
                        categories={gender}
                        selectedFilters={selectedCategories6}
                        onFilterChange={handleFilterChange6}
                        onClearFilters={clearFilter}
                        filterTitle={"JOBS gender"}
                    />
                    <button className='p-2 px-2 text-white bg-divyang mx-auto my-5 rounded-md' onClick={() => { getAllJobs, setfiltercount(filtercount + 1) }} >Apply Now</button>
                </div>

            </div>
            <div className='flex flex-col gap-5'>
                {jobs.length === 0 ? (
                    <>
                        {loadding && <Loading />}
                        <div className='pb-5'>
                            <Card className='border-orange-500 p-5  flex flex-col gap-3  items-center  md:w-[700px] w-full'>
                                <h3 className='text-lg font-bold hover:text-divyang'>Filtered job is not available now</h3>
                                <Button className='max-w-80 bg-divyang' >Explore Other jobs</Button>
                            </Card>
                        </div>
                    </>
                ) : (
                    <>
                        {jobs.map((job, index) => (
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
        </div>
    );
};

export default JobsCard;

