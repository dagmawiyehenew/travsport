import React, { useEffect, useState } from "react";
import { RaceCollection } from "../actions/race";
import { Authenticator } from "../actions/auth";
import { useNavigate } from "react-router-dom";
import {re_auth} from '../helpers';
function BasicTable(props) {
  let redirectTo = useNavigate();
  const [Loading, setLoading] = useState(false);
  const [resource, setResource] = useState([]);
  const [result] = useState(JSON.parse(localStorage.getItem("horses")));

  const callCollocation = async () => {
    // console.log('fetching start ')

    await RaceCollection().then((res) => {
      setLoading(true);
    
      console.log(re_auth());
      if (!res.error && res.code === 'SESSION_EXPIRED') {
        Authenticator({
          email: "dagmawi@screenwork.se",
          password: "lTgAYaLP9jRs",
        }).then((res) => {
          if (res.error) localStorage.clear();
          redirectTo("/login");
        });
      }

      if (!res.error) {
        // Get all new stared race
        const _new = result.filter(
          (collection) =>
            collection.horse.id !== res.data.horse.id && collection.time <= 0
        );
        const _update = result
          .filter(
            (collection) =>
              collection.horse.id === res.data.horse.id && collection.time > 0
          )
          .map((item) => {
            return { ...item, event: res.data.event, time: res.data.time };
          });

        console.log("_new", _new);
        console.log("_update", _update);
        console.log("_newCollection", _new.concat(_update) );
        setResource(_new.concat(_update));
        setLoading(false);
        //addNewHorse(res.data)
      }
    }).catch((error) => {
        console.log(error);
    })
  };
  useEffect(() => {
    if (!Loading) {
      // setInterval(() => {
      callCollocation();
      //  }, 5000);
    }
  }, []);


  return (
    <></>
  );
}

export default BasicTable;
