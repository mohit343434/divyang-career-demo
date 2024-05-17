import React, { useEffect, useState } from 'react';
import SearchBlogAndSchemsCompo from './SearhBlogAndSchemsCompo';
import { useParams } from 'react-router-dom';
import axiosInstance from '@/src/utils/axiosConfig';
import { convertHtmlToText } from '@/src/utils/HtmlToText';

const SinglePageBlogAndShemes = () => {
  const { id } = useParams();
  const [singleBlog, setSingleBlog] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getSingleBlog = async () => {
      try {
        const response = await axiosInstance.get(`/homepage/article/${id}`);
        setSingleBlog(response.data.data);
      } catch (error) {
        console.error('Error fetching single blog:', error);
        setError('Failed to fetch blog data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    getSingleBlog();
  }, [id]);

  if (loading) {
    return <div className="w-full flex justify-center items-center h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="w-full flex justify-center items-center h-screen">{error}</div>;
  }

  return (
    <div className='w-full'>
      <div className='w-full'>
        <img 
          className='w-full h-96 object-cover' 
          src={`https://divyangcareer.s3.ap-south-1.amazonaws.com/assets/images/banner/${singleBlog.image}`} 
          alt={singleBlog.title || 'Blog Image'} 
        />
      </div>
      <div className='flex p-14 flex-wrap lg:flex-nowrap'>
        <div className='w-full flex-col flex gap-5'>
          <h1 className='text-2xl'>{singleBlog.title}</h1>
          <div className='flex flex-col'>
            <div dangerouslySetInnerHTML={{ __html: singleBlog.description }} />
          </div>
        </div>
        <div>
          <SearchBlogAndSchemsCompo />
        </div>
      </div>
    </div>
  );
};

export default SinglePageBlogAndShemes;
