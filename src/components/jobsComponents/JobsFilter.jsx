
// import React from 'react'

// import {
//     Sheet,
//     SheetClose,
//     SheetContent,
//     SheetDescription,
//     SheetFooter,
//     SheetHeader,
//     SheetTitle,
//     SheetTrigger,
// } from "@/components/ui/sheet"
// import { Separator } from '@/components/ui/separator';

// const JobsFilter = ({ categories, selectedFilters, onFilterChange, onClearFilters, heading, clear, }) => {
//     return (
//         <div className='flex flex-col gap-3 bg-white p-5 rounded-lg md:min-w-80 '>
//             {/* <div className='flex items-center justify-between border-b-4 p-2'>
//                 <h2 className='font-semibold text-base'>{filterTitle}</h2>
//                 <button onClick={onClearFilters} className=' flex items-center gap-1 hover:text-divyang cursor-pointer'>{clear} </button>
//             </div> */}
//             <div>
//                 <h1 className='text-divyang font-bold mb-3'>{heading}</h1>
//                 <ul className='pl-5'>
//                     {categories?.map(category => (
//                         <li key={category}>
//                             <label className="flex items-center mb-4">
//                                 <input
//                                     type="checkbox"
//                                     value={category}
//                                     checked={Array.isArray(selectedFilters) ? selectedFilters.includes(category) : selectedFilters[category]}
//                                     onChange={e => onFilterChange(category, e.target.checked)}
//                                     className="mr-2"
//                                 />
//                                 {category}
//                             </label>
//                         </li>
//                     ))}
//                 </ul>
//                 <Separator className="" />
//             </div>
//         </div>
//     );
// };

// export default JobsFilter;


import React from 'react'

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"


const JobsFilter = ({ categories, jobtypes, selectedFilters, onFilterChange, onClearFilters, heading, clear, filterTitle }) => {
    return (
        <div className='flex flex-col  px-5 rounded-lg min-w-80 '>
            <div className='flex items-center justify-between  p-2'>
                <h2 className='font-semibold text-base text-divyang'>{filterTitle}</h2>

                <button onClick={onClearFilters} className=' flex items-center gap-1 hover:text-divyang cursor-pointer'>{clear} </button>
            </div>
            <div>
                <h1 className='text-divyang font-bold mb-3'>{heading}</h1>

                <ul className='pl-5'>
                    {categories?.map(category => (
                        <li key={category}>
                            <label className="flex items-center mb-2">
                                <input
                                    type="checkbox"
                                    value={category}
                                    checked={Array.isArray(selectedFilters) ? selectedFilters.includes(category) : selectedFilters[category]}
                                    onChange={e => onFilterChange(category, e.target.checked)}
                                    // checked={selectedFilters.includes(category)}
                                    // onChange={e => onFilterChange(category, e.target.checked)}
                                    className="mr-2"
                                />
                                {category}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>


        </div>
    )
}

export default JobsFilter