import React, { useState } from "react";
import { Button, Box, Popover, Typography, CardMedia } from "@mui/material";
import styled from "@emotion/styled";
import menuImage from "../assets/images/menuImage.jpg";

const StyledButton = styled(Button)({
  textTransform: "inherit",
  fontSize: "14px",
  fontWeight: 500,
  color: "#6A6D70",
});
const StyledPopover = styled(Popover)({
  display: "flex",
  width: "100vw",
});
const StyledBox = styled(Box)({
  display: "flex",
  width: "90%",
  overflow: "hidden",
});
const Menu = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  return (
    <StyledBox className="sm:px-16 gap-8 lg:px-32 p-3 flex w-full ">
      <StyledButton onClick={handlePopoverOpen}>Menu Item</StyledButton>
      <StyledButton>Menu Item</StyledButton>
      <StyledButton>Menu Item</StyledButton>
      <StyledButton>Menu Item</StyledButton>
      <StyledButton>Menu Item</StyledButton>
      <StyledButton>Menu Item</StyledButton>
      <StyledButton>Menu Item</StyledButton>
      <StyledButton>Menu Item</StyledButton>
      <StyledButton>Menu Item</StyledButton>
      <StyledButton>Menu Item</StyledButton>
      <StyledButton>Menu Item</StyledButton>
      <StyledButton>Menu Item</StyledButton>
      <StyledPopover
        className=" flex w-full"
        id="menu-popover"
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Box className="flex flex-row gap-24" p={5}>
          <div>
            <Typography fontSize={14} marginBottom={1} fontWeight={500}>
              Header
            </Typography>
            <Typography fontSize={14} marginBottom={1} fontWeight={400}>
              Subheader
            </Typography>
            <Typography fontSize={14} marginBottom={1} fontWeight={400}>
              Subheader
            </Typography>
            <Typography fontSize={14} marginBottom={1} fontWeight={400}>
              Subheader
            </Typography>
            <Typography fontSize={14} marginBottom={1} fontWeight={400}>
              Subheader
            </Typography>
            <Typography fontSize={14} marginBottom={1} fontWeight={400}>
              Subheader
            </Typography>
            <Typography fontSize={14} marginBottom={1} fontWeight={400}>
              Subheader
            </Typography>
            <Typography fontSize={14} marginBottom={1} fontWeight={400}>
              Subheader
            </Typography>
            <Typography fontSize={14} marginBottom={1} fontWeight={400}>
              Subheader
            </Typography>
          </div>
          <div>
            <Typography fontSize={14} marginBottom={1} fontWeight={500}>
              Header
            </Typography>
            <Typography fontSize={14} marginBottom={1} fontWeight={400}>
              Subheader
            </Typography>
            <Typography fontSize={14} marginBottom={1} fontWeight={400}>
              Subheader
            </Typography>
            <Typography fontSize={14} marginBottom={1} fontWeight={400}>
              Subheader
            </Typography>
            <Typography fontSize={14} marginBottom={1} fontWeight={400}>
              Subheader
            </Typography>
            <Typography fontSize={14} marginBottom={1} fontWeight={400}>
              Subheader
            </Typography>
            <Typography fontSize={14} marginBottom={1} fontWeight={400}>
              Subheader
            </Typography>
            <Typography fontSize={14} marginBottom={1} fontWeight={400}>
              Subheader
            </Typography>
            <Typography fontSize={14} marginBottom={1} fontWeight={400}>
              Subheader
            </Typography>
          </div>
          <CardMedia component="img" image={menuImage} />
        </Box>
      </StyledPopover>
    </StyledBox>
  );
};
export default Menu;
