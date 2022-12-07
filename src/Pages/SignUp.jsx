import { makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { NetflixButton, NetflixInput } from '../styled/styledcomponents';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';

const SignUp = () => {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
  .then((authUser) => console.log(authUser))
  .catch((error) => alert(error.message) );

  }


  const register = async (e) =>{
    e.preventDefault();
     await createUserWithEmailAndPassword(auth, email, password)
    .then( authUser => console.log(authUser))
    .catch(err=> alert(err.message))


  }

  return (
    <div className={classes.root}>
      <Typography variant='h5' align='left'>Sign In</Typography>
      <form  className={classes.form}>
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
