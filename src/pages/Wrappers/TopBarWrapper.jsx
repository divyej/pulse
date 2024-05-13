import React, { useContext, useState } from "react";
import { Stack, IconButton } from "@mui/material";

const TopBarWrapper = ({ children }) => {
  return (
    <Stack
    py={2}
      direction="row"
      sx={{
        justifyContent: "space-between",
        alignItems: "center",
        height: "80px",
      }}
    >
      <Stack direction="row" >
        {/* {screenSize === "xs" && (
          <>
            <IconButton
              color="inherit"
              aria-label="open sidebar"
              edge="start"
              onClick={handleSidebarToggle}
            >
              <MenuIcon />
            </IconButton>
            <Sidebar open={sidebarOpen} onClose={handleSidebarToggle} />
          </>
        )} */}

        {children}
      </Stack>
    </Stack>
  );
};

export default TopBarWrapper;
