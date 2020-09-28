import { Button } from "@material-ui/core";
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Button color="secondary" variant="outlined">first button</Button>
      <Button variant="outlined" fullWidth>fullWidth Button</Button>
      <Button variant="text" href="https://material-ui.com/ja/api/button/" target="__blank">API page</Button>
    </div>
  );
}

export default App;
