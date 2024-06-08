import React from "react";
import { Typography, Stack, Avatar, IconButton } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
// import { Bed } from "@mui/icons-material";

const Topbar = ({ room }) => {
  console.log(room);

  return (
    
      <Stack
        direction="row"
        alignItems="center"
        width={"100%"}
        spacing={1}
      >
        {/* <BackButton /> */}
        <Stack
          direction="row"
          justifyContent="flex-start"
          sx={{
            width: "100%",
            maxWidth: "100%",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
          spacing={1}
        >
          <Avatar />
          <Stack direction={"column"}>
            <Typography variant="h6" noWrap>
             {room.qrCodeData[0].roomNo}/{room.qrCodeData[0].bedNo}
            </Typography>

            <Typography variant="body2" noWrap>
              Good Morning
            </Typography>
          </Stack>
        </Stack>
        <Stack sx={{
          justifyContent: "flex-end",
        }}>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </Stack>
      </Stack>
    
  );
};

export default Topbar;
