import React from "react";
import { AppBar, Toolbar, Typography, Link, Box } from "@mui/material";
import styled from "@emotion/styled";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  NttVisionIcon,
  NttIcon,
} from "../assets/icons";
const StyledTypography = styled(Typography)({
  fontSize: "20px",
  font: "Roboto",
  lineHeight: "23.44px",
  color: "#fff",
  display: "flex",
  justifyContent: "center",
});

const Footer = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        background: "#0059BC",
      }}
    >
      <AppBar position="static">
        <Toolbar className="flex flex-col mx-32 py-10">
          <div className="flex w-full">
            <div className="flex w-2/5 flex-col gap-2 justify-center py-10 ">
              <NttIcon color="#fff" />
              <NttVisionIcon />
            </div>
          </div>
          <div className="flex w-full justify-between">
            <div className="flex w-1/3 justify-start">
              <StyledTypography>contact@nttdata.com</StyledTypography>
            </div>
            <div className="flex w-1/3 justify-center">
              <StyledTypography>+3 9876 765 444</StyledTypography>
            </div>
            <div className="flex w-1/3 gap-6 justify-end">
              <InstagramIcon />
              <FacebookIcon />
              <LinkedInIcon />
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Footer;
