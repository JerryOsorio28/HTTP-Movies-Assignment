import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import axios from 'axios';

//importing UpdateMovies form 
import UpdateMovies from './Movies/UpdateMovies'

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [movieList, setMovieList] = useState([])

  // console.log(movieList)

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  useEffect (() => {
    axios
      .get("http://localhost:5000/api/movies")
      .then(res => setMovieList(...movieList, res.data))
      .catch(err => console.log(err.response));
  }, [])


  return (
    <>
      <SavedList list={savedList} />
      <Route 
      exact path="/" 
      render={props => {
          return <MovieList {...props} movieList={movieList} />;
        }}/>
      <Route
        path="/movies/:id"
        render={props => {
          return <Movie {...props} addToSavedList={addToSavedList} />;
        }}
      />
        <Route 
        path="/update-movie/:id" 
        render={props => <UpdateMovies {...props} />}
         />
    </>
  );
};

export default App;
