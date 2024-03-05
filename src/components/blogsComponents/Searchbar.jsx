import { useEffect, useState } from 'react';
import searchIcon from '../../assets/svgs/search-icon.svg';
import crossIcon from '../../assets/svgs/cross.svg';

function Searchbar({ handleQuerySubmission, handleClearQueryFilters }) {
    const [searchValue, setSearchValue] = useState("");
    const [searchIsCleared, setSearchIsCleared] = useState(false);

    useEffect(() => {
        if (!!searchValue && !!searchIsCleared) {
            setSearchIsCleared(false);
        }
    }, [searchValue])
    useEffect(() => {
        if (!!searchIsCleared) {
            handleClearQueryFilters(searchValue);
            setSearchIsCleared(false);
        }
    }, [searchIsCleared])

    const onClickToClearSearch = e => {
        setSearchIsCleared(
            (currentState) => {
                if (!!searchValue) {
                    setSearchValue("");
                    return !currentState;
                }
            }
        );
    }
    return (
        <div id='form' className="w-full md:w-[40vw] flex items-center justify-center flex-row">
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3">
                    <img src={searchIcon} alt="Search" className="w-4 h-4 cursor-pointer" onClick={
                        e => handleQuerySubmission(searchValue)
                    } />
                </div>
                <div className="absolute inset-y-0 end-0 flex items-center pe-3">
                    <img src={crossIcon} alt="Clear" className="w-4 h-4 cursor-pointer" onClick={onClickToClearSearch} />
                </div>
                <input type="text" id="default-search" className="block w-full py-3 ps-10 pe-1 text-xs md:text-sm text-gray-900 border focus:!border-[#f4b350] outline-none rounded-full bg-gray-50 break-words" placeholder="Search Asian, Breakfast, Bread..."
                    required
                    value={searchValue}
                    onChange={
                        e => setSearchValue(e.target.value)
                    }
                    onKeyDown={
                        e => {
                            if (e.key === "Enter") handleQuerySubmission(searchValue);
                        }
                    }
                />
            </div>
        </div>
    )
}

export default Searchbar;
