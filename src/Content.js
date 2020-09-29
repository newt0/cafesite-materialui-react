import { Grid } from "@material-ui/core";
import React from "react";
import CoffeeCard from "./CoffeeCard";
import coffeeMakeList from "./constant";

function Content() {
  const getCoffeeMakerCard = (coffeeMakerObj) => {
    // const { title, price, description, imageUrl, avatarUrl } = coffeeMakerObj;
    return <CoffeeCard {...coffeeMakerObj} />;
  };
  return (
    <div>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={4}>
          {coffeeMakeList.map((coffeeMakerObj) =>
            getCoffeeMakerCard(coffeeMakerObj)
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default Content;
