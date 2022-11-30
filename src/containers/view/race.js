import React from "react";
import BasicTable from "../../components/basicTable";
import PrivateLayout from "../layout/private";
function RacePage(props) {
  return <PrivateLayout><BasicTable {...props}/> </PrivateLayout>;
}

export default RacePage;
