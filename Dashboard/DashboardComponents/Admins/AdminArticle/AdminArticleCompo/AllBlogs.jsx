import React, { useState, useEffect } from 'react';
import axiosInstance from '@/src/utils/axiosConfig';
import { Card } from '@/components/ui/card';
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { Link } from 'react-router-dom';
import { convertHtmlToText } from '@/src/utils/HtmlToText';
import { Button } from '@/components/ui/button';
import Swal from "sweetalert2";
import Loder from "../../../GlobalComponents/Loader"
const AllBlogs = () => {
    const [allBlogs, setAllBlogs] = useState([]);
    const [loadding, setLoadding] = useState(false);

    useEffect(() => {
        getAllBlogs();
    }, []);
    // -----------------------------------------------------------------------------------------------
    const getAllBlogs = async () => {
        try {
            setLoadding(true)
            const response = await axiosInstance.get("admin/article?type=blog");
            setAllBlogs(response.data.data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoadding(false)
        }
    };
    // -----------------------------------------------------------------------------------------------
    const handleDelete = async (id) => {
        const confirmed = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!",
        });

        if (confirmed.isConfirmed) {
            try {
                setLoadding(true)
                const response = await axiosInstance.delete(
                    `/admin/article/${id}`
                );
                if (response.data.status === "success") {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Education deleted successfully.",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    getAllBlogs();
                }
            } catch (error) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: error.response.data.message,
                })
            } finally {
                setLoadding(false)
            }
        }
    };
    // -----------------------------------------------------------------------------------------------

    return (
        <div className="md:flex-row flex flex-col  flex-wrap  gap-5">
         
            {
                allBlogs.length === 0 ? (<>
                    {loadding && <Loder />}
                    <p>No  <span className='text-divyang'>Blogs </span> </p>
                </>) : (<>
                    {allBlogs.map(item => (
                        < >
                            <div className='p-5 ' key={item.id}>
                                <Card className="flex flex-col gap-6  shadow-md md:h-72 md:w-80">
                                    <div className='h-40 w-full overflow-hidden'>
                                        <img src={"https://divyangcareer.s3.ap-south-1.amazonaws.com/assets/images/banner/" + item.image} alt={item.title} className=' object-cover w-72 h-full' />
                                    </div>
                                    <div className='w-full p-5'>
                                        {loadding && <Loder />}
                                        <p className='font-bold'>{convertHtmlToText(item.title)}</p>
                                        <p className='hover:text-orange-500'>{convertHtmlToText(item.description)}</p>
                                    </div>
                                    <div className='flex justify-between p-5'>
                                        <div>
                                            <Link to={`/dashboard/admin/articles/${item._id}`}>
                                                <Button className="bg-green-500 hover:bg-green-600 rounded-3xl text-white">
                                                    <FaRegEdit className="text-2xl cursor-pointer" />&nbsp;  Update
                                                </Button>
                                            </Link>
                                        </div>
                                        <div>
                                            <Button className='rounded-3xl' style={{ backgroundColor: 'red', color: 'white' }} onClick={() => handleDelete(item._id)}>
                                                <MdOutlineDelete className="text-2xl cursor-pointer" /> &nbsp; Delete
                                            </Button>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </>
                    ))}

                </>)
            }
           

        </div>
    );
}

export default AllBlogs;
