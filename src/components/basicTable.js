import React, { useEffect, useState } from "react";
import { RaceCollection, callCollocation } from "../actions/race";
import { useNavigate } from "react-router-dom";
function BasicTable(props) {
  const [Loading, setLoading] = useState(false);
  const [resource, setResource] = useState([]);

  useEffect(() => {
    if (!Loading) {
        setLoading(true);
      // setInterval(() => {
      callCollocation().then((response) =>{
            setResource(response);
            
      });
      setLoading(false);
      //  }, 5000);
    }
  }, []);

  return Loading ? 'Loading' : resource.map((horse, i) => {
        return <li key={i}>{horse.horse.id} {horse.horse.name} {horse.event} {horse.time}</li>
  })
}

export default BasicTable;
