// React related imports 
import React, { useContext, useEffect, useRef, useState } from 'react';

// Components 
import Slider from '../components/commons/Slider';
import FilterAndSearchBar from '../components/blogsComponents/FilterAndSearchBar';
import Recipies from '../components/blogsComponents/Recipies';
import Loading from '../components/commons/Loading';
import ResultsNotFound from '../components/commons/ResultsNotFound';

// Custom Hooks/Utile Functions 
import { useFetchRecipies } from '../utils/useFetchRecipies';
import { useExtractRecipeCategories } from '../utils/useExtractRecipeCategories';
import { useSortRecipies } from '../utils/useSortRecipies';
import { useExtractQueryFilterCategories } from '../utils/useExtractQueryFilterCategories';

// Redux related imports 
import { useDispatch, useSelector } from 'react-redux';
import { setQueryFilterCategories } from '../features/queryFilterCategoriesSlice';
import { setCuisineType, setDishType } from '../features/queryFilterSlice';
import { RefContext } from '../contexts/RefContext';

function Blogs() {
    const defaultPageSize = 0;
    const defaultLimit = 5;

    // States
    const [query, setQuery] = useState("");
    const [pageSize, setPageSize] = useState(defaultPageSize);
    const [limit, setLimit] = useState(defaultLimit);
    const [recipies, setRecipies] = useState([]);
    const [recipeCategories, setRecipeCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isRefreshAll, setIsRefreshAll] = useState(false);
    const [isRefreshFilters, setIsRefreshFilters] = useState(false);

    const { cuisineType, dishType } = useSelector((state) => state.queryFilter);
    const dispatch = useDispatch();

    const { setBlogsRef } = useContext(RefContext);

    const blogsRef = useRef(null);

    // useEffects
    // Fetch Recipies On First Render and set Blogs reference
    useEffect(() => {
        setIsLoading(true);
        fetchRecipies();
        setBlogsRef(blogsRef);
    }, []);

    // Fetch Recipies On Refreshing
    useEffect(() => {
        if (!!isRefreshAll) {
            setIsLoading(true);
            fetchRecipies();
        }
    }, [isRefreshAll]);
    useEffect(() => {
        if (!!isRefreshFilters) {
            setIsLoading(true);
            fetchRecipiesOnFilter();
        }
    }, [isRefreshFilters]);

    // Fetch Recipies when Filters are Applied on Recipies
    useEffect(() => {
        if (!!cuisineType || !!dishType) {
            setIsLoading(true);
            fetchRecipiesOnFilter();
        } else {
            setIsRefreshFilters(true)
        }
    }, [cuisineType, dishType]);

    // Fetch Recipies On Query Updates
    useEffect(() => {
        setIsLoading(true);
        fetchRecipiesOnQuery();
    }, [query]);

    // Set Page Size it's Limit and Extract Recipe Categories From Recipies On Every Update On Recipies 
    useEffect(() => {
        if (!!recipies.length) {
            setPageSize(recipies.length);
            setLimit(recipies.length + defaultLimit);

            extractRecipeCategories(recipies);
        }
    }, [recipies]);

    // Sort The Recipies and Extract the Filters For Query Whenever the Recipies and its Categories Updates
    useEffect(() => {
        if (!!recipies.length && !!recipeCategories.length) {
            sortRecipies(recipies, recipeCategories);
            extractQueryFilterCategories(recipies);
        }
    }, [recipies, recipeCategories]);

    // Utitlity Functions
    const fetchRecipies = async () => {
        try {
            const fetchedRecipies = await useFetchRecipies(
                { query, limit, pageSize, cuisineType, dishType }
            );

            if (Array.isArray(fetchedRecipies)) {
                setRecipies(currentRecipies => [...currentRecipies, ...fetchedRecipies]);
                setIsError(false);
            }
        } catch (error) {
            setIsError(true);
            console.log(error);
        } finally {
            setIsLoading(false);
            setIsRefreshAll(false);
        }
    }
    const fetchRecipiesOnFilter = async () => {
        try {
            const fetchedRecipies = await useFetchRecipies(
                { query, limit, pageSize, cuisineType, dishType }
            );

            if (Array.isArray(fetchedRecipies)) {
                setRecipies([...fetchedRecipies]);
                setIsError(false);
            }
        } catch (error) {
            setIsError(true);
            console.log(error);
        } finally {
            setIsLoading(false);
            setIsRefreshFilters(false);
        }
    }
    const fetchRecipiesOnQuery = async () => {
        try {
            const fetchedRecipies = await useFetchRecipies(
                { query, limit, pageSize, cuisineType, dishType }
            );

            if (Array.isArray(fetchedRecipies)) {
                setRecipies([...fetchedRecipies]);
                setIsError(false);
            }
        } catch (error) {
            setIsError(true);
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    const extractRecipeCategories = (recipies) => {
        const categories = useExtractRecipeCategories(recipies);
        setRecipeCategories(categories);
    }
    const extractQueryFilterCategories = (recipies) => {
        const categories = useExtractQueryFilterCategories(recipies);
        dispatch(setQueryFilterCategories(categories));
    }
    const sortRecipies = (recipies, recipeCategories) => {
        const sortedRecipies = useSortRecipies(recipies, recipeCategories);
        setRecipies(sortedRecipies);
    }

    // Handler Functions 

    const refreshAll = (e) => {
        dispatch(setCuisineType(""));
        dispatch(setDishType(""));
        setQuery("");
        setPageSize(defaultPageSize);
        setLimit(defaultLimit);
        setIsRefreshAll(true);
        setRecipies([]);
    }
    const refreshFilters = (e) => {
        dispatch(setCuisineType(""));
        dispatch(setDishType(""));
        setPageSize(defaultPageSize);
        setLimit(defaultLimit);
        setIsRefreshFilters(true);
        setRecipies([]);
    }
    const handleQuerySubmission = (user_query) => {
        setQuery(
            (currentQuery) => {
                if (user_query === currentQuery) {
                    setQuery("");
                    return user_query;
                } else
                    return user_query
            }
        );
    }
    const handleClearQueryFilters = (user_query) => {
        refreshAll()
    }
    return (
        <main ref={blogsRef} className='w-full flex flex-col'>
            <section id='blogs' className="text-gray-600 body-font">
                <Slider />
                {
                    !!recipies.length && !isError ?
                        <div className="container px-5 py-24 mx-auto">
                            <FilterAndSearchBar
                                handleQuerySubmission={handleQuerySubmission}
                                handleClearQueryFilters={handleClearQueryFilters}
                            />
                            {
                                !isLoading ?
                                    <Recipies
                                        recipies={recipies}
                                        recipeCategories={recipeCategories}
                                        fetchRecipies={fetchRecipies}
                                        defaultLimit={defaultLimit}
                                        limit={limit}
                                        refreshAll={refreshAll}
                                    /> :
                                    <Loading />
                            }
                        </div> :
                        <ResultsNotFound message={"No Results Found"} refreshAll={refreshAll} />
                }
            </section>

        </main>
    )
}

export default Blogs
