import React from "react";
import AppContainer from "../Containers/AppContainer";
import WorkSpaceWrapper from "../Wrappers/WorkSpaceWrapper";
import TopBarWrapper from "../Wrappers/TopBarWrapper";
import Topbar from "./TopBar";
import Page from "./Page";

const Services = () => {
  return (
    <AppContainer>
        <TopBarWrapper >
            <Topbar />
        </TopBarWrapper>
      <WorkSpaceWrapper>
        <Page />
      </WorkSpaceWrapper>
    </AppContainer>
  );
};

export default Services;
