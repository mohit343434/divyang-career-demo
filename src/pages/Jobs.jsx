import React from 'react'
import LayoutWraper from '../layout/LayoutWraper'
import JobsMain from '../components/jobsComponents/JobsMain'


const Jobs = () => {
    return (
        <div className='bg-divyangbg'>
            <LayoutWraper>
                <JobsMain />
            </LayoutWraper>
        </div>
    )
}

export default Jobs