// import React from "react";
// import { Navigate, Outlet } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// const ProtectedEmployerRoute = () => {
//   const [auth] = useAuth();
//   if (auth.user && auth.user.role === null) {
//     return <Navigate to="/" />;
//   }
//   if (auth.user && auth.user.role === "employer") {
//     return <Outlet />;
//   } else {
//     return <Navigate to="/" />;
//   }
// };

// export default ProtectedEmployerRoute;

import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedEmployerRoute = () => {
 
  const auth =  JSON.parse(localStorage.getItem("user"))
  if (auth?.role === "employer") {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
};

export default ProtectedEmployerRoute;
