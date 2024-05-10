import React from 'react'

import { Card } from '@/components/ui/card';
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { Link } from 'react-router-dom';
const AllBlogs = () => {
    const article = [
        { id: 1, type: 'blog', image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', description: 'Top 10 Ways to Support Person with Disabilities (PwD) in India', title: 'title1' },
        { id: 2, type: 'scheme', image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', description: 'Best 10 Tools to Help People with Disabilities in India', title: 'title2' },
        { id: 3, type: 'scheme', image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', description: 'Top 10 Government Organizations for People with Disabilities in India', title: 'title3' },
    ];
    return (
        <div>

            {article.map(item => (
                <div className='p-5'>
                    <Card key={item.id} className="flex flex-col gap-6 rounded-3xl shadow-md">
                        <div className='flex justify-end pt-2 mr-4 '>
                            <div>

                            </div>
                            <div className='flex'>
                                <Link to={`/dashboard/admin/updateArticle`}>
                                    <FaRegEdit className="text-2xl cursor-pointer" />
                                </Link>
                                <MdOutlineDelete className="text-2xl cursor-pointer " />
                            </div>
                        </div>
                        <div className='flex gap-5 pb-10 pl-10'>
                            <div className=' h-20 w-full' >
                                <img src={item.image} alt={item.title} className='rounded-3xl h-20 w-36' />
                            </div>
                            <div className='w-full'>
                                <p>{item.type}</p>
                                <p>{item.title}</p>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    </Card>
                </div>
            ))}
        </div>
    )
}

export default AllBlogs
