import React from "react";
import {useState,useEffect} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";
import Register from "./pages/Register";
import Home from "./pages/Home";
import ProtectedRoute from "./component/ProtectedRoute";
import PublicRoute from "./component/PublicRoute";
import SavedMovies from './pages/SavedMovies';

function App() {
  const [savedMovies,setSavedMovies]=useState([]);
  const [savedMoviesMap, setSavedMoviesMap] = useState(null);

  useEffect(() => {
    const movies = JSON.parse(localStorage.getItem("savedMovies") || "[]");
    setSavedMovies(movies);
    const mmap = {};
    movies.forEach((sm) => {
      mmap[sm.imdbID] = true;
    });
    setSavedMoviesMap(mmap);
  }, [])

  const handleAddToList = (movie) => {
    const savedMovies = JSON.parse(localStorage.getItem("savedMovies") || "[]");
    const newSavedMovies = [movie, ...savedMovies];
    localStorage.setItem("savedMovies", JSON.stringify(newSavedMovies));
    setSavedMovies(newSavedMovies);
    const newMoviesMap = {
      ...savedMoviesMap,
      [movie.imdbID]: true
    };
    setSavedMoviesMap(newMoviesMap);
  }

  const handleRemoveFromList = (id) => {
    const savedMovies = JSON.parse(localStorage.getItem("savedMovies") || "[]");
    const filteredMovies = savedMovies.filter((sm) => {
      return sm.imdbID !== id;
    });
    localStorage.setItem("savedMovies", JSON.stringify(filteredMovies));
    setSavedMovies(filteredMovies);
    const newMoviesMap = {
      ...savedMoviesMap,
      [id]: false
    };
    setSavedMoviesMap(newMoviesMap);
  }

  return (
    <BrowserRouter>
    <Toaster position="top-center" reverseOrder={false} />
     <Routes>
      <Route path="/login" element={<PublicRoute><Login/></PublicRoute>}/>
      <Route path="/register" element={<PublicRoute><Register/></PublicRoute>}/>
      <Route path="/" element={<ProtectedRoute><Home handleAddToList={handleAddToList} savedMoviesMap={savedMoviesMap} handleRemoveFromList={handleRemoveFromList} /></ProtectedRoute>}/>
      <Route path='/saved-movies' element={<ProtectedRoute><SavedMovies data={savedMovies} savedMoviesMap={savedMoviesMap} handleRemoveFromList={handleRemoveFromList} /></ProtectedRoute>}/>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
