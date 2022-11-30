import React from "react";
import LayoutAuth from "../layout/public";
import FormComponent from "../../components/form";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
}
from 'mdb-react-ui-kit';
function AuthPage(props) {
  return <LayoutAuth>
      <MDBContainer className="my-5 gradient-form">

<MDBRow>

  <MDBCol className="mb-5 mx-auto col-sm-4">
    <div className="d-flex flex-column ms-5">
        <FormComponent {...props} />
    </div>

  </MDBCol>

</MDBRow>

</MDBContainer>
  

</LayoutAuth>;
}

export default AuthPage;
