import { Grid } from "@material-ui/core";
import React from "react";
import CoffeeCard from "./CoffeeCard";

function Content() {
  return (
    <div>
      <Grid container>
        <Grid item xs={4}>
          <CoffeeCard />
        </Grid>
        <Grid item xs={4}>
          <CoffeeCard />
        </Grid>
        <Grid item xs={4}>
          <CoffeeCard />
        </Grid>
      </Grid>
    </div>
  );
}

export default Content;
