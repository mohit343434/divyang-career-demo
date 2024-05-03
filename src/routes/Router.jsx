import React, { lazy } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import AppLayout from "../layout/Layout";
const Job = lazy(() => import("@/Dashboard/DashBoardPages/Empolyees/Job"));
const Applicants = lazy(() => import("@/Dashboard/DashBoardPages/Empolyees/Applicants"));
const SideBar = lazy(() => import("@/Dashboard/DashBoardmain/SideBar"));
const DashBoard = lazy(() => import("@/Dashboard/DashBoardPages/Empolyees/DashBoard"));
const Messages = lazy(() => import("@/Dashboard/DashBoardPages/Empolyees/Messages"));
const Meetings = lazy(() => import("@/Dashboard/DashBoardPages/Empolyees/Meetings"));
const Company = lazy(()=>import("@/Dashboard/DashBoardPages/Empolyees/Company")) ;
const Setting = lazy(()=>import("@/Dashboard/DashBoardPages/Empolyees/Setting")) ;

const SingleJobDetails = lazy(()=>import("../components/SingleJobDetailsComp/SingleJobMain")) ;
const CandidatesDashBoard = lazy(()=>import("@/Dashboard/DashBoardPages/Candidates/CandidatesDashBoard")) ;
const CandidatesMyJob = lazy(()=>import("@/Dashboard/DashBoardPages/Candidates/CandidatesMyJob")) ;
const CandidatesProfile = lazy(()=>import("@/Dashboard/DashBoardPages/Candidates/CandidatesProfile")) ;
const CandidatesMessages = lazy(()=>import("@/Dashboard/DashBoardPages/Candidates/CandidatesMessages")) ;
const CandidatesMeetings = lazy(()=>import("@/Dashboard/DashBoardPages/Candidates/CandidatesMeetings")) ;
const CandidatesSetting = lazy(()=>import("@/Dashboard/DashBoardPages/Candidates/CandidatesSetting")) ;
const PostJob = lazy(()=>import("@/Dashboard/DashBoardPages/Empolyees/PostJob")) ;
const ProtectedEmployerRoute = lazy(()=>import("./ProtectedEmployerRoute")) ;
const ProtectedCandidateRoute = lazy(()=>import("./ProtectedCandidateRoute")) ;
const MoreFaq = lazy(()=>import("../components/faq/viewMoreFaq/MoreFaq")) ;
const AdminDashboard = lazy(()=>import("@/Dashboard/DashBoardPages/Admins/AdminDashboard")) ;
const AdminSetting = lazy(()=>import("@/Dashboard/DashBoardPages/Admins/AdminSetting")) ;
const AdminCandidate = lazy(()=>import("@/Dashboard/DashBoardPages/Admins/AdminCandidate")) ;
const AdminEmployees = lazy(()=>import("@/Dashboard/DashBoardPages/Admins/AdminEmployees")) ;
const AdminNotification = lazy(()=>import("@/Dashboard/DashBoardPages/Admins/AdminNotification"))
const AdminSectorsAndCategories = lazy(()=>import("@/Dashboard/DashBoardPages/Admins/AdminSectorsAndCategories"))
const CompaniesMain = lazy(()=>import("../components/companies/CompaniesMain")) ;
const CompanyDetailMain = lazy(()=>import("../components/companyDetail/CompanyDetailMain")) ;
const CandidatesMain = lazy(()=>import("../components/candidates/CandidatesMain")) ;
const CandidateProfileMain = lazy(()=>import("../components/candidateProfile/CandidateProfileMain"));
const ResetPassword = lazy(()=>import("../components/password/ResetPassword"));
const CandidateNcsPage = lazy(()=>import("@/Dashboard/DashBoardPages/Candidates/CandidateNcsPage"));
const EmpolyesJobPost = lazy(()=>import("@/Dashboard/DashboardComponents/Empolyees/AllJob/EmpolyesJobPost"));
const EmployeesPostCampany = lazy(()=>import("@/Dashboard/DashboardComponents/Empolyees/AllCompany/EmployeesPostCampany"));
const Singlepage = lazy(()=>import("@/src/components/shemesBlogsComp/SinglePageBlogAndShemes"))
import { IoSettingsOutline } from "react-icons/io5";
// ================ 👇 importing component with LAZY 👇  =====================

const HomePage = lazy(() => import("../pages/HomePage"));
const Blogs = lazy(() => import("../pages/Blogs"));
const AboutUs = lazy(() => import("../pages/AboutUs"));
const ContactUs = lazy(() => import("../pages/ContactUs"));
const Schems = lazy(() => import("../pages/Schems"));
const PostAJob = lazy(() => import("../pages/PostAJob"));
const Jobs = lazy(() => import("../pages/Jobs"));
const FoundersNote = lazy(() => import("../pages/FoundersNote"));
import { GrUserManager } from "react-icons/gr";
import { IoBagOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaVectorSquare } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa"
import { LuMessageSquare } from "react-icons/lu";
import { TbBrandZoom } from "react-icons/tb";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { CiLink } from "react-icons/ci";
const AdminArticle = lazy(() => import("@/Dashboard/DashBoardPages/Admins/AdminArticle"));
const EmpolyeesPostMeeting = lazy(() => import("@/Dashboard/DashboardComponents/Empolyees/EmpolyeesMeeting/EmpolyeesPostMeeting"));
const ProfileBasicFormEdit = lazy(() => import("@/Dashboard/DashboardComponents/Candidates/CandidateProfile/ProfileForms/ProfileBasicFormEdit"));
const ProfileDisabilityFormAdd = lazy(() => import("@/Dashboard/DashboardComponents/Candidates/CandidateProfile/ProfileForms/ProfileDisabilityFormAdd"));
const ProfileEducationFormAdd = lazy(() => import("@/Dashboard/DashboardComponents/Candidates/CandidateProfile/ProfileForms/ProfileEducationFormAdd"));
const ProfileExperienceFormAdd = lazy(() => import("@/Dashboard/DashboardComponents/Candidates/CandidateProfile/ProfileForms/ProfileExperienceFormAdd"));
const AdminLogin = lazy(() => import("../components/logIn/logInCompo/AdminLogin"));


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
    // {
    //   name: "Notifications",
    //   icon: <IoMdNotificationsOutline />,
    //   route: "notifications"
    // },
    {
      name: "Categories & Sectors ",
      icon: <FaVectorSquare />,
      route: "sectors&categories"
    },
    {
      name: "Articles ",
      icon: <FaNewspaper />,
      route: "articles"
    },

  ]
  const employers = [
    {
      name: "Jobs",
      icon: <IoBagOutline />,
      route: "job"
    },
    // {
    //   name: "Messages",
    //   icon: <LuMessageSquare />,
    //   route: "messages"
    // },

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
    // {
    //   name: "Messages",
    //   icon: <LuMessageSquare />,
    //   route: "messages"
    // },
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
          <Route path={"blogsone/:id"} element={<Singlepage />} />
          <Route path={"contact"} element={<ContactUs />} />
          <Route path={"about"} element={<AboutUs />} />
          <Route path={"postJob"} element={<PostAJob />} />
          <Route path={"founder"} element={<FoundersNote />} />
          <Route path={"resetPassword"} element={<ResetPassword />} />
          <Route path={"admin-login"} element={<AdminLogin/>} />
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
            <Route path={"profileEdit"} element={<ProfileBasicFormEdit />} />
            <Route path={"addDisability"} element={<ProfileDisabilityFormAdd />} />
            <Route path={"addEducation"} element={<ProfileEducationFormAdd />} />
            <Route path={"addExperience"} element={<ProfileExperienceFormAdd />} />
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
