import React, { useEffect, useState } from 'react'
import { FaRegHeart } from "react-icons/fa6";
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import axiosInstance from '@/src/utils/axiosConfig';
import { MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2';
const CandidteWishlist = () => {
  const [allWishList, setAllWishList] = useState([])
  const AllWishList = async () => {
    const res = await axiosInstance.get(`/candidate/job/wishlist`);
    setAllWishList(res.data.data);
  }
  useEffect(() => {
    AllWishList()
  }, [])
  const RemovewishList = async (id) => {
    try {
      const res = await axiosInstance.delete(`/candidate/job/wishlist/${id}`);
      // console.log(res);
      if (res.data.status === "success") {
        AllWishList()
        Swal.fire({
          position: "top-end",
          title: "Remove wishlist",
          showConfirmButton: false,
          timer: 1500
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  }
  // console.log(allWishList);

  return (
    <div className='flex flex-col gap-5'>
      <>
        {allWishList.length === 0 ? (
          <div className='flex justify-center'>
            <Link to={"/jobs"} className='text-xl'> Add <span className='text-divyang'>WishList</span>  </Link>
          </div>
        ) : (
          <>
            {allWishList.map((Whis) => (
              <>
                <Card key={Whis._id} className='border-orange-500 p-5  flex flex-col w-full'>
                  <div>
                    <div className='flex justify-between items-center'>
                      <Link Link to={`/jobs/${Whis?.jobId?._id}`}>
                        <h3 className="text-lg font-bold hover:text-divyang">{Whis?.jobId?.title}</h3>
                      </Link>
                      <MdDelete className="ml-5 text-2xl text-red-700 cursor-pointer" onClick={() => RemovewishList(Whis?.jobId?._id)} />
                    </div>
                    <p className="font-medium text-divyang">{Whis?.jobId?.companyId?.name || "Education Necessary"}</p>
                  </div>
                  <div className='flex gap-2 pt-3'>
                    <Badge className='bg-[#f5ecff] text-[#8369c7] '>{Whis?.jobId?.type}</Badge>
                    <Badge className='bg-[#d9eaf5] text-divyang'>{Whis?.jobId?.qualification || "Education Necessary"}</Badge>
                    <Badge className='bg-[#d9eaf5] text-divyang'>{Whis?.jobId?.salary || "Based on Experience"}</Badge>
                  </div>
                  <div className='flex justify-between pt-3'>
                    <p className="text-sm text-gray-700 text-divyang">{Whis?.jobId?.description}</p>

                  </div>
                </Card>
              </>

            ))}
          </>
        )}
      </>
    </div>

  )
}

export default CandidteWishlist