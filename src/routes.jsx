import React from "react";
import { Routes as ReactRouterRoutes, Route } from "react-router-dom";
import Services from "./pages/Workspace/Services";

const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route path="/:id" element={<Services />} />
    </ReactRouterRoutes>
  );
};

export default Routes;
