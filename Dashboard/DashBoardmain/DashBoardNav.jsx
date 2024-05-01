
import { AiOutlineDashboard } from "react-icons/ai";
import { MdOutlineCleaningServices } from "react-icons/md";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import { TbBrandZoom } from "react-icons/tb";
import { MdBlinds } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoIosLogOut } from "react-icons/io";
import logo from '../../src/assets/DivyangCareerLogo.png'
import { Link , NavLink} from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Dialog,
  DialogTrigger,
} from "@/components/ui/dialog"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@radix-ui/react-navigation-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const DashBoardNav = ({Job, Applicants, Messages, Meetings, Company, dashboardRoute, jobRoute, applicantsRoute, messagesRoute, meetingsRoute, companyRouts, settingRoute, Profile, profileRoute, Ncs, ncsRoute }) => {
  return (
   
            <div className="flex items-center border-b-2  justify-between h-16 w-full">
              <div className="flex-shrink-0">
                <Link className='/'>
                  <img src={logo} height={150} width={200} className='p-5' />
                </Link>
              </div>
              {/* for lg screen component and class */}
              <div className="hidden md:block " >
                <NavigationMenu className=""  >
                  <NavigationMenuList className="flex gap-3 justify-center ">
                    <NavigationMenuItem className="flex">
                      <NavLink to="/jobs" className=" text-lg hover:text-divyang">
                        Jobs
                      </NavLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className='  bg-none hover:text-divyang text-lg '>Company</NavigationMenuTrigger>
                      <NavigationMenuContent className='flex flex-col mt-2 absolute '>
                        <NavigationMenuLink> <Link to="/about" className="hover:text-divyang" >About Us</Link> </NavigationMenuLink>
                        <NavigationMenuLink><Link to="/founder" className="flex  hover:text-divyang " >Founder’s Note</Link></NavigationMenuLink>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavLink to="/schemes" className="text-lg  hover:text-divyang">
                        Schemes
                      </NavLink>
                    </NavigationMenuItem>
                    <NavigationMenu>
                      <NavigationMenuList>
                        <NavigationMenuItem>
                          <NavigationMenuTrigger className='  hover:text-divyang  text-lg '>Categories</NavigationMenuTrigger>
                          <NavigationMenuContent className='flex flex-col p-3 absolute'>
                            {/* Submenu open on hover #######################  */}
                            <Tabs defaultValue="account" className="w-[450px] border" >
                              <TabsList className="grid w-full grid-cols-2">
                                <TabsTrigger className="text-divyang font-bold" value="account">Job by Disability</TabsTrigger>
                                <TabsTrigger className="text-divyang font-bold" value="password">Job by Sector</TabsTrigger>
                              </TabsList>
                              {/* this is submenu 1 tab #################### */}
                              <TabsContent value="account" className="flex gap-2 p-5" >
                                <Card className="border-none flex ">
                                  <CardContent className="space-y-2">
                                    <NavigationMenuItem className="flex " >
                                      <NavLink to="/jobs" className="ml-4 text-black hover:text-divyang">
                                        Physical Disability
                                      </NavLink>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem >
                                      <NavLink to="/jobs" className="ml-4 text-black hover:text-divyang">
                                        Mental Illness
                                      </NavLink>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem >
                                      <NavLink to="/jobs" className="ml-4 text-black hover:text-divyang">
                                        Blood Disorder
                                      </NavLink>
                                    </NavigationMenuItem>
                                  </CardContent>
                                </Card>
                                <Card className="border-none flex items-start justify-start " >
                                  <CardContent className="space-y-2">
                                    <NavigationMenuItem >
                                      <NavLink to="/jobs" className="ml-4 text-black hover:text-divyang">
                                        Inellectual Disability
                                      </NavLink>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem >
                                      <NavLink to="/jobs" className="ml-4 text-black hover:text-divyang">
                                        Chronic Neurological
                                      </NavLink>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem >
                                      <NavLink to="/jobs" className="ml-4 text-black hover:text-divyang">
                                        Multiple Disabilities
                                      </NavLink>
                                    </NavigationMenuItem>
                                  </CardContent>
                                </Card>
                              </TabsContent>
                              {/* this is submenu 2 tab #################### */}
                              <TabsContent value="password" className="flex gap-2 ">
                                <Card className="border-none" >
                                  <CardContent className="space-y-2">
                                    <NavigationMenuItem >
                                      <NavLink to="/jobs" className="ml-4 text-black hover:text-divyang">
                                        Ecommerce
                                      </NavLink>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem >
                                      <NavLink to="/jobs" className="ml-4 text-black hover:text-divyang">
                                        Hospitality
                                      </NavLink>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem >
                                      <NavLink to="/jobs" className="ml-4 text-black hover:text-divyang">
                                        IT / ITES
                                      </NavLink>
                                    </NavigationMenuItem>
                                  </CardContent>
                                </Card>
                                <Card className="border-none" >
                                  <CardContent className="space-y-2 ms-10">
                                    <NavigationMenuItem >
                                      <NavLink to="/jobs" className="ml-4 text-black hover:text-divyang">
                                        BFSI
                                      </NavLink>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem >
                                      <NavLink to="/jobs" className="ml-4 text-black hover:text-divyang">
                                        Manufacturing
                                      </NavLink>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem >
                                      <NavLink to="/jobs" className="ml-4 text-black hover:text-divyang">
                                        Retail
                                      </NavLink>
                                    </NavigationMenuItem>
                                  </CardContent>
                                </Card>
                              </TabsContent>
                            </Tabs>
                          </NavigationMenuContent>
                        </NavigationMenuItem>
                      </NavigationMenuList>
                    </NavigationMenu>
                    <NavigationMenuItem>
                      <NavLink to="/blogs" className="ml-4 text-lg  hover:text-divyang">
                        Blog
                      </NavLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavLink to="/contact" className="ml-4 text-lg  hover:text-divyang">
                        Contact Us
                      </NavLink>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
              <div className='hidden md:block mr-3'>
                <div className='flex items-center gap-5'>
                  <div className='flex items-center'>
                    <NavigationMenu>
                      <NavigationMenuList className="w-28">
                        <NavigationMenuItem>
                          <NavigationMenuTrigger className='  bg-none hover:text-divyang text-lg'>Username</NavigationMenuTrigger>
                          <NavigationMenuContent className='flex flex-col absolute '>
                            <div className='border pr-2'>
                              <Link to={dashboardRoute ? dashboardRoute : null} className='flex gap-3 p-2 ms-3 text-2xl hover:bg-gray-300 hover:text-divyang rounded-sm  ' >
                                <AiOutlineDashboard />
                                <span>Dashboard </span>
                              </Link>
                              {
                                Job ? (
                                  <NavLink to={jobRoute ? jobRoute : null} className='flex gap-3 p-2 ms-3 text-2xl hover:bg-gray-300 hover:text-divyang  rounded-sm '  >
                                    <MdOutlineCleaningServices />
                                    <span>{Job}</span>
                                  </NavLink>
                                ) : null
                              }
                              {
                                Applicants ? (
                                  <NavLink to={applicantsRoute ? applicantsRoute : null} className='flex gap-3 p-2 ms-3 text-2xl hover:bg-gray-300 hover:text-divyang rounded-sm  '  >
                                    <MdOutlineLibraryBooks /> <span>{Applicants}</span>
                                  </NavLink>
                                ) : null
                              }
                              {
                                Messages ? (
                                  <NavLink to={messagesRoute ? messagesRoute : null} className='flex gap-3 p-2 ms-3 text-2xl hover:bg-gray-300  hover:text-divyang rounded-sm '  >
                                    <FiMessageSquare />
                                    <span>{Messages}</span>
                                  </NavLink>
                                ) : null
                              }
                              {
                                Meetings ? (
                                  <NavLink to={meetingsRoute ? meetingsRoute : null} className='flex gap-3 p-2 ms-3 text-2xl hover:bg-gray-300 hover:text-divyang rounded-sm  '  >
                                    <TbBrandZoom />
                                    <span>{Meetings}</span>
                                  </NavLink>
                                ) : null
                              }
                              {
                                Company ? (<NavLink to={companyRouts ? companyRouts : null} className='flex gap-3 p-2 ms-3 text-2xl hover:bg-gray-300 hover:text-divyang rounded-sm  '  >
                                  <MdBlinds />
                                  <span>{Company}</span>
                                </NavLink>) : null
                              }
                              {
                                Profile ? (<NavLink to={profileRoute ? profileRoute : null} className='flex gap-3 p-2 ms-3 text-2xl hover:bg-gray-300 hover:text-divyang rounded-sm  '  >
                                  <CgProfile />
                                  <span>{Profile}</span>
                                </NavLink>) : null
                              }
                              {
                                Ncs ? (<NavLink to={ncsRoute ? ncsRoute : null} className='flex gap-3 p-2 ms-3 text-2xl hover:bg-gray-300 hover:text-divyang rounded-sm  '  >
                                  <CgProfile />
                                  <span>{Ncs}</span>
                                </NavLink>) : null
                              }
                              <NavLink to={settingRoute ? settingRoute : null} className='flex gap-3 p-2 ms-3 text-2xl hover:bg-gray-300 hover:text-divyang  rounded-sm '  >
                                <IoSettingsOutline />
                                <span>Setting</span>
                              </NavLink>
                              <NavLink to="/" className='flex gap-3 p-2 ms-3 text-2xl hover:bg-gray-300 hover:text-divyang text-purple-900 rounded-sm ' >
                                <IoIosLogOut className='hover:text-green-500' />
                                <span>Logout</span>
                              </NavLink>

                            </div>
                          </NavigationMenuContent>
                        </NavigationMenuItem>
                      </NavigationMenuList>
                    </NavigationMenu>
                  </div>
                  <Link to='/postJob'>
                    <Button className='text-primary bg-background hover:bg-input'>Post a Job </Button>
                  </Link>
                </div>
              </div>
              {/*  for sm and md screen component and class  */}
              <div className="flex md:hidden ">
                <Sheet className="" >
                  <SheetTrigger asChild>
                    <Button variant="outline"   >
                      <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                    </Button>
                  </SheetTrigger>
                  <SheetContent className="overflow-scroll" >
                    <SheetClose asChild>
                      <Link to="/schemes" className="bg-white ms-3 text-black hover:text-divyang hover:bg-white text-lg" >Schemes</Link>
                    </SheetClose> <br />
                    <SheetClose asChild>
                      <Link to="/blogs" className="bg-white ms-3 mt-3 text-black hover:text-divyang hover:bg-white text-lg"  >Blog</Link>
                    </SheetClose>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger><Button className="bg-white ms-3 mt-3 ml-[-10px] text-lg font-bold text-black hover:text-divyang hover:bg-white "  >Company</Button></AccordionTrigger>
                        <AccordionContent>
                          <SheetClose asChild>
                            <Link to="/about" className="bg-white ms-3  text-black hover:text-divyang hover:bg-white "  >About Us</Link>
                          </SheetClose> <br />
                          <SheetClose asChild>
                            <Link to="/founder" className="bg-white ms-3 mt-3 text-black hover:text-divyang hover:bg-white "  >Founder’s Note</Link>
                          </SheetClose>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                    <SheetClose asChild>
                      <Link to="/jobs" className="bg-white ms-3 mt-3 text-black hover:text-divyang hover:bg-white text-lg"  >Job</Link >
                    </SheetClose> <br />
                    <SheetClose asChild>
                      <Link to="/contact" className="bg-white ms-3 mt-3 text-black hover:text-divyang hover:bg-white text-lg "  >Contact Us</Link >
                    </SheetClose><br />
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger><Button className="bg-white  text-black hover:text-divyang hover:bg-white ml-[-6px] text-lg font-bold"  >Categories </Button>
                        </AccordionTrigger>
                        <AccordionContent>
                          {/* Sub menu st  */}
                          <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                              <AccordionTrigger><Button className="bg-white  text-black hover:text-divyang hover:bg-white "  >Job by Disability</Button></AccordionTrigger>
                              <AccordionContent>
                                <SheetClose asChild>
                                  <Link to="/jobs" className="bg-white mt-3 ms-6 text-black hover:text-divyang hover:bg-white "  > Inellectual Disability</Link>
                                </SheetClose> <br />
                                <SheetClose asChild>
                                  <Link to="/jobs" className="bg-white mt-3 ms-6 text-black hover:text-divyang hover:bg-white "  >Chronic Neurological</Link>
                                </SheetClose> <br />
                                <SheetClose asChild>
                                  <Link to="/jobs" className="bg-white mt-3 ms-6 text-black hover:text-divyang hover:bg-white "  > Multiple Disabilities</Link>
                                </SheetClose>
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                          {/* sub menu end */}
                          {/* Sub menu st  */}
                          <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                              <AccordionTrigger><Button className="bg-white  text-black hover:text-divyang hover:bg-white "  >Job by Sector</Button></AccordionTrigger>
                              <AccordionContent>
                                <SheetClose asChild>
                                  <Link to="/jobs" className="bg-white  mt-3 ms-6 text-black hover:text-divyang hover:bg-white "  >  Ecommerce</Link>
                                </SheetClose> <br />
                                <SheetClose asChild>
                                  <Link to="/jobs" className="bg-white  mt-3 ms-6 text-black hover:text-divyang hover:bg-white "  >  Hospitality</Link>
                                </SheetClose> <br />
                                <SheetClose asChild>
                                  <Link to="/jobs" className="bg-white  mt-3 ms-6 text-black hover:text-divyang hover:bg-white "  > IT / ITES</Link>
                                </SheetClose>
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                          {/* sub menu end */}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                    <SheetClose asChild>
                      <Dialog>
                        <DialogTrigger>
                          <Button className="bg-white text-black hover:text-divyang hover:bg-white text-lg" >Login</Button>
                          {/* <Link className='text-white '>Sign </Link> */}
                        </DialogTrigger>
                      </Dialog>

                    </SheetClose> <br /> <br />
                    <SheetClose asChild>
                      <Link to='postJob'>
                        <Button className="bg-divyang w-32 rounded-3xl text-white hover:text-white hover:bg-divyang "  >Post Job</Button>
                      </Link>
                    </SheetClose> <br />
                  </SheetContent>
                </Sheet>
              </div>
            </div>

         
  )
}

export default DashBoardNav