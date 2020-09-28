import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import "./App.css";

const useStyles = makeStyles({
  helloThereStyles: {
    fontStyle: "oblique",
    color: "red",
    fontSize: "30px",
  },
  buttonStyles: {
    color: "green",
    border: "0",
  },
});

function App() {
  const classes = useStyles();

  return (
    <div className="app">
      <Typography className={classes.helloThereStyles}>
        helloThereStyles
      </Typography>

      <Button className={classes.buttonStyles} variant="outlined">classes.buttonStyles</Button>
    </div>
  );
}

export default App;
