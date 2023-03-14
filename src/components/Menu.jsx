import React, { useState } from "react";
import {
  Button,
  Box,
  Popover,
  Typography,
  CardMedia,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import styled from "@emotion/styled";
import menuImage from "../assets/images/menuImage.jpg";

const StyledButton = styled(Button)({
  textTransform: "inherit",
  fontSize: "14px",
  fontWeight: 500,
  color: "#6A6D70",
  minWidth: "95px",
});
const StyledPopover = styled(Popover)({
  display: "flex",
  width: "100vw",
});
const StyledBox = styled(Box)({
  width: "90%",
  overflow: "hidden",
});
const Menu = ({ openDrawer, setOpenDrawer }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { text: "Menu Item", path: "/" },
    { text: "Menu Item", path: "/" },
    { text: "Menu Item", path: "/" },
    { text: "Menu Item", path: "/" },
    { text: "Menu Item", path: "/" },
    { text: "Menu Item", path: "/" },
    { text: "Menu Item", path: "/" },
    { text: "Menu Item", path: "/" },
    { text: "Menu Item", path: "/" },
    { text: "Menu Item", path: "/" },
  ];

  const drawer = (
    <Box sx={{ width: 350 }} role="presentation">
      <List>
        {menuItems.map((item, index) => (
          <ListItem onClick={index == 0 && handlePopoverOpen} key={item.text}>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const closeFunc = () => {
    setOpenDrawer(false);
  };

  const open = Boolean(anchorEl);
  return (
    <StyledBox id="1" className="hidden sm:px-16 gap-8 lg:px-32 p-3 sm:flex">
      {menuItems.map((item, index) => (
        <StyledButton onClick={index == 0 && handlePopoverOpen} key={item.text}>
          {item.text}
        </StyledButton>
      ))}
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
        <Box className="flex flex-row gap-24 bg-gray-100" p={5}>
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
      <Drawer anchor="left" open={openDrawer} onClose={closeFunc}>
        {drawer}
      </Drawer>
    </StyledBox>
  );
};
export default Menu;
