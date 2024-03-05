import React from 'react'
import Details from './Details';

function DetailsSection({ recipe }) {
    return (
        <div className="flex flex-col mb-10 lg:items-start items-center w-full">
            <Details details={recipe.ingredients} title={`ingredients`} />
            <Details details={recipe.dietLabels} title={`diet labels`} />
            <Details details={recipe.healthLabels} title={`health labels`} />
        </div>
    )
}

export default DetailsSection;