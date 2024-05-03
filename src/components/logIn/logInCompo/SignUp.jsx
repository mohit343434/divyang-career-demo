import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/src/context/AuthContext';
import axiosInstance from '../../../utils/axiosConfig';
import Loader from "@/Dashboard/DashboardComponents/GlobalComponents/Loader"


const SignUp = () => {
  const navigate = useNavigate();
  const [changePassword, setChangePassword] = useState(true);
  const [role, setRole] = useState('candidate');
  const [firstName, setFname] = useState('');
  const [lastName, setlastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [privacyPolicy, setPrivacyPolicy] = useState(false);
  const [auth, setAuth] = useAuth();
  const [loading , setLoading ] = useState(false)

  const handleOptionChange = (event) => {
    setRole(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true)
      const res = await axiosInstance.post("/auth/signup", {
        firstName,
        lastName,
        email,
        phone,
        password,
        username,
        role,
      });
      if (res.data.status === "success") {
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
      }
      console.log(res)

      localStorage.setItem("auth", JSON.stringify(res.data.accessToken))
      localStorage.setItem("user", JSON.stringify(res.data.newUser))
      if (res.data.newUser.role === 'candidate') {
        navigate('/dashboard/candidates/profile');
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Sign Up sucessfully, Welcome to the Divyang Career",
          showConfirmButton: false,
          timer: 1500
        });
        return
      }
      if (res.data.newUser.role === 'employer') {
        navigate('/dashboard/employers/profile');
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Sign Up sucessfully, Welcome to the Divyang Career",
          showConfirmButton: false,
          timer: 1500
        });
        return
      }


    } catch (error) {
      if (error.response.status === 400) {
        Swal.fire({
          position: "top-end",
          icon: "error",
          text: "User Alredy exist, Try Another user Name or Email",
          showConfirmButton: false,
          timer: 2500
        });
      }

    }finally{
      setLoading(false)
    }
    if (!phone.match(/^[0-9]{10}$/)) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        text: "Phone number is invalid",
        showConfirmButton: false,
        timer: 2500
      });

    }

    if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/)) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        text: "Password is invalid. It must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, and one digit.",
        showConfirmButton: false,
        timer: 2500
      });
    }
  };
  return (
    <div className='max-h-[500px] overflow-y-auto ' >
      <form onSubmit={handleSubmit}>
      {loading && <Loader/>}
        <div className='flex flex-col gap-2 '>
          <div className='flex gap-2'>
            <Label className={`flex items-center rounded-md cursor-pointer px-4 py-2 border ${role === 'candidate' ? 'bg-divyang text-white' : 'bg-gray-200 text-gray-700'}`}>
              <Input type="radio" name="type" value="candidate" onChange={handleOptionChange} className="sr-only" />
              Candidate
            </Label>
            <Label className={`flex items-center rounded-md cursor-pointer px-4 py-2 border ${role === 'employer' ? 'bg-divyang text-white' : 'bg-gray-200 text-gray-700'}`}>
              <Input type="radio" name="type" value="employer" onChange={handleOptionChange} className="sr-only w-96" />
              Employer
            </Label>
          </div>
          <div className='flex flex-col gap-4 '>
            <div className='w-full'>
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                placeholder="First Name"
                onChange={(e) => setFname(e.target.value)}
                required
              />
            </div>
            <div className='w-full'>
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                placeholder="Last Name"
                onChange={(e) => setlastName(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                placeholder="Enter Username"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                placeholder="Enter Phone"
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={changePassword ? "password" : "text"}
                  placeholder="Enter password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <span
                  className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer"
                  onClick={() => setChangePassword(!changePassword)}
                >
                  {changePassword ? <IoEye /> : <IoMdEyeOff />}
                </span>
              </div>
            </div>
            <div>
              <input
                type="checkbox"
                id="privacyPolicy"
                name="privacyPolicy"
                className='focus:text-white focus:bg-orange-500'
                checked={privacyPolicy}
                onChange={() => setPrivacyPolicy(!privacyPolicy)}
              />
              <label htmlFor="privacyPolicy"> Accept the<span className='text-orange-500'> Terms</span> and <span className='text-orange-500'>Privacy Policy</span></label>
            </div>
            <Button
              className="w-full border-orange-500 border-2 text-white bg-orange-500 hover:bg-white hover:text-orange-500 rounded-3xl">
              Sign Up
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
