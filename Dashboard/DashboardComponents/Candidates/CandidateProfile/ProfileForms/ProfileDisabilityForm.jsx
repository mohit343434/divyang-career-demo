import React, { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
import { Button } from "@/components/ui/button";

import fileAxiosInstance from "@/src/utils/fileConfig";
import Swal from "sweetalert2";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ProfileDisabilityForm = () => {
  const UDID = [{ value: "Yes" }, { value: "No" }];

  const [UDIDValue, setUDIDValue] = useState("");
  const [UDIDNumber, setUDIDNumber] = useState("");
  const [DisabilityPer, setDisabilityPer] = useState("");
  const [file1, setFile1] = useState(null);
  const [file, setFile] = useState(null);
  // storing disability data
  const [disabilitiInfo, setDisabilitiInfo] = useState([]);
  //for dialog box
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleFileChange1 = (e) => {
    setFile1(e.target.files[0]);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleForm = async (event) => {
    event.preventDefault();
  };

  const t = [
    "Not Found"
  ]
  const handleAddDisability = async (e) => {
    e.preventDefault();

    try {
      if (!UDIDNumber || !DisabilityPer) {
        // If any required field is empty, return early without submitting
        // Show an error message or perform any necessary action
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please fill the input field",
        });
        return;
      }
      if (parseInt(DisabilityPer) < 0 || parseInt(DisabilityPer) > 100) {
        Swal.fire({
          icon: 'error',
          title: 'Invalid Input',
          text: 'Disability Percentage must be between 0 and 100.',
        });
        return;
      }

      const formData = new FormData();
      formData.append("UDIDValue", UDIDValue);
      formData.append("UDIDNo", UDIDNumber);
      formData.append("DisabilityPer", DisabilityPer);
      formData.append("UDIDCard", file1);
      formData.append("DisabilityCert", file);

      const response = await fileAxiosInstance.post(
        "/candidate/profile/disability",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      getDisability()
      if (response.data.status === 'success') {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Disability added successfully.',
          showConfirmButton: false,
          timer: 1500
        });
        setUDIDValue("")
        setUDIDNumber("")
        setDisabilityPer("")
        setFile("")
        setFile1("")
        setDialogOpen(false);
      }
    } catch (error) {
      console.log(error)
    }
  };

  const getDisability = async () => {
    try {
      const res = await fileAxiosInstance.get(`/candidate/profile/disability`)
      setDisabilitiInfo(res.data.allDisability);
      console.log("Disability data: ", res.data.allDisability);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getDisability()
  }, [])
  //##################### 👇👇  Delete education 👇👇  #########################


  const handleDelete = async (id) => {
    // Show confirmation dialog
    const confirmed = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    // If user confirmed the deletion
    if (confirmed.isConfirmed) {
      try {
        const res = await fileAxiosInstance.delete(
          `/candidate/profile/disability/${id}`
        );
        if (res.data.status === "success") {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Education deleted successfully.",
            showConfirmButton: false,
            timer: 1500,
          });
          // Fetch updated education data after deletion
          getDisability()
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  //##################### 👆👆 Delete education 👆👆 #########################
  //Handeling update form field
  const handleInputChange = (e, id, field) => {
    const updatedDisability = disabilitiInfo.map((dis) => {
      if (dis.id === id) {
        return { ...dis, [field]: e.target.value };
      }
      return dis;
    });
    setDisabilitiInfo(updatedDisability);
  };
  console.log(disabilitiInfo)
  return (
    <>
    <div className="mb-5">
    <Link to="/dashboard/candidates/addDisability">
          <Button className=' bg-divyang rounded-full '>Add Disability</Button>
          </Link> 
          </div>
      <div className="flex flex-col w-full" style={{ background: "#fafafa" }}>

        <>
          {disabilitiInfo.length === 0 ? (
            <div>No Disability found</div>
          ) : (
            <>
              {disabilitiInfo.map((dis, index) => (
                <form onSubmit={handleForm} key={dis.id} className="w-full p-6">
                  <div className="flex items-center justify-between">
                    <label className="pt-3 text-2xl">Disability info</label>
                    <div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-center items-center">
                      <Accordion
                        type="single"
                        collapsible
                        className="flex flex-col p-3 w-full"
                      >
                        <AccordionItem value={`kk`} className="w-full">
                          <div className="flex justify-between">
                            <div>
                              <AccordionTrigger className="">
                                Disability
                              </AccordionTrigger>
                            </div>
                            <div className="flex justify-between gap-5  items-center">
                              <div className="">
                                <AiOutlineDelete
                                  onClick={() => handleDelete(dis.id)}
                                  icon={"ic:round-clear"}
                                  className="text-3xl text-light-rt bg-main-rt rounded-full cursor-pointer text-red-700 "
                                />
                              </div>
                            </div>
                          </div>
                          <AccordionContent className="">
                            <div className="flex w-full lg:flex-nowrap flex-wrap ">
                              <div className="w-full p-2">
                                <label>
                                  UDID Number<span className="text-divyang">*</span>
                                </label>
                                <input
                                  type="text"
                                  className="w-full rounded-md border-1 focus:border-none mt-2"
                                  placeholder="Title"
                                  name="jobtitle"
                                  value={dis.UDIDNo}
                                  // onChange={(e) => GetData(e,)} />
                                  // onChange={(e) => handleInputChange(e, dis.id, "jobtitle")}
                                  readOnly
                                />
                              </div>
                              <div className="w-full p-2">
                                <label>
                                  {" "}
                                  Disability Percentage
                                  <span className="text-divyang">*</span>
                                </label>
                                <input
                                  type="text"
                                  className="w-full rounded-md border-1 focus:border-none mt-2"
                                  placeholder="Level of Education"
                                  name="company"
                                  // onChange={(e) => setCompany(e.target.value)}
                                  // onChange={(e) => handleInputChange(e, dis.id, "company")}
                                  readOnly
                                  value={dis.DisabilityPer}
                                />
                              </div>
                            </div>
                            <div className="flex w-full lg:flex-nowrap flex-wrap ">
                              <div className="w-full p-2 text-xl rounded-2xl  h-40 object-fit overflow-hidden relative border-dotted border-[0.5px] border-[#8E98A8] ">
                                <label>
                                  Disability certificate <span className="text-divyang">*</span>
                                </label>
                                <img

                                  src={`https://divyangcareer.s3.ap-south-1.amazonaws.com/assets/images/disability/${dis.DisabilityCert}`}
                                  alt="Image is not Uploaded Yet"
                                  className=" object-cover rounded-2xl"
                                />

                              </div>
                              <div className="w-full p-2 text-xl  rounded-2xl  h-40 object-fit overflow-hidden relative border-dotted border-[0.5px] border-[#8E98A8]">
                                <label>
                                  {" "}
                                  UDID Card <span className="text-divyang">*</span>
                                </label>
                                <img
                                  src={`https://divyangcareer.s3.ap-south-1.amazonaws.com/assets/images/disability/${dis.UDIDCard}`}
                                  alt="Image is not Uploaded Yet"
                                  className="object-cover  rounded-2xl"
                                />

                              </div>
                            </div>
                            {/* <div className="flex w-full lg:flex-nowrap flex-wrap ">
                              <div className="w-full p-2">
                                <label>
                                  Description <span className="text-divyang">*</span>
                                </label>
                                <textarea
                                  type="text"
                                  className="w-full rounded-md border-1 focus:border-none mt-2"
                                  placeholder="description"
                                  rows="5"
                                  name="description"
                                  value={dis.description}
                                  // onChange={(e) => setDescription(e.target.value)}
                                  onChange={(e) => handleInputChange(e, dis.id, "description")}
                                />
                              </div>
                            </div> */}
                            {/* <Button onClick={() => handleUpdate(dis.id)}>update</Button> */}
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </div>
                </form>
              ))}
            </>
          )}
        </>

      </div>
    </>
  );
};

export default ProfileDisabilityForm;
