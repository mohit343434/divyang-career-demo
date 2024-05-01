import React, { lazy } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import AppLayout from "../layout/Layout";
import Job from "@/Dashboard/DashBoardPages/Empolyees/Job";
import Applicants from "@/Dashboard/DashBoardPages/Empolyees/Applicants";
import SideBar from "@/Dashboard/DashBoardmain/SideBar";
import DashBoard from "@/Dashboard/DashBoardPages/Empolyees/DashBoard";
import Messages from "@/Dashboard/DashBoardPages/Empolyees/Messages";
import Meetings from "@/Dashboard/DashBoardPages/Empolyees/Meetings";
import Company from "@/Dashboard/DashBoardPages/Empolyees/Company";
import Setting from "@/Dashboard/DashBoardPages/Empolyees/Setting";

import SingleJobDetails from "../components/SingleJobDetailsComp/SingleJobMain";
import CandidatesDashBoard from "@/Dashboard/DashBoardPages/Candidates/CandidatesDashBoard";
import CandidatesMyJob from "@/Dashboard/DashBoardPages/Candidates/CandidatesMyJob";
import CandidatesProfile from "@/Dashboard/DashBoardPages/Candidates/CandidatesProfile";
import CandidatesMessages from "@/Dashboard/DashBoardPages/Candidates/CandidatesMessages";
import CandidatesMeetings from "@/Dashboard/DashBoardPages/Candidates/CandidatesMeetings";
import CandidatesSetting from "@/Dashboard/DashBoardPages/Candidates/CandidatesSetting";
import PostJob from "@/Dashboard/DashBoardPages/Empolyees/PostJob";
import ProtectedEmployerRoute from "./ProtectedEmployerRoute";
import ProtectedCandidateRoute from "./ProtectedCandidateRoute";
import MoreFaq from "../components/faq/viewMoreFaq/MoreFaq";
import AdminDashboard from "@/Dashboard/DashBoardPages/Admins/AdminDashboard";
import AdminSetting from "@/Dashboard/DashBoardPages/Admins/AdminSetting";
import AdminCandidate from "@/Dashboard/DashBoardPages/Admins/AdminCandidate";
import AdminEmployees from "@/Dashboard/DashBoardPages/Admins/AdminEmployees";
import AdminNotification from "@/Dashboard/DashBoardPages/Admins/AdminNotification";
import AdminSectorsAndCategories from "@/Dashboard/DashBoardPages/Admins/AdminSectorsAndCategories";
import CompaniesMain from "../components/companies/CompaniesMain";
import CompanyDetailMain from "../components/companyDetail/CompanyDetailMain";
import CandidatesMain from "../components/candidates/CandidatesMain";
import CandidateProfileMain from "../components/candidateProfile/CandidateProfileMain";
import ResetPassword from "../components/password/ResetPassword";
import CandidateNcsPage from "@/Dashboard/DashBoardPages/Candidates/CandidateNcsPage";
import EmpolyesJobPost from "@/Dashboard/DashboardComponents/Empolyees/AllJob/EmpolyesJobPost";
import EmployeesPostCampany from "@/Dashboard/DashboardComponents/Empolyees/AllCompany/EmployeesPostCampany";
import { IoSettingsOutline } from "react-icons/io5";
// ================ 👇 importing component with LAZY 👇  =====================

const HomePage = lazy(() => import("../pages/HomePage"));
const Blogs = lazy(() => import("../pages/Blogs"));
const AboutUs = lazy(() => import("../pages/AboutUs"));
const ContactUs = lazy(() => import("../pages/ContactUs"));
const Schems = lazy(() => import("../pages/Schems"));
const PostAJob = lazy(() => import("../pages/PostAJob"));
const Jobs = lazy(() => import("../pages/Jobs"));
// const SingleJobDetails = lazy(() => import("../pages/SingleJobDetails"));
const FoundersNote = lazy(() => import("../pages/FoundersNote"));
import { FaFonticons } from "react-icons/fa";
import { GrUserManager } from "react-icons/gr";
import { IoBagOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaVectorSquare } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa"
import { MdOutlineContactPage } from "react-icons/md";
import { LuMessageSquare } from "react-icons/lu";
import { TbBrandZoom } from "react-icons/tb";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { CiLink } from "react-icons/ci";
import AdminArticle from "@/Dashboard/DashBoardPages/Admins/AdminArticle";
import EmpolyeesPostMeeting from "@/Dashboard/DashboardComponents/Empolyees/EmpolyeesMeeting/EmpolyeesPostMeeting";
// ================ 👆 importing component with LAZY 👆 =====================

const Router = ({ children }) => {
  const Admin = [
    {
      name: "Setting",
      icon: <IoSettingsOutline />,
      route: "setting"
    },
    {
      name: "Candidates",
      icon: <GrUserManager />,
      route: "candidates"
    },
    {
      name: "Employer",
      icon: <IoBagOutline />,
      route: "employees"
    },
    {
      name: "Notifications",
      icon: <IoMdNotificationsOutline />,
      route: "notifications"
    },
    {
      name: "Categories & Sectors ",
      icon:  <FaVectorSquare />,
      route: "sectors&categories"
    },
    {
      name: "Articles ",
      icon:<FaNewspaper />,
      route: "articles"
    },

  ]
  const employers = [
    {
      name: "Jobs",
      icon: <IoBagOutline />,
      route: "job"
    },
    {
      name: "Messages",
      icon: <LuMessageSquare />,
      route: "messages"
    },

    {
      name: "Meetings",
      icon: <TbBrandZoom />,
      route: "meetings"
    },
    {
      name: "Company",
      icon: <HiOutlineHomeModern />,
      route: "company"
    },

    {
      name: "Profile",
      icon: <GrUserManager />,
      route: "profile"
    },
    {
      name: "Setting",
      icon: <IoSettingsOutline />,
      route: "setting"
    },

  ]
  const candidates = [
    {
      name: "Jobs",
      icon: <IoBagOutline />,
      route: "job"
    },
    {
      name: "Profile",
      icon: <GrUserManager />,
      route: "profile"
    },
    {
      name: "Messages",
      icon: <LuMessageSquare />,
      route: "messages"
    },
    {
      name: "Meetings",
      icon: <TbBrandZoom />,
      route: "meetings"
    },
    {
      name: "Setting",
      icon: <IoSettingsOutline />,
      route: "setting"
    },
    {
      name: "Ncs",
      icon: <CiLink />,
      route: "ncs"
    },

  ]
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<AppLayout />}>
          <Route index path="/" element={<HomePage />} />
          <Route path={"faqs"} element={<MoreFaq />} />
          {/* ############################## */}
          <Route path={"jobs"} element={<Jobs />} />
          <Route path={"jobs/:id"} element={<SingleJobDetails />} />
          <Route path={"companies"} element={<CompaniesMain />} />
          <Route path={"companies/:id"} element={<CompanyDetailMain />} />
          <Route path={"candidates"} element={<CandidatesMain />} />
          <Route path={"candidates/:ID"} element={<CandidateProfileMain />} />
          {/* ############################## */}
          <Route path={"schemes"} element={<Schems />} />
          <Route path={"blogs"} element={<Blogs />} />
          <Route path={"contact"} element={<ContactUs />} />
          <Route path={"about"} element={<AboutUs />} />
          <Route path={"postJob"} element={<PostAJob />} />
          <Route path={"founder"} element={<FoundersNote />} />
          <Route path={"resetPassword"} element={<ResetPassword />} />
        </Route>
        {/* employers Routing ############ */}
        <Route element={<ProtectedEmployerRoute />}>
          <Route
            path="dashboard/employers"
            element={
              <SideBar
                dashboardRoute="/dashboard/employers"
                ROUTER={employers}
              />
            }
          >
            <Route index element={<DashBoard />} />
            <Route path={"job"} element={<Job />} />
            <Route path={"post-job"} element={<EmpolyesJobPost />} />
            <Route path={"applicants"} element={<Applicants />} />
            <Route path={"messages"} element={<Messages />} />
            <Route path={"meetings"} element={<Meetings />} />
            <Route path={"post-meeting"} element={<EmpolyeesPostMeeting />} />
            <Route path={"company"} element={<Company />} />
            <Route path={"post-company"} element={<EmployeesPostCampany />} />
            <Route path={"setting"} element={<Setting />} />
            <Route path={"profile"} element={<PostJob />} />
          </Route>
        </Route>
        {/* candidates Routing ############ */}
        <Route element={<ProtectedCandidateRoute />}>
          <Route
            path="dashboard/candidates"
            element={
              <SideBar
                dashboardRoute="/dashboard/candidates"
                ROUTER={candidates}
              />
            }
          >
            <Route index element={<CandidatesDashBoard />} />
            <Route path={"job"} element={<CandidatesMyJob />} />
            <Route path={"profile"} element={<CandidatesProfile />} />
            <Route path={"messages"} element={<CandidatesMessages />} />
            <Route path={"meetings"} element={<CandidatesMeetings />} />
            <Route path={"setting"} element={<CandidatesSetting />} />
            <Route path={"ncs"} element={<CandidateNcsPage />} />

          </Route>
        </Route>
        {/* candidates Routing ############ */}
        <Route>
          <Route
            path="dashboard/admin"
            element={
              <SideBar
                ROUTER={Admin}
                dashboardRoute="/dashboard/admin"
              />
            }
          >
            <Route index element={<AdminDashboard />} />
            <Route path={"candidates"} element={< AdminCandidate />} />
            <Route path={"employees"} element={< AdminEmployees />} />
            <Route path={"notifications"} element={< AdminNotification />} />
            <Route path={"setting"} element={< AdminSetting />} />
            <Route path={"articles"} element={< AdminArticle />} />

            <Route path={"sectors&categories"} element={< AdminSectorsAndCategories />} />
          </Route>
        </Route>
      </>
    )
  );

  return <RouterProvider router={router}>Router</RouterProvider>;
};

export default Router;
