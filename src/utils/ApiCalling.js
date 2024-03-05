import axios from "axios";

const ApiCalling = async (url, method, requestData) => {
    try {
        const response = await axios({
            method: method,
            url: url,
            data: requestData,
        });
        return response.data;
    } catch (error) {
        console.log("Error:", error);
        return null;
    }
};
export default ApiCalling;