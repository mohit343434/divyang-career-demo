import React from 'react'
import { AiOutlineDashboard } from "react-icons/ai";
import { IoIosLogOut } from "react-icons/io";
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '@/src/context/AuthContext';
const CloseMenuForLgScreen = ({  ROUTER,  dashboardRoute }) => {
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
    <div className='flex flex-col'>
      <Link to={dashboardRoute ? dashboardRoute : null}>
        <AiOutlineDashboard className='text-xl ml-4 mt-3 cursor-pointer  hover:text-divyang' />
      </Link>
      {
        ROUTER.map((e ,i) => <NavLink key={i} to={e.route} >
          <div className='text-xl ml-4 cursor-pointer  hover:text-divyang mt-3'>
          {e.icon}
          </div>
        </NavLink>)
      }

      <NavLink onClick={handleLogout} to={"/"}>
        <IoIosLogOut className='text-xl ml-4 cursor-pointer  hover:text-divyang mt-3' />
      </NavLink>
    </div>
  )
}

export default CloseMenuForLgScreen