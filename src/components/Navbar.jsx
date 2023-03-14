import { AppBar, Toolbar, InputBase, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import DropdownMenu from "./DropdownMenu";
import React from "react";
import { NttIcon, SearchIcon, MenuIcon } from "../assets/icons";
import NavigationMenu from "./Menu";
const StyledAppBar = styled(AppBar)({
  backgroundColor: "#fff",
  boxShadow: "none",
  borderBottom: "1px solid #89919A",
  "& .MuiToolbar-root": {
    minHeight: "80px",
  },
  "@media (max-width: 640px)": {
    "& .MuiToolbar-root": {
      minHeight: "120px",
    },
    borderBottom: "none",
    paddingBottom: "15px",
  },
});
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  backgroundColor: "#fff",
  "@media (max-width: 640px)": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
  },
  "@media (max-width: 1000px)": {
    justifyContent: "space-between",
  },
});

const StyledSearchButton = styled(Button)({
  marginLeft: "10px",
  height: "40px",
  width: "110px",
  backgroundColor: "#0059BC",
  "& .MuiButton-startIcon": {
    margin: "0px",
  },
  "@media (max-width: 640px)": {
    marginLeft: "-5px",
  },
});

const Navbar = () => {
  return (
    <>
      <StyledAppBar position="sticky" className="bg-white">
        <StyledToolbar>
          <div className="flex w-full mt-6 justify-between sm:w-2/5 sm:justify-center sm:mt-0 lg:w-1/5">
            <div className="flex w-full justify-start sm:justify-center">
              <NttIcon />
            </div>
            <div className="flex w-full items-center justify-end sm:hidden">
              <MenuIcon />
            </div>
          </div>
          <div className="flex w-full sm:w-3/5 justify-start  xl:justify-center">
            <div
              className="flex w-full justify-center items-center"
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
            <StyledSearchButton
              variant="contained"
              startIcon={<SearchIcon />}
            ></StyledSearchButton>
          </div>
        </StyledToolbar>
      </StyledAppBar>
      <NavigationMenu />
    </>
  );
};

export default Navbar;
