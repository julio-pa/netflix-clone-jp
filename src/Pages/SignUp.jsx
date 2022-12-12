import { makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { NetflixButton, NetflixInput } from '../styled/styledcomponents';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [email, setEmail] = useState("me@awesomekittens.test");
  const [password, setPassword] = useState("test1234");

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((authUser) => navigate("/"))
      .catch((error) => alert(error.message));

  }


  const register = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, email, password)
      .then(authUser => navigate("/"))
      .catch(err => alert(err.message))


  }

  return (
    <div className={classes.root}>
      <Typography variant='h5' align='left'>Sign In</Typography>
      <form className={classes.form}>
        <NetflixInput value={email} type='email'
          onChange={(e) => setEmail(e.target.value)} className={classes.email} placeholder='Email' radius />
        <NetflixInput value={password} type='password'
          onChange={(e) => setPassword(e.target.value)} className={classes.password} placeholder='Password' radius />

        <NetflixButton onClick={signIn} type='submit' wide='medium' radius>Sign In</NetflixButton>
        <Typography variant='subtitle2'>
          New to Netflix ?{" "}
          <span className={classes.signupLink} onClick={register} >
            Sign Up now.{" "}
          </span>
        </Typography>
        <div className={classes.fadeBottom}></div>
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
    },
  fadeBottom: {
      position: "absolute",
      top: "30vh",
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 99,
      backgroundImage: "linear-gradient(180deg, transparent, rgba(37, 37, 37,0.61), #111)",
    }
  }
}));

export default SignUp;
