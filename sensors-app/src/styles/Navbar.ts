import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const NavbarStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      zIndex: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    MarginRight: {
      marginRight: 50
    },
    appBar: {
      margin: "auto",
      minWidth:  "100%",
      backgroundColor: "#e3a624",
    }
  })
);

export default NavbarStyles;
