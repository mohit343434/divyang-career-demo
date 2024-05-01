import React, { useState, useEffect } from 'react';
import { MdDelete } from "react-icons/md";
import axiosInstance from '@/src/utils/axiosConfig';
import Swal from 'sweetalert2';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Loader from "../../../GlobalComponents/Loader"

const AdminCategories = () => {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState('');
  const [Loadding, setLoadding] = useState(false)

  const fetchCategories = async () => {
    try {
      const response = await axiosInstance.get("/admin/category");
      setCategories(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchCategories();
  }, []);

  //  DELETE this id 
  const handleDeleteCategory = async (id) => {
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
      await axiosInstance.delete(`/admin/category/${id}`)
      fetchCategories();
      return
    }
  };

  const handleAddCategory = async (event) => {
    event.preventDefault();

    if (!newCategory) {
      return;
    }
    try {
      const response = await axiosInstance.post('/admin/category', {
        name: newCategory
      })
      if (response.status === 201) {
      fetchCategories()
      }
    } catch (error) {
      console.error('Error adding category:', error);
    }
  };


  const handleUpdateSector = async (isActive, id) => {
    console.log(isActive, id);
    try {
      setLoadding(true)
      const res = await axiosInstance.patch(`/admin/category/${id}`, {
        isActive: JSON.stringify(isActive)
      });
      if (res.status) {
        fetchSectors()
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoadding(false)
    }
  }



  return (
    <div className='flex justify-between w-full'>
      <div className='border w-full mx-4  bg-slate-100 p-5'>
        <div className='p-2 flex justify-end'>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-40 bg-orange-500 hover:bg-orange-500">
                + Add Category
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add Category</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleAddCategory}>
                <div className="py-4">
                  <div className="gap-4 flex flex-col">
                    <Label htmlFor="category" >
                      Category
                    </Label>
                    <Input
                      onChange={(e) => setNewCategory(e.target.value)}
                      className="col-span-3 px-3 border text-gray-500 py-3"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit" className="bg-orange-500 hover:bg-orange-500">
                    Submit
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
        <div className='w-full flex '>
          <Table className="border p-5 w-full" style={{ background: "#ffffff" }}>
            <TableHeader>
              <TableRow>
                <TableHead className="font-bold text-black">TITLE</TableHead>
                <TableHead className="font-bold text-black">STATUS</TableHead>
                <TableHead className="font-bold text-black">ACTIONS</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {categories.map((category) => (
                <>
                  {Loadding && <Loader />}
                  <TableRow key={category.id}>
                    <TableCell className="font-bold text-black">
                      {category.name}
                    </TableCell>
                    <TableCell>
                      <select
                        onChange={(e) => {
                          const updatedValue = e.target.value === 'true';
                          handleUpdateSector(updatedValue, category.id);
                        }}
                        className="mx-w-full h-32 mt-0 rounded-md border-1 focus:border-none focus:ring-0 border-1 border-black"
                        defaultValue={category.isActive ? 'true' : 'false'}
                      >
                        <option value='true'>Active</option>
                        <option value='false'>Inactive</option>
                      </select>
                    </TableCell>
                    <TableCell>
                      <div className="flex text-2xl">
                        <MdDelete
                          className="ml-5 text-red-700 cursor-pointer"
                          onClick={() => handleDeleteCategory(category.id)}
                        />
                      </div>
                    </TableCell>
                  </TableRow>
                </>
              ))}
            </TableBody>
          </Table>

        </div>
      </div>

    </div>
  );
}

export default AdminCategories;