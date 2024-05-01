import React, { useState } from 'react'
import img1 from "../../../assets/candidatebanner.jpeg"
import img2 from "../../../assets/candidateSm.webp"
import { IoIosSearch } from "react-icons/io";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from '@/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { FaAngleDown } from "react-icons/fa6";
import { Check } from "lucide-react"
import { Separator } from '@/components/ui/separator';
import { IoMdLocate } from "react-icons/io";
import { CiFolderOn } from "react-icons/ci";


const CompaniesHeader = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");

    const [open1, setOpen1] = useState(false);
    const [value1, setValue1] = useState("");

    const frameworks = [
        {
            value: "viewAll",
            label: "View All",
        },
        {
            value: "government",
            label: "Government",
        },
        {
            value: "ngo",
            label: "NGO",
        },
        {
            value: "private",
            label: "Private",
        },

    ];
    const frame = [
        {
            value: "viewAll",
            label: "View All",
        },
        {
            value: "government",
            label: "Government",
        },
        {
            value: "ngo",
            label: "NGO",
        },
        {
            value: "private",
            label: "Private",
        },

    ];
  return (
    <div>
      <div className="relative overflow-hidden w-full md:h-[400px] h-[500px]   " >

<img src={img1} className='w-full  h-[500px] object-cover hidden md:block' />
<img src={img2} className='w-full  h-[500px] object-cover md:hidden ' />
<div className="absolute top-0 left-0 w-full h-[500px]  flex flex-col items-center justify-center gap-6">
    <h1 className="md:text-4xl text-2xl text-center font-bold text-white p-">Companies Hiring Internationally</h1>
    <div className="md:w-[80%] w-[80%] p-4 bg-white md:rounded-full rounded-2xl gap-3     md:flex-row flex flex-col ">

        <div className='flex basis-1/3'>
            <IoIosSearch className="text-2xl mt-2" />
            <input type="text" className=" w-full h-10 font-medium border-none" placeholder="Jobs title or Keywords " />
        </div>
        <Separator className="md:hidden" />
        <Separator orientation="verticle" className="hidden md:block" />
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild className='basis-1/3 flex gap'>
                <Button variant="outline" role="combobox" aria-expanded={open} className=" w-full justify-between border-none bg-white hover:bg-white text-md">
                    <div className='flex gap-2'>
                <IoMdLocate  className='text-2xl'/> {value ? frameworks.find((framework) => framework.value === value)?.label : " All Cities"}
                </div>
                    <FaAngleDown className="" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command className="rounded-lg border shadow-md">
                    <CommandInput placeholder="Type a command or search..." />
                    <CommandList>
                        <CommandGroup>
                            <CommandEmpty>No framework found.</CommandEmpty>
                            {frameworks.map((framework) => (
                                <CommandItem
                                    key={framework.value}
                                    value={framework.value}
                                    onSelect={(currentValue) => {
                                        setValue(currentValue === value ? "" : currentValue);
                                        setOpen(false);
                                    }}
                                    onClick={(currentValue) => {
                                        setValue(currentValue === value ? "" : currentValue);
                                        setOpen(false);
                                    }}
                                >
                                    <div className="flex">
                                        <Check

                                            className={cn("mr-2 h-4 w-4", value === framework.value ? "opacity-30" : "opacity-0")}
                                        />
                                        {framework.label}
                                    </div>
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
        <Separator className='md:hidden' />
        <Separator orientation="verticle" className="hidden  md:block" />
        <Popover open={open1} onOpenChange={setOpen1} >
            <PopoverTrigger asChild className='basis-1/3 '>
                <Button variant="outline" role="combobox" aria-expanded={open1} className=" w-gull justify-between border-none bg-white hover:bg-white text-md">
                    <div className='flex gap-2'>
                <CiFolderOn  className='text-2xl'/>{value1 ? frame.find((framework) => framework.value === value1)?.label : " All Categories"}
                </div>
                    <FaAngleDown className="" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command className="rounded-lg border shadow-md">
                    <CommandInput placeholder="Type a command or search..." />
                    <CommandList>
                        <CommandGroup>
                            <CommandEmpty>No framework found.</CommandEmpty>
                            {frameworks.map((framework) => (
                                <CommandItem
                                    key={framework.value}
                                    value={framework.value}
                                    onSelect={(currentValue) => {
                                        setValue1(currentValue === value1 ? "" : currentValue);
                                        setOpen1(false);
                                    }}
                                    onClick={(currentValue) => {
                                        setValue1(currentValue === value1 ? "" : currentValue);
                                        setOpen1(false);
                                    }}
                                >
                                    <div className="flex">
                                        <Check

                                            className={cn("mr-2 h-4 w-4", value1 === framework.value ? "opacity-30" : "opacity-0")}
                                        />
                                        {framework.label}
                                    </div>
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
        <Separator className='md:hidden' />
        <Separator orientation="verticle" className="hidden  md:block" />
        <div className=' flex basis-1/4 gap-6'>
            <span className='text-lg text-gray-400 mt-1 pl-3 hidden md:block'>clear</span>
            <Button className="bg-orange-500 w-full md:w-36 rounded-3xl text-md hover:bg-orange-600">Search</Button>
        </div>
    </div>

</div>
</div>
    </div>
  )
}

export default CompaniesHeader
