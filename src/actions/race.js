import axios from "axios";
import { Authenticator } from "../actions/auth";

export const RaceCollection = async () => {

  return await axios
    .get("/results")
    .then((res) => {
        // Get old result 
        const storedBlogs = JSON.parse(localStorage.getItem('horses')) ?? [];
        // Merge results 
        const _newResult = [...storedBlogs, res.data];
        //Clean upp result 
        const collections = _newResult.filter((data) => data)
        //Storage results
        localStorage.setItem('horses', JSON.stringify(collections));
        //return full response  
        return res;
    })
    .catch((error) => {
        switch (error.response.status) {
            case 401:
                error = {error: "Expired", code: 'SESSION_EXPIRED'};
                break;
                case 503:
                error = {error: "Server Unavailable", code: 'SERVER_UNAVAILABLE'};
                break;
            default:
                break;
        }
      return error;
    });
   
};
