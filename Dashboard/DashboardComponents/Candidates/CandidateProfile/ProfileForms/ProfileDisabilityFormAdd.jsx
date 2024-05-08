import React, { useState } from "react";
import { SelectOption } from "../../../GlobalComponents/SelectOption";
import { MdOutlineFileUpload } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { Button } from "@/components/ui/button";
import fileAxiosInstance from "@/src/utils/fileConfig";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

const ProfileDisabilityFormAdd = () => {
  const navigate = useNavigate();
  const UDID = [{ value: "Yes" }, { value: "No" }];

  const [UDIDValue, setUDIDValue] = useState("");
  const [UDIDNumber, setUDIDNumber] = useState("");
  const [DisabilityPer, setDisabilityPer] = useState("");
  const [file1, setFile1] = useState(null);
  const [file, setFile] = useState(null);


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
    navigate('/dashboard/candidates/profile');
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

  return (
    <div className="p-5">
      <h1 className=" text-2xl pb-5">Disability Info</h1>
      <div className=" p-5 border" style={{ background: "#fafafa" }}>
        <form
          className="flex flex-col w-full "

          onSubmit={handleAddDisability}
        >

          <div className="flex flex-col justify-evenly   ">
            <div>

            </div>
            <div className="flex flex-col p-3 justify-evenly">
              <div className="flex w-full lg:flex-nowrap flex-wrap ">
                <div className="w-full p-2">
                  <label>
                    UDID <span className="text-divyang">*</span>
                  </label>
                  <SelectOption
                    className="w-full rounded-md border-1 focus:border-none focus:ring-0 border border-black"
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
                  <div className="rounded-2xl w-full h-40 object-fit overflow-hidden relative border-dotted  border-[#8E98A8] border ">
                    {!file && (
                      <label
                        className={
                          "flex justify-center w-full h-full items-center cursor-pointer text-center flex-col"
                        }
                      >
                        <MdOutlineFileUpload className="w-6 h-6" />
                        <p className="text-[8px] text-divyang">Click here</p>
                        <input
                          type="file"
                          accept=".pdf"
                          onChange={handleFileChange}
                          className="hidden"
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
                  <div className="rounded-2xl w-full h-40 object-fit overflow-hidden relative border-dotted border border-[#8E98A8]">
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
                          accept=".pdf"
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
          <div className="  w-full p-2 ">
            <Button className=" bg-orange-500 hover:bg-orange-500">Submit</Button>
          </div>
        </form>
        <div className="p-2 ">
          <Link to="/dashboard/candidates/profile" className=" underline" style={{ color: "#0000FF" }}>
            Cancel
          </Link>
        </div>
      </div>

    </div>
  )
}

export default ProfileDisabilityFormAdd
