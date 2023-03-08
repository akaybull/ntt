import React, { useState } from "react";
import { MenuItem, Menu, Button } from "@mui/material";
import { ArrowDownIcon } from "../assets/icons";
import styled from "@emotion/styled";
const StyledDropdownButton = styled(Button)({
  backgroundColor: "#F4F5F6",
  textTransform: "none",
  width: "152px",
  color: "#000",
  fontSize: "14px",
  display: "flex",
  "& .MuiButton-endIcon": {
    marginLeft: "10px",
  },
  "@media (max-width: 640px)": {
    display: "none",
  },
});
const StyledDropdownMenu = styled(Menu)({
  "& .MuiPaper-root": {
    padding: "12px",
    width: "auto",
    background: "#00254F",
    borderRadius: "4px",
    marginTop: "12px",
  },
  "& .MuiButtonBase-root": {
    color: "#fff",
    fontSize: "14px",
    lineHeight: "26px",
  },
  "& .MuiButtonBase-root:hover": {
    color: "#fff",
    fontSize: "14px",
    lineHeight: "26px",
    backgroundColor: "#0059BC",
    border: "0",
    borderRadius: "4px",
  },
});
const options = [
  "Data",
  "Categories Name",
  "Categories Name",
  "Categories Name",
  "Categories Name",
];

export default function DropdownMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedValue, setSelectedValue] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenuItemClick = (event, value) => {
    setSelectedValue(value);
    handleClose();
  };
  return (
    <div>
      <StyledDropdownButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        endIcon={<ArrowDownIcon />}
      >
        {selectedValue ? selectedValue : "Categories"}
      </StyledDropdownButton>
      <StyledDropdownMenu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === selectedValue}
            onClick={(event) => handleMenuItemClick(event, option)}
          >
            {option}
          </MenuItem>
        ))}
      </StyledDropdownMenu>
    </div>
  );
}
