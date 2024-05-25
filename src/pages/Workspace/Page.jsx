import {
  Stack,
  Tabs,
  Tab,
  Typography,
  Button,
  Divider,
  AppBar,
  IconButton,
  Toolbar,
  CardContent,
  Card,
  Box,
  Paper,
  Menu,
} from "@mui/material";
import { useState } from "react";
import React from "react";
import { Grid } from "@mui/material";
import Cards from "../../components/Cards";
import UploadButton from "../../components/uploadReports";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";
import Fab from "@mui/material/Fab";
import styled from "@mui/material/styles/styled";
import ScreenSizeContext from "../../theme/screenSizeContext";
import feedback from "../../assets/feed.png";
import hospitalInfo from "../../assets/hospitalInfo.png";
import maintainance from "../../assets/maintainance.png";
import { useTheme } from "@mui/material";

const Page = () => {
  const screenSize = React.useContext(ScreenSizeContext);
  const fileInputRef = React.useRef(null);
  const [fileName, setFileName] = useState("");
  const theme = useTheme();

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const StyledFab = styled(Fab)({
    position: "absolute",
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: "0 auto",
  });
  const [activeTab, setActiveTab] = React.useState(0);
  const ServicesData = [
    {
      id: 1,
      title: "Hospital Information",
      image: hospitalInfo,
    },
    {
      id: 2,
      title: "HouseKeeping And Maintainance",
      image: maintainance,
    },
    {
      id: 3,
      title: "Feedback And Suggestions",
      image: feedback,
    },
  ];

  const handleClick = (id) => {
    console.log(id);
    setActiveTab(id);
  };

  const MaintainanceData = [
    {
      id: 1,
      title: "Cleaning ",
    },
    {
      id: 2,
      title: "Help/Requests",
    },
  ];
  return (
    <>
      <Stack
        sx={{
          width: "100%",
          height: "100%",
          padding: 1,
        }}
        spacing={1}
      >
        
        </Stack>
    </>
  );
};

export default Page;
