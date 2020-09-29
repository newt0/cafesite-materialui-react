import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function CoffeeCard() {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Word of the day
          </Typography>
          <Typography variant="h5" component="h2">
            {/* be{bull}nev{bull}lent */}
            benevlent
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            adjective
          </Typography>
          <Typography variant="body2" component="p">
            well meaning
            <br />
            {"a smile"}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn more</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default CoffeeCard;
