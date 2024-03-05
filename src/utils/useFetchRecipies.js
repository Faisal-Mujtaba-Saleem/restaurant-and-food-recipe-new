import axios from "axios";

export const useFetchRecipies = async (filter) => {
    try {

        const { VITE_EDAMAM_APP_API_ID, VITE_EDAMAM_APP_API_KEY } = import.meta.env;
        const { query = "", limit, pageSize, cuisineType, dishType } = filter;

        let url;
        if (!!cuisineType || !!dishType) {
            if (!!cuisineType && !(!!dishType))
                url = `/search?q=${query}&app_id=${VITE_EDAMAM_APP_API_ID}&app_key=${VITE_EDAMAM_APP_API_KEY}&from=${pageSize}&to=${limit}&calories=591-722&health=alcohol-free&cuisineType=${cuisineType}`;

            else if (!(!!cuisineType) && !!dishType)
                url = `/search?q=${query}&app_id=${VITE_EDAMAM_APP_API_ID}&app_key=${VITE_EDAMAM_APP_API_KEY}&from=${pageSize}&to=${limit}&calories=591-722&health=alcohol-free&dishType=${dishType}`;

            else
                url = `/search?q=${query}&app_id=${VITE_EDAMAM_APP_API_ID}&app_key=${VITE_EDAMAM_APP_API_KEY}&from=${pageSize}&to=${limit}&calories=591-722&health=alcohol-free&cuisineType=${cuisineType}&dishType=${dishType}`;
        } else {
            url = `/search?q=${query}&app_id=${VITE_EDAMAM_APP_API_ID}&app_key=${VITE_EDAMAM_APP_API_KEY}&from=${pageSize}&to=${limit}&calories=591-722&health=alcohol-free`;
        }

        axios.defaults.baseURL = "https://api.edamam.com";

        const response = await axios.get(url);
        const { data } = response;

        const recipies = data.hits.map(
            hit => {
                return hit.recipe
            }
        )
        return recipies;

    } catch (error) {
        throw new Error(error);
    }
}