import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Grid,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  MenuItem,
  Menu,
  Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import NavbarStyles from "../styles/Navbar";
import { menuItems, IMenuItems } from "../config/Constants";

export const Navbar = () => {
  const classes = NavbarStyles();
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const history = useHistory();

  return (
    <Grid item sm={12} xs={12} style={{ display: "flex" }}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Home
          </Typography>
          {auth && (
            <div>
              <IconButton
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={(event: React.MouseEvent<HTMLElement>) =>
                  setAnchorEl(event.currentTarget)
                }
                color="inherit"
                style={{ marginRight: 20 }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                {menuItems.map((menuItem: IMenuItems) => (
                  <MenuItem onClick={() => history.push(menuItem.route)}>
                    {menuItem.title}
                  </MenuItem>
                ))}
              </Menu>
            </div>
          )}
          <Button variant="contained" onClick={() => setAuth(!auth)}>
            {auth ? "Logout" : "Login"}
          </Button>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

export default Navbar;
