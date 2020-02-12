import React from 'react';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    '& > * + *': {
      marginTop: theme.spacing(1)
    },
  },
}));

export default function Stars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Rating name="size-large" defaultValue={3} size="large" style={{color:'#49C597'}} />
    </div>
  );
}