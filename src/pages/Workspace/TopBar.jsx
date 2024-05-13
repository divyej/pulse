import React from "react";
import { Typography, Stack } from "@mui/material";

const Topbar = ({ data }) => {
  const title = data?.title || "Title";

  return (
    <>
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        spacing={1}
      >
        {/* <BackButton /> */}
        <Stack
          direction="column"
          justifyContent="center"
          sx={{
            maxWidth: "100%",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          <Typography variant="h3" noWrap>
            Pulse
          </Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default Topbar;
