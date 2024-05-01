import React, { useState } from 'react'
import CandidatesFilter from './candidatedCompo/CandidatesFilter';
import CandidtesCards from './candidatedCompo/CandidtesCards';
import { RxCross1 } from "react-icons/rx";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import CandidateHeader from './candidatedCompo/CandidateHeader';

const CATEGORIES = ['Blood Disorder', 'Haemophilia', 'Chronic Neurological', 'Multiple Sclerosis', 'Parkinson’s Disease', 'Intellectual Disability', 'Mental Illness', 'Multiple Disabilities', 'Physical Disability', 'Hearing Impairment', 'Locomotor Disability', 'Language Disability', 'Visual Impairment', 'Sales'];
const JOBSCAREER = ['Accounts / Taxation', 'BFSI', 'Ecommerce', 'Education', 'Hospitality', 'Manufacturing', 'Retail'];
const JOBSQUALIFICATION = ['Associate Degree', 'Bachelor Degree', 'Certificate', 'Doctorate Degree', 'Masters Degree'];
const JOBSEXP = ['0 - 2 Years', '3 - 5 Years', '6 - 8 Years', '9+ Years', 'Fresher'];
const GENDER = ['Female', 'Male'];

const JOBS = [
    {
        id: 1,
        name: 'Ramesh',
        image: '',
        category: 'Blood Disorder',
        location: 'Mumbai',
        qualification: 'Masters Degree',
        description: 'I’m a Creative Director and Designer based in New York, and have spent the last thirteen years helping to bring brands to life through strategic design.',
        gender: 'Male',
        jobsExp:'Fresher'
    },
    {
        id: 2,
        name: 'Suresh',
        image: '',
        category: 'Haemophilia',
        rating: 3,
        type: 'Government',
        title: 'Data Entry Operator',
        location: 'Delhi',
        salary: '15,000/day',
        description: 'I have extensive experience in data entry and data management.',
        gender: 'Female'
    },
    {
        id: 3,
        name: 'Priya',
        image: '',
        category: 'Chronic Neurological',
        rating: 5,
        type: 'Government',
        title: 'Graphic Designer',
        location: 'Bangalore',
        salary: '20,000/day',
        description: 'I specialize in creating visually appealing designs for print and digital media.',
        gender: 'Male'
    },
    {
        id: 4,
        name: 'Amit',
        image: '',
        rating: 2,
        title: 'Software Engineer',
        location: 'Pune',
        salary: '30,000/day',
        description: 'I develop software solutions to meet the needs of clients.',
        gender: 'Female',

    },
    {
        id: 5,
        name: 'Anjali',
        image: '',
        rating: 5,
        title: 'Marketing Manager',
        location: 'Kolkata',
        salary: '25,000/day',
        description: 'I devise marketing strategies to promote products and services.',
        gender: 'Male'
    },
    {
        id: 6,
        name: 'Rajesh',
        image: '',
        rating: 4,
        title: 'Accountant',
        location: 'Chennai',
        salary: '22,000/day',
        description: 'I manage financial records and prepare reports for businesses.',
        gender: 'Female'
    },
    {
        id: 7,
        name: 'Meera',
        image: '',
        rating: 3,
        title: 'HR Manager',
        location: 'Hyderabad',
        salary: '28,000/day',
        description: 'I oversee recruitment, training, and employee relations within organizations.',
        gender: 'Male'
    },
    {
        id: 8,
        name: 'Akash',
        image: '',
        rating: 4,
        title: 'Customer Service Representative',
        location: 'Ahmedabad',
        salary: '16,000/day',
        description: 'I handle customer inquiries and resolve issues in a timely manner.',
        gender: 'Female'
    },
    {
        id: 9,
        name: 'Pooja',
        image: '',
        rating: 3,
        title: 'Web Developer',
        location: 'Jaipur',
        salary: '27,000/day',
        description: 'I design and develop websites to meet client specifications.',
        gender: 'Male'
    },
    {
        id: 10,
        name: 'Neha',
        image: '',
        rating: 5,
        title: 'Content Writer',
        location: 'Lucknow',
        salary: '18,000/day',
        description: 'I create engaging content for websites, blogs, and social media platforms.',
        gender: 'Female'
    }
];

const ITEMS_PER_PAGE = 6;
const CandidatesMain = () => {
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
            : selectedFilters.includes(job.category) || selectedFilters.includes(job.type)||selectedFilters.includes(job.gender)||selectedFilters.includes(job.location)
            ||selectedFilters.includes(job.jobsExp)
    );

    const indexOfLastJob = currentPage * ITEMS_PER_PAGE;
    const indexOfFirstJob = indexOfLastJob - ITEMS_PER_PAGE;
    const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);



    // 👆👆###################### Filter Functions ##############################

    // ###################### Props data 👇

    const headings = "JOBS CATEGORIES"
    const filterTitle = "Filters"
    const clear = `Clear All `
    const jobsCareer = "JOBS CAREER"
    const jobsQualification = "QUALIFICATION"
    const jobsExp = "EXPERIENCE"
    const gender = "GENDER"

    return (
        <div>
            <CandidateHeader />
            <div className='bg-orange-100 w-full md:px-28 md:py-12'>
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

                                            <CandidatesFilter
                                                filterTitle={filterTitle}
                                                clear={clear}
                                                heading={headings}
                                                categories={CATEGORIES}
                                                selectedFilters={selectedFilters}
                                                onFilterChange={handleFilterChange}
                                                onClearFilters={handleClearFilters}
                                            />


                                            <CandidatesFilter
                                                heading={jobsCareer}
                                                categories={JOBSCAREER}
                                                selectedFilters={selectedFilters}
                                                onFilterChange={handleFilterChange}
                                                onClearFilters={handleClearFilters}
                                            />
                                            <CandidatesFilter
                                                heading={jobsQualification}
                                                categories={JOBSQUALIFICATION}
                                                selectedFilters={selectedFilters}
                                                onFilterChange={handleFilterChange}
                                                onClearFilters={handleClearFilters}
                                            />
                                            <CandidatesFilter
                                                heading={jobsExp}
                                                categories={JOBSEXP}
                                                selectedFilters={selectedFilters}
                                                onFilterChange={handleFilterChange}
                                                onClearFilters={handleClearFilters}
                                            />

                                            <CandidatesFilter
                                               
                                                heading={gender}
                                                categories={GENDER}
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
                    <div className="flex justify-center p-5">

                        {/*###################### Left Side: Job Filters ############################*/}
                        <div className=" pr-6 lg:flex flex-col  gap-5 hidden">

                            <CandidatesFilter
                                filterTitle={filterTitle}
                                clear={clear}
                                heading={headings}
                                categories={CATEGORIES}
                                selectedFilters={selectedFilters}
                                onFilterChange={handleFilterChange}
                                onClearFilters={handleClearFilters}

                                
                                c
                            />

                            <CandidatesFilter
                                heading={jobsCareer}
                                categories={JOBSCAREER}
                                selectedFilters={selectedFilters}
                                onFilterChange={handleFilterChange}
                                onClearFilters={handleClearFilters}
                            />
                            <CandidatesFilter
                                heading={jobsQualification}
                                categories={JOBSQUALIFICATION}
                                selectedFilters={selectedFilters}
                                onFilterChange={handleFilterChange}
                                onClearFilters={handleClearFilters}
                            />
                            <CandidatesFilter
                                heading={jobsExp}
                                categories={JOBSEXP}
                                selectedFilters={selectedFilters}
                                onFilterChange={handleFilterChange}
                                onClearFilters={handleClearFilters}
                            />

                            <CandidatesFilter
                            
                                heading={gender}
                                categories={GENDER}
                                selectedFilters={selectedFilters}
                                onFilterChange={handleFilterChange}
                                onClearFilters={handleClearFilters}
                            />


                        </div>

                        {/* Right Side: Job Cards */}





                        <div className="flex flex-col gap-5 w-full">
                            {filteredJobs.map(job => (
                                <CandidtesCards key={job.id} job={job} />
                            ))}

                        </div>

                    </div>

                </div>
            </div>
        </div>


    )
}

export default CandidatesMain
