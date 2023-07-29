import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setValue } from '../feature/counterSlice';
import MainCard from '../components/Main/MainCard';

const Popular = () => {
  const {name} = useParams()

  const dispatch = useDispatch();
useEffect(()=>{
  const Key = "07989e510be31f37e529531744bfc3ec";

fetch(`https://api.themoviedb.org/3/movie/${name}?api_key=${Key}&language=en-US&page=1`)
.then(resp=>resp.json())
.then(data=>dispatch(setValue(data)))


// eslint-disable-next-line react-hooks/exhaustive-deps
},[])

  return (
    <div>
 
      <MainCard/>
    </div>
  )
}

export default Popular
