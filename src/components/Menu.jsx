import { List, ListItem, ListItemText } from "@mui/material";

const ResponsiveMenu = () => {
  return (
    <>
      <List>
        <ListItem>
          <ListItemText primary="Menü Öğesi 1" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Menü Öğesi 2" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Menü Öğesi 3" />
        </ListItem>
      </List>
    </>
  );
};
export default ResponsiveMenu;
