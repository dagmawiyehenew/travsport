import axios from "axios";
import { re_auth } from "../helpers";

export const RaceCollection = async () => {

  return await axios
    .get("/results")
    .then((res) => {
        // Get old result 
        const storedBlogs = JSON.parse(localStorage.getItem('horses')) ?? [];
        // Merge results 
        const _newResult = [...storedBlogs, res.data];
        //Clean upp result 
        const collections = _newResult?.filter((data) => data)
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

export const callCollocation = async () => {
    // console.log('fetching start ')
    const result = JSON.parse(localStorage.getItem("horses"));
    return await RaceCollection()
      .then((res) => {
       
        if (res.error && res.code === "SESSION_EXPIRED") re_auth();

        if (!res.error) {
          // Get all new stared race
          const _new = result.filter(
            (collection) =>
              collection.horse.id !== res.data.horse.id && collection.time <= 0
          );
          const _update = result
            .filter(
              (collection) =>
                collection.horse.id === res.data.horse.id && collection.time > 1
            )
            .map((item) => {
              return { ...item, event: res.data.event, time: res.data.time };
            });

          //console.log("_new", _new);
          //console.log("_update", _update);
          //console.log("_newCollection", _new.concat(_update));
          return _new.concat(_update);
        }
      })
  };
