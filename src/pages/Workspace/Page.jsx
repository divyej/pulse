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

const Page = () => {
  const screenSize = React.useContext(ScreenSizeContext);
  const [fileName, setFileName] = useState("");

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
    },
    {
      id: 2,
      title: "HouseKeeping And Maintainance",
    },
    {
      id: 3,
      title: "Feedback And Suggestions",
    },
  ];

  const handleClick = (id) => {
    console.log("clicked");
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
    <Stack
      sx={{
        width: "100%",
        height: "100%",
        padding: 1,
      }}
      spacing={1}
    >
      <Tabs>
        <Tab label="Overview" />
        <Tab label="Services" />
        <Tab label="Reports" />
      </Tabs>
      <Paper
        elevation={0}
        sx={{
          padding: 2,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#f5f5f5",
          borderRadius: 2,
        }}
      >
        <Grid container spacing={2} flexGrow={1}>
          {ServicesData.map((data) => (
            <Grid item xs={12} sm={6} md={4} lg={4} key={data.id}>
              <Cards title={data.title} onClick={handleClick} />
            </Grid>
          ))}
        </Grid>
      </Paper>
      <Divider />
      {screenSize !== "xs" ? (
        <Stack direction="column" spacing={2}>
          <Typography variant="h6">Reports</Typography>
          <UploadButton
            setFileName={setFileName}
            fileName={fileName}
            handleFileUpload={handleFileUpload}
          />
        </Stack>
      ) : (
        <AppBar
          position="fixed"
          color="primary"
          sx={{ top: "auto", bottom: 0 }}
        >
          <Toolbar>
            <IconButton color="inherit" aria-label="open drawer">
              <MenuIcon />
            </IconButton>
            <StyledFab color="secondary" aria-label="add">
              <AddIcon />
            </StyledFab>
            <Box sx={{ flexGrow: 1 }} />
            <IconButton color="inherit">
              <SearchIcon />
            </IconButton>
            <IconButton color="inherit">
              <MoreIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      )}
    </Stack>
  );
};

export default Page;
