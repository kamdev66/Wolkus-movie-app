import { CssBaseline } from '@mui/material'
import React from 'react';
import ResponsiveAppBar from '../component/Navbar'
import SearchMovies from './SearchMovies'


function Home(props) {
  const {handleAddToList,savedMoviesMap,handleRemoveFromList}=props;
  return (
    <div>

        <CssBaseline/>
        <ResponsiveAppBar/>
        <SearchMovies handleAddToList={handleAddToList} handleRemoveFromList={handleRemoveFromList} savedMoviesMap={savedMoviesMap}/>
        
    </div>
  )
}

export default Home