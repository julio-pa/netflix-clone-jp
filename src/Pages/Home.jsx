import { makeStyles } from '@material-ui/core';
import React from 'react';
import Banner from '../components/Banner';
import Header from '../components/Header';
import Rows from '../components/Rows';
import request from '../Requests';

const Home = () => {
  const classes = useStyles();

  return (
    <div>
      <Header />
      <Banner />
      <Rows title='NETFLIX ORIGINALS' fetchUrl={request.fetchNetflixOriginals} isLargeRow/>
      <Rows title='TOP RATED' fetchUrl={request.fetchTopRated} />
      <Rows title='ACTION MOVIES' fetchUrl={request.fetchActionMovies} />
      <Rows title='COMEDY MOVIES' fetchUrl={request.fetchComedyMovies} />
      <Rows title='HORROR MOVIES' fetchUrl={request.fetchHorrorMovies} />
      <Rows title='ROMANCE MOVIES' fetchUrl={request.fetchRomanceMovies} />
      <Rows title='DOCUMENTARIES' fetchUrl={request.fetchDocumentaries} />
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root:{
    
  }
}));

export default Home;
