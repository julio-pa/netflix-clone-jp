import React, { useEffect } from 'react';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { makeStyles } from '@material-ui/core';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import Paypal from './Pages/Paypal';
import Home from './Pages/Home';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { login, logout } from './features/UserSlice';




function App() {
  const classes = useStyles();

// const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      } else{
        dispatch(logout)
      }
    })
    return unsubscribe;
    }, [dispatch]);

  return (
    <div className={classes.root}>
      <Router>
            <Routes>
              <Route path='/login' element={<Login/>} />
              <Route path='/profile' element={<Profile />}/>
              <Route path='/checkout' element={<Paypal />}/>
              <Route path='/' element={<Home />}/>
            </Routes>
      </Router>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root:{
    background: "#111",
    minHeight: "100vh",
  }
}));

export default App;
