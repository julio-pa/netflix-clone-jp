import { makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import logo from '../img/logo-netflix.png'
import heroBanner from '../img/hero-banner.jpg'
import { NetflixButton, NetflixInput } from '../styled/styledcomponents';
import SignUp from './SignUp';

const Login = () => {
  const classes = useStyles();

  const [signIn, setSignIn] = useState(false);

  return (
    <div className={classes.root}>
      <img src={logo} className={classes.logo} alt='logo' />
      <NetflixButton className={classes.session}>Iniciar Sesión</NetflixButton>
      <div className={classes.info}>
        {
          !signIn ? <SignUp /> : (
            <>
              <Typography variant='h4' gutterBottom>Películas y series ilimitadas y mucho más</Typography>
              <Typography variant='h5'>Disfruta donde quieras. Cancela cuando quieras.</Typography>
              <Typography variant='h6'>¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de Netflix.
              </Typography>
              <div className={classes.inputBlock}>
                <NetflixInput placeholder='Email' />
                <NetflixButton>Comenzar</NetflixButton>
                <div className={classes.fadeBottom}></div>
              </div>
            </>
          )
        }

      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    height: "100vh",
    backgroundImage: `url(${heroBanner})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    position: "fixed",
    top: -30,
    left: 20,
    width: "150px",
    cursor: "pointer",
  },
  session: {
    position: "fixed",
    zIndex: 15,
    right: 20,
    top: 20,
  },
  info: {
    color: "#fff",
    zIndex: 15,
    textAlign: "center",
    "& h4": {
      fontWeight: 800,
    },
    "& h5": {
      fontWeight: 400,
    },
    fadeBottom:{
      position: "absolute",
      top: "30vh",
      bottom: 0,
      left:0,
      right: 0,
      zIndex:99,
      backgroundImage:"linear-gradient(180deg, transparent, rgba(37, 37, 37,0.61), #111)",
    }
  }
}));

export default Login;
