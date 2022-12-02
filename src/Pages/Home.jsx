import { makeStyles } from '@material-ui/core';
import React from 'react';

const Home = () => {
  const classes = useStyles();

  return (
    <div>
      home
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root:{
    // background: "#111",
    minHeight: "100vh",
  }
}));

export default Home;
