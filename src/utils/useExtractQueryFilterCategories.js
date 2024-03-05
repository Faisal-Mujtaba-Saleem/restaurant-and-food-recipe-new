export const useExtractQueryFilterCategories = (recipies) => {
    const CuisineTypes = extractCuisineTypes(recipies);
    const DishTypes = extractDishTypes(recipies);

    return {
        cuisineTypes: CuisineTypes,
        dishTypes: DishTypes
    };
}

function extractCuisineTypes(recipies) {
    let cuisineTypes = recipies.map(
        recipe => {
            return recipe.cuisineType[0];
        }
    )
    cuisineTypes = [
        ...new Set([...cuisineTypes])
    ]
    return cuisineTypes
}

function extractDishTypes(recipies) {
    let dishTypes = recipies.map(
        recipe => {
            return recipe.dishType[0];
        }
    )
    dishTypes = [
        ...new Set([...dishTypes])
    ]
    return dishTypes
}