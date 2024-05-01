import React from "react";
import { useAuth } from "@/src/context/AuthContext";

const DashWelcome = () => {
  const [auth] = useAuth();

  return (
    <div>
      <h1 className="text-3xl font-extrabold">
        Welcome back {auth?.user?.firstName}!
      </h1>
    </div>
  );
};

export default DashWelcome;
