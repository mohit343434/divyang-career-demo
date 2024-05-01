// import React from "react";
// import { Navigate, Outlet } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// const ProtectedCandidateRoute = () => {
//   const [auth] = useAuth();
//   if (auth.user && auth.user.role === "candidate") {
//     return <Outlet />;
//   } else {
//     return <Navigate to="/" />;
//   }
// };

// export default ProtectedCandidateRoute;



import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedCandidateRoute = () => {

const auth =  JSON.parse(localStorage.getItem("user"))
  if ( auth?.role === "candidate") {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
};

export default ProtectedCandidateRoute;

