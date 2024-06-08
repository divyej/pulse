import React from "react";
import { Avatar, Card, CardContent } from "@mui/material";
import { CardMedia } from "@mui/material";
import { Typography } from "@mui/material";
import { Stack,Box } from "@mui/material";
import { Hail, Note } from "@mui/icons-material";

const Cards = ({ id, title, handleClick, image }) => {
  return (
    <Card
      sx={{
        width: "100%",
        height: "100%",
        boxShadow: "none",
        borderRadius: "10px",
          border: "1px solid #e0e0e0",
          padding: 2,
        cursor: "pointer",
        "&:hover": {
          boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)",
          borderRadius: "10px",
          border: "1px solid #e0e0e0",
        },
      }}
      onClick={() => handleClick(id)}
    >
    <Stack sx={{
      width: "100%",
      height: "100%",
      padding: 1,
    
    }}>
      <Stack direction="row" justifyContent={"space-between"} alignItems={"flex-start"}>
        <Note/>
        <Hail/>
      </Stack>
      <Stack sx={{
        height: "100%",
        alignItems: "center",
        justifyContent: "flex-end",
      }}>
        <Typography variant="caption" noWrap>{title}</Typography>
        </Stack>
    </Stack>  
    
    </Card>
  );
};
export default Cards;
