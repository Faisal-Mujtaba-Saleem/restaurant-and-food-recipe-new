import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetchRecipe } from '../utils/useFetchRecipe';
import { useFetchRecipies } from '../utils/useFetchRecipies';

import { Badge, Stack } from 'react-bootstrap';
import DetailsSection from '../components/recipeComponents/DetailsSection';
import RecipeCard from '../components/blogsComponents/RecipeCard';

function RecipeDetails() {
    const [recipe, setRecipe] = useState({});
    const [recommendedRecipies, setRecommendedRecipies] = useState([]);
    const [pagination, setPagination] = useState({
        pageSize: 0,
        limit: 5
    })
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const { id } = useParams();

    useEffect(() => {
        fetchRecipe(id);
        if (Object.keys(recipe)) fetchRecommendedRecipies(recipe.label);
    }, [])

    const fetchRecipe = async (id) => {
        try {
            setIsLoading(true);
            const fetchedRecipe = await useFetchRecipe(id);
            setRecipe(fetchedRecipe);
            setIsError(false);
        } catch (error) {
            setIsError(true)
        }
        setIsLoading(false);
    }
    const fetchRecommendedRecipies = async (query) => {
        const { pageSize, limit } = pagination;
        try {
            const fetchedRecipies = await useFetchRecipies(
                { query, limit, pageSize }
            );

            if (Array.isArray(fetchedRecipies)) {
                setRecommendedRecipies([...fetchedRecipies]);
                setIsError(false);
            }
        } catch (error) {
            setIsError(true);
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    if (!!Object.keys(recipe).length)
        return (
            <main className='w-full flex flex-col'>
                <article id='recipe-details' className="text-gray-600 body-font">
                    <div className="overflow-hidden flex justify-center items-center">
                        <img alt="content" className="object-contain object-center border rounded-lg md:h-[60vh] lg:h-[65vh] w-auto" src={recipe.image} />
                    </div>
                    <Stack direction="horizontal" gap={2} className='p-14 md:w-full flex items-center justify-center font-rubic'>
                        <Badge bg="danger" className='py-2 px-3 flex flex-col items-center uppercase'>
                            <span className='text-[#fff200] text-sm'>{Number(recipe.calories).toFixed()}</span>
                            <p className='text-xs text-white mt-1'>calories</p>
                        </Badge>
                        <Badge bg="danger" className=' py-2 px-3 flex flex-col items-center uppercase'>
                            <span className='text-[#fff200] text-sm'>{recipe.totalTime}</span>
                            <p className='text-xs text-white mt-1'>total time</p>
                        </Badge>
                        <Badge bg="danger" className='py-2 px-3 flex flex-col items-center uppercase'>
                            <span className='text-[#fff200] text-sm'>{recipe.yield}</span>
                            <p className='text-xs text-white mt-1'>servings</p>
                        </Badge>
                    </Stack>
                    <div className="container px-5 py-4 mx-auto flex flex-col">
                        <div className="flex flex-col sm:flex-row justify-center my-2">
                            <DetailsSection recipe={recipe} />
                            <div className="h-full w-full flex flex-wrap flex-col -mx-4 justify-around items-center md:items-end">
                                <h3 className="self-center font-medium title-font tracking-widest text-[#f4b350] mb-2 text-sm sm:text-left md:pl-32 uppercase underline">also try this</h3>
                                {
                                    recommendedRecipies.map(
                                        (recipe, i) => <div key={i} className="w-2/4 m-2">
                                            <RecipeCard recipe={recipe} recommended={true} />
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </article>
            </main>
        )
}

export default RecipeDetails;