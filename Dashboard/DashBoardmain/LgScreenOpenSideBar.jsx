import React from 'react'
import { AiOutlineDashboard } from "react-icons/ai";
import { IoIosLogOut } from "react-icons/io";
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '@/src/context/AuthContext';

const LgScreenOpenSideBar = ({  ROUTER, dashboardRoute }) => {
  const [auth, setAuth] = useAuth()
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    localStorage.removeItem("user");
  };
  return (
    <div className=''>
      <Link to={dashboardRoute ? dashboardRoute : null} className='flex gap-3 p-2 ms-3 text-xl hover:bg-gray-300 hover:text-divyang rounded-sm  ' >
        <AiOutlineDashboard />
        <span>Dashboard </span>
      </Link>
      {
        ROUTER.map((e ,i) => <NavLink key={i} to={e.route} className='flex gap-3 p-2 ms-3 text-xl hover:bg-gray-300 hover:text-divyang  rounded-sm '  >
          {e.icon}
          <span>{e.name}</span>
        </NavLink>)
      }
      <NavLink onClick={handleLogout} to="/" className='flex gap-3 p-2 ms-3 text-xl hover:bg-gray-300 hover:text-divyang text-purple-900 rounded-sm ' >
        <IoIosLogOut className='hover:text-green-500' />
        <span>Logout</span>
      </NavLink>

    </div>
  )
}

export default LgScreenOpenSideBar