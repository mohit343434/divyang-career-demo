// import React from "react";
// import { Navigate, Outlet } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedAdminRoute = () => {
  // const [auth] = useAuth();
  // if (auth.user && auth.user.role === "admin") {
  //   return <Outlet />;
  // } else {
  //   return <Navigate to="/" />;
  // }
  const auth =  JSON.parse(localStorage.getItem("user"))
  if ( auth?.role === "admin") {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }

};

export default ProtectedAdminRoute;
