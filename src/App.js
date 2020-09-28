import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import "./App.css";
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      backgroundColor: theme.palette.secondary.main,
    },
    [theme.breakpoints.up("md")]: {
      backgroundColor: theme.palette.primary.main,
    },
    [theme.breakpoints.up("lg")]: {
      backgroundColor: green[500],
    },
  },
  responsiveButton: {
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.fontWeightBold,
    },
  },
}));

function App() {
  const classes = useStyles();

  return (
    // <div className="app">
    <div>
      <div className={classes.root}>
        <Typography>{"down(sm): red"}</Typography>
        <Typography>{"up(md): blue"}</Typography>
        <Typography>{"up(lg): green"}</Typography>
      </div>
      <Button className={classes.responsiveButton}>TEst</Button>
    </div>
  );
}

export default App;
