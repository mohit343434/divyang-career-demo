import React from 'react'
import { SheetClose, SheetContent, } from "@/components/ui/sheet"
import { AiOutlineDashboard } from "react-icons/ai";
import { IoIosLogOut } from "react-icons/io";
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '@/src/context/AuthContext';
const MdScreenOpenSiderbar = ({ ROUTER, dashboardRoute }) => {
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
    <SheetContent side={"left"} >
      <div>
        <SheetClose asChild>
          <Link to={dashboardRoute ? dashboardRoute : null} className='flex gap-3 p-2 ms-3 text-xl hover:bg-gray-300 hover:text-divyang rounded-sm  ' >
            <AiOutlineDashboard />
            <span>Dashboard </span>
          </Link>
        </SheetClose>
        {
          ROUTER.map((e ,i) => <SheetClose asChild key={i}>
            <NavLink to={e.route} className='flex gap-3 p-2 ms-3 text-xl hover:bg-gray-300 hover:text-divyang rounded-sm  '  >
              {e.icon}
              <span>{e.name}</span>
            </NavLink>
          </SheetClose>)
        }
        <SheetClose asChild>
          <NavLink onClick={handleLogout} to={"/"} className='flex gap-3 p-2 ms-3 text-xl hover:bg-gray-300 hover:text-divyang text-purple-900 rounded-sm ' >
            <IoIosLogOut className='hover:text-green-500' />
            <span >Logout</span>
          </NavLink>
        </SheetClose>
      </div>

    </SheetContent>
  )
}

export default MdScreenOpenSiderbar