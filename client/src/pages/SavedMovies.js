import React from 'react';
import MovieList from "../component/MovieList";
import ResponsiveAppBar from '../component/Navbar'

function SavedMovies(props) {
    const {data,savedMoviesMap,handleRemoveList}=props;
  return (
    <>
    <ResponsiveAppBar/>
    <MovieList data={data} savedMoviesMap={savedMoviesMap} handleRemoveList={handleRemoveList}/>
    </>
    )
}

export default SavedMovies