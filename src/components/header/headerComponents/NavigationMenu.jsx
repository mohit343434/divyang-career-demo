import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";
// import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
const components = [
    {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
    },
    {
        title: "Hover Card",
        href: "/docs/primitives/hover-card",
    },
    {
        title: "Progress",
        href: "/docs/primitives/progress",
    },
    // {
    //     title: "Scroll-area",
    //     href: "/docs/primitives/scroll-area",
    // },
    // {
    //     title: "Tabs",
    //     href: "/docs/primitives/tabs",
    // },
    // {
    //     title: "Tooltip",
    //     href: "/docs/primitives/tooltip",
    // },
];
function ListItem({ className, title, children, ...props }) {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    className={cn(
                        "block select-none rounded-md leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
}
ListItem.displayName = "ListItem";
export default function NavigationMenuDemo() {
    return (
        /* lg screen menu st ##################  */
        <NavigationMenu>
            <NavigationMenuList >
                <NavigationMenuItem className="flex">
                    <NavLink to="/jobs" className="text-white hover:text-divyang">
                        Jobs
                    </NavLink>
                </NavigationMenuItem>
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem className="mr-[-18px]">
                            <NavigationMenuTrigger className='text-sm bg-none bg-primary hover:bg-primary text-white hover:text-white'>Company</NavigationMenuTrigger>
                            <NavigationMenuContent className='flex flex-col p-3'>
                                <NavigationMenuLink> <Link to="/about" className="hover:text-divyang" >About Us</Link> </NavigationMenuLink>
                                <NavigationMenuLink><Link to="/founder" className="flex min-w-32 hover:text-divyang pt-3" >Founder’s Note</Link></NavigationMenuLink>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                <NavigationMenuItem >
                    <NavLink to="/schemes" className="ml-4 text-white hover:text-divyang">
                        Schemes
                    </NavLink>
                </NavigationMenuItem>
          
                <NavigationMenuItem>
                    <NavLink to="/blogs" className="ml-4 text-white hover:text-divyang">
                        Blog
                    </NavLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavLink to="/contact" className="ml-4 text-white hover:text-divyang">
                        Contact Us
                    </NavLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
        /* lg screen menu end ##################  */
    );
}






