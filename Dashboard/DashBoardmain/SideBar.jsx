import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Outlet } from "react-router-dom";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import LgScreenOpenSideBar from "./LgScreenOpenSideBar";
import MdScreenOpenSiderbar from "./MdScreenOpenSiderbar";
import CloseMenuForLgScreen from "./CloseMenuForLgScreen";
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import Navbar from "@/src/components/header/Navbar";
// import {employers} from "../../"
const SideBar = ({
  dashboardRoute,
  ROUTER
}) => {
  const [togal, setTogal] = useState(true);
  const [svgVisibility, setSvgVisibilityForLgScreen] = useState("block");
  const [svgVisibilityForMobile, setSvgVisibilityForMdScreen] = useState(
    "hidden"
  );

  /* 👇👇👇 Function to handle media query change ###############  */
  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia("(min-width: 767px)").matches) {
        setTogal(false);
      } else {
        setTogal(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* 👇👇👇 function for lg screen show and hidden sidebar ############# */
  useEffect(() => {
    const handleResizeforsvg = () => {
      if (window.innerWidth <= 767) {
        setTogal(true);
        setSvgVisibilityForLgScreen("hidden");
      } else {
        setSvgVisibilityForLgScreen("block");
      }
    };

    handleResizeforsvg();
    window.addEventListener("resize", handleResizeforsvg);
    return () => window.removeEventListener("resize", handleResizeforsvg);
  }, []);

  /* 👇👇👇 function for md screen show and hidden sidebar ############# */
  useEffect(() => {
    const handleResizeforMobilebtn = () => {
      if (window.innerWidth <= 767) {
        setTogal(true);
        setSvgVisibilityForMdScreen("block");
      } else {
        setSvgVisibilityForMdScreen("hidden");
      }
    };

    handleResizeforMobilebtn();
    window.addEventListener("resize", handleResizeforMobilebtn);
    return () => window.removeEventListener("resize", handleResizeforMobilebtn);
  }, []);

  // console.log(svgVisibility);
  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="flex">
          <div>
            <Sheet>
              <SheetTrigger asChild>
                <div
                  className={`${svgVisibilityForMobile} z-10`}
                  style={{ position: "fixed", top: "300px", left: "5px" }}
                >
                  <Button
                    onClick={() => setTogal(true)}
                    variant="outline"
                    className="bg-divyang text-white text-lg"
                  >
                    <GiHamburgerMenu />
                  </Button>
                </div>
              </SheetTrigger>
              <MdScreenOpenSiderbar
                ROUTER={ROUTER}
                dashboardRoute={dashboardRoute ? `${dashboardRoute}` : null}
              />
            </Sheet>
            <div className={togal ? "block" : "hidden"}>
              <div className={`w-20 ${svgVisibility}`}>
                <div
                  className={`${svgVisibility} cursor-pointer text-2xl ml-4 mt-2`}
                  onClick={() => setTogal(false)}
                >
                  <IoIosArrowDropright />
                </div>

                <div
                  className={`${svgVisibility} `}
                  style={{ transition: "all 0.5" }}
                >
                  <CloseMenuForLgScreen
                    ROUTER={ROUTER}
                    dashboardRoute={dashboardRoute ? `${dashboardRoute}` : null}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={togal ? "hidden" : "block"}>
            <div className="w-56 ">
              <div className="">
                <div className="text-2xl mt-2 ml-4">
                  <IoIosArrowDropleft
                    className="cursor-pointer "
                    onClick={() => setTogal(true)}
                  />
                </div>
                <LgScreenOpenSideBar
                  ROUTER={ROUTER}
                  dashboardRoute={dashboardRoute ? `${dashboardRoute}` : null}
                />
              </div>
            </div>
          </div>
        </div>
        <main className=" w-full " style={{ background: "#FBF2FE" }}>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default SideBar;
