import FilterDropdown from './FilterDropdown';
import Searchbar from './Searchbar';

function FilterAndSearchBar({ handleQuerySubmission, handleClearQueryFilters }) {

    return (
        <div className='flex justify-center items-center w-full mb-20'>
            <FilterDropdown />
            <Searchbar
                handleQuerySubmission={handleQuerySubmission} handleClearQueryFilters={handleClearQueryFilters}
            />
        </div>
    );
}

export default FilterAndSearchBar;
