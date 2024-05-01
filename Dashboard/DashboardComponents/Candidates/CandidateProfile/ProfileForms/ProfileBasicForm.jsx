import React, { useEffect, useState } from "react";
import axiosInstance from "@/src/utils/axiosConfig";
import { CiEdit } from "react-icons/ci";
import fileAxiosInstance from "@/src/utils/fileConfig";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
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


  const JobCategories = [
    { value: "Blood Disorder" },
    { value: "Heamophilia" },
    { value: "Sickle Cell Disease" },
    { value: "Thalassemia" },
    { value: "Chronic Neurological" },
    { value: "Multiple Sclerosis" },
    { value: "Parkinsons Disease" },
    { value: "Intellctual Disability" },
    { value: "Autism Spectrum Disorder" },
    { value: "Specific Learning Disabilities" },
    { value: "Mental lllness" },
    { value: "Multiple Disabilities" },
    { value: "Physicl Disabilities" },
    { value: "Hearing Imparirment" },
    { value: "Locomotor Disbility" },
    { value: "Speech and Language Disability" },
    { value: "Visual Impairment" },
  ];
  const Qualification = [
    { value: "10th pass" },
    { value: "12th pass" },
    { value: "Below 10th" },
    { value: "certificate" },
    { value: "Diploma" },
    { value: "Doctorate" },
    { value: "Graduate" },
    { value: "Under Graduate" },
    { value: "Post Graduate" },
  ];

  const totalyea = [
    { value: "0-1 years" },
    { value: "1-2 years" },
    { value: "3-5 years" },
    { value: "6-9 years" },
    { value: "10+ years" }
  ]

  const Gender = [{ value: "male" }, { value: "female" }];

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
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fileAxiosInstance.put("/candidate/profile", {
        description: description,
        image: file1,
        categories: categories,
        dob: dob,
        gender: gender,
        cvattachment: cvAttachment,
        qualification: qualification,
        jobEmail: email,
        jobPhone: jobPhone,
        totalyears: TotleYear,
        socialNetwork: JSON.stringify([
          { twitter: Twitter },
          { instagram: Instagram },
          { linkedin: Linkedin },
          { youtube: Youtube },
        ])
      }, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      console.log('Upload response:', response.data);
    } catch (error) {
      console.error('Upload error:', error);
    }
  };

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
            <Dialog>
              <DialogTrigger asChild>
                <CiEdit className="text-3xl cursor-pointer" />
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px] ">
                <DialogHeader>
                  <DialogTitle>Edit profile</DialogTitle>
                </DialogHeader>
                <div className="max-h-[500px] overflow-y-auto ">
                  <form onSubmit={handleUpdate}>
                    <div className="flex flex-col gap-4">
                      <div className='flex w-full lg:flex-nowrap flex-wrap gap-3'>
                        <div className="w-full">
                          <label>Phone No.</label>
                          <input type="number" className=" h-9 outline-none focus:right-0 right-0 rounded-lg w-full" placeholder="Phone No. " onChange={(e) => setjobPhone(e.target.value)} value={jobPhone} />
                        </div>
                        <div className="w-full">
                          <label>Email</label>
                          <input type="email" className=" h-9 outline-none focus:right-0 right-0 rounded-lg w-full" placeholder="Email " onChange={(e) => setEmail(e.target.value)} value={email} />
                        </div>
                      </div>
                      <div className='flex w-full lg:flex-nowrap flex-wrap gap-3'>
                        <div className="w-full">
                          <label>Twitter</label>
                          <input type="text" className=" h-9 outline-none focus:right-0 right-0 rounded-lg w-full" placeholder="Twitter Link" onChange={(e) => setTwitter(e.target.value)} value={TotleYear} />
                        </div>
                        <div className="w-full">
                          <label>Instagram</label>
                          <input type="text" className=" h-9 outline-none focus:right-0 right-0 rounded-lg w-full" placeholder="Instagram Link" onChange={(e) => setInstagram(e.target.value)} value={Instagram} />
                        </div>
                      </div>
                      <div className='flex w-full lg:flex-nowrap flex-wrap gap-3'>
                        <div className="w-full">
                          <label>Linkedin</label>
                          <input type="text" className=" h-9 outline-none focus:right-0 right-0 rounded-lg w-full" placeholder="Linkedin Link" onChange={(e) => setLinkedin(e.target.value)} value={Linkedin} />
                        </div>
                        <div className="w-full">
                          <label>YouTube</label>
                          <input type="text" className=" h-9 outline-none focus:right-0 right-0 rounded-lg w-full" placeholder="YouTube Link" onChange={(e) => setYoutube(e.target.value)} value={Youtube} />
                        </div>
                      </div>
                      <div className='flex w-full lg:flex-nowrap flex-wrap gap-3'>
                        <div className="w-full flex-col">
                          <label>Gender</label>
                          <select className="w-full border-none rounded-md shadow-sm focus:border-none focus:ring-0 focus:ring-info-50 focus:ring-opacity-0"
                            onChange={(e) => setGender(e.target.value)}
                            value={gender}
                          >
                            <option value="" selected disabled hidden >--select--</option>
                            {Gender.map((e, i) => <option key={i} value={e.value} className="bg-gray-100">{e.value}</option>)}
                          </select>
                        </div>
                        <div className="w-full">
                          <label>Qualification</label>
                          <select className="w-full border-none rounded-md shadow-sm focus:border-none focus:ring-0 focus:ring-info-50 focus:ring-opacity-0"
                            onChange={(e) => setQualification(e.target.value)}
                            value={qualification}
                          >
                            <option value="" selected disabled hidden >--select--</option>
                            {Qualification.map((e, i) => <option key={i} value={e.value} className="bg-gray-100">{e.value}</option>)}
                          </select>
                        </div>
                      </div>
                      <div className='flex w-full lg:flex-nowrap flex-wrap gap-3'>
                        <div className="w-full flex-col">
                          <div className="w-full">
                            <label>Categories</label>
                            <select className="w-full border-none rounded-md shadow-sm focus:border-none focus:ring-0 focus:ring-info-50 focus:ring-opacity-0"
                              onChange={(e) => setCategories(e.target.value)}
                              value={categories}
                            >
                              <option value="" selected disabled hidden >--select--</option>
                              {JobCategories.map((e, i) => <option key={i} value={e.value} className="bg-gray-100">{e.value}</option>)}
                            </select>
                          </div>
                        </div>
                        <div className="w-full flex-col">
                          <div className="w-full">
                            <label>Total years</label>
                            <select className="w-full border-none rounded-md shadow-sm focus:border-none focus:ring-0 focus:ring-info-50 focus:ring-opacity-0"
                              onChange={(e) => setTotleYear(e.target.value)}
                              value={totalyea}
                            >
                              <option value="" selected disabled hidden >--select--</option>
                              {totalyea.map((e, i) => <option key={i} value={e.value} className="bg-gray-100">{e.value}</option>)}
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className='flex w-full lg:flex-nowrap flex-wrap gap-3'>
                        <div className="w-full flex-col">
                          <div className="w-full">
                            <label>Image</label>
                            <input type="file" className=" h-9 outline-none focus:right-0 right-0 rounded-lg w-full" onChange={(e) => setFile1(e.target.files[0])} multiple={false} />
                          </div>
                        </div>
                        <div className="w-full flex-col">
                          <div className="w-full">
                            <label>CV Attachment </label>
                            <input type="file" className=" h-9 outline-none focus:right-0 right-0 rounded-lg w-full" onChange={(e) => setcvAttachment(e.target.files[0])} multiple={false} />
                          </div>
                        </div>
                      </div>
                      <div className='flex w-full lg:flex-nowrap flex-wrap gap-3'>
                        <div className="w-full flex-col">
                          <div className="w-full">
                            <label>Description</label>
                            <textarea className="w-full rounded-lg" onChange={(e) => setDescription(e.target.value)} ></textarea>
                          </div>
                        </div>
                        <div className="w-full flex-col">
                          <div className="w-full">
                            <label>DOB </label>
                            <input type="date" className=" h-9 outline-none focus:right-0 right-0 rounded-lg w-full" onChange={(e) => setDob(e.target.value)} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <DialogFooter className="sm:justify-start">
                      {/* <DialogClose asChild> */}
                      <button className="bg-divyang mt-3 px-4 text-white" variant="secondary">
                        Update
                      </button>
                      {/* </DialogClose> */}
                    </DialogFooter>
                  </form>
                </div>

              </DialogContent>
            </Dialog>
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
          <div
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
          </div>
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
