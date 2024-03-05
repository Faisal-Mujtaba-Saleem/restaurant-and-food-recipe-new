import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cuisineType: "",
    dishType: ""
}

export const queryFilterSlice = createSlice({
    name: 'queryFilter',
    initialState,
    reducers: {
        setCuisineType: (state, action) => {
            state.cuisineType = action.payload;
        },
        setDishType: (state, action) => {
            state.dishType = action.payload;
        }
    },
})

// Action creators are generated for each case reducer function
export const { setCuisineType, setDishType } = queryFilterSlice.actions;

export default queryFilterSlice.reducer;