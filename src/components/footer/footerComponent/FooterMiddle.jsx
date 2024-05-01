import LayoutWraper from "@/src/layout/LayoutWraper";
import React from "react";
import logo from "../../../assets/hurllogo.png"
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa6";
import { FiTwitter } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
const FooterMiddle = () => {
  return (
    <LayoutWraper>

      <footer className="p-5 text-[16px] font-extralight">
        

          <div className="md:flex-row  flex flex-col gap-8  mb-8  ">


            <div className=" lg:max-w-xl basis-1/2">
              <h1 className=" font-semibold pb-2 text-gray-900 ">Disclaimer</h1>

              <h1 className=" text-gray-600 text-justify mt-2">
                (www.divyangcareer.com) is a career platform connecting employers and candidates. We make no particular recommendations for any job or employer. We do not charge any fees or guarantee job placements and do not give any references. We reserve the right to take strict action for any wrongful activity conducted by any person.
              </h1>

              <h1 className="font-semibold text-gray-900">
                We do not provide jobs and this is informative platform only.
              </h1> <br />
              <h1 className=" text-gray-600 text-justify">
                This website has been conceptualized by the PwD's (divyangs) specially for the PwD candidates. If you find any mistakes / suggestions please provide your feedback so that we can improvise it further. Write us at divyangcareer@gmail.com
              </h1>

              <div className="flex flex-col pt-2">
                <h1 className="font-semibold">Supported By</h1>
                <img src={logo} className=" h-28 w-28" />
              </div>
            </div>

            <div className="flex  flex-col flex-1 ">
              <p className=" font-semibold tracking-wide text-gray-900 pb-2">About Us</p>
              <p className=" mt-2 text-gray-600  text-justify ">At Divyang Career, we believe in the power of inclusivity. We're not just a job portal</p>
              <Link className=" mt-2 text-gray-600 hover:text-divyang text-justify">T. +91 877 935 2803</Link>
              <Link className=" mt-2 text-gray-600 hover:text-divyang text-justify">E. divyangcareer@gmail.com</Link>
              <p className=" mt-2 text-gray-600 ">Working Day & Time</p>
              <p className="  mt-2 text-gray-600 ">Monday - Friday <br />09 Am to 05 Pm</p>
            </div>

            <div className="hidden md:block">
              <div className="flex flex-col flex-1 ">
                <p className=" gap-3 font-semibold tracking-wide text-gray-900 pb-2">Useful Links</p>
                <Link to="jobs" className=" mt-1 text-gray-600 hover:text-divyang py-1">Jobs</Link>
                <Link className=" mt-1 text-gray-600 hover:text-divyang py-1">FAQ</Link>
                <Link to="contact" className=" mt-1 text-gray-600 hover:text-divyang py-1">Contact us</Link>
                <Link to="founder" className=" mt-1 text-gray-600 hover:text-divyang py-1">Founders Note</Link>
                <Link className=" mt-1 text-gray-600 hover:text-divyang py-1">Privacy Policy</Link>
              </div>
            </div>
            <div className="md:hidden text-[17px]">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Connect</AccordionTrigger>
                  <AccordionContent>
                    <div className="flex gap-3 text-gray-600 hover:text-divyang">
                      <FaLinkedin />
                      <Link >Linkedin</Link>
                    </div>
                    <div className="flex gap-3 text-gray-600 hover:text-divyang">
                      <FiTwitter />
                      <Link >Twitter</Link>
                    </div>
                    <div className="flex gap-3 text-gray-600 hover:text-divyang">
                      <FaFacebook />
                      <Link >Facebook</Link>
                    </div>
                    <div className="flex gap-3 text-gray-600 hover:text-divyang">
                      <FaInstagram />
                      <Link >Instagram</Link>
                    </div>
                    <div className="flex gap-3  text-gray-600 hover:text-divyang">
                      <CiYoutube />
                      <Link >Youtube</Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Useful Links</AccordionTrigger>

                  <AccordionContent>
                    <div className="flex flex-col ">

                      <Link to="jobs" className=" mt-1 text-gray-600 hover:text-divyang">Jobs</Link>
                      <Link className=" mt-1 text-gray-600 hover:text-divyang">FAQ</Link>
                      <Link to="contact" className=" mt-1 text-gray-600 hover:text-divyang">Contact us</Link>
                      <Link to="founder" className=" mt-1 text-gray-600 hover:text-divyang">Founders Note</Link>
                      <Link className=" mt-1 text-gray-600 hover:text-divyang">Privacy Policy</Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>

              </Accordion>



            </div>

            <div className=" hidden md:block">
              <div className="flex  flex-col  gap-1 px-2">
                <p className="text-base font-semibold tracking-wide text-gray-900 pb-3">Connect</p>
                <div className="flex gap-3 text-gray-600 hover:text-divyang py-1">
                  <FaLinkedin className="mt-1" />
                  <Link >Linkedin</Link>
                </div>
                <div className="flex gap-3  text-gray-600 hover:text-divyang py-1">
                  <FiTwitter className="mt-1" />
                  <Link >Twitter</Link>
                </div>
                <div className="flex gap-3  text-gray-600 hover:text-divyang py-1">
                  <FaFacebook className="mt-1" />
                  <Link >Facebook</Link>
                </div>
                <div className="flex gap-3  text-gray-600 hover:text-divyang py-1">
                  <FaInstagram className="mt-1" />
                  <Link >Instagram</Link>
                </div>
                <div className="flex gap-3  text-gray-600 hover:text-divyang py-1">
                  <CiYoutube className="mt-1" />
                  <Link >Youtube</Link>
                </div>
              </div>
            
          </div>

        </div>

      </footer>

    </LayoutWraper >
  );
};
export default FooterMiddle;
