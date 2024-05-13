import React from "react";
import {
  Stack,
  Avatar,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  Drawer,
  ListItemText,
} from "@mui/material";
import { grey } from "@mui/material/colors";

const Sidebar = () => {
  return (
    <Drawer
      sx={{
        width: "80px",
        maxWidth: "80px",
        "& .MuiDrawer-paper": {
          width: "80px",
          maxWidth: "80px",
          boxSizing: "border-box",
          backgroundColor: grey[300],
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Stack height="100%" justifyContent="space-between" py={1}>
        <Stack
          sx={{
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Avatar
            sx={{
              width: "48px",
              height: "48px",
              backgroundColor: grey[800],
            }}
          >
            <Typography variant="h6" sx={{ color: grey[300] }}>
              S
            </Typography>
          </Avatar>
        </Stack>

        <List
          sx={{
            width: "100%",
          }}
        >
          <ListItem>
            <ListItemIcon>
              <Typography variant="h6" sx={{ color: grey[300] }}>
                S
              </Typography>
            </ListItemIcon>
          </ListItem>
        </List>

        <Stack
          spacing={1}
          sx={{
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Avatar>
            <Typography variant="h6" sx={{ color: grey[300] }}>
              S
            </Typography>
          </Avatar>
        </Stack>
      </Stack>
    </Drawer>
  );
};

export default Sidebar;
