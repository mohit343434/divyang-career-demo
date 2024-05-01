
import React, { useEffect, useState } from 'react';
import JobsFilter from './JobsFilter';
import JobsCard from './JobsCard';
import { RxCross1 } from "react-icons/rx";
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CiFilter } from "react-icons/ci";
import { FaFilterCircleXmark } from "react-icons/fa6";
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



// // Dummy Data
const CATEGORIES = ['Blood Disorder', 'Haemophilia', 'Chronic Neurological', 'Multiple Sclerosis', 'Parkinson’s Disease', 'Intellectual Disability', 'Mental Illness', 'Multiple Disabilities', 'Physical Disability', 'Hearing Impairment', 'Locomotor Disability', 'Language Disability', 'Visual Impairment', 'Sales'];
const JOBTYPES = ['Government', 'NGO', 'Private',]
const JOBSCAREER = ['Accounts / Taxation', 'BFSI', 'Ecommerce', 'Education', 'Hospitality', 'Manufacturing', 'Retail']
const JOBSQUALIFICATION = ['10th Pass', '12th Pass', 'Below 10th', 'Certificate', 'Degree', 'Diploma', 'Graduate', 'Master', 'Post Graduate',]
const JOBSEXP = ['0 - 1 Years', '1 - 2 Years', '3 - 5 Years', '5 Year +']
const JOBSGENDER = ['Female', 'Male']

const JOBS = [
    {
        _id: 1,
        title: 'Customer Support Executive – For Specially Abled',
        category: 'Blood Disorder',
        type: 'NGO',
        location: 'Mumbai',
        salary: '17,000/Month',
        timeline: '14 days left to apply',
        description: 'This job is for Blood Disorder Candidate.'
    },
    {
        id: 2,
        title: 'Domestic Data Entry Operator',
        category: 'Haemophilia',
        type: 'Private',
        location: 'Mumbai',
        salary: '17,000/Month',
        timeline: '14 days left to apply',
        description: 'This job is for Blood Disorder Candidate.'
    },
    {
        id: 3,
        title: 'Accounts Executive for Leading Bank',
        category: 'Chronic Neurological',
        type: 'Government',
        location: 'Mumbai',
        salary: '17,000/Month',
        timeline: '14 days left to apply',
        description: 'This job is for Blood Disorder Candidate.'
    },
    {
        id: 4,
        title: 'Accounts Executive for Leading Bank',
        category: 'Physical Disability',
        type: 'Government',
        location: 'Mumbai',
        salary: '17,000/Month',
        timeline: '14 days left to apply',
        description: 'This job is for Blood Disorder Candidate.'
    },
    {
        id: 5,
        title: 'Domestic Data Entry Operator',
        category: 'Haemophilia',
        type: 'Private',
        location: 'Mumbai',
        salary: '17,000/Month',
        timeline: '14 days left to apply',
        description: 'This job is for Blood Disorder Candidate.'
    },


];

const JobPortalPage = () => {
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState()

    const [JOBS, setJobs] = useState([]);
    // const [auth] = useAuth()
    const getAllJobs = async () => {
        try {
            const res = await axiosInstance.get("/homepage/job");
            setJobs(res.data.job);
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getAllJobs();
    }, []);
    // 👇###################### Filter Functions ##############################

    const handleFilterChange = (category, isChecked, type) => {
        setSelectedFilters(prevFilters =>
            isChecked
                ? [...prevFilters, category]
                : prevFilters.filter(filter => filter !== category)
        );
    };

    const handleClearFilters = () => {
        setSelectedFilters([]);
    };

    const filteredJobs = JOBS.filter(job =>
        selectedFilters.length === 0
            ? true
            : selectedFilters.includes(job.category) || selectedFilters.includes(job.type)
    );
    // 👆👆###################### Filter Functions ##############################

    // ###################### Props data 👇
    const headings = "JOBS CATEGORIES"
    const filterTitle = "Filters"
    const clear = `Clear All `
    const jbtype = "JOBS TYPE"
    const jobsCareer = "JOBS CAREER"
    const jobsQualification = "JOBS QUALIFICATION"
    const jobsExp = "JOBS EXPERIENCE"
    const jobsGender = "JOBS GENDER"
    return (
        <div className='p-10 md:py-12 '>
            <JobsCard />

        </div>
    );
};

export default JobPortalPage;

