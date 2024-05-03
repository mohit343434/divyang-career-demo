import React from 'react';
import logo from '../../assets/DivyangCareerLogo.png'
import { Button } from '@/components/ui/button';
import NavigationMenuDemo from './headerComponents/NavigationMenu';
import { Link, NavLink } from 'react-router-dom';
import LogInMain from './../logIn/LogInMain';
import { useAuth } from '@/src/context/AuthContext';
import { IoMdArrowDropdown } from "react-icons/io";
import profilePic from "../../assets/dummy-profile.jpeg"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
const Navbar = () => {
    const [auth, setAuth] = useAuth();
    // const userData = JSON.parse(localStorage.getItem("user"))
    // const userName = !userData ? "" : userData.firstName
    const handleLogout = () => {
        setAuth({
            ...auth,
            user: null,
            token: "",
        });
        localStorage.removeItem("auth");
        localStorage.removeItem("user");
    };

    return (
        <nav className="bg-primary w-full">
            <div className="w-full">
                <div className="flex items-center justify-between h-16 w-full">
                    <div className="flex-shrink-0">
                        <Link className='/'>
                            <img src={logo} height={150} width={200} className='p-5' />
                        </Link>
                    </div>
                    {/* for lg screen component and class */}
                    <div className="hidden md:block ">
                        <NavigationMenuDemo />
                    </div>
                    <div className='hidden md:flex p-5'>
                        {!auth?.user ? (
                            <>
                                <Dialog>
                                    <DialogTrigger>
                                        <span className='text-white mr-5 '>Sign in</span>
                                    </DialogTrigger>
                                    <DialogContent className="w-[440px]">
                                        <LogInMain />
                                    </DialogContent>
                                </Dialog>
                                <Dialog>
                                    <DialogTrigger>
                                        <div className='h-9 rounded-md items-center justify-center text-center bg-white flex '>
                                            <span className='text-black  mx-4    bg-white'>Post a Job</span>
                                        </div>
                                    </DialogTrigger>
                                    <DialogContent className="w-[440px]">
                                        <LogInMain />
                                    </DialogContent>
                                </Dialog>
                            </>
                        ) : (
                            <div className='flex items-center gap-5'>
                                <DropdownMenu >
                                    <DropdownMenuTrigger className='text-white flex items-center justify-center gap-3'><div className='flex items-center '>{auth?.user?.username}<IoMdArrowDropdown /></div></DropdownMenuTrigger>
                                    <DropdownMenuContent className='p-5 w-64'>
                                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <Link to={`/dashboard/${auth?.user?.role === 'candidate' ? "candidates" : "employers"}`}>
                                            <DropdownMenuItem className='text-base'>Dashboard</DropdownMenuItem>
                                        </Link>
                                        <Link to={`/dashboard/${auth?.user?.role === 'candidate' ? "candidates" : "employers"}/profile`}>
                                            <DropdownMenuItem className='text-base'>Profile</DropdownMenuItem>
                                        </Link>
                                        <NavLink onClick={handleLogout} to='/'>
                                            <DropdownMenuItem className='text-base' >
                                                Logout
                                            </DropdownMenuItem>
                                        </NavLink>
                                    </DropdownMenuContent>
                                </DropdownMenu>

                            </div>

                        )}

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
                                    <Link to="/schemes" className="bg-white ms-3 text-black hover:text-divyang hover:bg-white text-lg">Schemes</Link>
                                </SheetClose> <br />
                                <SheetClose asChild>
                                    <Link to="/blogs" className="bg-white ms-3 mt-3 text-black hover:text-divyang hover:bg-white text-lg">Blog</Link>
                                </SheetClose>
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger><Button className="bg-white ms-3  ml-[-11px] text-lg font-bold text-black hover:text-divyang hover:bg-white">Company</Button></AccordionTrigger>
                                        <AccordionContent>
                                            <SheetClose asChild>
                                                <Link to="/about" className="bg-white ms-3 text-lg  text-black hover:text-divyang hover:bg-white">About Us</Link>
                                            </SheetClose> <br />
                                            <SheetClose asChild>
                                                <Link to="/founder" className="bg-white ms-3 text-lg mt-3 text-black hover:text-divyang hover:bg-white">Founder’s Note</Link>
                                            </SheetClose>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                                <SheetClose asChild>
                                    <Link to="/jobs" className="bg-white ms-3 mt-3 text-black hover:text-divyang hover:bg-white text-lg"  >Job</Link >
                                </SheetClose> <br />
                                <SheetClose asChild>
                                    <Link to="/contact" className="bg-white ms-3 mt-3 text-black hover:text-divyang hover:bg-white text-lg">Contact Us</Link >
                                </SheetClose><br />

                                {!auth?.user ? (

                                    <>
                                        <SheetClose asChild>
                                            <Dialog>
                                                <DialogTrigger>
                                                    <Button className="bg-white text-black hover:text-divyang hover:bg-white text-lg" >Login</Button>
                                                    {/* <Link className='text-white '>Sign </Link> */}
                                                </DialogTrigger>
                                                <DialogContent className="w-[440px]">
                                                    <LogInMain />
                                                </DialogContent>
                                            </Dialog>

                                        </SheetClose> <br /> <br />
                                    </>) : (<DropdownMenu >
                                        <DropdownMenuTrigger className=' flex items-center justify-center gap-3 pt-5 mb-5'><img src={profilePic} height={40} width={40} className='rounded-[50%]' /><div className='flex items-center '>{auth?.user?.username}<IoMdArrowDropdown /></div></DropdownMenuTrigger>
                                        <DropdownMenuContent className='p-5 w-64'>
                                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                            <DropdownMenuSeparator />
                                            <Link to={`/dashboard/${auth?.user?.role === 'candidate' ? "candidates" : "employers"}/profile`}>
                                                <DropdownMenuItem className='text-base'>Dashboard</DropdownMenuItem>
                                            </Link>
                                            <DropdownMenuItem className='text-base'>Profile</DropdownMenuItem>
                                            <NavLink onClick={handleLogout} to='/'>
                                                <DropdownMenuItem className='text-base'>
                                                    Logout
                                                    
                                                </DropdownMenuItem>
                                            </NavLink>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                )}
                                <SheetClose asChild>
                                    <Dialog>
                                        <DialogTrigger>
                                            <div className='flex bg-divyang rounded-lg'>
                                            <Button className="bg-divyang text-white rounded-lg hover:text-divyang text-lg" >Post Job</Button>
                                            </div>
                                            {/* <Link className='text-white '>Sign </Link> */}
                                        </DialogTrigger>
                                        <DialogContent className="w-[440px]">
                                            <LogInMain />
                                        </DialogContent>
                                    </Dialog>
                                </SheetClose> <br />
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;