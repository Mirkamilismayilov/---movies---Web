import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import MainCard from '../components/Main/MainCard'
import { useDispatch} from 'react-redux'
import { setValue } from '../feature/counterSlice'

const NowPlaying = () => {
const {name} = useParams()
// const selector = useSelector((state) => state.dataMovie);
  const dispatch = useDispatch();
useEffect(()=>{
  const Key = "07989e510be31f37e529531744bfc3ec";

fetch(`https://api.themoviedb.org/3/movie/${name}?api_key=${Key}&language=en-US&page=1`)
.then(resp=>resp.json())
.then(data=>dispatch(setValue(data)))


},[])

  return (
    <div>
 
      <MainCard/>
    </div>
  )
}

export default NowPlaying
