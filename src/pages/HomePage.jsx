import React from "react";
import HeroSection from "../components/homePageComp/HeroSection";
import Features from "../components/features/Features";
import SearchSection from "../components/searchBarSection/SearchSection";
import RegisterBanner from "../components/registerbanner/RegisterBanner";
import BrowseJobByCat from "../components/browseJobByCat/BrowseJobByCat";
import Organizations from "../components/organizationListedWithUs/Organizations";
import GovtSchemes from "../components/govtSchemes/GovtSchemes";
import MessageBy from "../components/messageBy/MessageBy";
import LatestBlogs from "../components/latestBlogs/LatestBlogs";
import Faq from "../components/faq/Faq";
import JobCards from "../components/ExploreJobs/JobCards";
import ProtectedEmployerRoute from "../routes/ProtectedEmployerRoute";
// import ProtectedRoute from "../routes/ProtectedRoute";

const HomePage = () => {
  return (
    <div className="">
      <HeroSection />
      <SearchSection />
      <JobCards />
      <ProtectedEmployerRoute />
      <RegisterBanner />
      <BrowseJobByCat />
      <Organizations />
      <GovtSchemes />
      <MessageBy />
      <Faq />
      <LatestBlogs />
    </div>
  );
};

export default HomePage;
