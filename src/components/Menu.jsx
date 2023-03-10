import { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const ResponsiveMenu = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleMenuButtonClick = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const handleMenuItemClick = (event) => {
    // menü öğesine tıklandığında yapılacak işlemleri buraya ekleyin
    setIsDrawerOpen(false);
  };

  return (
    <>
      <List>
        <ListItem onClick={handleMenuItemClick}>
          <ListItemText primary="Menü Öğesi 1" />
        </ListItem>
        <ListItem onClick={handleMenuItemClick}>
          <ListItemText primary="Menü Öğesi 2" />
        </ListItem>
        <ListItem onClick={handleMenuItemClick}>
          <ListItemText primary="Menü Öğesi 3" />
        </ListItem>
      </List>
    </>
  );
};
export default ResponsiveMenu;
