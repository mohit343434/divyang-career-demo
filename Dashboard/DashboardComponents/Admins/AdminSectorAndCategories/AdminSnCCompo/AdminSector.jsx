import React, { useState, useEffect } from 'react';
import { MdDelete } from "react-icons/md";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from '@/components/ui/button';
import axiosInstance from '@/src/utils/axiosConfig';
import Swal from 'sweetalert2';
import Loader from "../../../GlobalComponents/Loader"

const AdminSector = () => {
  const [sectors, setSectors] = useState([]);
  const [newSectorName, setNewSectorName] = useState("");
  const [lodding, setLoadding] = useState(false);

  // ----------------------------------------------------------------------------------------------
  const fetchSectors = async () => {
    const response = await axiosInstance.get("/admin/sector");
    setSectors(response.data.data);
  }
  useEffect(() => {
    fetchSectors();
  }, []);

  // -----------------------------------------------------------------------------------------------
  console.log(sectors);
  const handleAddSector = async (e) => {
    e.preventDefault()
    try {
      setLoadding(true)
      const response = await axiosInstance.post('/admin/sector/create', {
        name: newSectorName
      });
      if (response.status === 201) {
        fetchSectors();
        setNewSectorName("");
      } else {
        console.error('Failed to add sector');
      }
    } catch (error) {
      console.error('Error adding sector:', error);
    } finally {
      setLoadding(false)
    }
  };

  const handleUpdateSector = async (isActive, id) => {
    try {
      setLoadding(true)
      const res = await axiosInstance.patch(`/admin/sector/${id}`, {
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


  // ---------------------------------------------------------------------------------------------------
  const handleDeleteSector = async (id) => {
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
        await axiosInstance.delete(`/admin/sector/${id}`)
        fetchSectors();
      } catch (error) {
        console.log(error);
      } finally {
        setLoadding(false)
      }
    }

  };
  // console.log(newSectorStatus);
  // ------------------------------------------------------------------------------------------------------
  return (

    <div className='border w-full bg-slate-100 mx-4 '>
      <div className=' flex justify-end'>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-40 bg-orange-500 hover:bg-orange-500">+ Add Sector</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add Sector</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleAddSector}>
              <div className="py-4">
                <div className="gap-4 flex flex-col">
                  <Label htmlFor="sectorName">Sector Name</Label>
                  <Input
                    id="sectorName"
                    onChange={(e) => setNewSectorName(e.target.value)}
                    className="col-span-3 px-3 text-gray-500 py-3"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button className="bg-orange-500 hover:bg-orange-500">Submit</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <div className='flex w-full mx-4 mt-4'>
        <Table className="border p-5" style={{ background: "#ffffff" }}>
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold text-black">TITLE</TableHead>
              <TableHead className="font-bold text-black">STATUS</TableHead>
              <TableHead className="font-bold text-black">ACTIONS</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sectors.map((sector) => {
              return (<>
                {lodding && <Loader />}
                <TableRow key={sector.id}>
                  <TableCell className="font-bold text-black">{sector.name}</TableCell>
                  <TableCell>
                    <select
                      onChange={(e) => {
                        const updatedValue = e.target.value === 'true';
                        handleUpdateSector(updatedValue, sector.id);
                      }}
                      className="mx-w-full h-32 mt-0 rounded-md border-1 focus:border-none focus:ring-0 border-1 border-black"
                      defaultValue={sector.isActive ? 'true' : 'false'}
                    >
                      <option value='true'>Active</option>
                      <option value='false'>Inactive</option>
                    </select>

                  </TableCell>
                  <TableCell>
                    <MdDelete
                      className="ml-5 text-2xl text-red-700 cursor-pointer"
                      onClick={() => handleDeleteSector(sector.id)} />
                  </TableCell>
                </TableRow>
              </>)
            }


            )}
          </TableBody>
        </Table>
      </div>
    </div>

  );
}

export default AdminSector;
