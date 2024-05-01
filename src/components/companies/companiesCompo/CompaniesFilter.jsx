
import { Separator } from '@/components/ui/separator'
import React from 'react'

const CompaniesFilter = ({ categories, selectedFilters, onFilterChange, onClearFilters, heading, clear, filterTitle }) => {
  return (
    <div>
            <div className='flex flex-col  px-5  min-w-80 '>
        
               <div className='flex items-center justify-between  p-2'>
                
                 <h2 className='font-semibold text-base mt-3'>{filterTitle}</h2>

                 <button onClick={onClearFilters} className=' flex items-center gap-1 hover:text-divyang cursor-pointer'>{clear} </button>
                
                 
               </div>
            <div>
                <h1 className='text-divyang font-bold mb-3 pl-5'>{heading}</h1>

                <ul className='pl-5 pb-3'>
                    {categories?.map(category => (
                        <li key={category}>
                            <label className="flex items-center mb-2">
                                <input
                                    type="checkbox"
                                    value={category}
                                    checked={selectedFilters.includes(category)}
                                    onChange={e => onFilterChange(category, e.target.checked)}
                                    className="mr-2"
                                />
                                {category}
                            </label>
                        </li>
                    ))}
                </ul>
                <Separator/>
            </div>


        </div>
    </div>
  )
}

export default CompaniesFilter
