import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    maxHeight: 300,
  },
});

export default function ImgMediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Marketing"
          height={180}
          image={props.src}
          title="Contemplative Reptile"
        />
        <CardContent  style={{width:"180px",height:"102px"}}>
        
          <Typography variant="body2" color="textSecondary" component="p" style={{fontSize:"16px"}}>
             {props.title}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2" style={{fontSize:"15px"}}>
                {props.text}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
                02.02.2020
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}