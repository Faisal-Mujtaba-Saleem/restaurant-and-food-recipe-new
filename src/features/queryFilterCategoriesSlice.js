import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    categories: {
        cuisineTypes: [],
        dishTypes: [],
    }
}

export const queryFilterCategoriesSlice = createSlice({
    name: 'queryFilterCategories',
    initialState,
    reducers: {
        setQueryFilterCategories: (state, action) => {
            state.categories = { ...action.payload }
        },
        setCuisineType: (state, action) => {
            state.categories.cuisineTypes = [...action.payload];
        },
        setDishType: (state, action) => {
            state.categories.dishTypes = [...action.payload];
        }
    },
})

// Action creators are generated for each case reducer function
export const { setQueryFilterCategories, setCuisineType, setDishType } = queryFilterCategoriesSlice.actions;

export default queryFilterCategoriesSlice.reducer;