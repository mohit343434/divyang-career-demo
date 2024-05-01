import React, { useEffect, useState } from "react";
import PageTitle from "../../GlobalComponents/PageTitle";
import {
  Gender,
  HighestEducation,
  EmploymentStatus,
  Languages,
  MaritalStatus,
  AddressType,
  AddressSubType,
  TerritoryType,
  States,
  District,
  BoardUniversity,
  PassingMonth,
  PassingYear,
  Caste,
  GradeType,
  CourseNature,
  Religion,
} from "./Data";
import axiosInstance from "@/src/utils/axiosConfig";

const Title = {
  title: "NCS Registration",
};

const CandidateNcs = () => {
  const [formData, setFormData] = useState({
    FirstName: "",
    DOB: "",
    GuardianName: "",
    MobileNo: "",
    Gender: "",
    EmploymentStatus: "",
    PrimaryLanguage: "",
    Addresses: [
      {
        Address1: "",
        State: "",
        District: "",
        AddressType: "",
        AddressSubType: "",
        TerritoryType: "",
        SubDistrictTaluka: "",
        Pincode: "",
        CityVillage: "",
      },
    ],
    HighestEducation: "",
    Educations: [
      {
        EducationQualification: "",
        SpecializationMajor: "",
        BoardUniversity: "",
        Institute: "",
        PassingMonth: "",
        PassingYear: "",
        GradePercentagePercentileType: "",
        GradePercentagePercentileValue: "",
        NatureOfCourse: "",
        MediumOfEducation: "",
      },
    ],
    Certificates: [
      {
        CertificateName: "",
        CertificateYear: "",
        IssuedBy: "",
      },
    ],
    AvailableToJoinInDays: "",
    ExperienceYears: "",
    ExperienceMonths: "",
    CurrentEmployerSector: "",
    Skills: [
      {
        SkillName: "",
      },
    ],
    MaritalStatus: "",
    ReligionID: "",
    Caste: "",
    UIDs: [
      {
        UIDType: "",
        UIDNumber: "",
      },
    ],
  });

  console.log(formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("your-api-endpoint", formData);
      console.log("API response:", response.data);
      // Handle success or show a success message
    } catch (error) {
      console.error("API error:", error);
      // Handle error or show an error message
    }
  };

  // Define handleCertificateChange function
  const handleCertificateChange = (e, index) => {
    const { name, value } = e.target;
    console.log(e.target.value);
    const updatedCertificates = [...formData.Certificates];
    updatedCertificates[index] = {
      ...updatedCertificates[index],
      [name]: value,
    };
    setFormData({
      ...formData,
      Certificates: updatedCertificates,
    });
  };

  // Define handleAddCertificate function
  const handleAddCertificate = () => {
    setFormData({
      ...formData,
      Certificates: [
        ...formData.Certificates,
        { CertificateName: "", CertificateYear: "", IssuedBy: "" },
      ],
    });
  };

  // Define handleCertificateChange function
  const handleAddressChange = (e, index) => {
    const { name, value } = e.target;
    const updatedAddresses = [...formData.Addresses];
    updatedAddresses[index] = {
      ...updatedAddresses[index],
      [name]: value,
    };
    setFormData({
      ...formData,
      Addresses: updatedAddresses,
    });
  };

  // Define handleAddAddresses function
  const handleAddAddresses = () => {
    setFormData({
      ...formData,
      Addresses: [
        ...formData.Addresses,
        {
          Address1: "",
          State: "",
          District: "",
          AddressType: "",
          AddressSubType: "",
          TerritoryType: "",
          SubDistrictTaluka: "",
          Pincode: "",
          CityVillage: "",
        },
      ],
    });
  };

  // Define handleEducationChange function
  const handleEducationChange = (e, index) => {
    const { name, value } = e.target;
    const updatedEducations = [...formData.Educations];
    updatedEducations[index] = {
      ...updatedEducations[index],
      [name]: value,
    };
    setFormData({
      ...formData,
      Educations: updatedEducations,
    });
  };

  // Define handleSkillChange function
  const handleSkillChange = (e, index) => {
    const { name, value } = e.target;
    const updatedSkills = [...formData.Skills];
    updatedSkills[index] = {
      ...updatedSkills[index],
      [name]: value,
    };
    setFormData({
      ...formData,
      Skills: updatedSkills,
    });
  };

  // Define handleUIDChange function
  const handleUIDChange = (e, index) => {
    const { name, value } = e.target;
    const updatedUIDs = [...formData.UIDs];
    updatedUIDs[index] = {
      ...updatedUIDs[index],
      [name]: value,
    };
    setFormData({
      ...formData,
      UIDs: updatedUIDs,
    });
  };

  return (
    <div className="w-full overflow-hidden">
      <div className="w-full">
        <PageTitle Title={Title} />
      </div>
      <form
        className="flex flex-col w-full rounded-md p-8"
        style={{ background: "#fafafa" }}
        onSubmit={handleSubmit}
      >
        {/* Basic Details Section */}
        <div className="flex flex-col justify-between items-center p-3 rounded-md border">
          <div className="flex w-full lg:flex-nowrap flex-wrap items-center">
            <div className="w-full p-2">
              <label>
                First Name <span className="text-divyang">*</span>
              </label>
              <input
                type="text"
                className="w-full rounded-md border-1 focus:border-none"
                placeholder="Amit Kumar"
                name="FirstName"
                value={formData.FirstName}
                onChange={handleChange}
              />
            </div>
            <div className="w-full p-2">
              <label>
                Date of Birth<span className="text-divyang">*</span>
              </label>
              <input
                type="date"
                className="w-full rounded-md border-1 focus:border-none"
                placeholder="17/12/2001"
                name="DOB"
                value={formData.DOB}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex w-full lg:flex-nowrap flex-wrap items-center">
            <div className="w-full p-2">
              <label>
                Mobile Number <span className="text-divyang">*</span>
              </label>
              <input
                type="number"
                className="w-full rounded-md border-1 focus:border-none"
                placeholder="8100130055"
                name="MobileNo"
                value={formData.MobileNo}
                onChange={handleChange}
              />
            </div>
            <div className="w-full p-2">
              <label>
                Email<span className="text-divyang">*</span>
              </label>
              <input
                type="email"
                className="w-full rounded-md border-1 focus:border-none"
                placeholder="Your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex w-full lg:flex-nowrap flex-wrap items-center">
            <div className="w-full p-2">
              <label>
                Guardian Name <span className="text-divyang">*</span>
              </label>
              <input
                type="text"
                className="w-full rounded-md border-1 focus:border-none"
                placeholder="Test Father"
                name="GuardianName"
                value={formData.GuardianName}
                onChange={handleChange}
              />
            </div>
            <div className="w-full p-2">
              <label>
                Gender<span className="text-divyang">*</span>
              </label>
              <div>
                <select
                  name="Gender"
                  defaultValue={formData.Gender}
                  onChange={handleChange}
                  className="w-full rounded-md border-1 focus:border-none"
                >
                  <option value="">Select Gender</option>
                  {Gender.map((value) => (
                    <option key={value.Code} value={value.Code}>
                      {value.Name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="flex w-full lg:flex-nowrap flex-wrap items-center">
            <div className="w-full p-2">
              <label>
                Highest Education <span className="text-divyang">*</span>
              </label>
              <div>
                <select
                  name="HighestEducation"
                  defaultValue={formData.HighestEducation}
                  onChange={handleChange}
                  className="w-full rounded-md border-1 focus:border-none"
                >
                  <option value="">Select Highest Education</option>
                  {HighestEducation.map((value) => (
                    <option key={value.ID} value={value.ID}>
                      {value.Name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="w-full p-2">
              <label>
                Employment Status<span className="text-divyang">*</span>
              </label>
              <div>
                <select
                  name="EmploymentStatus"
                  defaultValue={formData.EmploymentStatus}
                  onChange={handleChange}
                  className="w-full rounded-md border-1 focus:border-none"
                >
                  <option value="">Select Employment Status</option>
                  {EmploymentStatus.map((value) => (
                    <option key={value.ID} value={value.ID}>
                      {value.Name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="flex w-full lg:flex-nowrap flex-wrap items-center">
            <div className="w-full p-2">
              <label>
                Primary Language <span className="text-divyang">*</span>
              </label>
              <div>
                <select
                  name="PrimaryLanguage"
                  defaultValue={formData.PrimaryLanguage}
                  onChange={handleChange}
                  className="w-full rounded-md border-1 focus:border-none"
                >
                  <option value="">Select Primary Language</option>
                  {Languages.map((value) => (
                    <option key={value.ID} value={value.ID}>
                      {value.Name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="w-full p-2">
              <label>
                Available To Join In Days<span className="text-divyang">*</span>
              </label>
              <input
                name="AvailableToJoinInDays"
                value={formData.AvailableToJoinInDays}
                onChange={handleChange}
                type="text"
                className="w-full rounded-md border-1 focus:border-none"
                placeholder="12"
              />
            </div>
          </div>
          <div className="flex w-full lg:flex-nowrap flex-wrap items-center">
            <div className="w-full p-2">
              <label>
                Experience In Years <span className="text-divyang">*</span>
              </label>
              <input
                name="ExperienceYears"
                value={formData.ExperienceYears}
                onChange={handleChange}
                type="text"
                className="w-full rounded-md border-1 focus:border-none"
                placeholder="2"
              />
            </div>
            <div className="w-full p-2">
              <label>
                Experience In Months<span className="text-divyang">*</span>
              </label>
              <input
                name="ExperienceMonths"
                value={formData.ExperienceMonths}
                onChange={handleChange}
                type="text"
                className="w-full rounded-md border-1 focus:border-none"
                placeholder="11"
              />
            </div>
          </div>
          <div className="flex w-full lg:flex-nowrap flex-wrap items-center">
            <div className="w-full p-2">
              <label>
                Current Employer Sector <span className="text-divyang">*</span>
              </label>
              <input
                name="CurrentEmployerSector"
                value={formData.CurrentEmployerSector}
                onChange={handleChange}
                type="text"
                className="w-full rounded-md border-1 focus:border-none"
                placeholder="Construction"
              />
            </div>
            <div className="w-full p-2">
              <label>
                Marital Status<span className="text-divyang">*</span>
              </label>
              <div>
                <select
                  name="MaritalStatus"
                  value={formData.MaritalStatus}
                  onChange={handleChange}
                  className="w-full rounded-md border-1 focus:border-none"
                >
                  <option value="">Select Marital Status</option>
                  {MaritalStatus.map((value) => (
                    <option key={value.ID} value={value.ID}>
                      {value.Name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="flex w-full lg:flex-nowrap flex-wrap items-center">
            <div className="w-full p-2">
              <label>
                Religion ID <span className="text-divyang">*</span>
              </label>
              <select
                name="ReligionID"
                value={formData.ReligionID}
                onChange={handleChange}
                className="w-full rounded-md border-1 focus:border-none"
              >
                <option value="">Select ReligionID</option>
                {Religion.map((value) => (
                  <option key={value.ID} value={value.ID}>
                    {value.Name}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-full p-2">
              <label>
                Caste<span className="text-divyang">*</span>
              </label>
              <div>
                <select
                  name="Caste"
                  value={formData.Caste}
                  onChange={handleChange}
                  className="w-full rounded-md border-1 focus:border-none"
                >
                  <option value="">Select Caste</option>
                  {Caste.map((value) => (
                    <option key={value.Code} value={value.Code}>
                      {value.Name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* UID's Section */}
        <h2 className="font-bold text-xl py-10 text-divyang">UID's</h2>
        {formData.UIDs.map((uid, index) => (
          <div
            key={index}
            className="flex flex-col justify-between items-center p-3 rounded-md border"
          >
            <div className="flex w-full lg:flex-nowrap flex-wrap items-center">
              <div className="w-full p-2">
                <label>
                  UIDType <span className="text-divyang">*</span>
                </label>
                <input
                  name="UIDType"
                  value={uid.UIDType}
                  onChange={(e) => {
                    handleUIDChange(e, index);
                  }}
                  type="text"
                  className="w-full rounded-md border-1 focus:border-none"
                  placeholder="11"
                />
              </div>
              <div className="w-full p-2">
                <label>
                  UIDNumber<span className="text-divyang">*</span>
                </label>
                <input
                  name="UIDNumber"
                  value={uid.UIDNumber}
                  onChange={(e) => {
                    handleUIDChange(e, index);
                  }}
                  type="text"
                  className="w-full rounded-md border-1 focus:border-none"
                  placeholder="4587987457"
                />
              </div>
            </div>
          </div>
        ))}

        {/* Skills Section */}
        <h2 className="font-bold text-xl py-10 text-divyang">Skills</h2>
        {formData.Skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col justify-between p-3 rounded-md border"
          >
            <div className="flex w-full lg:flex-nowrap flex-wrap justify-between items-center">
              <div className="w-full flex flex-col p-2">
                <label>
                  SkillName <span className="text-divyang">*</span>
                </label>
                <input
                  type="text"
                  className="md:w-1/2 w-full rounded-md border-1 focus:border-none"
                  placeholder="Plumbing"
                  name="SkillName"
                  value={skill.SkillName}
                  onChange={(e) => {
                    handleSkillChange(e, index);
                  }}
                />
              </div>
              <div className="w-full p-2">
                <button
                  type="button"
                  className="rounded-full p-2 px-8 bg-divyang"
                  // onClick={handleAddSkill}
                >
                  Add More +
                </button>
              </div>
            </div>
            <div className="p-2 border border-1">
              {/* <div className="flex flex-wrap lg:flex-nowrap gap-4">
                {skillsList.map((skill, index) => (
                  <p key={index} className="p-2 border border-1 rounded-sm">
                    {skill}{" "}
                    <button onClick={() => handleRemoveSkill(index)}>x</button>
                  </p>
                ))}
              </div> */}
            </div>
          </div>
        ))}
        {/* Addresses Section */}
        <h2 className="font-bold text-xl py-10 text-divyang">Addresses</h2>
        {formData.Addresses.map((address, index) => (
          <div
            key={index}
            className="flex flex-col justify-between  p-3 rounded-md border"
          >
            <div className="flex w-full lg:flex-nowrap flex-wrap items-center">
              <div className="w-full p-2">
                <label>
                  Address Type <span className="text-divyang">*</span>
                </label>
                <div>
                  <select
                    name="AddressType"
                    defaultValue={address.AddressType}
                    onChange={(e) => handleAddressChange(e, index)}
                    className="w-full rounded-md border-1 focus:border-none"
                  >
                    <option value="">Select Address Type</option>
                    {AddressType.map((value) => (
                      <option key={value.Code} value={value.Code}>
                        {value.Name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="w-full p-2">
                <label>
                  Address Sub Type <span className="text-divyang">*</span>
                </label>
                <div>
                  <select
                    name="AddressSubType"
                    defaultValue={address.AddressSubType}
                    onChange={(e) => handleAddressChange(e, index)}
                    className="w-full rounded-md border-1 focus:border-none"
                  >
                    <option value="">Select Address Sub Type</option>
                    {AddressSubType.map((value) => (
                      <option key={value.Code} value={value.Code}>
                        {value.Name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="flex  w-full lg:flex-nowrap flex-wrap items-center">
              <div className="w-full p-2">
                <label>
                  Territory Type <span className="text-divyang">*</span>
                </label>
                <div>
                  <select
                    name="TerritoryType"
                    defaultValue={address.TerritoryType}
                    onChange={(e) => handleAddressChange(e, index)}
                    className="w-full rounded-md border-1 focus:border-none"
                  >
                    <option value="">Select Territory Type</option>
                    {TerritoryType.map((value) => (
                      <option key={value.Code} value={value.Code}>
                        {value.Name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="w-full p-2">
                <label>
                  Address1 <span className="text-divyang">*</span>
                </label>
                <textarea
                  name="Address1"
                  value={address.Address1}
                  onChange={(e) => handleAddressChange(e, index)}
                  type="text"
                  className="w-full rounded-md border-1 focus:border-none"
                  placeholder="Hno 122C, PG"
                  rows="3"
                />
              </div>
            </div>
            <div className="flex  w-full lg:flex-nowrap flex-wrap items-center">
              <div className="w-full p-2">
                <label>
                  State <span className="text-divyang">*</span>
                </label>
                <div>
                  <select
                    name="State"
                    defaultValue={address.State}
                    onChange={(e) => handleAddressChange(e, index)}
                    className="w-full rounded-md border-1 focus:border-none"
                  >
                    <option value="">Select State</option>
                    {States.map((value) => (
                      <option key={value.ID} value={value.ID}>
                        {value.Name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="w-full p-2">
                <label>
                  District <span className="text-divyang">*</span>
                </label>
                <div>
                  <select
                    name="District"
                    defaultValue={address.District}
                    onChange={(e) => handleAddressChange(e, index)}
                    className="w-full rounded-md border-1 focus:border-none"
                  >
                    <option value="">Select District</option>
                    {District.map((value) => (
                      <option key={value.ID} value={value.ID}>
                        {value.Name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="flex  w-full lg:flex-nowrap flex-wrap items-center">
              <div className="w-full p-2">
                <label>
                  Sub District/Taluka <span className="text-divyang">*</span>
                </label>
                <input
                  name="SubDistrictTaluka"
                  value={address.SubDistrictTaluka}
                  onChange={(e) => handleAddressChange(e, index)}
                  type="text"
                  className="w-full rounded-md border-1 focus:border-none"
                  placeholder="Sub District name"
                />
              </div>
              <div className="w-full p-2">
                <label>
                  City/Village <span className="text-divyang">*</span>
                </label>
                <input
                  name="CityVillage"
                  value={address.CityVillage}
                  onChange={(e) => handleAddressChange(e, index)}
                  type="text"
                  className="w-full rounded-md border-1 focus:border-none"
                  placeholder="City or Village Name"
                />
              </div>
              <div className="w-full p-2">
                <label>
                  Pincode <span className="text-divyang">*</span>
                </label>
                <input
                  name="Pincode"
                  value={address.Pincode}
                  onChange={(e) => handleAddressChange(e, index)}
                  type="text"
                  className="w-full rounded-md border-1 focus:border-none"
                  placeholder="226001"
                />
              </div>
            </div>
          </div>
        ))}
        {/* Educations Section */}
        <h2 className="font-bold text-xl py-10 text-divyang">Educations</h2>
        {formData.Educations.map((education, index) => (
          <div
            key={index}
            className="flex flex-col justify-between  p-3 rounded-md border"
          >
            <div className="flex  w-full lg:flex-nowrap flex-wrap items-center">
              <div className="w-full p-2">
                <label>
                  Education Qualification{" "}
                  <span className="text-divyang">*</span>
                </label>
                <input
                  name="EducationQualification"
                  value={education.EducationQualification}
                  onChange={(e) => handleEducationChange(e, index)}
                  type="text"
                  className="w-full rounded-md border-1 focus:border-none"
                  placeholder="High School"
                />
              </div>
              <div className="w-full p-2">
                <label>
                  Specialization/Major <span className="text-divyang">*</span>
                </label>
                <input
                  name="SpecializationMajor"
                  value={education.SpecializationMajor}
                  onChange={(e) => handleEducationChange(e, index)}
                  type="text"
                  className="w-full rounded-md border-1 focus:border-none"
                  placeholder="Plumbing"
                />
              </div>
            </div>
            <div className="flex w-full lg:flex-nowrap flex-wrap items-center">
              <div className="w-full p-2">
                <label>
                  Board/University <span className="text-divyang">*</span>
                </label>
                <div>
                  <select
                    name="BoardUniversity"
                    value={education.BoardUniversity}
                    onChange={(e) => handleEducationChange(e, index)}
                    className="w-full rounded-md border-1 focus:border-none"
                  >
                    <option value="">Select Board/University</option>
                    {BoardUniversity.map((value) => (
                      <option key={value.ID} value={value.ID}>
                        {value.Name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="w-full p-2">
                <label>
                  Institute <span className="text-divyang">*</span>
                </label>
                <input
                  name="Institute"
                  value={education.Institute}
                  onChange={(e) => handleEducationChange(e, index)}
                  type="text"
                  className="w-full rounded-md border-1 focus:border-none"
                  placeholder="MB PG College"
                />
              </div>
            </div>
            <div className="flex w-full lg:flex-nowrap flex-wrap items-center">
              <div className="w-full p-2">
                <label>
                  Passing Month <span className="text-divyang">*</span>
                </label>
                <div>
                  <select
                    name="PassingMonth"
                    defaultValue={education.PassingMonth}
                    onChange={(e) => handleEducationChange(e, index)}
                    className="w-full rounded-md border-1 focus:border-none"
                  >
                    <option value="">Select Passing Month</option>
                    {PassingMonth.map((value) => (
                      <option key={value.ID} value={value.ID}>
                        {value.Name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="w-full p-2">
                <label>
                  Passing Year <span className="text-divyang">*</span>
                </label>
                <div>
                  <select
                    name="PassingMonth"
                    defaultValue={education.PassingMonth}
                    onChange={(e) => handleEducationChange(e, index)}
                    className="w-full rounded-md border-1 focus:border-none"
                  >
                    <option value="">Select Passing Year</option>
                    {PassingYear.map((value) => (
                      <option key={value.Year} value={value.Year}>
                        {value.Year}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="flex w-full lg:flex-nowrap flex-wrap items-center">
              <div className="w-full p-2">
                <label>
                  Grade Percentage/Percentile Type{" "}
                  <span className="text-divyang">*</span>
                </label>
                <select
                  name="GradePercentagePercentileType"
                  defaultValue={education.GradePercentagePercentileType}
                  onChange={(e) => handleEducationChange(e, index)}
                  className="w-full rounded-md border-1 focus:border-none"
                >
                  <option value="">Grade Percentage/Percentile Type</option>
                  {GradeType.map((value) => (
                    <option key={value.ID} value={value.ID}>
                      {value.Name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-full p-2">
                <label>
                  Grade Percentage/Percentile Value{" "}
                  <span className="text-divyang">*</span>
                </label>
                <input
                  name="GradePercentagePercentileValue"
                  value={education.GradePercentagePercentileValue}
                  onChange={(e) => handleEducationChange(e, index)}
                  type="text"
                  className="w-full rounded-md border-1 focus:border-none"
                  placeholder="Percentage"
                />
              </div>
            </div>
            <div className="flex w-full lg:flex-nowrap flex-wrap items-center">
              <div className="w-full p-2">
                <label>
                  Nature Of Course <span className="text-divyang">*</span>
                </label>
                <select
                  name="NatureOfCourse"
                  defaultValue={education.NatureOfCourse}
                  onChange={(e) => handleEducationChange(e, index)}
                  className="w-full rounded-md border-1 focus:border-none"
                >
                  <option value="">NatureOfCourse</option>
                  {CourseNature.map((value) => (
                    <option key={value.Code} value={value.Code}>
                      {value.Name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-full p-2">
                <label>
                  Medium Of Education <span className="text-divyang">*</span>
                </label>
                <input
                  name="MediumOfEducation"
                  value={education.MediumOfEducation}
                  onChange={(e) => handleEducationChange(e, index)}
                  type="text"
                  className="w-full rounded-md border-1 focus:border-none"
                  placeholder="English"
                />
              </div>
            </div>
            <div className="w-full mt-5 p-2">
              <button
                type="submit"
                className="rounded-full p-2 px-8 bg-divyang "
              >
                Add More +
              </button>
            </div>
          </div>
        ))}
        {/* Certificates Section */}
        <h2 className="font-bold text-xl py-10 text-divyang">Certificates</h2>
        {/* Map over the Certificates array */}
        {formData.Certificates.map((certificate, index) => (
          <div
            key={index}
            className="flex w-full justify-between lg:flex-nowrap flex-wrap items-center"
          >
            <div className="w-full p-2">
              <label>
                Certificate Name <span className="text-divyang">*</span>
              </label>
              <input
                name={`CertificateName`}
                value={certificate.CertificateName}
                onChange={(e) => handleCertificateChange(e, index)}
                type="text"
                className="w-full rounded-md border-1 focus:border-none"
                placeholder="Plumbing Certificate"
              />
            </div>
            <div className="w-full p-2">
              <label>
                Certificate Year <span className="text-divyang">*</span>
              </label>
              <input
                name={`CertificateYear`}
                value={certificate.CertificateYear}
                onChange={(e) => handleCertificateChange(e, index)}
                type="text"
                className="w-full rounded-md border-1 focus:border-none"
                placeholder="2019"
              />
            </div>
            <div className="w-full p-2">
              <label>
                Issued By <span className="text-divyang">*</span>
              </label>
              <input
                name={`IssuedBy`}
                value={certificate.IssuedBy}
                onChange={(e) => handleCertificateChange(e, index)}
                type="text"
                className="w-full rounded-md border-1 focus:border-none"
                placeholder="Government"
              />
            </div>
          </div>
        ))}

        {/* Button to add more certificates */}
        <div className="w-full mt-5 p-2">
          <button
            type="button"
            onClick={handleAddCertificate}
            className="rounded-full p-2 px-8 bg-divyang "
          >
            Add More +
          </button>
        </div>

        <div
          className="flex w-full p-3 justify-end mt-6"
          style={{ background: "#FFFFFF" }}
        >
          <button
            type="submit"
            className="w-full rounded-full p-2 px-8 bg-divyang "
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CandidateNcs;
