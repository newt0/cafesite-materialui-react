import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
  Avatar,
  CardMedia,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ShareIcon from "@material-ui/icons/Share";
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

function CoffeeCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>●</span>;
  const { avatarSrc, title, subtitle, description, imageUrl } = props;
  return (
    <div>
      <Card className={classes.root}>
        <CardHeader
          avatar={<Avatar src={avatarSrc}>R</Avatar>}
          action={
            <IconButton aria-label="settings">
              <ShareIcon />
            </IconButton>
          }
          title={title}
          subheader={subtitle}
        />

<CardMedia style={{ height: "150px" }} image={imageUrl} />

        <CardContent>
          <Typography variant="body2" component="p">
            {description}
          </Typography>
        </CardContent>
        
        <CardActions>
          <Button size="small">Buy Now</Button>
          <Button size="small">Offer</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default CoffeeCard;
