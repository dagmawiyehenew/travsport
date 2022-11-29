import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AuthPage from "./containers/view/auth";
import RacePage from "./containers/view/race";

const routes = () => {
  return (
    <Router basename={"/"}>
      <Routes>
        <Route>
          <Route path="/" exact element={<RacePage />} />
        </Route>

        <Route>
          <Route path="/login" element={<AuthPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default routes;
