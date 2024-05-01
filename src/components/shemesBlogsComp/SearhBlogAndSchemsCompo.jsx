import React from 'react';
import { Link } from 'react-router-dom';

const SearchBlogAndSchemsCompo = () => {
  return (
    <>
      <div className="flex justify-center px-5 mt-8">
        <form className="w-full max-w-xl">
          <section className="flex items-center border-[1px]  ">
            <input
              className=" bg-transparent focus:ring-0 border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              
              aria-label="Search"
            />
            <button
              className="flex-shrink-0 bg-divyang hover:bg-divyang border-divyang hover:border-divyang text-sm border-4 w-28 h-12 text-white py-1 px-2 "
              type="button"
            >
              Search
            </button>
          </section>
        </form>
      </div>
      <div className="flex flex-col justify-center mx-7 ">
        <p className="text-xl font-semibold mt-4">Category</p>
        <div className=" flex flex-col">
          <Link to="/" className="mt-6 hover:text-divyang  ">Blog</Link>
          <Link to="/" className="mt-4  hover:text-divyang">Schemes</Link>
        </div>
        <div className="mt-4">
          <p className="font-semibold text-xl pb-4">Tags</p>
          <div className="flex mt-2 gap-2">
            <button className="w-20 h-10 hover:bg-divyang hover:text-white border-[1px] text-slate-500">Skill</button>
            <button className="w-20 h-10 hover:bg-divyang hover:text-white border-[1px] text-slate-500">Topic</button>
          </div>
        </div>
        <p className='text-xl font-semibold mt-6' >Recent Posts</p>
        <br />
        <p className='hover:text-divyang text-slate-500' >
          Empowering Lives: Unraveling the Aids and Appliances Government Scheme
        </p> <br />
        <p className='hover:text-divyang text-slate-500' >
          Empowering Lives: Unraveling the Aids and Appliances Government Scheme
        </p> <br />

        <p className='hover:text-divyang text-slate-500' >
          Empowering Lives: Unraveling the Aids and Appliances Government Scheme
        </p> <br />



      </div>
    </>
  );
};

export default SearchBlogAndSchemsCompo;
