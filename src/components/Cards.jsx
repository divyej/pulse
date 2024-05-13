import React from "react";
import { Card, CardContent } from "@mui/material";
import { CardMedia } from "@mui/material";
import { Typography } from "@mui/material";
import { Stack } from "@mui/material";

const Cards = ({ id, title, handleClick, image }) => {
  return (
    <Card
      sx={{
        width: "100%",
        height: "100%",
        boxShadow: "none",
        cursor: "pointer",
        "&:hover": {
          boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)",
        },
      }}
      onClick={() => handleClick(id)}
    >
      <CardMedia
        sx={{
          height: "200px",
          width: "100%",
          objectFit: "cover",
        }}
        image={image}
        title={title}
      />
      <CardContent>
        <Typography variant="h3">{title}</Typography>
      </CardContent>
    </Card>
  );
};

export default Cards;
