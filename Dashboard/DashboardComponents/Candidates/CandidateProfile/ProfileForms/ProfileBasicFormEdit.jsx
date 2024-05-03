import React, { useEffect, useState } from "react";
import fileAxiosInstance from "@/src/utils/fileConfig";
const ProfileBasicFormEdit = () => {
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

 

  return (
  
    <div className=" md:p-10 p-5" >
      <h1 className="text-xl font-semibold mb-4">Edit profile</h1>
  
    <div className="max-h-[500px] ">
      <form onSubmit={handleUpdate} className="bg-gray-100 border p-5">
        <div className="flex flex-col gap-5">
           <div className='flex w-full lg:flex-nowrap flex-wrap gap-5'>
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
                <input type="file" className=" h-9 outline-none focus:right-0 right-0 rounded-lg w-full border" onChange={(e) => setFile1(e.target.files[0])} multiple={false} />
              </div>
            </div>
            <div className="w-full flex-col">
              <div className="w-full">
                <label>CV Attachment </label>
                <input type="file" className=" h-9 outline-none focus:right-0 right-0 rounded-lg w-full border " onChange={(e) => setcvAttachment(e.target.files[0])} multiple={false} />
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
        
         
          
          <a href="/dashboard/candidates/profile" >
          <button className="bg-divyang mt-3 px-5 py-3 rounded-3xl text-white" variant="secondary">
            Update
          </button>
</a>
       
      </form>
    </div>
    </div>
   
  )
}

export default ProfileBasicFormEdit
