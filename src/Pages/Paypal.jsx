import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Header from '../components/Header';

const Paypal = () => {
  const classes = useStyles();

  return (
    <>
    <Header />
    <div className={classes.root}>
      <Typography className={classes.text} variant='h3'>Successfully purchased</Typography></div>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#40C700",
    display: "flex",
    textAlign: "center",
  },
  text:{
    margin: theme.spacing(13),
  }
}));

export default Paypal;
