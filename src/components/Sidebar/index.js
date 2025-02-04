// src/Sidebar.js
import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";

import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

import "./index.css";
import { NavLink } from "react-router-dom";
import { ListItemButton } from "@mui/material";

const Sidebar = ({ open }) => {
  return (
    <Box
      sx={{
        width: open ? 200 : 64,
        flexShrink: 0,
        overflowX: "hidden",

        transition: "width 0.3s",
        height: "100vh",
        bgcolor: "background.paper",
        backgroundColor: "#b22acf",
        color: "#ffffff",
        marginTop: "60px",
      }}
      className="sidebar"
    >
      <List>
        <ListItemButton
          LinkComponent={NavLink}
          to="/dashboard"
          activeclassname="active"
        >
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton
          LinkComponent={NavLink}
          to="/expenses"
          activeclassname="active"
        >
          <ListItemIcon>
            <AttachMoneyIcon />
          </ListItemIcon>
          <ListItemText primary="Expenses" />
        </ListItemButton>
      </List>
    </Box>
  );
};

export default Sidebar;
