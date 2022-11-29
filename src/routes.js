import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { PrivetRoute, PublicRoute } from "./utils/grantPermisson";

import AuthPage from "./containers/view/auth";
import RacePage from "./containers/view/race";
import Notfound from "./containers/view/errorPage";

const routes = () => {
  return (
    <Router basename={"/"}>
      <Routes>
        <Route element={<PrivetRoute />}>
          <Route path="/" exact element={<RacePage />} />
        </Route>

        <Route element={<PublicRoute />}>
          <Route path="/login" element={<AuthPage />} />
        </Route>

        <Route path="*" element={<Notfound />} />

      </Routes>
    </Router>
  );
};

export default routes;
