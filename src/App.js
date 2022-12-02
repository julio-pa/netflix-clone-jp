import React from 'react';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { makeStyles } from '@material-ui/core';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import Paypal from './Pages/Paypal';
import Home from './Pages/Home';




function App() {
  const classes = useStyles();

  const user = null;

  return (
    <div className={classes.root}>
      <Router>
        {
          !user ? (<Login />) : (
            <Routes>
              <Route path='/profile' element={<Profile />}/>
              <Route path='/checkout' element={<Paypal />}/>
              <Route path='/' element={<Home />}/>
            </Routes>
          )
        }
      </Router>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root:{
    // background: "#111",
    minHeight: "100vh",
  }
}));

export default App;
