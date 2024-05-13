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
    <>
      <Stack
        sx={{
          width: "100%",
          height: "100%",
          padding: 1,
        }}
        spacing={1}
      >
        <Stack
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Tabs>
            <Tab label="Overview" />
            <Tab label="Services" />
            <Tab label="Reports" />
          </Tabs>
        </Stack>
        <Paper
          elevation={0}
          sx={{
            padding: 2,
            mt: 1,
            borderRadius: 8,
            flexGrow: 1,
            boxShadow: "none",
            justifyContent: "center",
            backgroundColor: theme.palette.surface.paper,
            overflowY: "auto",
            scrollbarWidth: "none",
          }}
        >
          <Grid container spacing={2} flexGrow={1}>
            {ServicesData.map((data) => (
              <Grid item xs={12} sm={6} md={4} lg={4} key={data.id}>
                <Cards
                  id={data.id}
                  title={data.title}
                  image={data.image}
                  handleClick={handleClick}
                />
              </Grid>
            ))}
          </Grid>
        </Paper>
        <Divider />
        {screenSize !== "xs" && (
          <Stack direction="column" spacing={2}>
            <Typography variant="h6">Reports</Typography>
            <UploadButton
              setFileName={setFileName}
              fileName={fileName}
              handleFileUpload={handleFileUpload}
            />
          </Stack>
        )}
      </Stack>
      {screenSize === "xs" && (
        <AppBar
          position="fixed"
          color="primary"
          sx={{ top: "auto", bottom: 0, z: "1000" }}
        >
          <Toolbar>
            <IconButton color="inherit" aria-label="open drawer">
              <MenuIcon />
            </IconButton>
            <StyledFab
              color="secondary"
              aria-label="add"
              onClick={handleFileUpload}
            >
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
    </>
  );
};

export default Page;
