export const useExtractRecipeCategories = (recipies) => {
    let recipeCategories = recipies.map(
        recipe => {
            return recipe.cuisineType[0];
        }
    )
    recipeCategories = [
        ...new Set([...recipeCategories])
    ]

    return recipeCategories;
}