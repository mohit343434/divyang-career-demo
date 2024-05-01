import React, { useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";

const CompaniesRange = ({ categories, selectedFilters, onFilterChange, onClearFilters, heading, clear, filterTitle }) => {
    const [minValue, set_minValue] = useState(25);
    const [maxValue, set_maxValue] = useState(75);
    const handleInput = (e) => {
        set_minValue(e.minValue);
        set_maxValue(e.maxValue);
    };

    
    
    return (

        <div className="p-7">
              <h1 className='text-divyang font-bold mb-3 pl-5'>{heading}</h1>
            <MultiRangeSlider
                min={2010}
                max={2023}
                step={1}
                minValue={minValue}
                maxValue={maxValue}
                ruler={false}
                barInnerColor='orange'
                thumbLeftColor='orange'
                thumbRightColor='orange'
                style={{border: 'none', boxShadow: 'none', padding: '15px 10px', color:'black', fontSize:'20px'}} 
                onInput={(e) => {
                    handleInput(e);
                }}
                onChange={e => onFilterChange(category, e.target.checked)}
            />
        </div>
    );
};

export default CompaniesRange;
