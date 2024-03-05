export const useSortRecipies = (recipies, recipeCategories) => {
    return recipies.sort(
        (recipeA, recipeB) => {
            const a = recipeCategories.indexOf(...recipeA.cuisineType);
            const b = recipeCategories.indexOf(...recipeB.cuisineType);
            return a - b;
        }
    )
}