import React from "react";
import { Card } from "@mui/material";
import { Typography } from "@mui/material";
import { Stack } from "@mui/material";


const Cards = ({ title ,handleClick}) => {
  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: "500px",
        height: "100%",
      }}
    >
      <Stack p={2}>
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={1}
        >
          <Stack
            direction="column"
            justifyContent="center"
            sx={{
              maxWidth: "100%",
              overflow: "hidden",
              textOverflow: "ellipsis",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h3">{title}</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Card>
  );
};

export default Cards;
