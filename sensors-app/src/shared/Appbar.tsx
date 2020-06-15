import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Grid, AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import NavbarStyles from "../styles/Navbar";
import { menuItems } from "../config/Constants";
import { IMenuItems } from "../models/Appbar";

export const Appbar = () => {
  const classes = NavbarStyles();
  const [auth, setAuth] = useState(true);
  const history = useHistory();

  return (
    <Grid item sm={12} xs={12} style={{ display: "flex" }}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Typography variant="h4" className={classes.MarginRight}>
            Sensors
          </Typography>
          {auth && (
            <div>
              {menuItems.map((menuItem: IMenuItems) => (
                <Typography
                  variant="h6"
                  style={{
                    display: "inline-block",
                    marginRight: 20,
                    cursor: "pointer",
                  }}
                  onClick={() => history.push(menuItem.route)}
                  className={classes.MarginRight}
                >
                  {menuItem.title}
                </Typography>
              ))}
            </div>
          )}
          {auth && (
            <Button
              variant="contained"
              onClick={() => history.push("/login")}
              style={{ position: "absolute", right: 20 }}
            >
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

export default Appbar;
