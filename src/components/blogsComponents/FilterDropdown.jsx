import React, { useEffect, useState } from 'react';
import downArrow from '../../assets/svgs/down-arrow.svg';
import { useDispatch, useSelector } from 'react-redux';
import { setCuisineType, setDishType } from '../../features/queryFilterSlice';

function FilterDropdown() {
    // React's Native States 
    const [showDrodown, setShowDrodown] = useState(false);
    const [showCuisineDrodown, setShowCuisineDrodown] = useState(false);
    const [showDishDrodown, setShowDishDrodown] = useState(false);

    // Redux States 
    const { cuisineType, dishType } = useSelector((state) => state.queryFilter);
    const { categories: queryFilterCategories } = useSelector((state) => state.queryFilterCategories);
    const dispatch = useDispatch();

    // HANDLER FUNCTIONS:

    // Toggling Handlers 
    const toggleDropdown = (e) => {
        setShowDrodown(!showDrodown);
    }

    const toggleSubDropdown = (e) => {
        if (e.target.id === "cuisineTypes") {
            setShowCuisineDrodown(!showCuisineDrodown);
        } else if (e.target.id === "dishTypes") {
            setShowDishDrodown(!showDishDrodown);
        }
    }

    // On Change Handlers
    const onFilterInputChange = (e) => {
        if (e.target.name === "cuisineTypes") {
            dispatch(setCuisineType(e.target.value));
        } else if (e.target.name === "dishTypes") {
            dispatch(setDishType(e.target.value));
        }
    }

    return (
        <div className="w-auto flex justify-center items-center relative">
            <div className="relative inline-block text-left">
                <div>
                    {/* <!-- Dropdown button --> */}
                    <button type="button" className="inline-flex justify-center w-full px-4 py-2.5 bg-transparent text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none" id="dropdown-menu-button" aria-expanded="true" aria-haspopup="true" onClick={toggleDropdown}>
                        {/* <!-- Filter icon --> */}
                        <svg className="-mr-1 ml-2 h-5 w-5 hover:fill-[#f4b350]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M4 3a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM7 9a1 1 0 00-1 1v6a1 1 0 102 0v-6a1 1 0 00-1-1zM3 11a1 1 0 110-2h14a1 1 0 110 2H3z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
                {/* <!-- Dropdown menu items --> */}
                <div className="origin-top-right absolute right-1/2 w-[15vw] transform translate-x-1/2 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-[1]" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-menu-button" tabIndex="-1" hidden={!showDrodown}>
                    {/* <!-- Subcategory 1 dropdown --> */}
                    {
                        Object.keys(queryFilterCategories).map(
                            (filterCategory) => <div key={filterCategory} className="py-1" role="none">
                                <div className="flex items-center justify-between px-4 py-2 text-sm font-medium text-[#f4b350] font-playfairDisplay" role="menuitem" tabIndex="-1">
                                    <span>
                                        {
                                            filterCategory === "cuisineTypes" ?
                                                "Cuisine Type" :
                                                "Dish Type"
                                        }
                                    </span>
                                    {/* <!-- Down arrow icon --> */}
                                    {/* className="h-4 w-4 text-gray-500 cursor-pointer" */}
                                    <img id={filterCategory} className="h-4 w-4 text-gray-500 cursor-pointer" src={downArrow} alt="Down Arrow" onClick={toggleSubDropdown} />
                                </div>
                                <ul hidden={
                                    filterCategory === "cuisineTypes" ?
                                        !showCuisineDrodown :
                                        !showDishDrodown
                                }>
                                    <li className="flex items-center px-4 py-2 text-sm text-gray-900" role="none">
                                        <input
                                            id={"N/A"}
                                            name={filterCategory}
                                            type="radio"
                                            className="form-radio h-4 w-4 accent-[#f4b350]"
                                            checked={
                                                filterCategory === "cuisineTypes" ?
                                                    cuisineType === "" :
                                                    dishType === ""
                                            }
                                            value={""}
                                            onChange={onFilterInputChange} />
                                        <label
                                            className="ml-2 font-rubic italic"
                                            htmlFor={"N/A"}
                                        >
                                            {"N/A"}
                                        </label>
                                    </li>
                                    {
                                        queryFilterCategories[filterCategory].map(
                                            (subFilterCategory) => <li key={subFilterCategory} className="flex items-center px-4 py-2 text-sm text-gray-900" role="none">
                                                <input
                                                    id={subFilterCategory}
                                                    name={filterCategory}
                                                    type="radio"
                                                    className="form-radio h-4 w-4 accent-[#f4b350]"
                                                    value={subFilterCategory}
                                                    onChange={onFilterInputChange} />
                                                <label
                                                    className="ml-2 font-rubic italic"
                                                    htmlFor={subFilterCategory}
                                                >
                                                    {subFilterCategory}
                                                </label>
                                            </li>
                                        )
                                    }
                                </ul>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>

    )
}

export default FilterDropdown;
