import React from "react";
import { Box } from "@mui/material";

const WorkSpaceWrapper = ({ children }) => {
  return (
    <Box
      sx={{
        height: `calc(100%)-${"80px"}`,
        overflow: "auto",  
      }}
    >
      {children}
    </Box>
  );
};

export default WorkSpaceWrapper;
