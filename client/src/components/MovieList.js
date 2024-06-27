import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies } from '../redux/action';

const MovieList = () => {
  const dispatch=useDispatch();

  useEffect(()=>{
      dispatch(fetchMovies());
  },[dispatch])

  const {movies}=useSelector(state => state.movie)
  return (
    <div>Watch List
      {
        movies.map((movie,index) =><p key={index}>{movie.title}</p>)
      }
    </div>
  )
}

export default MovieList