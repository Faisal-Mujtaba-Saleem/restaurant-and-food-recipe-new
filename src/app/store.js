import { configureStore } from '@reduxjs/toolkit';
import queryFilterReducer from '../features/queryFilterSlice';
import queryFilterCategoriesReducer from '../features/queryFilterCategoriesSlice';

export const store = configureStore({
    reducer: {
        queryFilter: queryFilterReducer,
        queryFilterCategories: queryFilterCategoriesReducer,
    },
})