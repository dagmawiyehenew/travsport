import React, { useEffect, useState } from "react";
import { callCollocation } from "../actions/race";
import { MDBTable, MDBTableHead, MDBTableBody, MDBContainer } from "mdb-react-ui-kit";
import Loader from './common/loader';
function BasicTable(props) {
  const [Loading, setLoading] = useState(false);
  const [resource, setResource] = useState([]);

  useEffect(() => {
    if (!Loading) {
      setLoading(true);
     setTimeout(() => {
      callCollocation().then((response) => {
        setResource(response);
      });
      setLoading(false);
      }, 2000);
    }
  }, [Loading]);

  return Loading ? (
    <Loader />
  ) : (
    
    <div className="bg-image h-100" >
      <div className=" d-flex align-items-center h-100">
        <MDBContainer>
          <div className="row justify-content-center">
            <div className="col-12">
            {resource?.length > 0 ?
              <div className="card shadow-2-strong mb-5">
                <div className="card-body p-0">
                
                  <MDBTable striped hover>
                    <MDBTableHead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                      </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                     {resource?.map((horse, i) => {
                        return (
                          <tr key={i}>
                            <th scope="row">{horse.horse.id}</th>
                            <td>{horse.horse.name}</td>
                            <td>{horse.event}</td>
                            <td>{horse.time}</td>
                          </tr>
                        );
                      })}
                    </MDBTableBody>
                  </MDBTable>
                  
                </div>
              </div>
              : <Loader />}
            </div>
          </div>
        </MDBContainer> 
      </div>
    </div>
  
  );
}

export default BasicTable;
