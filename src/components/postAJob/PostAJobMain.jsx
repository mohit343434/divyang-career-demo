import LayoutWraper from '@/src/layout/LayoutWraper'
import React from 'react'
import PostAjobForm from './postAJobCompo/PostAjobForm'
import PostAJobImage from './postAJobCompo/PostAJobImage'

const PostAJobMain = () => {
  return (
    <div className='bg-green-500 w-full h-full '>  
      <LayoutWraper>
        <div className='md:flex-row gap-10 h-full flex flex-col  md:relative'> 
          <div >
            <PostAjobForm/>
          </div>
          <div className='md:absolute md:bottom-0 md:right-0' >
            <PostAJobImage  /> 
            
          </div>
        </div>
      </LayoutWraper>
    </div>
  )
}

export default PostAJobMain
