import React from 'react';
import rv1 from '../../../assets/rv1.webp';
import rv2 from '../../../assets/rv2.webp';
import rv3 from '../../../assets/rv3.webp';


// ImageComponent to encapsulate the images
const ImageComponent = () => {
  return (
    <div className='image'>
      <div className='flex gap-6 justify-end'>
        <div className='flex flex-col gap-6 pt-36'>
          <img src={rv2} className='w-40' alt='Image 2'/>
          <img src={rv3} className='w-44' alt='Image 3'/>
        </div>
        <div className='flex flex-col gap-6 pt-20'>
          <img src={rv1} className='w-64 h-96' alt='Image 1'/>
         
        </div>
      </div>
    </div>
  );
};

const OurVision = () => {
  return (
    <div className='md:px-16 px-5 py-10'>
      <div className='flex flex-col md:flex-row items-center gap-28'>
        {/* Conditionally rendering ImageComponent based on screen size */}
        <div className='w-full md:w-[60%]'>
          <ImageComponent />
        </div>
        <div className='flex flex-col justify-center items-start gap-4 w-full md:w-[50%]'>
          <p className='text-orange-500 text-xl'>OUR VISION</p>
          <h1 className='text-3xl'>Creating an Inclusive <br />Workforce</h1>
          <p className='text-xl text-justify'>Our vision is to build a more inclusive and diverse workforce where every person, regardless of their unique abilities, can find meaningful and gainful employment. We understand that talent knows no boundaries, and we are committed to dismantling the barriers that have traditionally limited opportunities for those with disabilities.</p>
        </div>
      </div>
    </div>
  );
};

export default OurVision;
