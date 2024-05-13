import React from "react";
import Sidebar from "../../components/Sidebar";
import { Box } from "@mui/material";
import ScreenSizeContext from "../../theme/screenSizeContext";

const AppContainer = ({ children }) => {
  const screenSize = React.useContext(ScreenSizeContext);
  return (
    <>
      {screenSize !== "xs" && <Sidebar />}
      <Box
        px={2}
        sx={{
          height: "100vh",
          marginLeft: screenSize !== "xs" ? "80px" : "0px",
          width: screenSize !== "xs" ? `calc(100% - ${"80px"})` : "100vw",
          overflow: "auto",
          backgroundColor: "#fff",
        }}
      >
        {children}
      </Box>
    </>
  );
};

export default AppContainer;
