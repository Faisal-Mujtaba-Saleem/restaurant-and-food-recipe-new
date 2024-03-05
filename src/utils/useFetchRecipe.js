import axios from "axios";

export const useFetchRecipe = async (id) => {
    try {

        const { VITE_EDAMAM_APP_API_ID, VITE_EDAMAM_APP_API_KEY } = import.meta.env;

        const url = `https://api.edamam.com/search?r=http://www.edamam.com/ontologies/edamam.owl%23${id}&app_id=${VITE_EDAMAM_APP_API_ID}&app_key=${VITE_EDAMAM_APP_API_KEY}`

        axios.defaults.baseURL = "https://api.edamam.com";

        const response = await axios.get(url);
        const { data } = response;

        const recipe = data[0];
        return recipe;
    } catch (error) {
        throw new Error(error);
    }
}