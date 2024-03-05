import React from 'react'
import { Badge, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function RecipeCard({ recipe, recommended }) {
    const id = recipe.uri.split("#")[1];
    return (
        <div className={`${!recommended ? "card sm:w-screen md:w-1/2 lg:w-1/3 max-xl:w-1/4 p-4 border-0" : "w-full rounded border "} font-rubic`}>
            <div className={`block relative h-48 overflow-hidden ${!recommended ? "rounded-lg" : "rounded !rounded-bl-none !rounded-br-none"}`}>
                <img alt="Recipe" className="object-cover object-center w-full h-full block" src={recipe.image} />
            </div>
            <div className="px-4">
                <div className="mt-4">
                    <h3 className="text-[#f4b350] text-xs tracking-widest title-font mb-1 py-1 uppercase">
                        {recipe.cuisineType}
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium font-playfairDisplay">
                        {
                            recipe.label
                        }
                    </h2>
                </div>
                <div className="my-4">
                    <Stack direction="horizontal" gap={2} className='md:my-4 p-1 flex flex-wrap'>
                        <Badge bg="danger" className='px-3 py-1 text-sm capitalize'>
                            {recipe.mealType}
                        </Badge>
                        <Badge bg="danger" className='px-3 py-1 text-sm capitalize'>
                            {recipe.dishType}
                        </Badge>
                    </Stack>
                    {/*  */}
                    <Link to={`/recipe/${id}`} className="inline-flex items-center my-4 lg:mb-0 p-1 hover:text-[#f4b350]">
                        Recipe Details
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 ml-2 hover:fill-[#f4b350] ">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default RecipeCard;