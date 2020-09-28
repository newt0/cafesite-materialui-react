import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1,
  },
}));
function Header() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.typographyStyles}>
          HeaderHeader
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
