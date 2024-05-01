import React, { useEffect, useState } from "react";
import { SelectOption } from "../../../GlobalComponents/SelectOption";
import { MdOutlineFileUpload } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { Button } from "@/components/ui/button";
import axiosInstance from "@/src/utils/axiosConfig";
import fileAxiosInstance from "@/src/utils/fileConfig";
import Swal from "sweetalert2";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
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
      <Dialog >
        <DialogTrigger>
          <Button className=' bg-divyang rounded-full ' onClick={() => setDialogOpen(true)}>Add Disability</Button>
        </DialogTrigger>
        <DialogContent close={true}  className="w-full md:w-[350px]">
          <div className="max-h-[500px] overflow-y-auto">
          <form
            className="flex flex-col w-full rounded-md p-8"
            style={{ background: "#fafafa" }}
            onSubmit={handleAddDisability}
          >
            <div className="flex flex-col justify-evenly p-3 rounded-md border">
              <div>
                <label className="pt-3 text-2xl">Disability Info</label>
              </div>
              <div className="flex flex-col p-3 justify-evenly">
                <div className="flex w-full lg:flex-nowrap flex-wrap ">
                  <div className="w-full p-2">
                    <label>
                      UDID <span className="text-divyang">*</span>
                    </label>
                    <SelectOption
                      className="w-full rounded-md border-1 focus:border-none focus:ring-0 border-1 border-black"
                      placeholder="Select Option"
                      selectlabel="Select Option"
                      options={UDID}
                      onChange={(e) => setUDIDValue(e.target.value)}
                      value={UDIDValue}
                    />
                  </div>
                  <div className="w-full p-1">
                    <label>
                      {" "}
                      UDID Number<span className="text-divyang">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-md border-1 focus:border-none"
                      placeholder="Your value"
                      value={UDIDNumber}
                      onChange={(e) => setUDIDNumber(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="mt-5">
                  <div>
                    <label className="pt-3 text-md">Upload UDID Card</label>
                  </div>
                  <div className="flex w-full mt-2 lg:flex-nowrap flex-wrap ">
                    <div className="rounded-2xl w-full h-40 object-fit overflow-hidden relative border-dotted border-[0.5px] border-[#8E98A8]">
                      {!file && (
                        <label
                          className={
                            "flex justify-center w-full h-full items-center cursor-pointer text-center flex-col"
                          }
                        >
                          <MdOutlineFileUpload className="w-6 h-6" />
                          <p className="text-[8px] text-divyang">Upload Resume</p>
                          <input
                            type="file"
                            onChange={handleFileChange}
                            className="hidden "
                          />
                        </label>
                      )}
                      {file && (
                        <>
                          <AiOutlineDelete
                            icon={"ic:round-clear"}
                            className="text-3xl text-light-rt bg-main-rt rounded-full absolute top-[-10px] right-[-8px] drop-shadow-lg cursor-pointer text-red-700 hover:scale-2"
                            onClick={() => setFile(null)}
                          />
                          <img
                            src={URL.createObjectURL(file)}
                            className="w-full object-cover"
                            alt="UDID Card"
                          />
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <div>
                    <label className="pt-3 text-md">
                      Upload Disability Certificate
                    </label>
                  </div>
                  <div className="flex w-full mt-2 lg:flex-nowrap flex-wrap ">
                    <div className="rounded-2xl w-full h-40 object-fit overflow-hidden relative border-dotted border-[0.5px] border-[#8E98A8]">
                      {!file1 && (
                        <label
                          className={
                            "flex justify-center w-full h-full items-center cursor-pointer text-center flex-col"
                          }
                        >
                          <MdOutlineFileUpload className="w-6 h-6" />
                          <p className="text-[8px] text-divyang">Click here</p>
                          <input
                            type="file"
                            onChange={handleFileChange1}
                            className="hidden "
                          />
                        </label>
                      )}
                      {file1 && (
                        <>
                          <AiOutlineDelete
                            icon={"ic:round-clear"}
                            className="text-3xl text-light-rt bg-main-rt rounded-full absolute top-[-10px] right-[-8px] drop-shadow-lg cursor-pointer text-red-700 hover:scale-2"
                            onClick={() => setFile1(null)}
                          />
                          <img
                            src={URL.createObjectURL(file1)}
                            className="w-full object-cover"
                            alt="Disability Certificate"
                          />
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full lg:flex-nowrap flex-wrap ">
                <div className="w-full md:w-1/2 p-2">
                  <label>
                    Disability Percentage (As per certificate){" "}
                    <span className="text-divyang">*</span>
                  </label>
                  <input
                    type="number"
                    className="w-full rounded-md border-1 focus:border-none"
                    placeholder="Your value"
                    value={DisabilityPer}
                    onChange={(e) => setDisabilityPer(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="w-full p-2 flex justify-center gap-7 items-center">
              <DialogClose onClick={() => setDialogOpen(false)}>
                <Button >Submit</Button>
              </DialogClose>
              {/* <Button className='' variant="destructive" onClick={() => setDialogOpen(false)}>Cancel</Button> */}
            </div>
          </form>
          </div>
        </DialogContent>
      </Dialog>

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
