import { makeStyles } from '@material-ui/core';
import React from 'react';

const Profile = () => {
  const classes = useStyles();

  return (
    <div>
      Profile
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root:{
    // background: "#111",
    minHeight: "100vh",
  }
}));

export default Profile;
