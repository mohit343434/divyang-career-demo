import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import LayoutWraper from "./LayoutWraper";
import Footer from './../components/footer/Footer';
import Navbar from './../components/header/Navbar';
import HeroSection from "../components/homePageComp/HeroSection";
import Carousel from "../components/carousel/Carousel";
import RegisterBanner from "../components/registerbanner/RegisterBanner";
import BrowseJobByCat from "../components/browseJobByCat/BrowseJobByCat";
// import SearchSection from "../components/searchBarSection/SearchSection";

const AppLayout = () => {
    return (
        <div className="">
            <Navbar />
            {/* <Carousel /> */}

            {/* <HeroSection /> */}
            {/* <LayoutWraper> */}
            <Outlet />
            <ScrollRestoration />
           
            {/* </LayoutWraper> */}
            <Footer />
        </div>

    );
};

export default AppLayout;
