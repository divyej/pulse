import React, { useEffect } from "react";
import AppContainer from "../Containers/AppContainer";
import WorkSpaceWrapper from "../Wrappers/WorkSpaceWrapper";
import TopBarWrapper from "../Wrappers/TopBarWrapper";
import Topbar from "./TopBar";
import Page from "./Page";
import { useParams } from "react-router-dom";
import { fetchRoomInfo } from "../../apis/getRoomInfo";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Services = () => {
  const { id } = useParams();
  useEffect(() => {
    fetchRoomInfo(id).then((data) => {
      try {
        console.log(data);
      }
      catch (e) {
       throw new Error(e);
      }
    }
    );

  }
  , [id]);

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
