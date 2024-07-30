import React from "react";
import { Box, Container, Typography } from "@mui/material";

const Footer = ({ open }) => {
  return (
    <Box
      sx={{
        width: "100%",
        flexShrink: 0,
        msOverflowY: "hidden",
        transition: "width 0.3s",
        backgroundColor: "primary.main",
        color: "white",
        py: 2,
        position: "fixed",
        bottom: 0,
      }}
    >
      {" "}
      <Container maxWidth="lg">
        {" "}
        <Box textAlign="center">
          {" "}
          <Typography variant="body2" color="inherit">
            {" "}
            © {new Date().getFullYear()} Expenses Tracker. All rights reserved.{" "}
          </Typography>{" "}
        </Box>{" "}
      </Container>{" "}
    </Box>
  );
};

export default Footer;
