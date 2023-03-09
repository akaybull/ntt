import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  InputBase,
  Button,
  Divider,
} from "@mui/material";
import styled from "@emotion/styled";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  NttVisionIcon,
} from "../assets/icons";
const StyledTypography = styled(Typography)({
  fontSize: "20px",
  lineHeight: "23.44px",
  color: "#fff",
  display: "flex",
  justifyContent: "center",
});
const StyledTitleTypography = styled(Typography)({
  fontSize: "24px",
  lineHeight: "28.13px",
  color: "#fff",
  fontWeight: "500",
  display: "flex",
  justifyContent: "center",
});
const StyledButton = styled(Button)({
  borderRadius: "0px",

  height: "38px",
  width: "110px",
  backgroundColor: "#00254F",
  textTransform: "capitalize",
});
const StyledDivider = styled(Divider)({
  border: "1px solid #D9D9D9",
});
const Footer = () => {
  return (
    <Box
      sx={{
        bottom: 0,
        width: "100%",
        background: "#0059BC",
      }}
    >
      <AppBar position="static" sx={{ background: "#0059BC" }}>
        <Toolbar className="flex flex-col sm:mx-8 xl:mx-32 py-4">
          <div className="flex w-full">
            <div className="flex py-5 w-3/4 sm:w-1/2  lg:w-1/2 flex-col justify-center sm:py-10 ">
              <NttVisionIcon />
              <div className="hidden sm:flex lg:w-3/4 sm:w-full mt-6">
                <Typography>
                  Lorem ipsum dolor sit amet consectetur. Auctor tempor pretium
                  aliquam neque.
                </Typography>
              </div>
              <div className="flex w-full lg:w-3/4 mt-6">
                <div
                  className="flex w-full justify-between items-center"
                  style={{
                    height: "38px",
                    background: "#FFFFFF",
                  }}
                >
                  <InputBase
                    fullWidth
                    className="ml-2"
                    placeholder="Email"
                    inputProps={{ "aria-label": "Email" }}
                  />
                  <StyledButton variant="contained">Sign Up</StyledButton>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex lg:justify-start lg:w-1/2">
              <div className="hidden lg:flex  lg:gap-3 lg:flex-col lg:justify-center lg:items-center lg:w-1/3">
                <StyledTitleTypography>Title</StyledTitleTypography>
                <StyledTypography>Subtitle</StyledTypography>
                <StyledTypography>Subtitle</StyledTypography>
                <StyledTypography>Subtitle</StyledTypography>
                <StyledTypography>Subtitle</StyledTypography>
              </div>
              <div className="hidden lg:flex  lg:gap-3 lg:flex-col lg:justify-center lg:items-center lg:w-1/3">
                <StyledTitleTypography>Title</StyledTitleTypography>
                <StyledTypography>Subtitle</StyledTypography>
                <StyledTypography>Subtitle</StyledTypography>
                <StyledTypography>Subtitle</StyledTypography>
                <StyledTypography>Subtitle</StyledTypography>
              </div>
              <div className="hidden lg:flex  lg:gap-3 lg:flex-col lg:justify-center lg:items-center lg:w-1/3">
                <StyledTitleTypography>Title</StyledTitleTypography>
                <StyledTypography>Subtitle</StyledTypography>
                <StyledTypography>Subtitle</StyledTypography>
                <StyledTypography>Subtitle</StyledTypography>
                <StyledTypography>Subtitle</StyledTypography>
              </div>
            </div>
            <div className="hidden sm:flex gap-3 flex-col justify-center items-center lg:hidden w-1/3">
              <StyledTypography>Title</StyledTypography>
              <StyledTypography>Title</StyledTypography>
              <StyledTypography>Title</StyledTypography>
              <StyledTypography>Title</StyledTypography>
              <StyledTypography>Title</StyledTypography>
            </div>
          </div>
        </Toolbar>
        <StyledDivider />
        <Toolbar className="flex flex-col sm:mx-8 xl:mx-32 py-4">
          <div className="flex w-full justify-between">
            <div className="flex w-1/3 justify-start">
              <StyledTypography>contact@nttdata.com</StyledTypography>
            </div>
            <div className="flex w-1/3 justify-center">
              <StyledTypography>+3 9876 765 444</StyledTypography>
            </div>
            <div className="hidden sm:flex sm:w-1/3 sm:gap-6 sm:justify-end">
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
