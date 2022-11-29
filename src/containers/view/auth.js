import React from "react";
import LayoutAuth from "../layout/private";
import FormCompounent from "../../components/form";
function AuthPage(props) {
  return <LayoutAuth><FormCompounent {...props} /></LayoutAuth>;
}

export default AuthPage;
