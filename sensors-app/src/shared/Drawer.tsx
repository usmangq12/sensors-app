import React from "react";
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles
} from "@material-ui/core/styles";
import { Drawer, Typography } from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import CancelIcon from "@material-ui/icons/Cancel";
import { IRowsData } from "../models/home";

const drawerWidth = 840;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    appBar: {
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: drawerWidth,
    },
    title: {
      flexGrow: 1,
    },
    hide: {
      display: "none",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: "flex-start",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginRight: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    },
  })
);

interface IPersistentDrawerRight {
  openDrawer: boolean;
  closeDrawer: Function;
  DrawerComponent: Function;
  selectedRow: any;
}

export default function PersistentDrawerRight(props: IPersistentDrawerRight) {
  const { openDrawer, closeDrawer, DrawerComponent, selectedRow } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    closeDrawer(true);
  };

  const handleDrawerClose = () => {
    closeDrawer(false);
  };

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={openDrawer}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div
          className={classes.drawerHeader}
          style={{ backgroundColor: "#e3a624" }}
        >
          <Typography
            variant="h6"
            noWrap
            className={classes.title}
            style={{
              display: "inline-block",
              verticalAlign: "middle",
              color: "white",
            }}
          >
            Edit Sensor
          </Typography>
          <CancelIcon
            onClick={handleDrawerClose}
            style={{
              position: "absolute",
              right: 20,
              cursor: "pointer",
              color: "white",
            }}
          >
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </CancelIcon>
        </div>
        {openDrawer ? <DrawerComponent selectedRow={selectedRow} /> : null}
      </Drawer>
    </div>
  );
}
