import React from 'react'
import { Link } from 'react-router-dom'
const ShemesBlogProps = ({ img , blog , date , hadding , subhadding ,linkToNavigation }) => {
  return (
    <div className='max-w-96  mt-5 '>
      <Link to={`${linkToNavigation}`}>
        <div className='w-full h-72 overflow-hidden' >
          <img src={img} alt="" />
        </div>
      </Link>
      <div className='mt-4 flex'>
        <span className='text-lg text-divyang' >{blog}  </span> 
        <span className='ms-4 text-slate-500 font-bold'>{date}</span>
      </div>
      <Link to={`${linkToNavigation}`}>
        <div className=' max-w-full h-24 overflow-hidden'>
        <p className='text-slate-600 text-xl font-medium hover:text-divyang mt-2 '>{hadding} </p>
        </div>
      </Link>
      <div className='max-w-full h-14 overflow-hidden '>
      <p className='text-ellipsis text-slate-500 mt-2  '>{subhadding} </p>
      </div>
      <Link to={`${linkToNavigation}`}>
        <div className='py-3'>
        <span className=' text-divyang underline  ' >Read More</span>
        </div>
      </Link>
    </div>
  )
}

export default ShemesBlogProps