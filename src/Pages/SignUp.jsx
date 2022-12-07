import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { NetflixButton, NetflixInput } from '../styled/styledcomponents';

const SignUp = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant='h5' align='left'>Sign In</Typography>
      <form className={classes.form}>
        <NetflixInput className={classes.email} placeholder='Email' radius />
        <NetflixInput className={classes.password} placeholder='Password' radius />
        <NetflixButton wide='medium' radius>Sign In</NetflixButton>
        <Typography variant='subtitle2'>
          New to Netflix ?{" "}
          <span className={classes.signupLink} >
            Sign Up now.{" "}
          </span>
        </Typography>
      </form>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "350px",
    width: "20rem",
    height: "25rem",
    background: "rgba(0,0,0,0.65)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    "& h5": {
      marginTop: theme.spacing(2),
      width: "70%",
    }
  },
  form: {
    width: "80%",
  },
  email: {
    marginBottom: theme.spacing(2),
  },
  password: {
    marginBottom: theme.spacing(2),
  },
  signupLink: {
    cursor: "pointer",
    " &:hover": {
      textDecoration: "underline",
    }
  }
}));

export default SignUp;
