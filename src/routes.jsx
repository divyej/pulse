import React from "react";
import { Routes as ReactRouterRoutes, Route, Navigate } from "react-router-dom";
import Services from "./pages/Workspace/Services";

const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route path="/" element={<Services />} />
    </ReactRouterRoutes>
  );
};

export default Routes;
