// import React from 'react'

// const JobsFilter = ({ categories,  selectedFilters, onFilterChange, onClearFilters,  clear, filterTitle }) => {
//     return (
//         <div className='flex flex-col  px-5 rounded-lg min-w-80 '>
//             <div className='flex items-center justify-between  p-2'>
//                 <h2 className='font-semibold text-base text-divyang'>{filterTitle}</h2>

//                 <button onClick={onClearFilters} className=' flex items-center gap-1 hover:text-divyang cursor-pointer'>{clear} </button>
//             </div>
//             <div>
//                 {/* <h1 className='text-divyang font-bold mb-3'>{heading}</h1> */}

//                 <ul className='pl-5'>
//                     {categories?.map(category => (
//                         <li key={category}>
//                             <label className="flex items-center mb-2">
//                                 <input
//                                     type="checkbox"
//                                     value={category}
//                                     checked={Array.isArray(selectedFilters) ? selectedFilters.includes(category) : selectedFilters[category]}
//                                     onChange={e => onFilterChange(category, e.target.checked)}
//                                     // checked={selectedFilters.includes(category)}
//                                     // onChange={e => onFilterChange(category, e.target.checked)}
//                                     className="mr-2"
//                                 />
//                                 {category}
//                             </label>
//                         </li>
//                     ))}
//                 </ul>
                
//             </div>
              
            

//         </div>
//     )
// }

// export default JobsFilter
import React from 'react';

const JobsFilter = ({ categories, selectedFilters, onFilterChange, onClearFilters, clear, filterTitle }) => {
    return (
        <div className='flex flex-col px-5 rounded-lg min-w-80'>
            <div className='flex items-center justify-between p-2'>
                <h2 className='font-semibold text-base text-divyang'>{filterTitle}</h2>
                <button onClick={onClearFilters} className='flex items-center gap-1 hover:text-divyang cursor-pointer'>{clear}</button>
            </div>
            <div>
                <ul className='pl-5'>
                    {categories?.map(category => (
                        <li key={category}>
                            <label className="flex items-center mb-2">
                                <input
                                    type="checkbox"
                                    value={category}
                                    checked={selectedFilters.includes(category)} 
                                    onChange={e => onFilterChange(category, e.target.checked)}
                                    className="mr-2 relative h-5 w-5 cursor-pointer appearance-none rounded-sm border transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-divyang checked:before:bg-divyang hover:before:opacity-10"
                                />
                                {category}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default JobsFilter;


