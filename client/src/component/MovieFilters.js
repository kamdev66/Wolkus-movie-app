import React,{useState} from 'react';
import {Button,Container,Box,TextField} from '@mui/material';
import {Search} from '@mui/icons-material'

function MovieFilters({handleSearchMovies}) {
    
    const [title,setTitle]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!title){
            alert('Please Provide movie title')
            return;
        }
        handleSearchMovies({s: title})
    }
  return (
    <Container maxWidth='xl' sx={{pt:2}}>
        <Box component="form" sx={{display: "flex",alignItems: "flex-end"}} onSubmit={handleSubmit}>
            <TextField label="Movie Title" variant='standard' fullWidth sx={{mr: 1}} size="small" value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <Button sx={{minWidth:'200px'}} type="submit" startIcon={<Search/>} variant='outlined'>
                Search Here
            </Button>
        </Box>
    </Container>
  )
}

export default MovieFilters