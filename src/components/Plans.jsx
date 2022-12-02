import { makeStyles } from '@material-ui/core';
import React from 'react';

const Plans = () => {
  const classes = useStyles();
  
  return (
    <div>
      Plans
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root:{
    // background: "#111",
    minHeight: "100vh",
  }
}));

export default Plans;
