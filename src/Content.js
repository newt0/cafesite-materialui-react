import { Grid } from "@material-ui/core";
import React from "react";
import CoffeeCard from "./CoffeeCard";
import coffeeMakeList from "./constant";

function Content() {
  const getCoffeeMakerCard = (coffeeMakerObj) => {
    // const { title, price, description, imageUrl, avatarUrl } = coffeeMakerObj;
    return (
      <Grid item xs={12} sm={4}>
        <CoffeeCard {...coffeeMakerObj} />
      </Grid>
    );
  };
  return (
    <Grid container spacing={4}>
      {coffeeMakeList.map((coffeeMakerObj) =>
        getCoffeeMakerCard(coffeeMakerObj)
      )}
    </Grid>
  );
}

export default Content;
