import {
  Stack,
  // Tabs,
  // Tab,
  Typography,
  Button,
  // Divider,
  // AppBar,
  // IconButton,
  // Toolbar,
  // CardContent,
  // Card,
  // Box,
  // Paper,
  // Menu,
  LinearProgress,
} from "@mui/material";
import { useState } from "react";
import React from "react";
import { Grid } from "@mui/material";
import Cards from "../../components/Cards";
// import UploadButton from "../../components/uploadReports";
// import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
// import SearchIcon from "@mui/icons-material/Search";
// import MoreIcon from "@mui/icons-material/MoreVert";
import Fab from "@mui/material/Fab";
import styled from "@mui/material/styles/styled";
import ScreenSizeContext from "../../theme/screenSizeContext";
import feedback from "../../assets/feed.png";
import hospitalInfo from "../../assets/hospitalInfo.png";
import maintainance from "../../assets/maintainance.png";
import { useTheme } from "@mui/material";
import LinearDeterminate from "../../components/LinearProgress";

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
      title: "Patient Report",
      image: hospitalInfo,
    },
    {
      id: 2,
      title: "Hospital Info",
      image: maintainance,
    },
    {
      id: 4,
      title: "Services",
      image: maintainance,
    },
    {
      id: 3,
      title: "Emergency",
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
        <Stack direction="row" justifyContent="space-between" spacing={1}>
          <Button
            variant="contained"
            color="primary"
            disableElevation
            startIcon={<AddIcon />}
            fullWidth
            sx={{
              borderRadius: 20,
            }}
          >
            Upload
          </Button>
          <Button
            variant="contained"
            color="primary"
            disableElevation
            startIcon={<AddIcon />}
            fullWidth
            sx={{
              borderRadius: 20,
            }}
          >
            Calendar
          </Button>
        </Stack>
        <Typography variant="h3">Categories</Typography>

        <Grid container spacing={1} padding={2} height={"100%"}>
          {ServicesData.map((service) => (
            <Grid item sm={6} md={4} xs={6} key={service.id} padding={1.5}>
              <Cards
                title={service.title}
                image={service.image}
                onClick={() => handleClick(service.id)}
              />
            </Grid>
          ))}
        </Grid>
        <Stack direction={"row"} justifyContent={"space-between"} sx={{
          padding: 4,
        }}>
          <Stack
            direction={"row"}
            sx={{
              borderRadius: 20,
              border: "1px solid #e0e0e0",
              width: "100%",
              paddingX: 2,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Stack direction={"row"} padding={1} sx={{
                alignItems: "center",
            }}>
            <AddIcon  fontSize="small"/>
            <Typography variant="body1">Service</Typography>
            </Stack>
            <LinearDeterminate/>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Page; 
