import React, { useEffect, useState } from 'react';
import SearchBlogAndSchemsCompo from './SearhBlogAndSchemsCompo';
import { useParams } from 'react-router-dom';
import axiosInstance from '@/src/utils/axiosConfig';
import { convertHtmlToText } from '@/src/utils/HtmlToText';
const SinglePageBlogAndShemes = () => {
  const { id } = useParams();
  const [singleBlog, setSingleBlog] = useState({});

  useEffect(() => {
    const getSingleBlog = async () => {
      try {
        const response = await axiosInstance.get(`/homepage/article/${id}`);
        const modifiedBlog = {
          ...response.data.data,
          title: convertHtmlToText(response.data.data.title),
          description: convertHtmlToText(response.data.data.description)
        };
        setSingleBlog(modifiedBlog);
      } catch (error) {
        console.error('Error fetching single blog:', error);
      }
    };
    getSingleBlog();
  }, [id]);



  return (
    <div className='w-full'>
      <div className='w-full'>
        <img className='w-full h-96 object-cover' src={`https://divyangcareer.s3.ap-south-1.amazonaws.com/assets/images/banner/${singleBlog.image}`} alt={""} />
      </div>
      <div className='flex p-14 flex-wrap lg:flex-nowrap '>
        <div className='w-full flex-col  flex gap-5'>
          <h1 className='text-2xl' >{singleBlog.title}</h1>
          <p>{singleBlog.description}</p>
        </div>
        <div>
          <SearchBlogAndSchemsCompo />
        </div>
      </div>
    </div>
  );
};

export default SinglePageBlogAndShemes;
