import React, { useState } from 'react'
import CompaniesHeader from './companiesCompo/CompaniesHeader'
import CompaniesCard from './companiesCompo/CompaniesCard'
import CompaniesFilter from './companiesCompo/CompaniesFilter'
import { RxCross1 } from "react-icons/rx";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import CompaniesRange from './companiesCompo/CompaniesRange';
import CompaniesLocation from './companiesCompo/CompaniesLocation';



const LOCATION = ['India']
const SIZE = ['10-50', '50-100', '100-200', '200-300', '300-400', '400-500'];
const FOUNDED = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023];

const JOBS = [
    {
        id: 1,
        companyName: 'Commissioner Office,Saran Division,Chapra',
        image: '',
        overview:'Government Organization of Bihar',
        foundedIn:'2010',
        categories:'Hospitality',
        companySize:'10-50',
        phoneNo:'9878795678',
        email:'comsaran-bih@nic.in',
        location: 'Mumbai',
        jobs:'1',
        type:'Government',
       
    },
    {
        id: 2,
        companyName: 'Commissioner Office,Saran Division,Chapra',
        image: '',
        overview:'Government Organization of Bihar',
        foundedIn:'2010',
        categories:'Hospitality',
        companySize:'10-50',
        phoneNo:'9878795678',
        email:'comsaran-bih@nic.in',
        location: 'Mumbai',
        jobs:'1',
        type:'Government',
    },
    {
        id: 3,
        companyName: 'Commissioner Office,Saran Division,Chapra',
        image: '',
        overview:'Government Organization of Bihar',
        foundedIn:'2010',
        categories:'Hospitality',
        companySize:'10-50',
        phoneNo:'9878795678',
        email:'comsaran-bih@nic.in',
        location: 'Mumbai',
        jobs:'1', 
        type:'Government',
    },
    {
        id: 4,
        companyName: 'Commissioner Office,Saran Division,Chapra',
        image: '',
        overview:'Government Organization of Bihar',
        foundedIn:'2010',
        categories:'Hospitality',
        companySize:'10-50',
        phoneNo:'9878795678',
        email:'comsaran-bih@nic.in',
        location: 'Mumbai',
        jobs:'1',
        type:'Government',

    },
    {
        id: 5,
        companyName: 'Commissioner Office,Saran Division,Chapra',
        image: '',
        overview:'Government Organization of Bihar',
        foundedIn:'2010',
        categories:'Hospitality',
        companySize:'10-50',
        phoneNo:'9878795678',
        email:'comsaran-bih@nic.in',
        location: 'Mumbai',
        jobs:'1',
        type:'Government',
    },
    {
        id: 6,
        companyName: 'Commissioner Office,Saran Division,Chapra',
        image: '',
        overview:'Government Organization of Bihar',
        foundedIn:'2010',
        categories:'Hospitality',
        companySize:'10-50',
        phoneNo:'9878795678',
        email:'comsaran-bih@nic.in',
        location: 'Mumbai',
        jobs:'1',
        type:'Government',
    },
    
];
const ITEMS_PER_PAGE = 6;
const CompaniesMain = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [selectedFilters, setSelectedFilters] = useState([]);

    // 👇###################### Filter Functions ##############################

    const handleFilterChange = (filter, isChecked, type) => {
        setSelectedFilters(prevFilters =>
            isChecked
                ? [...prevFilters, filter]
                : prevFilters.filter(item => item !== filter)
        );
    };


    const handleClearFilters = () => {
        setSelectedFilters([]);
    };

    const filteredJobs = JOBS.filter(job =>
        selectedFilters.length === 0
            ? true
            : selectedFilters.includes(job.size) || selectedFilters.includes(job.type) || selectedFilters.includes(job.gender) || selectedFilters.includes(job.location)
            || selectedFilters.includes(job.jobsExp)
    );

    const indexOfLastJob = currentPage * ITEMS_PER_PAGE;
    const indexOfFirstJob = indexOfLastJob - ITEMS_PER_PAGE;
    const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);



    // 👆👆###################### Filter Functions ##############################

    // ###################### Props data 👇
    const filterTitle = "Filters"
    const clear = `Clear All `
    const location ="LOCATION"
    const size = "SIZE"
    const founded = "FOUNDED"


    return (
        <div>
            <CompaniesHeader />

            <div className='bg-orange-100 w-full md:px-28 md:py-12  gap-20'>
                <div className='flex flex-col justify-end gap-20'>
                    <div className='lg:hidden flex items-center justify-between mr-5 ml-5 mt-5'>
                        <div className='flex items-center lg:hidden'>
                            <Sheet className='lg:hidden'>
                                <SheetTrigger>Filters</SheetTrigger>
                                <SheetContent className="w-[300px] sm:w-[400px] overflow-scroll lg:hidden">
                                    <SheetHeader>
                                        <SheetTitle>Choose your Job Filter</SheetTitle>
                                        <SheetDescription>

                                        </SheetDescription>
                                        <div className='overflow-scroll'>

                                            <CompaniesFilter

                                                filterTitle={filterTitle}
                                                clear={clear}

                                            />


                                            <CompaniesFilter
                                                heading={size}
                                                categories={SIZE}
                                                selectedFilters={selectedFilters}
                                                onFilterChange={handleFilterChange}
                                                onClearFilters={handleClearFilters}
                                            />

                                            <CompaniesRange
                                                heading={founded}
                                                categories={FOUNDED}
                                                selectedFilters={selectedFilters}
                                                onFilterChange={handleFilterChange}
                                                onClearFilters={handleClearFilters}
                                            />




                                        </div>
                                    </SheetHeader>
                                </SheetContent>
                            </Sheet>


                        </div>

                        <span onClick={handleClearFilters} className='flex items-center gap-1'>Clear All <RxCross1 /></span>
                    </div>
                    <div className="flex justify-center  gap-10">

                        {/*###################### Left Side: Job Filters ############################*/}
                        <div className=" pr-6 lg:flex flex-col  gap-3 hidden bg-white h-fit  rounded-xl border border-orange-500">
                            <CompaniesFilter
                                filterTitle={filterTitle}
                                clear={clear} />

                               <CompaniesLocation
                                heading={location}
                                categories={LOCATION}
                                selectedFilters={selectedFilters}
                                onFilterChange={handleFilterChange}
                                onClearFilters={handleClearFilters}
                               />
                            

                            <CompaniesFilter
                                heading={size}
                                categories={SIZE}
                                selectedFilters={selectedFilters}
                                onFilterChange={handleFilterChange}
                                onClearFilters={handleClearFilters}
                            />

                            <CompaniesRange
                                heading={founded}
                                categories={FOUNDED}
                                selectedFilters={selectedFilters}
                                onFilterChange={handleFilterChange}
                                onClearFilters={handleClearFilters}
                            />

                           



                        </div>

                        {/* Right Side: Job Cards */}





                        <div className="flex flex-col gap-5 w-[80%]">
                            {filteredJobs.map(job => (
                                <CompaniesCard key={job.id} job={job} />
                            ))}

                        </div>

                    </div>

                </div>
            </div>
        </div>


    )
}


export default CompaniesMain
