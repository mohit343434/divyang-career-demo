import React, { useEffect, useState } from "react";
import axiosInstance from "@/src/utils/axiosConfig";
import { CiEdit } from "react-icons/ci";


const ProfileBasicForm = () => {
  const [categories, setCategories] = useState()
  const [TotleYear, setTotleYear] = useState()
  const [firstName, setFirstName] = useState()
  const [email, setEmail] = useState()
  const [jobPhone, setjobPhone] = useState()
  const [lastName, setLastName] = useState()
  const [dob, setDob] = useState()
  const [description, setDescription] = useState()
  const [age, setAge] = useState()
  const [gender, setGender] = useState()
  const [qualification, setQualification] = useState()
  const [cvAttachment, setcvAttachment] = useState(null)
  const [Twitter, setTwitter] = useState()
  const [Linkedin, setLinkedin] = useState()
  const [Instagram, setInstagram] = useState()
  const [Youtube, setYoutube] = useState()
  const [file1, setFile1] = useState();




  const getProfile = async () => {
    try {
      const res = await axiosInstance.get(`/candidate/profile`)
      setFirstName(res?.data?.data?.firstName);
      setDescription(res?.data?.data?.description);
      setAge(res?.data?.data?.dob);
      setGender(res?.data?.data?.gender);
      setFile1(res?.data?.data?.image);
      setEmail(res?.data?.data?.jobEmail);
      setjobPhone(res?.data?.data?.jobPhone);
      setLastName(res?.data?.data?.lastName);
      setQualification(res?.data?.data?.qualification);
      setTotleYear(res?.data?.data?.totalyears);
      setcvAttachment(res?.data?.data?.cvAttachment);
      setTwitter(res?.data?.data?.socialNetwork[0]?.twitter);
      setInstagram(res?.data?.data?.socialNetwork[1]?.instagram);
      setLinkedin(res?.data?.data?.socialNetwork[2]?.linkedin);
      setYoutube(res?.data?.data?.socialNetwork[3]?.youtube);
      // console.log(res.data.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getProfile()
  }, [])

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Month is zero-based
    const year = date.getFullYear();
    return `${day < 10 ? '0' + day : day}-${month < 10 ? '0' + month : month}-${year}`;
  };

  return (
    <div className="flex flex-col w-full rounded-md p-8">
      <div className="flex flex-col justify-evenly p-3 rounded-md border bg-white">
        <div>
          <div className="flex justify-between">
            <label className="pt-3 text-2xl">Basic info</label>

            <a href="/dashboard/candidates/profileEdit" >
              <CiEdit className="text-3xl cursor-pointer" />
            </a>

          </div>
        </div>
        <div>
          <div className="flex flex-col p-3 justify-evenly">
            <div>
              <label className="pt-3 text-md">Your photo</label>
            </div>
            <div className="flex w-full mt-5 lg:flex-nowrap flex-wrap ">
              <div className="rounded-2xl w-40 h-40 object-fit overflow-hidden relative border-dotted border - [0.5px] border-[#8E98A8]">
                {
                  file1 === "" ? <img src="https://tse2.mm.bing.net/th?id=OIP.6UhgwprABi3-dz8Qs85FvwHaHa&pid=Api&P=0&h=180" alt="" /> : <img src={`https://divyangcareer.s3.ap-south-1.amazonaws.com/assets/images/user/profile/${file1}`} alt="" />
                }
              </div>
            </div>
          </div>
          <div className="flex w-full lg:flex-nowrap flex-wrap ">
            <div className="w-full p-2">
              <label>
                {" "}
                First Name <span className="text-divyang">*</span>
              </label>
              <p className="mt-1 text-gray-400">{firstName}</p>
            </div>
            <div className="w-full p-2">
              <label>
                {" "}
                Last Name <span className="text-divyang">*</span>
              </label>
              <p className="mt-1 text-gray-400">{lastName}</p>
            </div>

          </div>
          <div className="flex w-full lg:flex-nowrap flex-wrap ">
            <div className="w-full p-2">
              <label className="">
                Email address <span className="text-divyang">*</span>
              </label>
              <p className="mt-1 text-gray-400">{email}</p>
            </div>
            <div className="w-full p-2">
              <label className="">
                {" "}
                Phone number <span className="text-divyang">*</span>
              </label>
              <p className="mt-1 text-gray-400">{jobPhone}</p>
            </div>
          </div>
          <div className="flex w-full lg:flex-nowrap flex-wrap">
            <div className="w-full p-2">
              <label className="">
                Description <span className="text-divyang">*</span>
              </label>
              <p className="mt-1 text-gray-400 w-full border h-40 p-2 overflow-hidden">{description}</p>
            </div>
          </div>
          <div className="flex w-full mt-5 lg:flex-nowrap flex-wrap ">
            <div className="w-full p-2">
              <label className="">
                {" "}
                Date of Birth <span className="text-divyang">*</span>
              </label>
              <p className="mt-1 text-gray-400">{formatDate(age)}</p>
            </div>

          </div>
          <div className="flex w-full mt-5 lg:flex-nowrap flex-wrap">
            <div className="w-full p-2">
              <label>
                Gender <span className="text-divyang">*</span>
              </label>
              <p className="mt-1 text-gray-400">{gender}</p>
            </div>
            <div className="w-full p-2">
              <label>
                Qualification <span className="text-divyang">*</span>
              </label>
              <p className="mt-1 text-gray-400">{qualification}</p>
            </div>
          </div>
          {/* Resume Section */}
          {/* <div
            className="flex flex-col p-3 justify-evenly rounded-md border mt-5"
            style={{ background: "#FFFFFF" }}
          >
            <div>
              <label className="pt-3 text-xl font-semibold">Resume</label>
            </div>
            <div className="flex w-full mt-5 lg:flex-nowrap flex-wrap ">
              <div className="flex flex-col p-3 justify-evenly">
                <iframe src={`https://divyangcareer.s3.ap-south-1.amazonaws.com/assets/file/${cvAttachment}`} height="200" width="100%" title="Iframe Example"></iframe>
              </div>
            </div>
          </div> */}
          {/* social section */}
          <div
            className="flex flex-col p-3 justify-evenly border rounded-md mt-6 m-80"
            style={{ background: "#FFFFFF" }}
          >
            <div>
              <label className="pt-3 text-xl font-semibold">Social Network</label>
            </div>
            <div className="flex w-full lg:flex-nowrap flex-wrap ">
              <div className="w-1/2   p-2">
                <label>
                  Twitter <span className="text-divyang">*</span>
                </label> <br />
                <div className=" overflow-hidden">

                  <p className="text-gray-400" >{Twitter}</p>
                </div>
              </div>
              <div className="w-1/2 p-2">
                <label>
                  {" "}
                  Linkedin <span className="text-divyang">*</span>
                </label>
                <p className="text-gray-400" >{Linkedin}</p>
              </div>
            </div>
            <div className="flex w-full lg:flex-nowrap flex-wrap ">
              <div className="md:w-1/2 w-1/2 p-2">
                <label>
                  {" "}
                  Youtube <span className="text-divyang">*</span>
                </label>
                <p className="text-gray-400" > {Youtube}</p>
              </div>
              <div className="w-1/2 p-2">
                <label>
                  {" "}
                  Instagram <span className="text-divyang">*</span>
                </label>
                <p className="text-gray-400" >{Instagram}</p>
              </div>
            </div>
            <div className="flex w-full lg:flex-nowrap flex-wrap ">

            </div>
          </div>
        </div>
      </div>
    </div>


  );
};

export default ProfileBasicForm;
