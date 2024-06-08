import React, { useEffect } from "react";
import AppContainer from "../Containers/AppContainer";
import WorkSpaceWrapper from "../Wrappers/WorkSpaceWrapper";
import TopBarWrapper from "../Wrappers/TopBarWrapper";
import Topbar from "./TopBar";
import Page from "./Page";
import { useParams } from "react-router-dom";
//import { fetchRoomInfo } from "../../apis/getRoomInfo";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { roomInfo } from "../../appRedux/qrInfo";
import { getRoomInfo } from "../../appRedux/qrInfo";

const Services = () => {
  const dispatch= useDispatch();
  const room= useSelector(roomInfo)
  const { id } = useParams();
  useEffect(() => {
  dispatch(getRoomInfo(id))
  }
  , [id]);

  return (
    <AppContainer>
        <TopBarWrapper >
            <Topbar room={room} />
        </TopBarWrapper>
      <WorkSpaceWrapper>
        <Page />
      </WorkSpaceWrapper>
    </AppContainer>
  );
};

export default Services;
