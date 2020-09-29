import { Grid } from "@material-ui/core";
import React from "react";
import CoffeeCard from "./CoffeeCard";

function Content() {
  return (
    <div>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={4}>
          <CoffeeCard
            title="Hamilton Beach Flexbrew"
            subtitle="$89.99"
            avatarSrc="https://images-na.ssl-images-amazon.com/images/I/81mjh5ZSu1L._AC_SL1500_.jpg"
            description="No two coffee drinkers are the same – so, the flexibility to customize how and what you brew is key. From fresh grounds to K-Cup pods, the Hamilton Beach FlexBrew 2-Way Coffee Maker gives you the options to please fans of all types of coffees."
            imageUrl="https://images-na.ssl-images-amazon.com/images/I/818rz3CIaFL._AC_SL1500_.jpg"
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default Content;
