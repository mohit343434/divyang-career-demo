import React from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Separator } from '@/components/ui/separator'

const CompaniesLocation = ({ categories, selectedFilters, onFilterChange, onClearFilters, heading, clear, filterTitle }) => {
  return (
    <div>
         <h1 className='text-divyang font-bold mb-3 pl-10'>{heading}</h1>
   
    <div className='flex flex-col gap-4 items-center justify-center p-5'>
       
        <div>
        <Select>
      <SelectTrigger className="w-[240px]">
        <SelectValue placeholder="Select Conuntries" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Select Conuntries</SelectLabel>
          <SelectItem value="india">India</SelectItem>
         
        </SelectGroup>
      </SelectContent>
    </Select>
        </div>
        <div>
        <Select>
      <SelectTrigger className="w-[240px]">
        <SelectValue placeholder="Select State" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Select State</SelectLabel>
          
        </SelectGroup>
      </SelectContent>
    </Select>
        </div>
        <div>
        <Select>
      <SelectTrigger className="w-[240px]">
        <SelectValue placeholder="Select Cities" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Select Cities</SelectLabel>
          
        </SelectGroup>
      </SelectContent>
    </Select>
        </div>
        <Separator/>
        </div>
     
    </div>
  )
}

export default CompaniesLocation
