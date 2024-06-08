import React from "react";
import { Box } from "@mui/material";

const WorkSpaceWrapper = ({ children }) => {
  return (
    <Box
      sx={{
        height: "calc(100vh - 80px)", // 64px is the height of the top bar
        overflow: "auto",  
      }}
    >
      {children}
    </Box>
  );
};

export default WorkSpaceWrapper;
