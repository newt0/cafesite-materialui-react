import { Button, Typography } from "@material-ui/core";
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Typography variant="h2" color="primary">
        h2
      </Typography>
      <h2>h2</h2>

      <Button color="secondary" variant="outlined">
        first button
      </Button>
      <Button variant="outlined" fullWidth>
        fullWidth Button
      </Button>
      <Button
        variant="text"
        href="https://material-ui.com/ja/api/button/"
        target="__blank"
      >
        API page
      </Button>
    </div>
  );
}

export default App;
