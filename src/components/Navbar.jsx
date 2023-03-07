import { AppBar, Toolbar, InputBase, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import DropdownMenu from "./DropdownMenu";
import React from "react";
import { NttIcon, SearchIcon } from "../assets/icons";
const StyledAppBar = styled(AppBar)({
  backgroundColor: "#fff",
  boxShadow: "none",
  borderBottom: "1px solid #89919A",
  "& .MuiToolbar-root": {
    minHeight: "80px",
  },
});
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "#fff",
});

const StyledButton = styled(Button)({
  marginLeft: "5px",
  height: "40px",
  width: "110px",
  backgroundColor: "#0059BC",
  "& .MuiButton-startIcon": {
    margin: "0px",
  },
});

const Navbar = () => {
  return (
    <StyledAppBar position="sticky" className="bg-white">
      <StyledToolbar>
        <div className="flex w-1/5 justify-center">
          <NttIcon />
        </div>
        <div className="flex w-3/5 justify-center">
          <div
            className="w-full flex justify-center items-center"
            style={{
              height: "40px",
              border: "1px solid #89919A",
              borderRadius: "4px",
            }}
          >
            <InputBase
              className="w-full ml-4"
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
            <DropdownMenu />
          </div>
          <StyledButton
            variant="contained"
            startIcon={<SearchIcon />}
          ></StyledButton>
        </div>
        <div className="flex w-1/5"></div>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Navbar;
