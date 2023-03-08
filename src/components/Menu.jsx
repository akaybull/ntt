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
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuButtonClick}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Responsive Menu
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={isDrawerOpen} onClose={handleDrawerClose}>
        <List>
          <ListItem button onClick={handleMenuItemClick}>
            <ListItemText primary="Menü Öğesi 1" />
          </ListItem>
          <ListItem button onClick={handleMenuItemClick}>
            <ListItemText primary="Menü Öğesi 2" />
          </ListItem>
          <ListItem button onClick={handleMenuItemClick}>
            <ListItemText primary="Menü Öğesi 3" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};
export default ResponsiveMenu;
